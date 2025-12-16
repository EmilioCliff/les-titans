import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(0,0,0,0.1) 50px, rgba(0,0,0,0.1) 100px)`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heart className="mx-auto text-primary-foreground/80 mb-6" size={48} />

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
          Support The Legacy
        </h2>

        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Whether you're an alumni, parent, or supporter - your contribution helps us build champions on and off the
          field. Join the Titans family today.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="font-display uppercase tracking-wider">
            <Link href="/support">
              Become a Supporter <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-display uppercase tracking-wider bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link href="/alumni">Join Alumni Network</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
