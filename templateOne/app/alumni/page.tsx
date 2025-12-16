"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AlumniCard } from "@/components/alumni/alumni-card"
import { alumni } from "@/lib/data"
import { GraduationCap, Quote, Globe, Users, Trophy, ChevronDown, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AlumniPage() {
  const alumniByYear = alumni.reduce(
    (acc, alum) => {
      const year = alum.graduationYear
      if (!acc[year]) acc[year] = []
      acc[year].push(alum)
      return acc
    },
    {} as Record<number, typeof alumni>,
  )

  const years = Object.keys(alumniByYear)
    .map(Number)
    .sort((a, b) => b - a)

  const [selectedYear, setSelectedYear] = useState<number | "all">("all")
  const [isYearSelectorOpen, setIsYearSelectorOpen] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState<string>("all")

  const positions = ["all", ...Array.from(new Set(alumni.map((a) => a.position)))]

  // Filter alumni based on selection
  const filteredAlumni =
    selectedYear === "all"
      ? alumni.filter((a) => selectedPosition === "all" || a.position === selectedPosition)
      : alumniByYear[selectedYear]?.filter((a) => selectedPosition === "all" || a.position === selectedPosition) || []

  const displayYears = selectedYear === "all" ? years : [selectedYear]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-card turf-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <GraduationCap size={20} />
              <span className="text-sm font-medium uppercase tracking-widest">Old Boys Network</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              FROM OLD BOYS
            </h1>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">TO TITANS</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Once a Titan, always a Titan. Our alumni carry the spirit of excellence wherever they go - from university
              pitches to professional leagues and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Users className="mx-auto text-primary mb-2" size={24} />
              <p className="font-display text-3xl font-bold text-foreground">200+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Alumni Members</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Globe className="mx-auto text-primary mb-2" size={24} />
              <p className="font-display text-3xl font-bold text-foreground">15</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Countries</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Trophy className="mx-auto text-primary mb-2" size={24} />
              <p className="font-display text-3xl font-bold text-foreground">8</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Pro Players</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <GraduationCap className="mx-auto text-primary mb-2" size={24} />
              <p className="font-display text-3xl font-bold text-foreground">40</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years Strong</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-card sticky top-16 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Year Selector */}
            <div className="relative">
              <button
                onClick={() => setIsYearSelectorOpen(!isYearSelectorOpen)}
                className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors min-w-[200px] justify-between"
              >
                <span className="font-display font-bold text-foreground">
                  {selectedYear === "all" ? "All Classes" : `Class of ${selectedYear}`}
                </span>
                <ChevronDown
                  size={18}
                  className={cn("text-muted-foreground transition-transform", isYearSelectorOpen && "rotate-180")}
                />
              </button>

              {isYearSelectorOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50">
                  <button
                    onClick={() => {
                      setSelectedYear("all")
                      setIsYearSelectorOpen(false)
                    }}
                    className={cn(
                      "w-full px-4 py-3 text-left hover:bg-secondary transition-colors",
                      selectedYear === "all" && "bg-primary/20 text-primary",
                    )}
                  >
                    <span className="font-medium">All Classes</span>
                    <span className="text-sm text-muted-foreground ml-2">({alumni.length} members)</span>
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year)
                        setIsYearSelectorOpen(false)
                      }}
                      className={cn(
                        "w-full px-4 py-3 text-left hover:bg-secondary transition-colors",
                        selectedYear === year && "bg-primary/20 text-primary",
                      )}
                    >
                      <span className="font-medium">Class of {year}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        ({alumniByYear[year]?.length || 0} members)
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
                    {position === "all" ? "All Positions" : position}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Class Info */}
          {selectedYear !== "all" && (
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Class of {selectedYear}</h3>
                  <p className="text-sm text-muted-foreground">
                    {filteredAlumni.length} {selectedPosition !== "all" ? selectedPosition + "s" : "members"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Combined Stats</p>
                  <p className="font-display font-bold text-primary">
                    {filteredAlumni.reduce((sum, a) => sum + (a.stats?.goals || 0), 0)} Goals •{" "}
                    {filteredAlumni.reduce((sum, a) => sum + (a.stats?.assists || 0), 0)} Assists
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="mx-auto text-primary mb-6" size={48} />
          <blockquote className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-relaxed">
            "The bonds we formed on that pitch, the discipline we learned, the brotherhood we built - these are the
            foundations of who we are today."
          </blockquote>
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">Daniel Cheruiyot</span> • Class of 2023 • Professional Player,
            Butali Sugar Warriors
          </p>
        </div>
      </section>

      {displayYears.map((year, index) => {
        const yearAlumni =
          selectedYear === "all"
            ? alumniByYear[year]?.filter((a) => selectedPosition === "all" || a.position === selectedPosition) || []
            : filteredAlumni

        if (yearAlumni.length === 0) return null

        return (
          <section key={year} className={`py-12 ${index % 2 === 0 ? "bg-card" : "bg-background"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {selectedYear === "all" && (
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <span className="font-display text-primary-foreground text-2xl font-bold">
                      {year.toString().slice(2)}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold text-foreground">Class of {year}</h2>
                    <p className="text-muted-foreground">
                      {yearAlumni.length} members • {yearAlumni.reduce((sum, a) => sum + (a.stats?.goals || 0), 0)}{" "}
                      career goals
                    </p>
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {yearAlumni.map((alum) => (
                  <AlumniCard key={alum.id} alumni={alum} showStats />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Join CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Are You an Old Boy?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our alumni network and stay connected with your Titans family. Share your journey, mentor the next
            generation, and support the legacy.
          </p>
          <button className="px-8 py-3 bg-primary-foreground text-primary font-display font-bold uppercase tracking-wider rounded-lg hover:bg-primary-foreground/90 transition-colors">
            Join Alumni Network
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
