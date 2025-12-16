// Types
export interface Player {
	id: string;
	name: string;
	jerseyNumber: number;
	position: string;
	form: string;
	bio: string;
	stats: {
		goals: number;
		assists: number;
		caps: number;
	};
	image: string;
	isCaptain?: boolean;
	graduationYear?: number; // Added for alumni class grouping
}

export interface Alumni {
	id: string;
	name: string;
	graduationYear: number;
	position: string;
	achievements: string[];
	currentPath: string;
	image: string;
	stats?: {
		goals: number;
		assists: number;
		caps: number;
	};
	testimonial?: string; // Added testimonials for legacy section
}

export interface MatchEvent {
	minute: number;
	type: 'goal' | 'assist' | 'yellow' | 'red' | 'penalty';
	player: string;
	assistedBy?: string;
}

export interface Match {
	id: string;
	date: string;
	opponent: string;
	venue: string;
	isHome: boolean;
	result?: {
		home: number;
		away: number;
	};
	tournament?: string;
	season?: number; // Added season for historical fixtures
	events?: MatchEvent[]; // Added match events for detailed stats
	possession?: number;
	shots?: number;
	shotsOnTarget?: number;
	corners?: number;
	fouls?: number;
}

export interface TournamentMatch {
	id: string;
	round: string;
	date: string;
	homeTeam: string;
	awayTeam: string;
	result: {
		home: number;
		away: number;
	};
	events: MatchEvent[];
	venue: string;
}

export interface TournamentStanding {
	team: string;
	played: number;
	won: number;
	drawn: number;
	lost: number;
	gf: number;
	ga: number;
	points: number;
}

export interface Tournament {
	id: string;
	name: string;
	year: number;
	winner?: string;
	runnerUp?: string;
	teams: string[];
	standings: TournamentStanding[];
	matches?: TournamentMatch[]; // Added full match history
	topScorer?: { name: string; goals: number };
	mvp?: string;
}

export interface Product {
	id: string;
	name: string;
	price: number;
	category: string;
	image: string;
	description: string;
}

export interface TimelineEvent {
	year: number;
	title: string;
	description: string;
}

