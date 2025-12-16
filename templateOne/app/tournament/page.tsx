'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TournamentSchedule } from '@/components/tournament/tournament-schedule';
import { RegistrationForm } from '@/components/tournament/registration-form';
import { tournaments } from '@/lib/data';
import {
	Trophy,
	Calendar,
	Users,
	MapPin,
	Clock,
	Award,
	ChevronDown,
	Star,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TournamentPage() {
	const currentTournament = tournaments[0];
	const pastTournaments = tournaments.filter((t) => t.winner);

	const [expandedTournament, setExpandedTournament] = useState<string | null>(
		null,
	);
	const [selectedMatch, setSelectedMatch] = useState<string | null>(null);

	return (
		<main className="min-h-screen bg-background">
			<Navigation />

			{/* Hero */}
			<section className="pt-24 pb-12 bg-card turf-pattern relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="inline-flex items-center gap-2 text-primary mb-4">
							<Trophy size={20} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Annual Tournament
							</span>
						</div>
						<h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-2">
							THE BATTLEGROUND
						</h1>
						<p className="font-display text-2xl sm:text-3xl font-bold text-primary mb-6">
							2025 Edition
						</p>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							The biggest inter-school hockey tournament in
							Western Kenya. Where champions rise, legends are
							made, and the spirit of competition burns brightest.
						</p>
					</div>
				</div>
			</section>

			{/* Tournament Info */}
			<section className="py-12 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
						<div className="bg-card border border-border rounded-lg p-6">
							<Calendar className="text-primary mb-3" size={24} />
							<p className="font-display text-xl font-bold text-foreground">
								Feb 14-15, 2025
							</p>
							<p className="text-sm text-muted-foreground">
								Tournament Dates
							</p>
						</div>
						<div className="bg-card border border-border rounded-lg p-6">
							<MapPin className="text-primary mb-3" size={24} />
							<p className="font-display text-xl font-bold text-foreground">
								St. Anthony's Kitale
							</p>
							<p className="text-sm text-muted-foreground">
								Venue
							</p>
						</div>
						<div className="bg-card border border-border rounded-lg p-6">
							<Users className="text-primary mb-3" size={24} />
							<p className="font-display text-xl font-bold text-foreground">
								{currentTournament.teams.length} Teams
							</p>
							<p className="text-sm text-muted-foreground">
								Registered
							</p>
						</div>
						<div className="bg-card border border-border rounded-lg p-6">
							<Clock className="text-primary mb-3" size={24} />
							<p className="font-display text-xl font-bold text-foreground">
								2 Days
							</p>
							<p className="text-sm text-muted-foreground">
								14 Matches
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Registered Teams */}
			<section className="py-12 bg-card">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center gap-2 text-primary mb-8">
						<div className="w-8 h-0.5 bg-primary" />
						<span className="text-sm font-medium uppercase tracking-widest">
							Registered Teams
						</span>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{currentTournament.teams.map((team, index) => (
							<div
								key={team}
								className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
							>
								<div className="w-10 h-10 bg-primary/20 rounded-sm flex items-center justify-center">
									<span className="font-display text-primary font-bold">
										{index + 1}
									</span>
								</div>
								<p className="font-medium text-foreground text-sm">
									{team}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Schedule */}
			<section className="py-12 bg-background">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8">
						<h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
							Match Schedule
						</h2>
						<p className="text-muted-foreground">
							All matches will be played at St. Anthony's Kitale
							Main Pitch
						</p>
					</div>

					<TournamentSchedule />
				</div>
			</section>

			<section className="py-12 bg-card">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8">
						<div className="inline-flex items-center gap-2 text-primary mb-4">
							<Award size={20} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Roll of Honor
							</span>
						</div>
						<h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
							Past Champions
						</h2>
						<p className="text-muted-foreground mt-2">
							Click on any tournament to see match details and
							stats
						</p>
					</div>

					<div className="space-y-4">
						{pastTournaments.map((tournament, index) => (
							<div
								key={tournament.id}
								className="bg-secondary rounded-lg overflow-hidden"
							>
								{/* Tournament Header - Clickable */}
								<button
									onClick={() =>
										setExpandedTournament(
											expandedTournament === tournament.id
												? null
												: tournament.id,
										)
									}
									className={cn(
										'w-full p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-secondary/80 transition-colors',
										index === 0 && 'bg-primary/10',
									)}
								>
									<div className="flex items-center gap-4">
										<Trophy
											className={cn(
												index === 0
													? 'text-primary'
													: 'text-muted-foreground',
											)}
											size={32}
										/>
										<div className="text-left">
											<p className="font-display text-3xl font-bold text-foreground">
												{tournament.year}
											</p>
											<p
												className={cn(
													'font-medium',
													index === 0
														? 'text-primary'
														: 'text-muted-foreground',
												)}
											>
												{tournament.winner}
											</p>
										</div>
									</div>

									<div className="flex items-center gap-6">
										{tournament.topScorer && (
											<div className="text-left">
												<p className="text-xs text-muted-foreground uppercase tracking-wider">
													Top Scorer
												</p>
												<p className="font-medium text-foreground">
													{tournament.topScorer.name}{' '}
													(
													{tournament.topScorer.goals}
													)
												</p>
											</div>
										)}
										{tournament.mvp && (
											<div className="text-left">
												<p className="text-xs text-muted-foreground uppercase tracking-wider">
													MVP
												</p>
												<p className="font-medium text-foreground">
													{tournament.mvp}
												</p>
											</div>
										)}
										<ChevronDown
											size={20}
											className={cn(
												'text-muted-foreground transition-transform',
												expandedTournament ===
													tournament.id &&
													'rotate-180',
											)}
										/>
									</div>
								</button>

								{expandedTournament === tournament.id &&
									tournament.matches && (
										<div className="border-t border-border p-6">
											<h4 className="font-display font-bold text-foreground mb-4">
												Tournament Matches
											</h4>
											<div className="space-y-3">
												{tournament.matches.map(
													(match) => (
														<button
															key={match.id}
															onClick={() =>
																setSelectedMatch(
																	selectedMatch ===
																		match.id
																		? null
																		: match.id,
																)
															}
															className={cn(
																'w-full p-4 rounded-lg text-left transition-all',
																selectedMatch ===
																	match.id
																	? 'bg-primary/10 ring-2 ring-primary/30'
																	: 'bg-card hover:bg-card/80',
															)}
														>
															<div className="flex items-center justify-between mb-2">
																<span className="text-xs font-medium text-primary uppercase tracking-wider">
																	{
																		match.round
																	}
																</span>
																<span className="text-xs text-muted-foreground">
																	{match.date}
																</span>
															</div>
															<div className="flex items-center justify-between">
																<div className="flex-1">
																	<p
																		className={cn(
																			'font-display font-bold',
																			match
																				.result
																				.home >
																				match
																					.result
																					.away
																				? 'text-primary'
																				: 'text-foreground',
																		)}
																	>
																		{
																			match.homeTeam
																		}
																	</p>
																</div>
																<div className="px-4 py-2 bg-secondary rounded-lg text-center">
																	<span className="font-display text-xl font-bold text-foreground">
																		{
																			match
																				.result
																				.home
																		}{' '}
																		-{' '}
																		{
																			match
																				.result
																				.away
																		}
																	</span>
																</div>
																<div className="flex-1 text-right">
																	<p
																		className={cn(
																			'font-display font-bold',
																			match
																				.result
																				.away >
																				match
																					.result
																					.home
																				? 'text-primary'
																				: 'text-foreground',
																		)}
																	>
																		{
																			match.awayTeam
																		}
																	</p>
																</div>
															</div>

															{selectedMatch ===
																match.id &&
																match.events &&
																match.events
																	.length >
																	0 && (
																	<div className="mt-4 pt-4 border-t border-border">
																		<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
																			Match
																			Events
																		</p>
																		<div className="space-y-2">
																			{match.events.map(
																				(
																					event,
																					i,
																				) => (
																					<div
																						key={
																							i
																						}
																						className="flex items-center gap-3 text-sm"
																					>
																						<span className="w-8 text-primary font-mono">
																							{
																								event.minute
																							}

																							'
																						</span>
																						<span className="text-foreground">
																							{event.type ===
																							'goal'
																								? '⚽'
																								: event.type ===
																								  'yellow'
																								? '🟨'
																								: '🟥'}
																						</span>
																						<span className="text-foreground">
																							{
																								event.player
																							}
																						</span>
																						{event.assistedBy && (
																							<span className="text-muted-foreground">
																								(assist:{' '}
																								{
																									event.assistedBy
																								}

																								)
																							</span>
																						)}
																					</div>
																				),
																			)}
																		</div>
																	</div>
																)}
														</button>
													),
												)}
											</div>

											<div className="mb-12">
												<h4 className="font-display font-bold text-foreground my-4">
													Final Standings
												</h4>
												<div className="bg-card rounded-xl border overflow-hidden">
													<div className="overflow-x-auto">
														<table className="w-full">
															<thead className="bg-muted/50">
																<tr className="text-left text-sm font-medium text-muted-foreground">
																	<th className="p-4">
																		#
																	</th>
																	<th className="p-4">
																		Team
																	</th>
																	<th className="p-4 text-center">
																		P
																	</th>
																	<th className="p-4 text-center">
																		W
																	</th>
																	<th className="p-4 text-center">
																		D
																	</th>
																	<th className="p-4 text-center">
																		L
																	</th>
																	<th className="p-4 text-center">
																		GF
																	</th>
																	<th className="p-4 text-center">
																		GA
																	</th>
																	<th className="p-4 text-center font-bold">
																		PTS
																	</th>
																</tr>
															</thead>
															<tbody>
																{currentTournament.standings.map(
																	(
																		team,
																		idx,
																	) => (
																		<tr
																			key={
																				team.team
																			}
																			className={cn(
																				'border-t hover:bg-muted/30 transition-colors',
																				idx ===
																					0 &&
																					'bg-accent/10',
																				team.team ===
																					'Les Titans' &&
																					'font-semibold',
																			)}
																		>
																			<td className="p-4 font-display text-lg">
																				{idx +
																					1}
																			</td>
																			<td className="p-4">
																				{
																					team.team
																				}
																			</td>
																			<td className="p-4 text-center">
																				{
																					team.played
																				}
																			</td>
																			<td className="p-4 text-center text-emerald-600">
																				{
																					team.won
																				}
																			</td>
																			<td className="p-4 text-center text-amber-600">
																				{
																					team.drawn
																				}
																			</td>
																			<td className="p-4 text-center text-rose-600">
																				{
																					team.lost
																				}
																			</td>
																			<td className="p-4 text-center">
																				{
																					team.gf
																				}
																			</td>
																			<td className="p-4 text-center">
																				{
																					team.ga
																				}
																			</td>
																			<td className="p-4 text-center font-display text-xl">
																				{
																					team.points
																				}
																			</td>
																		</tr>
																	),
																)}
															</tbody>
														</table>
													</div>
												</div>
											</div>

											{/* Tournament Stats Summary */}
											<div className="mt-6 pt-6 border-t border-border">
												<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
													<div className="text-center">
														<p className="font-display text-2xl font-bold text-primary">
															{
																tournament.teams
																	.length
															}
														</p>
														<p className="text-xs text-muted-foreground">
															Teams
														</p>
													</div>
													<div className="text-center">
														<p className="font-display text-2xl font-bold text-primary">
															{tournament.matches
																?.length || 0}
														</p>
														<p className="text-xs text-muted-foreground">
															Matches
														</p>
													</div>
													<div className="text-center">
														<p className="font-display text-2xl font-bold text-primary">
															{tournament.matches?.reduce(
																(sum, m) =>
																	sum +
																	m.result
																		.home +
																	m.result
																		.away,
																0,
															) || 0}
														</p>
														<p className="text-xs text-muted-foreground">
															Total Goals
														</p>
													</div>
													<div className="text-center">
														<Star
															className="mx-auto text-primary mb-1"
															size={20}
														/>
														<p className="text-xs text-muted-foreground">
															Champion:{' '}
															{tournament.winner}
														</p>
													</div>
												</div>
											</div>
										</div>
									)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Registration */}
			<section className="py-16 bg-background">
				<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8">
						<h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
							Register Your Team
						</h2>
						<p className="text-muted-foreground">
							Think your school has what it takes? Register now to
							compete in the 2025 edition.
						</p>
					</div>

					<div className="bg-card border border-border rounded-lg p-6 sm:p-8">
						<RegistrationForm />
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
