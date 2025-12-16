"use client"

import type { TournamentMatch } from "@/lib/data"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface TournamentMatchDetailProps {
  match: TournamentMatch
}

export function TournamentMatchDetail({ match }: TournamentMatchDetailProps) {
  const homeWin = match.result.home > match.result.away
  const awayWin = match.result.away > match.result.home

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-primary/10 px-4 py-2 flex items-center justify-between">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">{match.round}</span>
        <span className="text-xs text-muted-foreground">{match.date}</span>
      </div>

      {/* Score */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <p className={cn("font-display text-lg font-bold mb-2", homeWin ? "text-primary" : "text-foreground")}>
              {match.homeTeam}
            </p>
            {homeWin && <span className="text-xs text-primary">WINNER</span>}
          </div>

          <div className="px-8 py-4 bg-secondary rounded-lg">
            <span className="font-display text-4xl font-bold text-foreground">
              {match.result.home} - {match.result.away}
            </span>
          </div>

          <div className="flex-1 text-center">
            <p className={cn("font-display text-lg font-bold mb-2", awayWin ? "text-primary" : "text-foreground")}>
              {match.awayTeam}
            </p>
            {awayWin && <span className="text-xs text-primary">WINNER</span>}
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
          <MapPin size={14} />
          <span>{match.venue}</span>
        </div>
      </div>

      {/* Match Events */}
      {match.events && match.events.length > 0 && (
        <div className="border-t border-border p-6">
          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Match Events</h4>
          <div className="space-y-3">
            {match.events.map((event, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-4 py-2 px-3 rounded-lg",
                  event.player !== "Opponent" ? "bg-primary/10" : "bg-secondary",
                )}
              >
                <span className="font-mono text-sm text-primary w-10">{event.minute}'</span>
                <span className="text-lg">
                  {event.type === "goal" ? "⚽" : event.type === "yellow" ? "🟨" : event.type === "red" ? "🟥" : "🅿️"}
                </span>
                <div className="flex-1">
                  <span className="font-medium text-foreground">{event.player}</span>
                  {event.assistedBy && (
                    <span className="text-sm text-muted-foreground"> (assist: {event.assistedBy})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