// Current Team Data - Now includes more players per form/class
export const currentTeam: Player[] = [
	{
		id: '1',
		name: 'Kevin Ochieng',
		jerseyNumber: 1,
		position: 'Goalkeeper',
		form: 'Form 4',
		bio: 'The Wall of Kitale. Kevin has kept 12 clean sheets this season and leads by example with his commanding presence.',
		stats: { goals: 0, assists: 2, caps: 45 },
		image: '/african-teenage-goalkeeper-field-hockey-player-por.jpg',
		graduationYear: 2025,
	},
	{
		id: '2',
		name: 'Emmanuel Wafula',
		jerseyNumber: 4,
		position: 'Defender',
		form: 'Form 4',
		bio: 'A rock-solid defender known for his tactical awareness and crucial tackles. Vice-captain of the squad.',
		stats: { goals: 3, assists: 8, caps: 52 },
		image: '/african-teenage-defender-field-hockey-player-portr.jpg',
		isCaptain: false,
		graduationYear: 2025,
	},
	{
		id: '3',
		name: 'Brian Ogenche',
		jerseyNumber: 7,
		position: 'Midfielder',
		form: 'Form 4',
		bio: "The engine of the team. Brian's work rate and vision make him indispensable in both attack and defense.",
		stats: { goals: 12, assists: 15, caps: 48 },
		image: '/ogenche-brian.jpeg',
		isCaptain: true,
		graduationYear: 2025,
	},
	{
		id: '4',
		name: 'Samuel Wanjala',
		jerseyNumber: 9,
		position: 'Forward',
		form: 'Form 3',
		bio: 'A natural striker with lightning pace and clinical finishing. Top scorer for two consecutive seasons.',
		stats: { goals: 28, assists: 11, caps: 40 },
		image: '/african-teenage-forward-field-hockey-striker-portr.jpg',
		graduationYear: 2026,
	},
	{
		id: '5',
		name: 'David Otieno',
		jerseyNumber: 11,
		position: 'Forward',
		form: 'Form 3',
		bio: 'Skilled winger with exceptional dribbling ability. Creates chances and scores crucial goals.',
		stats: { goals: 18, assists: 22, caps: 38 },
		image: '/african-teenage-winger-field-hockey-player-portrai.jpg',
		graduationYear: 2026,
	},
	{
		id: '6',
		name: 'Peter Muturi',
		jerseyNumber: 5,
		position: 'Defender',
		form: 'Form 2',
		bio: 'Young talent with immense potential. Strong in aerial duels and positioning.',
		stats: { goals: 1, assists: 4, caps: 25 },
		image: '/african-teenage-young-defender-field-hockey-player.jpg',
		graduationYear: 2027,
	},
	{
		id: '7',
		name: 'James Kamau',
		jerseyNumber: 8,
		position: 'Midfielder',
		form: 'Form 3',
		bio: 'Creative playmaker with excellent passing range. Sets the tempo of the game.',
		stats: { goals: 8, assists: 18, caps: 35 },
		image: '/african-teenage-playmaker-field-hockey-player-port.jpg',
		graduationYear: 2026,
	},
	{
		id: '8',
		name: 'Michael Oduya',
		jerseyNumber: 10,
		position: 'Midfielder',
		form: 'Form 4',
		bio: 'Technical maestro with silky skills on the ball. Penalty corner specialist.',
		stats: { goals: 15, assists: 12, caps: 50 },
		image: '/african-teenage-technical-midfielder-field-hockey.jpg',
		graduationYear: 2025,
	},
	{
		id: '9',
		name: 'Victor Rotich',
		jerseyNumber: 3,
		position: 'Defender',
		form: 'Form 4',
		bio: 'Versatile defender who can play across the backline. Strong in one-on-one situations.',
		stats: { goals: 2, assists: 5, caps: 42 },
		image: '/african-teenage-defender-field-hockey-serious-port.jpg',
		graduationYear: 2025,
	},
	{
		id: '10',
		name: 'Dennis Korir',
		jerseyNumber: 6,
		position: 'Midfielder',
		form: 'Form 4',
		bio: 'Defensive midfielder with excellent reading of the game. The shield in front of defense.',
		stats: { goals: 4, assists: 9, caps: 46 },
		image: '/african-teenage-defensive-midfielder-hockey-player.jpg',
		graduationYear: 2025,
	},
	{
		id: '11',
		name: 'Stephen Maina',
		jerseyNumber: 14,
		position: 'Forward',
		form: 'Form 3',
		bio: 'Emerging talent with incredible speed. A nightmare for defenders on the counter.',
		stats: { goals: 12, assists: 8, caps: 28 },
		image: '/african-teenage-fast-forward-hockey-player.jpg',
		graduationYear: 2026,
	},
	{
		id: '12',
		name: 'Collins Ouma',
		jerseyNumber: 15,
		position: 'Defender',
		form: 'Form 3',
		bio: 'Athletic center-back with leadership qualities. Future captain material.',
		stats: { goals: 3, assists: 2, caps: 30 },
		image: '/african-teenage-athletic-defender-hockey-portrait.jpg',
		graduationYear: 2026,
	},
	{
		id: '13',
		name: 'Felix Wanyama',
		jerseyNumber: 16,
		position: 'Midfielder',
		form: 'Form 3',
		bio: 'Box-to-box midfielder with endless stamina. Covers every blade of grass.',
		stats: { goals: 6, assists: 11, caps: 32 },
		image: '/african-teenage-midfielder-field-hockey-dynamic.jpg',
		graduationYear: 2026,
	},
	{
		id: '14',
		name: 'Andrew Kiptoo',
		jerseyNumber: 17,
		position: 'Goalkeeper',
		form: 'Form 2',
		bio: 'Promising young goalkeeper learning from Kevin. Quick reflexes and brave.',
		stats: { goals: 0, assists: 0, caps: 8 },
		image: '/african-teenage-young-goalkeeper-hockey-player.jpg',
		graduationYear: 2027,
	},
	{
		id: '15',
		name: 'George Njoroge',
		jerseyNumber: 18,
		position: 'Midfielder',
		form: 'Form 2',
		bio: 'Technical young player with great ball control. Learning from the seniors.',
		stats: { goals: 3, assists: 5, caps: 15 },
		image: '/african-teenage-young-midfielder-hockey-player.jpg',
		graduationYear: 2027,
	},
	{
		id: '16',
		name: 'Eric Wekesa',
		jerseyNumber: 19,
		position: 'Forward',
		form: 'Form 2',
		bio: 'Pacey young striker with an eye for goal. One for the future.',
		stats: { goals: 5, assists: 3, caps: 12 },
		image: '/african-teenage-young-forward-hockey-player.jpg',
		graduationYear: 2027,
	},
];

