"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PlayerCard } from "@/components/team/player-card"
import { TeamStats } from "@/components/team/team-stats"
import { currentTeam } from "@/lib/data"
import { Users, Filter, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TeamPage() {
  const captain = currentTeam.find((p) => p.isCaptain)
  const otherPlayers = currentTeam.filter((p) => !p.isCaptain)

  const [selectedForm, setSelectedForm] = useState<string>("all")
  const [isFormSelectorOpen, setIsFormSelectorOpen] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState<string>("all")

  const forms = ["all", ...Array.from(new Set(currentTeam.map((p) => p.form))).sort()]
  const positions = ["all", ...Array.from(new Set(currentTeam.map((p) => p.position)))]

  // Filter players
  const filteredPlayers = otherPlayers.filter((p) => {
    const formMatch = selectedForm === "all" || p.form === selectedForm
    const positionMatch = selectedPosition === "all" || p.position === selectedPosition
    return formMatch && positionMatch
  })

  // Group by position
  const goalkeepers = filteredPlayers.filter((p) => p.position === "Goalkeeper")
  const defenders = filteredPlayers.filter((p) => p.position === "Defender")
  const midfielders = filteredPlayers.filter((p) => p.position === "Midfielder")
  const forwards = filteredPlayers.filter((p) => p.position === "Forward")

  // Get class stats
  const classStats =
    selectedForm !== "all"
      ? {
          players: currentTeam.filter((p) => p.form === selectedForm).length,
          goals: currentTeam.filter((p) => p.form === selectedForm).reduce((sum, p) => sum + p.stats.goals, 0),
          assists: currentTeam.filter((p) => p.form === selectedForm).reduce((sum, p) => sum + p.stats.assists, 0),
        }
      : null

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-card turf-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Users size={20} />
              <span className="text-sm font-medium uppercase tracking-widest">2025 Season</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">THE SQUAD</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the warriors who carry the Titans legacy. United by brotherhood, driven by excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamStats />
        </div>
      </section>

      <section className="py-6 bg-card sticky top-16 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Form/Class Selector */}
            <div className="relative">
              <button
                onClick={() => setIsFormSelectorOpen(!isFormSelectorOpen)}
                className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors min-w-[180px] justify-between"
              >
                <span className="font-display font-bold text-foreground">
                  {selectedForm === "all" ? "All Classes" : selectedForm}
                </span>
                <ChevronDown
                  size={18}
                  className={cn("text-muted-foreground transition-transform", isFormSelectorOpen && "rotate-180")}
                />
              </button>

              {isFormSelectorOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50">
                  {forms.map((form) => (
                    <button
                      key={form}
                      onClick={() => {
                        setSelectedForm(form)
                        setIsFormSelectorOpen(false)
                      }}
                      className={cn(
                        "w-full px-4 py-3 text-left hover:bg-secondary transition-colors",
                        selectedForm === form && "bg-primary/20 text-primary",
                      )}
                    >
                      <span className="font-medium">{form === "all" ? "All Classes" : form}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        ({currentTeam.filter((p) => form === "all" || p.form === form).length} players)
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Position Filter */}
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-muted-foreground" />
              <div className="flex gap-2 flex-wrap justify-center">
                {positions.map((position) => (
                  <button
                    key={position}
                    onClick={() => setSelectedPosition(position)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                      selectedPosition === position
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {position === "all" ? "All" : position}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Class Stats */}
          {classStats && (
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{selectedForm}</h3>
                  <p className="text-sm text-muted-foreground">
                    Class of {currentTeam.find((p) => p.form === selectedForm)?.graduationYear}
                  </p>
                </div>
                <div className="flex gap-6 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-primary">{classStats.players}</p>
                    <p className="text-xs text-muted-foreground">Players</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-primary">{classStats.goals}</p>
                    <p className="text-xs text-muted-foreground">Goals</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-primary">{classStats.assists}</p>
                    <p className="text-xs text-muted-foreground">Assists</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Captain Feature */}
      {captain &&
        (selectedForm === "all" || captain.form === selectedForm) &&
        (selectedPosition === "all" || captain.position === selectedPosition) && (
          <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 text-primary mb-6">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-medium uppercase tracking-widest">Team Captain</span>
              </div>
              <PlayerCard player={captain} variant="featured" />
            </div>
          </section>
        )}

      {/* Goalkeepers */}
      {goalkeepers.length > 0 && (selectedPosition === "all" || selectedPosition === "Goalkeeper") && (
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-primary mb-8">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest">Goalkeepers</span>
              <span className="text-xs text-muted-foreground">({goalkeepers.length})</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {goalkeepers.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Defenders */}
      {defenders.length > 0 && (selectedPosition === "all" || selectedPosition === "Defender") && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-primary mb-8">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest">Defenders</span>
              <span className="text-xs text-muted-foreground">({defenders.length})</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {defenders.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Midfielders */}
      {midfielders.length > 0 && (selectedPosition === "all" || selectedPosition === "Midfielder") && (
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-primary mb-8">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest">Midfielders</span>
              <span className="text-xs text-muted-foreground">({midfielders.length})</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {midfielders.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Forwards */}
      {forwards.length > 0 && (selectedPosition === "all" || selectedPosition === "Forward") && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-primary mb-8">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest">Forwards</span>
              <span className="text-xs text-muted-foreground">({forwards.length})</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {forwards.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPlayers.length === 0 && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">No players match the selected filters.</p>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
