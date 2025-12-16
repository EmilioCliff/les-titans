"use client"

import type { Match } from "@/lib/data"
import { X, MapPin, Calendar, Trophy, Target, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface MatchDetailModalProps {
  match: Match
  onClose: () => void
}

export function MatchDetailModal({ match, onClose }: MatchDetailModalProps) {
  if (!match.result) return null

  const matchDate = new Date(match.date)
  const isWin = match.isHome ? match.result.home > match.result.away : match.result.away > match.result.home
  const isDraw = match.result.home === match.result.away

  const titanGoals = match.events?.filter((e) => e.type === "goal" && e.player !== "Opponent") || []
  const opponentGoals = match.events?.filter((e) => e.type === "goal" && e.player === "Opponent") || []

  // Get unique scorers with goal counts
  const scorerMap = titanGoals.reduce(
    (acc, event) => {
      acc[event.player] = (acc[event.player] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Get unique assisters with assist counts
  const assistMap = titanGoals.reduce(
    (acc, event) => {
      if (event.assistedBy) {
        acc[event.assistedBy] = (acc[event.assistedBy] || 0) + 1
      }
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "px-3 py-1 rounded-sm text-xs font-bold",
                isWin && "bg-green-500/20 text-green-400",
                isDraw && "bg-primary/20 text-primary",
                !isWin && !isDraw && "bg-red-500/20 text-red-400",
              )}
            >
              {isWin ? "VICTORY" : isDraw ? "DRAW" : "DEFEAT"}
            </div>
            {match.tournament && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Trophy size={12} />
                <span>{match.tournament}</span>
              </div>
            )}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-lg transition-colors" aria-label="Close">
            <X size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Score */}
        <div className="p-6 text-center border-b border-border">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar size={14} />
            <span>
              {matchDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="font-display text-primary-foreground text-2xl font-bold">LT</span>
              </div>
              <p className="font-display font-bold text-foreground">Les Titans</p>
              <p className="text-xs text-muted-foreground">{match.isHome ? "Home" : "Away"}</p>
            </div>

            <div className="px-6 py-4 bg-secondary rounded-xl">
              <span className="font-display text-5xl font-bold text-foreground">
                {match.isHome ? match.result.home : match.result.away} -{" "}
                {match.isHome ? match.result.away : match.result.home}
              </span>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="font-display text-muted-foreground text-lg font-bold">
                  {match.opponent
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)}
                </span>
              </div>
              <p className="font-display font-bold text-foreground">{match.opponent}</p>
              <p className="text-xs text-muted-foreground">{match.isHome ? "Away" : "Home"}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mt-4 text-sm text-muted-foreground">
            <MapPin size={14} />
            <span>{match.venue}</span>
          </div>
        </div>

        {/* Match Stats */}
        {(match.possession || match.shots) && (
          <div className="p-6 border-b border-border">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 text-center">
              Match Statistics
            </h4>
            <div className="space-y-4">
              {match.possession && (
                <div className="flex items-center gap-4">
                  <span className="w-12 text-right font-display font-bold text-primary">{match.possession}%</span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${match.possession}%` }} />
                  </div>
                  <span className="w-12 font-display font-bold text-muted-foreground">{100 - match.possession}%</span>
                  <span className="w-24 text-xs text-muted-foreground">Possession</span>
                </div>
              )}
              {match.shots && (
                <div className="flex items-center gap-4">
                  <span className="w-12 text-right font-display font-bold text-primary">{match.shots}</span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(match.shots / (match.shots + 8)) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 font-display font-bold text-muted-foreground">8</span>
                  <span className="w-24 text-xs text-muted-foreground">Shots</span>
                </div>
              )}
              {match.shotsOnTarget && (
                <div className="flex items-center gap-4">
                  <span className="w-12 text-right font-display font-bold text-primary">{match.shotsOnTarget}</span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(match.shotsOnTarget / (match.shotsOnTarget + 4)) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 font-display font-bold text-muted-foreground">4</span>
                  <span className="w-24 text-xs text-muted-foreground">On Target</span>
                </div>
              )}
              {match.corners && (
                <div className="flex items-center gap-4">
                  <span className="w-12 text-right font-display font-bold text-primary">{match.corners}</span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(match.corners / (match.corners + 3)) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 font-display font-bold text-muted-foreground">3</span>
                  <span className="w-24 text-xs text-muted-foreground">Corners</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Goal Scorers & Assists */}
        {match.events && match.events.length > 0 && (
          <div className="p-6 border-b border-border">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Scorers */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target size={16} className="text-primary" />
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Goal Scorers</h4>
                </div>
                <div className="space-y-2">
                  {Object.entries(scorerMap).map(([player, count]) => (
                    <div key={player} className="flex items-center justify-between p-2 bg-secondary rounded-lg">
                      <span className="font-medium text-foreground">{player}</span>
                      <span className="text-primary font-display font-bold">{count > 1 ? `${count} ⚽` : "⚽"}</span>
                    </div>
                  ))}
                  {Object.keys(scorerMap).length === 0 && (
                    <p className="text-sm text-muted-foreground">No goals scored</p>
                  )}
                </div>
              </div>

              {/* Assists */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users size={16} className="text-primary" />
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Assists</h4>
                </div>
                <div className="space-y-2">
                  {Object.entries(assistMap).map(([player, count]) => (
                    <div key={player} className="flex items-center justify-between p-2 bg-secondary rounded-lg">
                      <span className="font-medium text-foreground">{player}</span>
                      <span className="text-primary font-display font-bold">{count > 1 ? `${count} 🅰️` : "🅰️"}</span>
                    </div>
                  ))}
                  {Object.keys(assistMap).length === 0 && (
                    <p className="text-sm text-muted-foreground">No assists recorded</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Timeline */}
        {match.events && match.events.length > 0 && (
          <div className="p-6">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Match Timeline</h4>
            <div className="space-y-3">
              {match.events
                .sort((a, b) => a.minute - b.minute)
                .map((event, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center gap-4 p-3 rounded-lg",
                      event.player !== "Opponent" ? "bg-primary/10" : "bg-secondary",
                    )}
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <span className="font-mono text-lg font-bold text-primary">{event.minute}'</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">
                          {event.type === "goal"
                            ? "⚽"
                            : event.type === "yellow"
                              ? "🟨"
                              : event.type === "red"
                                ? "🟥"
                                : "🅿️"}
                        </span>
                        <span className="font-medium text-foreground">
                          {event.player === "Opponent" ? match.opponent : event.player}
                        </span>
                      </div>
                      {event.assistedBy && (
                        <p className="text-sm text-muted-foreground mt-1">Assisted by {event.assistedBy}</p>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {event.player !== "Opponent" ? "Les Titans" : match.opponent}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Close Button */}
        <div className="p-4 border-t border-border">
          <button
            onClick={onClose}
            className="w-full py-3 bg-secondary hover:bg-secondary/80 rounded-lg font-display font-bold text-foreground transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
