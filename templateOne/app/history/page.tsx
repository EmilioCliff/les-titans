import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Timeline } from "@/components/history/timeline"
import { timeline } from "@/lib/data"
import { History, Trophy, Flag, Star } from "lucide-react"

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-card turf-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <History size={20} />
              <span className="text-sm font-medium uppercase tracking-widest">Our Legacy</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              40 YEARS OF
            </h1>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">EXCELLENCE</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to national champions. The story of Les Titans is one of perseverance, unity, and
              relentless pursuit of greatness.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones Stats */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Trophy className="mx-auto text-primary mb-3" size={32} />
              <p className="font-display text-4xl font-bold text-foreground">4</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">National Championships</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Flag className="mx-auto text-primary mb-3" size={32} />
              <p className="font-display text-4xl font-bold text-foreground">12</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Regional Titles</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Star className="mx-auto text-primary mb-3" size={32} />
              <p className="font-display text-4xl font-bold text-foreground">15</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">National Team Players</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <History className="mx-auto text-primary mb-3" size={32} />
              <p className="font-display text-4xl font-bold text-foreground">40</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Years of History</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Story */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">The Titans Story</h2>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              In 1985, a group of 15 passionate students at St. Anthony's Boys Kitale formed what would become one of
              Kenya's most storied hockey programs. With borrowed equipment and an unshakeable dream, they laid the
              foundation for what we know today as Les Titans.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The name "Les Titans" was officially adopted in 2005, symbolizing the team's transformation from a local
              school team to a powerhouse of Kenyan school hockey. The French article "Les" pays homage to the
              international nature of the sport, while "Titans" represents the mythological giants - powerful,
              unstoppable, legendary.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, the Titans family spans four decades, 200+ alumni across 15 countries, and a legacy that continues
              to inspire new generations of players who wear the black and gold with pride.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest">Timeline</span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Defining Moments</h2>
          </div>

          <Timeline events={timeline} />
        </div>
      </section>

      {/* Honor Roll */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Hall of Honor</h2>
            <p className="text-muted-foreground">National Championships won by Les Titans</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[2010, 2015, 2020, 2024].map((year, index) => (
              <div
                key={year}
                className="bg-secondary/50 border border-primary/30 rounded-lg p-6 text-center hover:bg-primary/10 transition-colors"
              >
                <Trophy className="mx-auto text-primary mb-4" size={40} />
                <p className="font-display text-4xl font-bold text-primary">{year}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {index === 0 && "First National Title"}
                  {index === 1 && "Golden Generation"}
                  {index === 2 && "Unbeaten Season"}
                  {index === 3 && "The Resurgence"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