export const alumni: Alumni[] = [
	// Class of 2024
	{
		id: 'a1',
		name: 'Timothy Simiyu',
		graduationYear: 2024,
		position: 'Forward',
		achievements: ['Top Scorer 2023', 'National U18 Team', 'MVP 2024'],
		currentPath: 'Playing for Strathmore University & Kenya U21 Team',
		image: '/african-young-adult-male-hockey-player-university.jpg',
		stats: { goals: 45, assists: 28, caps: 62 },
		testimonial:
			'Les Titans taught me more than hockey. It taught me discipline, brotherhood, and the value of hard work. Every time I step on the field, I carry the Titans spirit with me.',
	},
	{
		id: 'a2',
		name: 'Joseph Barasa',
		graduationYear: 2024,
		position: 'Goalkeeper',
		achievements: [
			'Best Goalkeeper 2023',
			'50+ Clean Sheets',
			'Captain 2024',
		],
		currentPath: 'Studying Medicine at University of Nairobi',
		image: '/african-young-adult-male-goalkeeper-university-por.jpg',
		stats: { goals: 0, assists: 5, caps: 68 },
		testimonial:
			'The discipline I learned at Les Titans helped me excel in my medical studies. Once a Titan, always a Titan.',
	},
	{
		id: 'a3',
		name: 'Richard Chebet',
		graduationYear: 2024,
		position: 'Defender',
		achievements: ['Best Defender 2023', 'Unbeaten Season 2024'],
		currentPath: 'Engineering student at JKUAT, plays for university team',
		image: '/african-young-adult-male-defender-hockey-player.jpg',
		stats: { goals: 8, assists: 15, caps: 58 },
	},
	{
		id: 'a4',
		name: 'Moses Wafula',
		graduationYear: 2024,
		position: 'Midfielder',
		achievements: ['Playmaker Award 2023', 'Most Assists 2024'],
		currentPath: 'Playing semi-professionally in Nairobi',
		image: '/african-young-adult-male-midfielder-hockey-player.jpg',
		stats: { goals: 22, assists: 38, caps: 60 },
	},
	// Class of 2023
	{
		id: 'a5',
		name: 'Daniel Cheruiyot',
		graduationYear: 2023,
		position: 'Midfielder',
		achievements: ['National Team Call-up', '3x Tournament MVP'],
		currentPath: 'Professional player at Butali Sugar Warriors',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 35, assists: 42, caps: 70 },
		testimonial:
			'The bonds we formed on that pitch, the discipline we learned, the brotherhood we built - these are the foundations of who we are today.',
	},
	{
		id: 'a6',
		name: 'Patrick Omondi',
		graduationYear: 2023,
		position: 'Forward',
		achievements: ['Top Scorer 2022', 'Kenya U19 Team'],
		currentPath: 'Business Administration at KU, University team captain',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 52, assists: 18, caps: 65 },
	},
	{
		id: 'a7',
		name: 'Isaac Langat',
		graduationYear: 2023,
		position: 'Defender',
		achievements: ['Rock of Defense Award', 'Regional Best XI'],
		currentPath: 'Law student at UoN, plays for Parklands SC',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 5, assists: 12, caps: 62 },
	},
	{
		id: 'a8',
		name: 'John Kiptanui',
		graduationYear: 2023,
		position: 'Goalkeeper',
		achievements: ['Golden Glove 2022', '15 Clean Sheets in a Season'],
		currentPath: 'Sports Management student, assistant goalkeeping coach',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 0, assists: 3, caps: 55 },
	},
	// Class of 2022
	{
		id: 'a9',
		name: 'Patrick Wekesa',
		graduationYear: 2022,
		position: 'Defender',
		achievements: ['Best Defender 2021', 'Unbeaten Season Captain'],
		currentPath: 'Engineering student at JKUAT, plays for university team',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 12, assists: 20, caps: 72 },
		testimonial:
			'Les Titans shaped my character. The values of teamwork and perseverance have helped me succeed both on and off the field.',
	},
	{
		id: 'a10',
		name: 'Samuel Kibet',
		graduationYear: 2022,
		position: 'Forward',
		achievements: ['Hat-trick King', '40+ Career Goals'],
		currentPath: 'Professional player at Kenya Police HC',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 48, assists: 22, caps: 68 },
	},
	{
		id: 'a11',
		name: 'Brian Ochieng',
		graduationYear: 2022,
		position: 'Midfielder',
		achievements: ['Midfield Maestro 2021', 'Tournament MVP 2022'],
		currentPath: 'IT student at Strathmore, university team',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 28, assists: 35, caps: 66 },
	},
	{
		id: 'a12',
		name: 'Kevin Mutai',
		graduationYear: 2022,
		position: 'Defender',
		achievements: ['Most Improved 2021', 'Regional Best Defender'],
		currentPath: 'Accountancy student at USIU, plays for Impala HC',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 6, assists: 14, caps: 58 },
	},
	// Class of 2021
	{
		id: 'a13',
		name: 'Martin Odhiambo',
		graduationYear: 2021,
		position: 'Forward',
		achievements: ['100 Career Goals', 'Kenya Schools Champion'],
		currentPath: 'Assistant Coach at Les Titans & Business Owner',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 102, assists: 45, caps: 85 },
		testimonial:
			'Coming back to coach the next generation is my way of giving back. The Titans legacy must continue.',
	},
	{
		id: 'a14',
		name: 'Charles Kipchoge',
		graduationYear: 2021,
		position: 'Midfielder',
		achievements: ['Captain 2020-2021', 'National Team Debut'],
		currentPath: 'Playing professionally in Uganda Premier League',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 38, assists: 52, caps: 78 },
	},
	{
		id: 'a15',
		name: 'Anthony Weru',
		graduationYear: 2021,
		position: 'Goalkeeper',
		achievements: ['Best Goalkeeper 2020', 'Record Clean Sheets'],
		currentPath: 'Sports Journalism at Daystar University',
		image: '/placeholder.svg?height=400&width=300',
		stats: { goals: 0, assists: 8, caps: 75 },
	},
];

