'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Coach } from '@/lib/coaches-data';
import {
	Award,
	ChevronDown,
	Quote,
	Calendar,
	Target,
	Star,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CoachProfileCardProps {
	coach: Coach;
	variant?: 'default' | 'featured';
}

export function CoachProfileCard({
	coach,
	variant = 'default',
}: CoachProfileCardProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	if (variant === 'featured') {
		return (
			<div className="bg-gradient-to-br from-primary/5 via-card to-card border-2 border-primary/20 rounded-lg overflow-hidden shadow-xl">
				<div className="grid lg:grid-cols-5">
					{/* Image Section */}
					<div className="lg:col-span-2 relative aspect-square lg:aspect-auto">
						<Image
							src={coach.image || '/placeholder.svg'}
							alt={coach.name}
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:bg-gradient-to-r" />

						{/* Floating Badge */}
						<div className="absolute top-6 left-6 bg-primary px-4 py-2 rounded-sm">
							<p className="text-primary-foreground text-xs font-bold uppercase tracking-wider">
								{coach.role}
							</p>
						</div>

						{/* Years Badge */}
						<div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3 text-center">
							<p className="font-display text-2xl font-bold text-primary">
								{coach.yearsInvolved}
							</p>
							<p className="text-[10px] text-muted-foreground uppercase tracking-wider">
								Years
							</p>
						</div>
					</div>

					{/* Content Section */}
					<div className="lg:col-span-3 p-8 lg:p-10">
						<div className="flex items-center gap-2 text-primary mb-4">
							<Star size={18} fill="currentColor" />
							<span className="text-xs font-medium uppercase tracking-widest">
								Coaching Excellence
							</span>
						</div>

						<h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
							{coach.name}
						</h2>

						<div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
							<div className="flex items-center gap-1">
								<Target size={14} />
								<span>{coach.specialization}</span>
							</div>
							<div className="flex items-center gap-1">
								<Calendar size={14} />
								<span>Since {coach.joinedYear}</span>
							</div>
						</div>

						{/* Quote */}
						{coach.quote && (
							<div className="relative bg-secondary/50 border-l-4 border-primary rounded-r-lg p-6 mb-6">
								<Quote
									className="absolute top-4 right-4 text-primary/20"
									size={32}
								/>
								<p className="text-foreground italic leading-relaxed relative z-10">
									"{coach.quote}"
								</p>
							</div>
						)}

						{/* Philosophy */}
						<div className="mb-6">
							<h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
								<div className="w-1 h-5 bg-primary rounded-full" />
								Coaching Philosophy
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{coach.philosophy}
							</p>
						</div>

						{/* Key Achievements */}
						<div className="grid sm:grid-cols-2 gap-3">
							{coach.achievements
								.slice(0, 4)
								.map((achievement, index) => (
									<div
										key={index}
										className="flex items-start gap-2 bg-background/50 rounded-lg p-3 border border-border"
									>
										<Award
											className="text-primary flex-shrink-0 mt-0.5"
											size={16}
										/>
										<span className="text-xs text-foreground">
											{achievement}
										</span>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			className={cn(
				'group bg-card border-2 border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all',
				isExpanded && 'ring-2 ring-primary/30 border-primary/50',
			)}
		>
			{/* Header with Image */}
			<div className="relative aspect-[4/3]">
				<Image
					src={coach.image || '/placeholder.svg'}
					alt={coach.name}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

				{/* Role Badge */}
				<div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-sm">
					<p className="text-primary-foreground text-xs font-bold uppercase tracking-wider">
						{coach.role}
					</p>
				</div>

				{/* Years Badge */}
				<div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border border-border rounded-sm px-3 py-2 text-center">
					<p className="font-display text-xl font-bold text-primary">
						{coach.yearsInvolved}
					</p>
					<p className="text-[9px] text-muted-foreground uppercase tracking-wider">
						Years
					</p>
				</div>

				{/* Name Overlay */}
				<div className="absolute bottom-0 left-0 right-0 p-6">
					<h3 className="font-display text-2xl font-bold text-foreground mb-1">
						{coach.name}
					</h3>
					<p className="text-sm text-primary font-medium">
						{coach.specialization}
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="p-6">
				{/* Philosophy Preview */}
				<div className="mb-4">
					<p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
						{coach.philosophy}
					</p>
				</div>

				{/* Expand Button */}
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className="w-full flex items-center justify-center gap-2 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
				>
					<span className="text-sm font-medium text-foreground">
						{isExpanded ? 'Show Less' : 'View Full Profile'}
					</span>
					<ChevronDown
						size={16}
						className={cn(
							'text-muted-foreground transition-transform',
							isExpanded && 'rotate-180',
						)}
					/>
				</button>

				{/* Expanded Content */}
				{isExpanded && (
					<div className="mt-6 pt-6 border-t border-border space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
						{/* Quote */}
						{coach.quote && (
							<div className="relative bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
								<Quote
									className="absolute top-3 right-3 text-primary/20"
									size={24}
								/>
								<p className="text-sm text-foreground italic leading-relaxed relative z-10">
									"{coach.quote}"
								</p>
							</div>
						)}

						{/* Key Contributions */}
						<div>
							<h4 className="font-display text-sm font-bold text-foreground mb-3 flex items-center gap-2">
								<div className="w-1 h-4 bg-primary rounded-full" />
								Key Contributions
							</h4>
							<ul className="space-y-2">
								{coach.contributions.map(
									(contribution, index) => (
										<li
											key={index}
											className="flex items-start gap-2 text-xs text-muted-foreground"
										>
											<div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
											<span>{contribution}</span>
										</li>
									),
								)}
							</ul>
						</div>

						{/* Achievements */}
						<div>
							<h4 className="font-display text-sm font-bold text-foreground mb-3 flex items-center gap-2">
								<Award size={14} className="text-primary" />
								Achievements
							</h4>
							<div className="grid gap-2">
								{coach.achievements.map(
									(achievement, index) => (
										<div
											key={index}
											className="flex items-center gap-2 bg-secondary/50 rounded-lg p-2 text-xs"
										>
											<Star
												size={12}
												className="text-primary"
												fill="currentColor"
											/>
											<span className="text-foreground">
												{achievement}
											</span>
										</div>
									),
								)}
							</div>
						</div>

						{/* Certifications */}
						{coach.certifications &&
							coach.certifications.length > 0 && (
								<div>
									<h4 className="font-display text-sm font-bold text-foreground mb-3">
										Certifications
									</h4>
									<div className="flex flex-wrap gap-2">
										{coach.certifications.map(
											(cert, index) => (
												<span
													key={index}
													className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-medium rounded-full border border-primary/20"
												>
													{cert}
												</span>
											),
										)}
									</div>
								</div>
							)}
					</div>
				)}
			</div>
		</div>
	);
}
