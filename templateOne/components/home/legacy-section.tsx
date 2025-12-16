"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { alumni } from "@/lib/data"
import { cn } from "@/lib/utils"

export function LegacySection() {
  const alumniWithTestimonials = alumni.filter((a) => a.testimonial)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % alumniWithTestimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, alumniWithTestimonials.length])

  const currentTestimonial = alumniWithTestimonials[activeTestimonialIndex]

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveTestimonialIndex((prev) => (prev + 1) % alumniWithTestimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveTestimonialIndex((prev) => (prev - 1 + alumniWithTestimonials.length) % alumniWithTestimonials.length)
  }

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.1) 100px, rgba(255,255,255,0.1) 200px)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest">From Old Boys to Titans</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">The Legacy Lives On</h2>
          </div>
          <Button asChild variant="outline" className="font-display uppercase tracking-wider w-fit bg-transparent">
            <Link href="/alumni">
              All Alumni <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 md:p-8 mb-8">
          <div className="grid lg:grid-cols-5 gap-6 items-center">
            {/* Testimonial Content */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <Quote className="text-primary mb-4" size={32} />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 min-h-[80px]">
                "{currentTestimonial.testimonial}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-foreground">{currentTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Class of {currentTestimonial.graduationYear} • {currentTestimonial.position}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} className="text-foreground" />
                </button>
                <div className="flex gap-2">
                  {alumniWithTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false)
                        setActiveTestimonialIndex(index)
                      }}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        index === activeTestimonialIndex
                          ? "w-6 bg-primary"
                          : "bg-muted-foreground/30 hover:bg-primary/50",
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} className="text-foreground" />
                </button>
              </div>
            </div>

            {/* Alumni Image Grid */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-3">
                {alumniWithTestimonials.map((alum, index) => (
                  <button
                    key={alum.id}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setActiveTestimonialIndex(index)
                    }}
                    className={cn(
                      "relative aspect-square rounded-lg overflow-hidden transition-all duration-300",
                      index === activeTestimonialIndex
                        ? "ring-2 ring-primary scale-105 z-10"
                        : "opacity-60 hover:opacity-100",
                    )}
                  >
                    <Image src={alum.image || "/placeholder.svg"} alt={alum.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-xs font-medium text-foreground truncate">{alum.name}</p>
                      <p className="text-[10px] text-muted-foreground">Class of {alum.graduationYear}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors cursor-default">
            <p className="font-display text-3xl sm:text-4xl font-bold text-primary">200+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Alumni Members</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors cursor-default">
            <p className="font-display text-3xl sm:text-4xl font-bold text-primary">15</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Countries</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors cursor-default">
            <p className="font-display text-3xl sm:text-4xl font-bold text-primary">8</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Pro Players</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors cursor-default">
            <p className="font-display text-3xl sm:text-4xl font-bold text-primary">40</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Years Strong</p>
          </div>
        </div>
      </div>
    </section>
  )
}
