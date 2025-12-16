"use client"

import { useState } from "react"
import Image from "next/image"
import type { Alumni } from "@/lib/data"
import { Award, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AlumniCardProps {
  alumni: Alumni
  variant?: "default" | "spotlight"
  showStats?: boolean // Added stats display option
}

export function AlumniCard({ alumni, variant = "default", showStats = false }: AlumniCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (variant === "spotlight") {
    return (
      <div className="bg-primary/10 border border-primary/20 rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto">
            <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Info */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Award size={18} />
              <span className="text-sm font-medium uppercase tracking-widest">Alumni Spotlight</span>
            </div>

            <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">{alumni.name}</h3>
            <p className="text-muted-foreground mb-4">
              Class of {alumni.graduationYear} • {alumni.position}
            </p>

            {alumni.stats && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-secondary rounded-lg p-3 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{alumni.stats.goals}</p>
                  <p className="text-xs text-muted-foreground">Goals</p>
                </div>
                <div className="bg-secondary rounded-lg p-3 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{alumni.stats.assists}</p>
                  <p className="text-xs text-muted-foreground">Assists</p>
                </div>
                <div className="bg-secondary rounded-lg p-3 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{alumni.stats.caps}</p>
                  <p className="text-xs text-muted-foreground">Caps</p>
                </div>
              </div>
            )}

            <div className="space-y-3 mb-6">
              {alumni.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-sm text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Current Path</p>
              <p className="text-foreground font-medium">{alumni.currentPath}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all",
        isExpanded && "ring-2 ring-primary/30",
      )}
    >
      {/* Image */}
      <div className="relative aspect-[3/4]">
        <Image
          src={alumni.image || "/placeholder.svg"}
          alt={alumni.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Year Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-sm">
          {alumni.graduationYear}
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-lg font-bold text-foreground mb-1">{alumni.name}</h3>
          <p className="text-xs text-primary">{alumni.position}</p>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 space-y-3">
        {showStats && alumni.stats && (
          <div className="grid grid-cols-3 gap-2 pb-3 border-b border-border">
            <div className="text-center">
              <p className="font-display text-lg font-bold text-primary">{alumni.stats.goals}</p>
              <p className="text-[10px] text-muted-foreground uppercase">Goals</p>
            </div>
            <div className="text-center">
              <p className="font-display text-lg font-bold text-primary">{alumni.stats.assists}</p>
              <p className="text-[10px] text-muted-foreground uppercase">Assists</p>
            </div>
            <div className="text-center">
              <p className="font-display text-lg font-bold text-primary">{alumni.stats.caps}</p>
              <p className="text-[10px] text-muted-foreground uppercase">Caps</p>
            </div>
          </div>
        )}

        {/* Achievements */}
        <div className="space-y-1.5">
          {alumni.achievements.slice(0, isExpanded ? undefined : 2).map((achievement, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              <span className="text-xs text-muted-foreground">{achievement}</span>
            </div>
          ))}
        </div>

        {/* Current Path */}
        <div className="pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">{alumni.currentPath}</p>
        </div>

        {(alumni.achievements.length > 2 || alumni.testimonial) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-1 pt-2 text-xs text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? "Show Less" : "Show More"}
            <ChevronDown size={14} className={cn("transition-transform", isExpanded && "rotate-180")} />
          </button>
        )}

        {/* Expanded Content */}
        {isExpanded && alumni.testimonial && (
          <div className="pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground italic">"{alumni.testimonial}"</p>
          </div>
        )}
      </div>
    </div>
  )
}
