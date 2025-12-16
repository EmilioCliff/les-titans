import { currentTeam } from "@/lib/data"

export function TeamStats() {
  const totalGoals = currentTeam.reduce((acc, player) => acc + player.stats.goals, 0)
  const totalAssists = currentTeam.reduce((acc, player) => acc + player.stats.assists, 0)
  const totalCaps = currentTeam.reduce((acc, player) => acc + player.stats.caps, 0)

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
        2025 Season Stats
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="text-center">
          <p className="font-display text-4xl sm:text-5xl font-bold text-primary">{totalGoals}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Total Goals</p>
        </div>
        <div className="text-center">
          <p className="font-display text-4xl sm:text-5xl font-bold text-primary">{totalAssists}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Total Assists</p>
        </div>
        <div className="text-center">
          <p className="font-display text-4xl sm:text-5xl font-bold text-foreground">{currentTeam.length}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Squad Size</p>
        </div>
        <div className="text-center">
          <p className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            {Math.round(totalCaps / currentTeam.length)}
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Avg. Caps</p>
        </div>
      </div>
    </div>
  )
}
