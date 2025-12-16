import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { upcomingMatches } from '@/lib/data';

export function HeroSection() {
	const nextMatch = upcomingMatches[0];
	const matchDate = new Date(nextMatch.date);

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden turf-pattern">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url('/2019-team-photo.jpeg?height=1080&width=1920')`,
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
			</div>

			{/* Diagonal Accent */}
			{/* <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/4" /> */}

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left - Main Content */}
					<div>
						<div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
							<span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
							<span className="text-sm text-primary font-medium">
								2025 Season
							</span>
						</div>

						<h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-2">
							LES
						</h1>
						<h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-primary mb-6">
							TITANS
						</h1>

						<p className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium">
							St. Anthony's Boys Kitale Hockey Team
						</p>
						<p className="text-muted-foreground mb-8 max-w-md">
							Four-time National Champions. Forged through
							brotherhood, driven by excellence. From the green
							turfs of Kitale to the pinnacle of Kenyan school
							hockey.
						</p>

						<div className="flex flex-wrap gap-4">
							<Button
								asChild
								size="lg"
								className="font-display uppercase tracking-wider"
							>
								<Link href="/team">
									Meet The Squad{' '}
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="font-display uppercase tracking-wider bg-transparent"
							>
								<Link href="/support">Support Us</Link>
							</Button>
						</div>
					</div>

					{/* Right - Next Match Card */}
					{/* <div className="lg:justify-self-end">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 max-w-sm">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Calendar size={18} />
                <span className="text-sm font-medium uppercase tracking-wider">Next Match</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center mb-2">
                      <span className="font-display text-primary-foreground text-2xl font-bold">LT</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Titans</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="font-display text-2xl font-bold text-foreground">VS</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {matchDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center mb-2">
                      <span className="font-display text-secondary-foreground text-lg font-bold">FSK</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Kamusinga</p>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">{nextMatch.venue}</span>
                    {nextMatch.tournament && <span className="block text-xs mt-1">{nextMatch.tournament}</span>}
                  </p>
                </div>

                <Button asChild variant="secondary" className="w-full font-display uppercase tracking-wider">
                  <Link href="/fixtures">View All Fixtures</Link>
                </Button>
              </div>
            </div>
          </div> */}
				</div>
			</div>

			{/* Bottom Stats Bar */}
			<div className="absolute bottom-0 left-0 right-0 bg-card/90 backdrop-blur-sm border-t border-border">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
						<div>
							<p className="font-display text-2xl sm:text-3xl font-bold text-primary">
								4
							</p>
							<p className="text-xs text-muted-foreground uppercase tracking-wider">
								National Titles
							</p>
						</div>
						<div>
							<p className="font-display text-2xl sm:text-3xl font-bold text-primary">
								200+
							</p>
							<p className="text-xs text-muted-foreground uppercase tracking-wider">
								Alumni Network
							</p>
						</div>
						<div>
							<p className="font-display text-2xl sm:text-3xl font-bold text-primary">
								40
							</p>
							<p className="text-xs text-muted-foreground uppercase tracking-wider">
								Years of Excellence
							</p>
						</div>
						<div>
							<p className="font-display text-2xl sm:text-3xl font-bold text-primary">
								15
							</p>
							<p className="text-xs text-muted-foreground uppercase tracking-wider">
								National Team Players
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
