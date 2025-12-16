import Link from "next/link"
import { ArrowRight, Trophy, Users, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { tournaments } from "@/lib/data"

export function TournamentPreview() {
  const currentTournament = tournaments[0]
  const pastWinners = tournaments.filter((t) => t.winner).slice(0, 3)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Trophy size={20} />
            <span className="text-sm font-medium uppercase tracking-widest">Annual Tournament</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">The Battleground</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The biggest inter-school hockey event in Western Kenya. Where champions are made and legends are born.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Tournament */}
          <div className="lg:col-span-2 bg-card border border-border rounded-lg overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-primary/20 to-transparent">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-6xl sm:text-7xl font-bold text-primary">{currentTournament.year}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">Edition</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{currentTournament.name}</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Users className="text-primary" size={20} />
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">{currentTournament.teams.length}</p>
                    <p className="text-xs text-muted-foreground">Teams Registered</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <CalendarDays className="text-primary" size={20} />
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">Feb 2025</p>
                    <p className="text-xs text-muted-foreground">Tournament Date</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {currentTournament.teams.slice(0, 4).map((team) => (
                  <span
                    key={team}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                  >
                    {team}
                  </span>
                ))}
                {currentTournament.teams.length > 4 && (
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    +{currentTournament.teams.length - 4} more
                  </span>
                )}
              </div>

              <Button asChild className="w-full font-display uppercase tracking-wider">
                <Link href="/tournament">
                  View Tournament Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Past Winners */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wider">Past Champions</h3>

            {pastWinners.map((tournament, index) => (
              <div
                key={tournament.id}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-sm flex items-center justify-center">
                  <Trophy className={index === 0 ? "text-primary" : "text-muted-foreground"} size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-display text-sm font-bold text-foreground">{tournament.winner}</p>
                  <p className="text-xs text-muted-foreground">{tournament.year} Champion</p>
                </div>
              </div>
            ))}

            <Button asChild variant="outline" className="w-full font-display uppercase tracking-wider bg-transparent">
              <Link href="/tournament">Full History</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
