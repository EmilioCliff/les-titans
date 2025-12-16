'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { MatchCard } from '@/components/fixtures/match-card';
import { MatchDetailModal } from '@/components/fixtures/match-detail-modal';
import { upcomingMatches, seasonResults, type Match } from '@/lib/data';
import { Calendar, Clock, ChevronDown, History } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FixturesPage() {
	const nextMatch = upcomingMatches[0];
	const otherUpcoming = upcomingMatches.slice(1);

	const [selectedSeason, setSelectedSeason] = useState<number>(2025);
	const [isSeasonSelectorOpen, setIsSeasonSelectorOpen] = useState(false);
	const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

	const seasons = Object.keys(seasonResults)
		.map(Number)
		.sort((a, b) => b - a);
	const currentSeasonResults = seasonResults[selectedSeason] || [];

	// Calculate season stats
	const wins = currentSeasonResults.filter(
		(m) =>
			m.result &&
			(m.isHome
				? m.result.home > m.result.away
				: m.result.away > m.result.home),
	).length;
	const draws = currentSeasonResults.filter(
		(m) => m.result && m.result.home === m.result.away,
	).length;
	const losses = currentSeasonResults.length - wins - draws;
	const goalsScored = currentSeasonResults.reduce((sum, m) => {
		if (!m.result) return sum;
		return sum + (m.isHome ? m.result.home : m.result.away);
	}, 0);
	const goalsConceded = currentSeasonResults.reduce((sum, m) => {
		if (!m.result) return sum;
		return sum + (m.isHome ? m.result.away : m.result.home);
	}, 0);

	return (
		<main className="min-h-screen bg-background">
			<Navigation />

			{/* Hero */}
			<section className="pt-24 pb-12 bg-card turf-pattern">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="inline-flex items-center gap-2 text-primary mb-4">
							<Calendar size={20} />
							<span className="text-sm font-medium uppercase tracking-widest">
								2025 Season
							</span>
						</div>
						<h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
							FIXTURES & RESULTS
						</h1>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Follow Les Titans through the 2025 season. Every
							match, every result, every step towards glory.
						</p>
					</div>
				</div>
			</section>

			{/* Season Stats */}
			<section className="py-8 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-card border border-border rounded-lg p-6">
						<h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6 text-center">
							Season Form
						</h3>
						<div className="grid grid-cols-3 sm:grid-cols-5 gap-6 text-center">
							<div>
								<p className="font-display text-4xl sm:text-5xl font-bold text-green-400">
									{wins}
								</p>
								<p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
									Wins
								</p>
							</div>
							<div>
								<p className="font-display text-4xl sm:text-5xl font-bold text-primary">
									{draws}
								</p>
								<p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
									Draws
								</p>
							</div>
							<div>
								<p className="font-display text-4xl sm:text-5xl font-bold text-red-400">
									{losses}
								</p>
								<p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
									Losses
								</p>
							</div>
							<div className="hidden sm:block">
								<p className="font-display text-4xl sm:text-5xl font-bold text-foreground">
									{goalsScored}
								</p>
								<p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
									Goals For
								</p>
							</div>
							<div className="hidden sm:block">
								<p className="font-display text-4xl sm:text-5xl font-bold text-foreground">
									{goalsConceded}
								</p>
								<p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
									Goals Against
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Next Match - Featured */}
			<section className="py-12 bg-background">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center gap-2 text-primary mb-6">
						<Clock size={18} />
						<span className="text-sm font-medium uppercase tracking-widest">
							Coming Up
						</span>
					</div>
					<MatchCard match={nextMatch} featured />
				</div>
			</section>

			{/* Upcoming Fixtures */}
			<section className="py-12 bg-card">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center gap-2 text-primary mb-8">
						<div className="w-8 h-0.5 bg-primary" />
						<span className="text-sm font-medium uppercase tracking-widest">
							Upcoming Fixtures
						</span>
					</div>

					<div className="flex flex-col gap-6">
						{otherUpcoming.map((match) => (
							<MatchCard key={match.id} match={match} />
						))}
					</div>
				</div>
			</section>

			<section className="py-12 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
						<div className="flex items-center gap-2 text-primary">
							<History size={18} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Results Archive
							</span>
						</div>

						<div className="relative">
							<button
								onClick={() =>
									setIsSeasonSelectorOpen(
										!isSeasonSelectorOpen,
									)
								}
								className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors min-w-[180px] justify-between"
							>
								<span className="font-display font-bold text-foreground">
									{selectedSeason} Season
								</span>
								<ChevronDown
									size={18}
									className={cn(
										'text-muted-foreground transition-transform',
										isSeasonSelectorOpen && 'rotate-180',
									)}
								/>
							</button>

							{isSeasonSelectorOpen && (
								<div className="absolute top-full right-0 mt-2 w-full bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50">
									{seasons.map((season) => (
										<button
											key={season}
											onClick={() => {
												setSelectedSeason(season);
												setIsSeasonSelectorOpen(false);
											}}
											className={cn(
												'w-full px-4 py-3 text-left hover:bg-secondary transition-colors flex items-center justify-between',
												selectedSeason === season &&
													'bg-primary/20 text-primary',
											)}
										>
											<span className="font-medium">
												{season} Season
											</span>
											<span className="text-sm text-muted-foreground">
												{seasonResults[season]
													?.length || 0}{' '}
												matches
											</span>
										</button>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Season Summary */}
					<div className="bg-card border border-border rounded-lg p-4 mb-6">
						<div className="flex flex-wrap items-center justify-between gap-4">
							<div>
								<h3 className="font-display text-xl font-bold text-foreground">
									{selectedSeason} Season Results
								</h3>
								<p className="text-sm text-muted-foreground">
									{currentSeasonResults.length} matches played
									• Click on any match for full details
								</p>
							</div>
							<div className="flex gap-4">
								<div className="text-center px-4">
									<p className="font-display text-2xl font-bold text-green-400">
										{wins}W
									</p>
								</div>
								<div className="text-center px-4 border-x border-border">
									<p className="font-display text-2xl font-bold text-primary">
										{draws}D
									</p>
								</div>
								<div className="text-center px-4">
									<p className="font-display text-2xl font-bold text-red-400">
										{losses}L
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Results Grid */}
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{currentSeasonResults.map((match) => (
							<MatchCard
								key={match.id}
								match={match}
								variant="result"
								onClick={() => setSelectedMatch(match)}
							/>
						))}
					</div>

					{currentSeasonResults.length === 0 && (
						<div className="text-center py-12">
							<p className="text-muted-foreground">
								No results available for this season yet.
							</p>
						</div>
					)}
				</div>
			</section>

			{selectedMatch && (
				<MatchDetailModal
					match={selectedMatch}
					onClose={() => setSelectedMatch(null)}
				/>
			)}

			<Footer />
		</main>
	);
}
