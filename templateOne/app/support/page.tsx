import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import {
	Heart,
	Users,
	Trophy,
	GraduationCap,
	Building2,
	Handshake,
	Target,
	Star,
	ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const supportTiers = [
	{
		name: 'Supporter',
		amount: 'KES 5,000',
		period: 'one-time',
		description: 'Show your support for the next generation of Titans',
		benefits: [
			'Name on supporters board',
			'Digital thank you certificate',
			'Newsletter updates',
		],
		highlighted: false,
	},
	{
		name: 'Champion',
		amount: 'KES 25,000',
		period: 'annually',
		description: "Fuel the team's journey to excellence",
		benefits: [
			'All Supporter benefits',
			'Official Titans merchandise',
			'Invitations to home matches',
			'Recognition at tournaments',
		],
		highlighted: true,
	},
	{
		name: 'Legend',
		amount: 'KES 100,000+',
		period: 'annually',
		description: 'Leave a lasting legacy in Titans history',
		benefits: [
			'All Champion benefits',
			'Named scholarship opportunity',
			'VIP access to all events',
			'Advisory board seat',
			'Legacy plaque at school',
		],
		highlighted: false,
	},
];

const impactAreas = [
	{
		icon: Trophy,
		title: 'Equipment & Gear',
		description:
			'Sticks, balls, protective gear, and training equipment to keep our players safe and competitive.',
	},
	// {
	// 	icon: GraduationCap,
	// 	title: 'Player Scholarships',
	// 	description:
	// 		'Supporting talented players who need financial assistance to continue their education and hockey.',
	// },
	{
		icon: Building2,
		title: 'Facility Upgrades',
		description:
			'Improving our training facilities, pitch maintenance, and creating a world-class hockey environment.',
	},
	{
		icon: Users,
		title: 'Coaching Programs',
		description:
			'Training and certifying coaches to develop the next generation of Titans players.',
	},
];

export default function SupportPage() {
	return (
		<main className="min-h-screen bg-background">
			<Navigation />

			{/* Hero */}
			<section className="pt-24 pb-16 bg-card turf-pattern relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent" />
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 text-primary mb-6">
							<Heart size={20} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Join Our Family
							</span>
						</div>

						<h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
							SUPPORT THE
						</h1>
						<h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-8">
							LEGACY
						</h1>

						<p className="text-lg text-muted-foreground mb-8 leading-relaxed">
							For 40 years, Les Titans has been more than a hockey
							team - it's a brotherhood that transforms lives.
							Your support helps us continue building champions on
							the field and leaders in life.
						</p>

						<div className="flex flex-wrap justify-center gap-4">
							<Button
								size="lg"
								className="font-display uppercase tracking-wider"
							>
								<Heart className="mr-2 h-4 w-4" /> Make a
								Contribution
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="font-display uppercase tracking-wider bg-transparent"
							>
								Partner With Us
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Impact Stats */}
			<section className="py-12 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="bg-card border border-border rounded-lg p-6 text-center">
							<p className="font-display text-4xl font-bold text-primary">
								200+
							</p>
							<p className="text-sm text-muted-foreground mt-2">
								Lives Impacted
							</p>
						</div>
						<div className="bg-card border border-border rounded-lg p-6 text-center">
							<p className="font-display text-4xl font-bold text-primary">
								8
							</p>
							<p className="text-sm text-muted-foreground mt-2">
								Pro Careers Launched
							</p>
						</div>
						<div className="bg-card border border-border rounded-lg p-6 text-center">
							<p className="font-display text-4xl font-bold text-primary">
								40
							</p>
							<p className="text-sm text-muted-foreground mt-2">
								Years of Excellence
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Support Tiers */}
			{/* <section className="py-16 bg-card">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 text-primary mb-4">
							<Star size={18} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Support Tiers
							</span>
						</div>
						<h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
							Choose Your Impact
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Every contribution, big or small, helps us continue
							our mission of excellence.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{supportTiers.map((tier) => (
							<div
								key={tier.name}
								className={`relative rounded-lg p-6 ${
									tier.highlighted
										? 'bg-primary/10 border-2 border-primary'
										: 'bg-secondary/50 border border-border hover:border-primary/50'
								} transition-colors`}
							>
								{tier.highlighted && (
									<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
										Most Popular
									</div>
								)}

								<div className="text-center mb-6">
									<h3 className="font-display text-2xl font-bold text-foreground mb-2">
										{tier.name}
									</h3>
									<p className="font-display text-3xl font-bold text-primary">
										{tier.amount}
									</p>
									<p className="text-xs text-muted-foreground">
										{tier.period}
									</p>
								</div>

								<p className="text-sm text-muted-foreground text-center mb-6">
									{tier.description}
								</p>

								<ul className="space-y-3 mb-8">
									{tier.benefits.map((benefit, index) => (
										<li
											key={index}
											className="flex items-start gap-2 text-sm"
										>
											<div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
											<span className="text-foreground">
												{benefit}
											</span>
										</li>
									))}
								</ul>

								<Button
									className={`w-full font-display uppercase tracking-wider ${
										tier.highlighted
											? ''
											: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
									}`}
									variant={
										tier.highlighted
											? 'default'
											: 'secondary'
									}
								>
									Select {tier.name}
								</Button>
							</div>
						))}
					</div>
				</div>
			</section> */}

			{/* Payment Methods */}
			<section className="py-16 bg-card">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 text-primary mb-4">
							<Star size={18} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Support Us
							</span>
						</div>
						<h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
							Make Your Contribution
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Every contribution, big or small, helps us continue
							our mission of excellence.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
						{/* M-Pesa PayBill */}
						<div className="bg-secondary/50 border border-border rounded-lg p-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
									<span className="text-lg font-bold text-primary">
										M
									</span>
								</div>
								<h3 className="font-display text-xl font-bold text-foreground">
									M-Pesa PayBill
								</h3>
							</div>

							<div className="space-y-4">
								<div>
									<p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
										PayBill Number
									</p>
									<p className="font-display text-2xl font-bold text-primary">
										123456
									</p>
								</div>

								<div>
									<p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
										Account Number
									</p>
									<p className="font-display text-lg font-bold text-foreground">
										LES TITANS
									</p>
								</div>

								<div className="bg-background border border-border rounded-lg p-4 mt-6">
									<p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
										How to Contribute
									</p>
									<ol className="text-sm text-foreground space-y-2 list-decimal list-inside">
										<li>Go to M-Pesa menu</li>
										<li>Select "Lipa na M-Pesa"</li>
										<li>Choose "PayBill"</li>
										<li>Enter PayBill: 123456</li>
										<li>Enter Account: LES TITANS</li>
										<li>Enter amount and PIN</li>
									</ol>
								</div>
							</div>
						</div>

						{/* Bank Details */}
						<div className="bg-secondary/50 border border-border rounded-lg p-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
									<span className="text-lg font-bold text-primary">
										🏦
									</span>
								</div>
								<h3 className="font-display text-xl font-bold text-foreground">
									Bank Transfer
								</h3>
							</div>

							<div className="space-y-4">
								<div>
									<p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
										Bank Name
									</p>
									<p className="font-display text-lg font-bold text-foreground">
										Equity Bank Kenya
									</p>
								</div>

								<div>
									<p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
										Account Name
									</p>
									<p className="font-display text-lg font-bold text-foreground">
										Les Titans Hockey
									</p>
								</div>

								<div>
									<p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
										Account Number
									</p>
									<p className="font-display text-lg font-bold text-primary">
										0123456789
									</p>
								</div>

								<div>
									<p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
										Swift Code
									</p>
									<p className="font-display text-lg font-bold text-foreground">
										EQBLKENA
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Impact Areas */}
			<section className="py-16 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 text-primary mb-4">
							<Target size={18} />
							<span className="text-sm font-medium uppercase tracking-widest">
								Your Impact
							</span>
						</div>
						<h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
							Where Your Support Goes
						</h2>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{impactAreas.map((area) => (
							<div
								key={area.title}
								className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
							>
								<area.icon
									className="text-primary mb-4"
									size={32}
								/>
								<h3 className="font-display text-lg font-bold text-foreground mb-2">
									{area.title}
								</h3>
								<p className="text-sm text-muted-foreground">
									{area.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Corporate Sponsorship */}
			<section className="py-16 bg-card">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-flex items-center gap-2 text-primary mb-4">
								<Handshake size={18} />
								<span className="text-sm font-medium uppercase tracking-widest">
									Partnership
								</span>
							</div>
							<h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
								Corporate Sponsorship
							</h2>
							<p className="text-muted-foreground mb-6 leading-relaxed">
								Partner with Les Titans and align your brand
								with excellence, integrity, and community
								impact. Our sponsorship packages offer
								visibility, engagement, and the opportunity to
								make a real difference.
							</p>

							<ul className="space-y-4 mb-8">
								{[
									'Logo placement on team jerseys and equipment',
									'Brand visibility at tournaments and events',
									'Social media recognition and content',
									'Employee engagement opportunities',
									'Community goodwill and CSR benefits',
								].map((benefit, index) => (
									<li
										key={index}
										className="flex items-center gap-3"
									>
										<div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
											<div className="w-2 h-2 bg-primary rounded-full" />
										</div>
										<span className="text-foreground">
											{benefit}
										</span>
									</li>
								))}
							</ul>

							<Button className="font-display uppercase tracking-wider">
								Request Partnership Details{' '}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</div>

						<div className="bg-secondary/50 border border-border rounded-lg p-8">
							<h3 className="font-display text-xl font-bold text-foreground mb-6">
								Get In Touch
							</h3>

							<form className="space-y-4">
								<div>
									<label
										htmlFor="company"
										className="block text-sm font-medium text-foreground mb-2"
									>
										Company Name
									</label>
									<input
										type="text"
										id="company"
										className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
										placeholder="Your company name"
									/>
								</div>

								<div className="grid sm:grid-cols-2 gap-4">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-foreground mb-2"
										>
											Contact Name
										</label>
										<input
											type="text"
											id="name"
											className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-foreground mb-2"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
											placeholder="you@company.com"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="interest"
										className="block text-sm font-medium text-foreground mb-2"
									>
										Area of Interest
									</label>
									<select
										id="interest"
										className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none"
									>
										<option value="">
											Select an option
										</option>
										<option value="jersey">
											Jersey Sponsorship
										</option>
										<option value="tournament">
											Tournament Sponsorship
										</option>
										<option value="equipment">
											Equipment Sponsorship
										</option>
										<option value="scholarship">
											Scholarship Funding
										</option>
										<option value="other">Other</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-foreground mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										rows={3}
										className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
										placeholder="Tell us about your interest in partnering..."
									/>
								</div>

								<Button
									type="submit"
									className="w-full font-display uppercase tracking-wider"
								>
									Send Inquiry
								</Button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Alumni CTA */}
			<section className="py-16 bg-primary">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<GraduationCap
						className="mx-auto text-primary-foreground/80 mb-6"
						size={48}
					/>

					<h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
						Calling All Old Boys
					</h2>

					<p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
						You know what Les Titans meant to you. Now help the next
						generation experience the same brotherhood, discipline,
						and excellence that shaped your life.
					</p>

					<div className="flex flex-wrap justify-center gap-4">
						<Button
							size="lg"
							variant="secondary"
							className="font-display uppercase tracking-wider"
						>
							Join Alumni Network
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="font-display uppercase tracking-wider bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
						>
							Mentor a Player
						</Button>
					</div>
				</div>
			</section>

			{/* Contact Info */}
			<section className="py-12 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8">
						<h3 className="font-display text-xl font-bold text-foreground">
							Contact Our Support Team
						</h3>
					</div>

					<div className="flex flex-wrap justify-center gap-8">
						<div className="text-center">
							<p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
								Email
							</p>
							<p className="text-foreground font-medium">
								support@lestitans.co.ke
							</p>
						</div>
						<div className="text-center">
							<p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
								Phone
							</p>
							<p className="text-foreground font-medium">
								+254 700 123 456
							</p>
						</div>
						<div className="text-center">
							<p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
								Address
							</p>
							<p className="text-foreground font-medium">
								St. Anthony's Boys Kitale, Trans-Nzoia County
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
