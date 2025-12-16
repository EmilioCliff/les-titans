'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CoachProfileCard } from '@/components/coach/coach-profile-card';
import { TechnicalStaffCard } from '@/components/coach/technical-staff-card';
import { CoachingStats } from '@/components/coach/coaching-stats';
import {
	coaches,
	technicalStaff,
	coachingPrinciples,
} from '@/lib/coaches-data';
import { Award, Users, Heart, Trophy, Target, Zap } from 'lucide-react';

export default function CoachPage() {
	const principleIcons = {
		users: Users,
		trophy: Trophy,
		heart: Heart,
		target: Target,
	};

	return (
		<main className="min-h-screen bg-background">
			<Navigation />

			{/* Hero Section */}
			<section className="pt-24 pb-12 bg-card turf-pattern relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent" />
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="inline-flex items-center gap-2 text-primary mb-4">
							<Award size={20} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Leadership & Excellence
							</span>
						</div>
						<h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
							MEET THE
						</h1>
						<h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
							MASTERMINDS
						</h1>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Behind every great team stands visionary leadership.
							Our coaches don't just train athletes—they forge
							champions, build character, and create a legacy that
							transcends the field.
						</p>
					</div>
				</div>
			</section>

			{/* Coaching Stats */}
			<section className="py-12 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<CoachingStats />
				</div>
			</section>

			{/* Main Coaches - Featured Layout */}
			<section className="py-16 bg-card">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 text-primary mb-4">
							<Zap size={18} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Head Coaching Staff
							</span>
						</div>
						<h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
							The Architects of Excellence
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Decades of combined experience, countless
							championships, and an unwavering commitment to
							building the next generation of Titans.
						</p>
					</div>

					<div className="space-y-12">
						{coaches.map((coach, index) => (
							<CoachProfileCard
								key={coach.id}
								coach={coach}
								variant="featured"
							/>
						))}
					</div>
				</div>
			</section>

			{/* Coaching Philosophy */}
			<section className="py-16 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 text-primary mb-4">
							<Target size={18} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Our Philosophy
							</span>
						</div>
						<h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
							The Titans Way
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							These principles guide everything we do—from
							training sessions to team selection to how we carry
							ourselves on and off the field.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{coachingPrinciples.map((principle, index) => {
							const Icon =
								principleIcons[
									principle.icon as keyof typeof principleIcons
								];
							return (
								<div
									key={index}
									className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
								>
									<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
										<Icon
											className="text-primary"
											size={24}
										/>
									</div>
									<h3 className="font-display text-lg font-bold text-foreground mb-3">
										{principle.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{principle.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Technical Staff */}
			<section className="py-16 bg-card">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 text-primary mb-4">
							<Users size={18} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Support Team
							</span>
						</div>
						<h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
							Technical & Support Staff
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Behind every successful team is a dedicated support
							crew ensuring players are fit, focused, and ready to
							perform at their peak.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{technicalStaff.map((staff) => (
							<TechnicalStaffCard key={staff.id} staff={staff} />
						))}
					</div>
				</div>
			</section>

			{/* Coaching Impact Statement */}
			<section className="py-16 bg-primary">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<Heart
						className="mx-auto text-primary-foreground mb-6"
						size={48}
					/>
					<h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
						More Than Coaches. Mentors for Life.
					</h2>
					<p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
						The impact of our coaches extends far beyond the hockey
						field. They shape young men into leaders, instill values
						that last a lifetime, and create a brotherhood that
						spans generations. When you join Les Titans, you don't
						just get a coach—you get a mentor who will invest in
						your growth as an athlete and as a person.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-6 py-4">
							<p className="font-display text-3xl font-bold text-primary-foreground">
								40
							</p>
							<p className="text-xs text-primary-foreground/80 uppercase tracking-wider">
								Years of Wisdom
							</p>
						</div>
						<div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-6 py-4">
							<p className="font-display text-3xl font-bold text-primary-foreground">
								200+
							</p>
							<p className="text-xs text-primary-foreground/80 uppercase tracking-wider">
								Lives Changed
							</p>
						</div>
						<div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-6 py-4">
							<p className="font-display text-3xl font-bold text-primary-foreground">
								∞
							</p>
							<p className="text-xs text-primary-foreground/80 uppercase tracking-wider">
								Legacy Impact
							</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
