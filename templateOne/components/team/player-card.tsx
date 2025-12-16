import Image from "next/image"
import type { Player } from "@/lib/data"

interface PlayerCardProps {
  player: Player
  variant?: "default" | "featured"
}

export function PlayerCard({ player, variant = "default" }: PlayerCardProps) {
  if (variant === "featured") {
    return (
      <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[3/4] md:aspect-auto">
            <Image src={player.image || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r" />

            {/* Jersey Number */}
            <div className="absolute top-4 left-4 w-14 h-14 bg-primary rounded-sm flex items-center justify-center">
              <span className="font-display text-primary-foreground text-2xl font-bold">{player.jerseyNumber}</span>
            </div>

            {player.isCaptain && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded-sm uppercase tracking-wider">
                Captain
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-sm">
                {player.position}
              </span>
              <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-sm">
                {player.form}
              </span>
            </div>

            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">{player.name}</h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{player.bio}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-secondary rounded-lg">
                <p className="font-display text-2xl font-bold text-primary">{player.stats.goals}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Goals</p>
              </div>
              <div className="text-center p-3 bg-secondary rounded-lg">
                <p className="font-display text-2xl font-bold text-primary">{player.stats.assists}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Assists</p>
              </div>
              <div className="text-center p-3 bg-secondary rounded-lg">
                <p className="font-display text-2xl font-bold text-primary">{player.stats.caps}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Caps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all">
      {/* Image Container */}
      <div className="relative aspect-[3/4]">
        <Image
          src={player.image || "/placeholder.svg"}
          alt={player.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Jersey Number */}
        <div className="absolute top-3 right-3 w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
          <span className="font-display text-primary-foreground text-lg font-bold">{player.jerseyNumber}</span>
        </div>

        {player.isCaptain && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground text-[10px] font-bold rounded-sm uppercase tracking-wider">
            C
          </div>
        )}

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-medium rounded-sm">
              {player.position}
            </span>
            <span className="px-2 py-0.5 bg-secondary/80 text-secondary-foreground text-[10px] font-medium rounded-sm">
              {player.form}
            </span>
          </div>
          <h3 className="font-display text-lg font-bold text-foreground">{player.name}</h3>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-3 divide-x divide-border bg-secondary/50">
        <div className="p-3 text-center">
          <p className="font-display text-lg font-bold text-primary">{player.stats.goals}</p>
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Goals</p>
        </div>
        <div className="p-3 text-center">
          <p className="font-display text-lg font-bold text-primary">{player.stats.assists}</p>
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Assists</p>
        </div>
        <div className="p-3 text-center">
          <p className="font-display text-lg font-bold text-primary">{player.stats.caps}</p>
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Caps</p>
        </div>
      </div>
    </div>
  )
}