export const upcomingMatches: Match[] = [
	{
		id: 'm1',
		date: '2025-01-18',
		opponent: 'Friends School Kamusinga',
		venue: "St. Anthony's Kitale",
		isHome: true,
		tournament: 'Western Region League',
		season: 2025,
	},
	{
		id: 'm2',
		date: '2025-01-25',
		opponent: 'Kakamega High School',
		venue: 'Kakamega Stadium',
		isHome: false,
		tournament: 'Western Region League',
		season: 2025,
	},
	{
		id: 'm3',
		date: '2025-02-01',
		opponent: 'Musingu High School',
		venue: "St. Anthony's Kitale",
		isHome: true,
		season: 2025,
	},
	{
		id: 'm4',
		date: '2025-02-08',
		opponent: 'Lugulu Girls (Exhibition)',
		venue: "St. Anthony's Kitale",
		isHome: true,
		season: 2025,
	},
	{
		id: 'm5',
		date: '2025-02-15',
		opponent: 'Chewoyet High School',
		venue: 'Chewoyet Stadium',
		isHome: false,
		tournament: 'Western Region League',
		season: 2025,
	},
];

export const recentResults: Match[] = [
	{
		id: 'r1',
		date: '2025-01-11',
		opponent: 'Moi High School Kabarak',
		venue: "St. Anthony's Kitale",
		isHome: true,
		result: { home: 4, away: 1 },
		season: 2025,
		events: [
			{
				minute: 12,
				type: 'goal',
				player: 'Samuel Wanjala',
				assistedBy: 'David Otieno',
			},
			{ minute: 28, type: 'goal', player: 'Brian Kiprop' },
			{
				minute: 45,
				type: 'goal',
				player: 'Samuel Wanjala',
				assistedBy: 'James Kamau',
			},
			{ minute: 52, type: 'goal', player: 'Opponent' },
			{
				minute: 78,
				type: 'goal',
				player: 'Michael Oduya',
				assistedBy: 'Brian Kiprop',
			},
		],
		possession: 62,
		shots: 14,
		shotsOnTarget: 8,
		corners: 7,
		fouls: 9,
	},
	{
		id: 'r2',
		date: '2025-01-04',
		opponent: "St. Patrick's Iten",
		venue: 'Iten Stadium',
		isHome: false,
		result: { home: 2, away: 2 },
		season: 2025,
		events: [
			{ minute: 15, type: 'goal', player: 'Opponent' },
			{
				minute: 34,
				type: 'goal',
				player: 'David Otieno',
				assistedBy: 'Samuel Wanjala',
			},
			{ minute: 67, type: 'goal', player: 'Opponent' },
			{
				minute: 89,
				type: 'goal',
				player: 'Brian Kiprop',
				assistedBy: 'Michael Oduya',
			},
		],
		possession: 55,
		shots: 11,
		shotsOnTarget: 5,
		corners: 5,
		fouls: 12,
	},
	{
		id: 'r3',
		date: '2024-12-14',
		opponent: 'Nairobi School',
		venue: "St. Anthony's Kitale",
		isHome: true,
		result: { home: 3, away: 0 },
		tournament: 'National Invitational',
		season: 2025,
		events: [
			{ minute: 22, type: 'goal', player: 'Samuel Wanjala' },
			{
				minute: 56,
				type: 'goal',
				player: 'Stephen Maina',
				assistedBy: 'David Otieno',
			},
			{
				minute: 81,
				type: 'goal',
				player: 'Michael Oduya',
				assistedBy: 'James Kamau',
			},
		],
		possession: 58,
		shots: 12,
		shotsOnTarget: 7,
		corners: 6,
		fouls: 8,
	},
];

