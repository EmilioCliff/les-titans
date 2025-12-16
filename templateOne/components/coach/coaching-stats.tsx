import {
	Trophy,
	Users,
	Target,
	Calendar,
	Clock,
	TrendingUp,
} from 'lucide-react';
import { coachingStats } from '@/lib/coaches-data';

export function CoachingStats() {
	const stats = [
		{
			icon: Users,
			value: `${coachingStats.totalPlayers}+`,
			label: 'Players Developed',
		},
		{
			icon: Trophy,
			value: coachingStats.championships,
			label: 'Championships',
		},
		{
			icon: Target,
			value: coachingStats.nationalTeamPlayers,
			label: 'National Team Players',
		},
		{
			icon: Calendar,
			value: coachingStats.yearsOfExcellence,
			label: 'Years of Excellence',
		},
	];

	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{stats.map((stat, index) => {
				const Icon = stat.icon;
				return (
					<div
						key={index}
						className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors group"
					>
						<Icon
							className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform"
							size={24}
						/>
						<p className="font-display text-2xl lg:text-3xl font-bold text-foreground">
							{stat.value}
						</p>
						<p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
							{stat.label}
						</p>
					</div>
				);
			})}
		</div>
	);
}
