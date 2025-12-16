'use client';

import { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TournamentStanding } from '@/lib/data';

interface ScheduleMatch {
	id: string;
	date: string;
	time: string;
	teamA: string;
	teamB: string;
	venue: string;
	stage: string;
}

const scheduleData: ScheduleMatch[] = [
	{
		id: '1',
		date: '2025-02-14',
		time: '09:00',
		teamA: "St. Anthony's Kitale",
		teamB: 'Friends School Kamusinga',
		venue: 'Main Pitch',
		stage: 'Group A',
	},
	{
		id: '2',
		date: '2025-02-14',
		time: '11:00',
		teamA: 'Kakamega High School',
		teamB: 'Musingu High School',
		venue: 'Main Pitch',
		stage: 'Group A',
	},
	{
		id: '3',
		date: '2025-02-14',
		time: '14:00',
		teamA: 'Moi High School Kabarak',
		teamB: 'Nairobi School',
		venue: 'Main Pitch',
		stage: 'Group B',
	},
	{
		id: '4',
		date: '2025-02-14',
		time: '16:00',
		teamA: "St. Patrick's Iten",
		teamB: 'Chewoyet High School',
		venue: 'Main Pitch',
		stage: 'Group B',
	},
	{
		id: '5',
		date: '2025-02-15',
		time: '09:00',
		teamA: 'Group A Winner',
		teamB: 'Group B Runner-up',
		venue: 'Main Pitch',
		stage: 'Semi-Final',
	},
	{
		id: '6',
		date: '2025-02-15',
		time: '11:00',
		teamA: 'Group B Winner',
		teamB: 'Group A Runner-up',
		venue: 'Main Pitch',
		stage: 'Semi-Final',
	},
	{
		id: '7',
		date: '2025-02-15',
		time: '14:00',
		teamA: 'Semi-Final Losers',
		teamB: 'Semi-Final Losers',
		venue: 'Main Pitch',
		stage: '3rd Place',
	},
	{
		id: '8',
		date: '2025-02-15',
		time: '16:00',
		teamA: 'Semi-Final Winners',
		teamB: 'Semi-Final Winners',
		venue: 'Main Pitch',
		stage: 'Final',
	},
];

const currentTournamentStandings: TournamentStanding[] = [
	{
		team: 'Les Titans',
		played: 4,
		won: 4,
		drawn: 0,
		lost: 0,
		gf: 10,
		ga: 3,
		points: 12,
	},
	{
		team: 'Nairobi School',
		played: 4,
		won: 3,
		drawn: 0,
		lost: 1,
		gf: 8,
		ga: 5,
		points: 9,
	},
	{
		team: 'Alliance High School',
		played: 4,
		won: 2,
		drawn: 1,
		lost: 1,
		gf: 6,
		ga: 4,
		points: 7,
	},
	{
		team: 'Maseno School',
		played: 4,
		won: 2,
		drawn: 0,
		lost: 2,
		gf: 5,
		ga: 5,
		points: 6,
	},
	{
		team: 'Friends School Kamusinga',
		played: 4,
		won: 1,
		drawn: 1,
		lost: 2,
		gf: 4,
		ga: 6,
		points: 4,
	},
	{
		team: "Mang'u High School",
		played: 4,
		won: 1,
		drawn: 1,
		lost: 2,
		gf: 4,
		ga: 7,
		points: 4,
	},
	{
		team: 'Starehe Boys Centre',
		played: 4,
		won: 1,
		drawn: 0,
		lost: 3,
		gf: 3,
		ga: 6,
		points: 3,
	},
	{
		team: 'Kakamega High',
		played: 4,
		won: 0,
		drawn: 1,
		lost: 3,
		gf: 2,
		ga: 8,
		points: 1,
	},
];

