'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/team', label: 'The Squad' },
	{ href: '/alumni', label: 'Old Boys' },
	{ href: '/coach', label: 'Coach' },
	{ href: '/history', label: 'History' },
	{ href: '/tournament', label: 'Tournament' },
	{ href: '/fixtures', label: 'Fixtures' },
	{ href: '/merchandise', label: 'Shop' },
	{ href: '/support', label: 'Support' },
];

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3">
						<div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
							<span className="font-display text-primary-foreground text-xl font-bold">
								LT
							</span>
						</div>
						<div className="hidden sm:block">
							<p className="font-display text-lg font-bold tracking-wider text-foreground">
								LES TITANS
							</p>
							<p className="text-[10px] tracking-widest text-muted-foreground uppercase">
								St. Anthony's Kitale
							</p>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center gap-1">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="lg:hidden p-2 text-foreground"
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div
				className={cn(
					'lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden',
					isOpen ? 'max-h-screen' : 'max-h-0',
				)}
			>
				<div className="px-4 py-4 space-y-1">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setIsOpen(false)}
							className="block px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors uppercase tracking-wider"
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
