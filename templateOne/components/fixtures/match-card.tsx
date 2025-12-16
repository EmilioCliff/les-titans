"use client"

import type { Match } from "@/lib/data"
import { MapPin, Calendar, Trophy, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MatchCardProps {
  match: Match
  variant?: "upcoming" | "result"
  featured?: boolean
  onClick?: () => void // Added click handler for modal
}

export function MatchCard({ match, variant = "upcoming", featured = false, onClick }: MatchCardProps) {
  const matchDate = new Date(match.date)

  if (variant === "result" && match.result) {
    const isWin = match.isHome ? match.result.home > match.result.away : match.result.away > match.result.home
    const isDraw = match.result.home === match.result.away
    const hasEvents = match.events && match.events.length > 0

    return (
      <button
        onClick={onClick}
        className={cn(
          "w-full bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all text-left",
          hasEvents && "cursor-pointer hover:ring-2 hover:ring-primary/20",
        )}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="text-muted-foreground" size={14} />
            <span className="text-xs text-muted-foreground">
              {matchDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "px-2 py-0.5 text-xs font-bold rounded-sm",
                isWin && "bg-green-500/20 text-green-400",
                isDraw && "bg-primary/20 text-primary",
                !isWin && !isDraw && "bg-red-500/20 text-red-400",
              )}
            >
              {isWin ? "WIN" : isDraw ? "DRAW" : "LOSS"}
            </span>
            {hasEvents && <ChevronRight size={14} className="text-muted-foreground" />}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="font-display font-bold text-foreground text-sm">Les Titans</p>
          </div>
          <div className="px-4 py-2 bg-secondary rounded-lg text-center">
            <span className="font-display text-xl font-bold text-foreground">
              {match.isHome ? match.result.home : match.result.away} -{" "}
              {match.isHome ? match.result.away : match.result.home}
            </span>
          </div>
          <div className="flex-1 text-right">
            <p className="font-display font-bold text-foreground text-sm">{match.opponent}</p>
          </div>
        </div>

        {match.events && match.events.filter((e) => e.type === "goal" && e.player !== "Opponent").length > 0 && (
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground">
              <span className="text-primary">⚽</span>{" "}
              {match.events
                .filter((e) => e.type === "goal" && e.player !== "Opponent")
                .map((e) => e.player)
                .join(", ")}
            </p>
          </div>
        )}

        {match.tournament && (
          <div className="flex items-center justify-center gap-1 mt-3 text-xs text-muted-foreground">
            <Trophy size={12} />
            <span>{match.tournament}</span>
          </div>
        )}
      </button>
    )
  }

  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors",
        featured && "border-primary/50 ring-2 ring-primary/20",
      )}
    >
      {featured && (
        <div className="bg-primary px-4 py-2 text-center">
          <span className="text-xs font-bold text-primary-foreground uppercase tracking-wider">Next Match</span>
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="text-primary" size={16} />
            <span className="text-sm font-medium text-foreground">
              {matchDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
            </span>
          </div>
          {match.tournament && (
            <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-sm">
              {match.tournament}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-center flex-1">
            <div className="w-14 h-14 bg-primary rounded-sm flex items-center justify-center mx-auto mb-2">
              <span className="font-display text-primary-foreground text-xl font-bold">LT</span>
            </div>
            <p className="font-display text-sm font-bold text-foreground">Les Titans</p>
            <p className="text-xs text-muted-foreground">{match.isHome ? "Home" : "Away"}</p>
          </div>

          <div className="px-6 py-3">
            <p className="font-display text-2xl font-bold text-muted-foreground">VS</p>
          </div>

          <div className="text-center flex-1">
            <div className="w-14 h-14 bg-secondary rounded-sm flex items-center justify-center mx-auto mb-2">
              <span className="font-display text-secondary-foreground text-sm font-bold">
                {match.opponent
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 3)}
              </span>
            </div>
            <p className="font-display text-sm font-bold text-foreground">{match.opponent}</p>
            <p className="text-xs text-muted-foreground">{match.isHome ? "Away" : "Home"}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 pt-3 border-t border-border text-sm text-muted-foreground">
          <MapPin size={14} />
          <span>{match.venue}</span>
        </div>
      </div>
    </div>
  )
}
