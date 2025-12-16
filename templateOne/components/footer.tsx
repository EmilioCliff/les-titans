import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-display text-primary-foreground text-2xl font-bold">LT</span>
              </div>
            </div>
            <p className="font-display text-xl font-bold tracking-wider text-foreground mb-1">LES TITANS</p>
            <p className="text-sm text-muted-foreground mb-4">St. Anthony's Boys Kitale</p>
            <p className="text-xs text-muted-foreground italic">"Pride. Competition. Brotherhood."</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider uppercase mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["The Squad", "Old Boys", "History", "Fixtures"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tournament */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider uppercase mb-4 text-foreground">Tournament</h4>
            <ul className="space-y-2">
              {["Overview", "Schedule", "Teams", "Register"].map((link) => (
                <li key={link}>
                  <Link
                    href="/tournament"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider uppercase mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">info@lestitans.co.ke</p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2025 Les Titans Hockey Team. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">From Old Boys to Titans</p>
        </div>
      </div>
    </footer>
  )
}