export const seasonResults: Record<number, Match[]> = {
	2025: recentResults,
	2024: [
		{
			id: 's24-1',
			date: '2024-11-15',
			opponent: 'Kakamega High School',
			venue: "St. Anthony's Kitale",
			isHome: true,
			result: { home: 3, away: 2 },
			tournament: 'Regional Finals',
			season: 2024,
			events: [
				{ minute: 8, type: 'goal', player: 'Samuel Wanjala' },
				{ minute: 25, type: 'goal', player: 'Opponent' },
				{
					minute: 41,
					type: 'goal',
					player: 'Brian Kiprop',
					assistedBy: 'David Otieno',
				},
				{ minute: 58, type: 'goal', player: 'Opponent' },
				{
					minute: 88,
					type: 'goal',
					player: 'David Otieno',
					assistedBy: 'James Kamau',
				},
			],
			possession: 54,
			shots: 15,
			shotsOnTarget: 9,
		},
		{
			id: 's24-2',
			date: '2024-10-28',
			opponent: 'Friends School Kamusinga',
			venue: 'Kamusinga Stadium',
			isHome: false,
			result: { home: 1, away: 2 },
			season: 2024,
			events: [
				{ minute: 33, type: 'goal', player: 'Opponent' },
				{
					minute: 52,
					type: 'goal',
					player: 'Samuel Wanjala',
					assistedBy: 'Brian Kiprop',
				},
				{ minute: 76, type: 'goal', player: 'Michael Oduya' },
			],
			possession: 48,
			shots: 10,
			shotsOnTarget: 5,
		},
		{
			id: 's24-3',
			date: '2024-10-12',
			opponent: 'Musingu High School',
			venue: "St. Anthony's Kitale",
			isHome: true,
			result: { home: 5, away: 0 },
			season: 2024,
			events: [
				{ minute: 5, type: 'goal', player: 'Samuel Wanjala' },
				{
					minute: 22,
					type: 'goal',
					player: 'Samuel Wanjala',
					assistedBy: 'David Otieno',
				},
				{ minute: 38, type: 'goal', player: 'Brian Kiprop' },
				{
					minute: 61,
					type: 'goal',
					player: 'Stephen Maina',
					assistedBy: 'James Kamau',
				},
				{ minute: 85, type: 'goal', player: 'David Otieno' },
			],
			possession: 68,
			shots: 18,
			shotsOnTarget: 12,
		},
		{
			id: 's24-4',
			date: '2024-09-28',
			opponent: 'Nairobi School',
			venue: 'Nairobi School',
			isHome: false,
			result: { home: 2, away: 2 },
			tournament: 'National Invitational',
			season: 2024,
			events: [
				{ minute: 18, type: 'goal', player: 'Opponent' },
				{ minute: 35, type: 'goal', player: 'Samuel Wanjala' },
				{ minute: 55, type: 'goal', player: 'Opponent' },
				{
					minute: 90,
					type: 'goal',
					player: 'Brian Kiprop',
					assistedBy: 'Michael Oduya',
				},
			],
			possession: 52,
			shots: 11,
			shotsOnTarget: 6,
		},
		{
			id: 's24-5',
			date: '2024-09-14',
			opponent: "St. Patrick's Iten",
			venue: "St. Anthony's Kitale",
			isHome: true,
			result: { home: 4, away: 1 },
			season: 2024,
			events: [
				{
					minute: 12,
					type: 'goal',
					player: 'David Otieno',
					assistedBy: 'Samuel Wanjala',
				},
				{ minute: 29, type: 'goal', player: 'Brian Kiprop' },
				{ minute: 44, type: 'goal', player: 'Opponent' },
				{ minute: 67, type: 'goal', player: 'Samuel Wanjala' },
				{
					minute: 82,
					type: 'goal',
					player: 'Michael Oduya',
					assistedBy: 'Brian Kiprop',
				},
			],
			possession: 60,
			shots: 16,
			shotsOnTarget: 10,
		},
	],
	2023: [
		{
			id: 's23-1',
			date: '2023-11-18',
			opponent: 'Kakamega High School',
			venue: 'Kakamega Stadium',
			isHome: false,
			result: { home: 2, away: 1 },
			tournament: 'Regional Finals',
			season: 2023,
			events: [
				{ minute: 23, type: 'goal', player: 'Opponent' },
				{ minute: 56, type: 'goal', player: 'Daniel Cheruiyot' },
				{ minute: 88, type: 'goal', player: 'Opponent' },
			],
		},
		{
			id: 's23-2',
			date: '2023-10-21',
			opponent: 'Friends School Kamusinga',
			venue: "St. Anthony's Kitale",
			isHome: true,
			result: { home: 3, away: 1 },
			season: 2023,
			events: [
				{
					minute: 15,
					type: 'goal',
					player: 'Timothy Simiyu',
					assistedBy: 'Daniel Cheruiyot',
				},
				{ minute: 38, type: 'goal', player: 'Opponent' },
				{ minute: 62, type: 'goal', player: 'Timothy Simiyu' },
				{
					minute: 79,
					type: 'goal',
					player: 'Patrick Omondi',
					assistedBy: 'Timothy Simiyu',
				},
			],
		},
		{
			id: 's23-3',
			date: '2023-09-30',
			opponent: 'Moi High School Kabarak',
			venue: 'Kabarak',
			isHome: false,
			result: { home: 0, away: 4 },
			season: 2023,
			events: [
				{ minute: 11, type: 'goal', player: 'Timothy Simiyu' },
				{
					minute: 34,
					type: 'goal',
					player: 'Daniel Cheruiyot',
					assistedBy: 'Patrick Omondi',
				},
				{
					minute: 58,
					type: 'goal',
					player: 'Timothy Simiyu',
					assistedBy: 'Daniel Cheruiyot',
				},
				{ minute: 72, type: 'goal', player: 'Patrick Omondi' },
			],
		},
	],
};

