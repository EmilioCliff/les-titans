import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { currentTeam } from "@/lib/data"

export function FeaturedPlayer() {
  // Feature the captain or top scorer
  const featured = currentTeam.find((p) => p.isCaptain) || currentTeam[0]

  return (
    <section className="py-20 bg-card turf-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Player Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 -skew-y-3 rounded-lg" />
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image src={featured.image || "/placeholder.svg"} alt={featured.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Jersey Number */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-display text-primary-foreground text-3xl font-bold">{featured.jerseyNumber}</span>
              </div>
            </div>
          </div>

          {/* Player Info */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest">Featured Player</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2">
              {featured.name.split(" ")[0]}
            </h2>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stroke text-primary mb-6">
              {featured.name.split(" ").slice(1).join(" ")}
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-sm">
                {featured.position}
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-sm">
                {featured.form}
              </span>
              {featured.isCaptain && (
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-sm border border-primary/30">
                  Captain
                </span>
              )}
            </div>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{featured.bio}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="font-display text-3xl font-bold text-primary">{featured.stats.goals}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Goals</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="font-display text-3xl font-bold text-primary">{featured.stats.assists}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Assists</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="font-display text-3xl font-bold text-primary">{featured.stats.caps}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Caps</p>
              </div>
            </div>

            <Button asChild className="font-display uppercase tracking-wider">
              <Link href="/team">
                View Full Squad <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
