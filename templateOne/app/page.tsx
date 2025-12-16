import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedPlayer } from "@/components/home/featured-player"
import { TournamentPreview } from "@/components/home/tournament-preview"
import { LegacySection } from "@/components/home/legacy-section"
import { ShopPreview } from "@/components/home/shop-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedPlayer />
      <TournamentPreview />
      <LegacySection />
      <ShopPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