export const tournaments: Tournament[] = [
	{
		id: 't1',
		name: "St. Anthony's Annual Hockey Tournament",
		year: 2025,
		standings: [
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
		],
		teams: [
			"St. Anthony's Kitale",
			'Friends School Kamusinga',
			'Kakamega High School',
			'Musingu High School',
			'Moi High School Kabarak',
			'Nairobi School',
			"St. Patrick's Iten",
			'Chewoyet High School',
		],
	},
	{
		id: 't2',
		name: "St. Anthony's Annual Hockey Tournament",
		year: 2024,
		winner: "St. Anthony's Kitale",
		runnerUp: 'Kakamega High School',
		standings: [
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
		],
		teams: [
			"St. Anthony's Kitale",
			'Friends School Kamusinga',
			'Kakamega High School',
			'Musingu High School',
			'Moi High School Kabarak',
			'Nairobi School',
		],
		topScorer: { name: 'Samuel Wanjala', goals: 6 },
		mvp: 'Brian Kiprop',
		matches: [
			{
				id: 't2-gf',
				round: 'Final',
				date: '2024-02-18',
				homeTeam: "St. Anthony's Kitale",
				awayTeam: 'Kakamega High School',
				result: { home: 3, away: 1 },
				venue: "St. Anthony's Main Pitch",
				events: [
					{
						minute: 15,
						type: 'goal',
						player: 'Samuel Wanjala',
						assistedBy: 'Brian Kiprop',
					},
					{ minute: 32, type: 'goal', player: 'Opponent' },
					{ minute: 58, type: 'goal', player: 'Samuel Wanjala' },
					{
						minute: 78,
						type: 'goal',
						player: 'David Otieno',
						assistedBy: 'Michael Oduya',
					},
				],
			},
			{
				id: 't2-sf1',
				round: 'Semi Final',
				date: '2024-02-17',
				homeTeam: "St. Anthony's Kitale",
				awayTeam: 'Nairobi School',
				result: { home: 2, away: 0 },
				venue: "St. Anthony's Main Pitch",
				events: [
					{ minute: 28, type: 'goal', player: 'Samuel Wanjala' },
					{
						minute: 71,
						type: 'goal',
						player: 'Brian Kiprop',
						assistedBy: 'James Kamau',
					},
				],
			},
			{
				id: 't2-sf2',
				round: 'Semi Final',
				date: '2024-02-17',
				homeTeam: 'Kakamega High School',
				awayTeam: 'Friends School Kamusinga',
				result: { home: 2, away: 1 },
				venue: "St. Anthony's Secondary Pitch",
				events: [
					{ minute: 12, type: 'goal', player: 'Opponent' },
					{ minute: 45, type: 'goal', player: 'Opponent' },
					{ minute: 88, type: 'goal', player: 'Opponent' },
				],
			},
			{
				id: 't2-qf1',
				round: 'Quarter Final',
				date: '2024-02-16',
				homeTeam: "St. Anthony's Kitale",
				awayTeam: 'Musingu High School',
				result: { home: 4, away: 0 },
				venue: "St. Anthony's Main Pitch",
				events: [
					{ minute: 8, type: 'goal', player: 'Samuel Wanjala' },
					{
						minute: 25,
						type: 'goal',
						player: 'Samuel Wanjala',
						assistedBy: 'David Otieno',
					},
					{ minute: 45, type: 'goal', player: 'David Otieno' },
					{ minute: 68, type: 'goal', player: 'Michael Oduya' },
				],
			},
		],
	},
	{
		id: 't3',
		name: "St. Anthony's Annual Hockey Tournament",
		year: 2023,
		winner: 'Kakamega High School',
		runnerUp: "St. Anthony's Kitale",
		standings: [
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
		],
		teams: [
			"St. Anthony's Kitale",
			'Friends School Kamusinga',
			'Kakamega High School',
			'Musingu High School',
			'Nairobi School',
		],
		topScorer: { name: 'Timothy Simiyu', goals: 5 },
		mvp: 'Daniel Cheruiyot',
		matches: [
			{
				id: 't3-gf',
				round: 'Final',
				date: '2023-02-19',
				homeTeam: 'Kakamega High School',
				awayTeam: "St. Anthony's Kitale",
				result: { home: 2, away: 1 },
				venue: "St. Anthony's Main Pitch",
				events: [
					{ minute: 22, type: 'goal', player: 'Opponent' },
					{
						minute: 55,
						type: 'goal',
						player: 'Timothy Simiyu',
						assistedBy: 'Daniel Cheruiyot',
					},
					{ minute: 85, type: 'goal', player: 'Opponent' },
				],
			},
			{
				id: 't3-sf1',
				round: 'Semi Final',
				date: '2023-02-18',
				homeTeam: "St. Anthony's Kitale",
				awayTeam: 'Friends School Kamusinga',
				result: { home: 3, away: 0 },
				venue: "St. Anthony's Main Pitch",
				events: [
					{ minute: 18, type: 'goal', player: 'Timothy Simiyu' },
					{ minute: 42, type: 'goal', player: 'Daniel Cheruiyot' },
					{
						minute: 76,
						type: 'goal',
						player: 'Timothy Simiyu',
						assistedBy: 'Patrick Omondi',
					},
				],
			},
		],
	},
	{
		id: 't4',
		name: "St. Anthony's Annual Hockey Tournament",
		year: 2022,
		winner: "St. Anthony's Kitale",
		runnerUp: 'Nairobi School',
		standings: [
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
		],
		teams: [
			"St. Anthony's Kitale",
			'Nairobi School',
			'Kakamega High School',
			'Musingu High School',
		],
		topScorer: { name: 'Patrick Wekesa', goals: 4 },
		mvp: 'Martin Odhiambo',
		matches: [
			{
				id: 't4-gf',
				round: 'Final',
				date: '2022-02-20',
				homeTeam: "St. Anthony's Kitale",
				awayTeam: 'Nairobi School',
				result: { home: 3, away: 2 },
				venue: "St. Anthony's Main Pitch",
				events: [
					{ minute: 5, type: 'goal', player: 'Martin Odhiambo' },
					{ minute: 28, type: 'goal', player: 'Opponent' },
					{
						minute: 45,
						type: 'goal',
						player: 'Patrick Wekesa',
						assistedBy: 'Martin Odhiambo',
					},
					{ minute: 68, type: 'goal', player: 'Opponent' },
					{
						minute: 90,
						type: 'goal',
						player: 'Martin Odhiambo',
						assistedBy: 'Charles Kipchoge',
					},
				],
			},
		],
	},
];

