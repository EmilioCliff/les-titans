import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Oswald, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
});

export const metadata: Metadata = {
	title: "Les Titans | St. Anthony's Kitale Hockey Team",
	description:
		"Official website of Les Titans - St. Anthony's Boys Kitale Field Hockey Team. Pride, Competition, Brotherhood.",
	generator: 'v0.app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${inter.variable} ${oswald.variable} ${geistMono.variable} font-sans antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