export function TournamentSchedule() {
	const [activeDay, setActiveDay] = useState<
		'day1' | 'day2' | 'tableStandings'
	>('day1');

	const day1Matches = scheduleData.filter((m) => m.date === '2025-02-14');
	const day2Matches = scheduleData.filter((m) => m.date === '2025-02-15');

	return (
		<div>
			{/* Day Tabs */}
			<div className="flex gap-2 mb-6">
				<button
					onClick={() => setActiveDay('day1')}
					className={cn(
						'px-6 py-3 font-display font-bold uppercase tracking-wider rounded-lg transition-colors',
						activeDay === 'day1'
							? 'bg-primary text-primary-foreground'
							: 'bg-secondary text-secondary-foreground',
					)}
				>
					Day 1 - Feb 14
				</button>
				<button
					onClick={() => setActiveDay('day2')}
					className={cn(
						'px-6 py-3 font-display font-bold uppercase tracking-wider rounded-lg transition-colors',
						activeDay === 'day2'
							? 'bg-primary text-primary-foreground'
							: 'bg-secondary text-secondary-foreground',
					)}
				>
					Day 2 - Feb 15
				</button>
				<button
					onClick={() => setActiveDay('tableStandings')}
					className={cn(
						'px-6 py-3 font-display font-bold uppercase tracking-wider rounded-lg transition-colors',
						activeDay === 'tableStandings'
							? 'bg-primary text-primary-foreground'
							: 'bg-secondary text-secondary-foreground',
					)}
				>
					Table Standings
				</button>
			</div>

			{/* Matches */}
			<div className="space-y-4">
				{activeDay === 'tableStandings' && (
					<div className="mb-12">
						<h4 className="font-display font-bold text-foreground my-4">
							Last Updated (June 18, 2024)
						</h4>
						<div className="bg-card rounded-xl border overflow-hidden">
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead className="bg-muted/50">
										<tr className="text-left text-sm font-medium text-muted-foreground">
											<th className="p-4">#</th>
											<th className="p-4">Team</th>
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
										{currentTournamentStandings.map(
											(team, idx) => (
												<tr
													key={team.team}
													className={cn(
														'border-t hover:bg-muted/30 transition-colors',
														idx === 0 &&
															'bg-accent/10',
														team.team ===
															'Les Titans' &&
															'font-semibold',
													)}
												>
													<td className="p-4 font-display text-lg">
														{idx + 1}
													</td>
													<td className="p-4">
														{team.team}
													</td>
													<td className="p-4 text-center">
														{team.played}
													</td>
													<td className="p-4 text-center text-emerald-600">
														{team.won}
													</td>
													<td className="p-4 text-center text-amber-600">
														{team.drawn}
													</td>
													<td className="p-4 text-center text-rose-600">
														{team.lost}
													</td>
													<td className="p-4 text-center">
														{team.gf}
													</td>
													<td className="p-4 text-center">
														{team.ga}
													</td>
													<td className="p-4 text-center font-display text-xl">
														{team.points}
													</td>
												</tr>
											),
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				)}
				{(activeDay === 'day1'
					? day1Matches
					: activeDay === 'day2'
					? day2Matches
					: []
				).map((match) => (
					<div
						key={match.id}
						className={cn(
							'bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors',
							match.stage === 'Final' &&
								'border-primary/50 bg-primary/5',
						)}
					>
						<div className="flex items-center justify-between mb-3">
							<span
								className={cn(
									'px-2 py-1 text-xs font-bold rounded-sm uppercase tracking-wider',
									match.stage === 'Final' &&
										'bg-primary text-primary-foreground',
									match.stage === 'Semi-Final' &&
										'bg-primary/20 text-primary',
									match.stage.includes('Group') &&
										'bg-secondary text-secondary-foreground',
									match.stage === '3rd Place' &&
										'bg-secondary text-secondary-foreground',
								)}
							>
								{match.stage}
							</span>
							<div className="flex items-center gap-4 text-xs text-muted-foreground">
								<div className="flex items-center gap-1">
									<Clock size={12} />
									<span>{match.time}</span>
								</div>
								<div className="flex items-center gap-1">
									<MapPin size={12} />
									<span>{match.venue}</span>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex-1 text-right pr-4">
								<p className="font-display font-bold text-foreground">
									{match.teamA}
								</p>
							</div>
							<div className="px-4 py-2 bg-secondary rounded-lg">
								<span className="font-display text-xl font-bold text-muted-foreground">
									VS
								</span>
							</div>
							<div className="flex-1 pl-4">
								<p className="font-display font-bold text-foreground">
									{match.teamB}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
