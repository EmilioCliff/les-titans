// Coach Types
export interface Coach {
	id: string;
	name: string;
	role: string;
	yearsInvolved: number;
	joinedYear: number;
	philosophy: string;
	contributions: string[];
	image: string;
	specialization?: string;
	achievements: string[];
	quote?: string;
	certifications?: string[];
}

// Coaches Data
export const coaches: Coach[] = [
	{
		id: 'keegan-lugalia',
		name: 'Coach Keegan Lugalia',
		role: 'Head Coach',
		yearsInvolved: 15,
		joinedYear: 2010,
		philosophy:
			"Hockey is not just a sport—it's a school of life. Every practice, every match, every moment on the field is an opportunity to build character, discipline, and brotherhood.",
		contributions: [
			'Led Les Titans to 8 championship titles',
			'Developed innovative training methodologies adopted across Kenya',
			'Mentored over 150 young athletes, including 5 national team players',
			'Established the Titans youth development program',
			'Introduced sports psychology and mental conditioning to the team',
		],
		image: '/coach-keegan-trouphy.jpeg',
		specialization: 'Tactical Strategy & Youth Development',
		achievements: [
			'Kenya Hockey Union Coach of the Year (2018, 2021)',
			'CAF Coaching Excellence Award 2019',
			'Level 3 FIH Coaching Certificate',
			'40 Years Les Titans Legacy Builder',
		],
		quote: "Success is measured not just in trophies, but in the men these young boys become. When I see a Titan leading with integrity in their career, that's my greatest victory.",
		certifications: [
			'FIH Level 3 Coaching Certificate',
			'Sports Psychology Diploma',
			'Youth Development Specialist',
			'First Aid & Sports Medicine Certified',
		],
	},
	{
		id: 'seka',
		name: 'Coach Seka',
		role: 'Technical Director & Skills Coach',
		yearsInvolved: 12,
		joinedYear: 2013,
		philosophy:
			"Excellence is not an accident—it's the result of deliberate practice, unwavering commitment, and the relentless pursuit of improvement. We don't just play hockey; we master the craft.",
		contributions: [
			"Revolutionized Les Titans' technical training programs",
			"Pioneered the 'Titans Touch' skills development system",
			'Coached multiple players to national team selection',
			'Implemented video analysis and performance tracking',
			'Created the legendary pre-tournament boot camp program',
		],
		image: '/placeholder.svg',
		specialization: 'Technical Skills & Performance Analysis',
		achievements: [
			'Kenya Hockey Technical Innovation Award 2020',
			'Developed 3 national team captains',
			"Architect of Les Titans' signature playing style",
			'Mentored over 100 players to university scholarships',
		],
		quote: 'Every stick touch, every pass, every shot—these are the building blocks of greatness. When a Titan steps on that field, they carry the weight of 40 years of excellence.',
		certifications: [
			'FIH Level 2 Coaching Certificate',
			'Performance Analysis Specialist',
			'Strength & Conditioning Coach',
			'Sports Nutrition Advisor',
		],
	},
];

// Additional Technical Team Members (Optional - you can add more)
export interface TechnicalStaff {
	id: string;
	name: string;
	role: string;
	yearsInvolved: number;
	specialty: string;
	image: string;
}

export const technicalStaff: TechnicalStaff[] = [
	{
		id: 'prinsipal-q',
		name: 'Pr. Makanda',
		role: 'School Principal & Team Patron',
		yearsInvolved: 4,
		specialty: 'Leadership & Mentorship',
		image: '/coach-prinscipal-trouphies.jpeg',
	},
	{
		id: 'physio-1',
		name: 'Dr. James Mwangi',
		role: 'Team Physiotherapist',
		yearsInvolved: 8,
		specialty: 'Sports Medicine & Injury Prevention',
		image: '/placeholder.svg',
	},
	{
		id: 'manager-1',
		name: 'Sarah Kamau',
		role: 'Team Manager',
		yearsInvolved: 10,
		specialty: 'Operations & Logistics',
		image: '/placeholder.svg',
	},
];

// Coaching Philosophy Principles
export const coachingPrinciples = [
	{
		title: 'Brotherhood First',
		description:
			'We build bonds that last a lifetime. Every player is a brother, every coach a mentor, every moment a memory.',
		icon: 'users',
	},
	{
		title: 'Excellence is Standard',
		description:
			'Mediocrity has no place in Les Titans. We train like champions, play like warriors, and conduct ourselves like leaders.',
		icon: 'trophy',
	},
	{
		title: 'Character over Trophies',
		description:
			'Victories fade, but character lasts forever. We develop men of integrity who carry the Titans spirit into every aspect of life.',
		icon: 'heart',
	},
	{
		title: 'Discipline & Dedication',
		description:
			'Success is earned through sweat, sacrifice, and unwavering commitment. There are no shortcuts to greatness.',
		icon: 'target',
	},
];

// Coaching Stats
export const coachingStats = {
	totalPlayers: 200,
	championships: 12,
	nationalTeamPlayers: 8,
	yearsOfExcellence: 40,
	trainingHoursPerWeek: 15,
	tournamentWinRate: 75,
};