// Products Data
export const products: Product[] = [
	{
		id: 'p1',
		name: 'Titans Home Jersey 2025',
		price: 3500,
		category: 'Jerseys',
		image: '/black-and-gold-sports-jersey-front-view.jpg',
		description: 'Official match day jersey with embroidered crest',
	},
	{
		id: 'p2',
		name: 'Titans Away Jersey 2025',
		price: 3500,
		category: 'Jerseys',
		image: '/white-and-gold-sports-jersey-front-view.jpg',
		description: 'Away kit with breathable fabric technology',
	},
	{
		id: 'p3',
		name: 'Titans Hoodie',
		price: 4500,
		category: 'Hoodies',
		image: '/placeholder.svg?height=400&width=300',
		description: 'Premium cotton hoodie with embroidered logo',
	},
	{
		id: 'p4',
		name: 'Supporters Scarf',
		price: 1500,
		category: 'Scarves',
		image: '/placeholder.svg?height=400&width=300',
		description: 'Knitted scarf with Titans colors and motto',
	},
	{
		id: 'p5',
		name: 'Training Shorts',
		price: 2000,
		category: 'Hockey Gear',
		image: '/placeholder.svg?height=400&width=300',
		description: 'Lightweight training shorts with side pockets',
	},
	{
		id: 'p6',
		name: 'Titans Cap',
		price: 1200,
		category: 'Accessories',
		image: '/placeholder.svg?height=400&width=300',
		description: 'Adjustable cap with embroidered Titans logo',
	},
];

// Timeline Data
export const timeline: TimelineEvent[] = [
	{
		year: 1985,
		title: 'The Beginning',
		description:
			"St. Anthony's Boys Kitale establishes its first hockey team with just 15 players and borrowed equipment.",
	},
	{
		year: 1992,
		title: 'First Regional Title',
		description:
			'The team wins its first Western Region Championship, putting Kitale on the hockey map.',
	},
	{
		year: 1998,
		title: 'National Recognition',
		description:
			'First appearance at the Kenya National Schools Championship. Finished 4th place.',
	},
	{
		year: 2005,
		title: 'Birth of Les Titans',
		description:
			"The team officially adopts the name 'Les Titans' - representing strength, unity, and excellence.",
	},
	{
		year: 2010,
		title: 'First National Championship',
		description:
			'Les Titans win the Kenya National Schools Hockey Championship for the first time in school history.',
	},
	{
		year: 2015,
		title: 'Golden Generation',
		description:
			'Back-to-back national titles with 5 players called up to the Kenya U18 national team.',
	},
	{
		year: 2020,
		title: 'Unbeaten Season',
		description:
			'Historic unbeaten season with 24 wins and 0 losses. Scored 98 goals, conceded only 12.',
	},
	{
		year: 2024,
		title: 'The Legacy Continues',
		description:
			'4th National Championship. Alumni network reaches 200+ members across the globe.',
	},
];
