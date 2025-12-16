"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/merchandise/product-card"
import { products } from "@/lib/data"
import { ShoppingBag, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MerchandisePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))]

  const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-card turf-pattern relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <ShoppingBag size={20} />
              <span className="text-sm font-medium uppercase tracking-widest">Official Store</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">GEAR UP</h1>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">LIKE A TITAN</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wear the colors. Carry the pride. Official Les Titans merchandise for players, alumni, and supporters.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-sm bg-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter size={16} />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground">Official merchandise with premium materials</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-primary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Support the Team</h3>
              <p className="text-sm text-muted-foreground">Proceeds go directly to team development</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-primary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Pickup Available</h3>
              <p className="text-sm text-muted-foreground">Collect from St. Anthony's Kitale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Info */}
      <section className="py-12 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">How to Order</h2>
          <p className="text-primary-foreground/80 mb-6">
            To place an order, contact us via email or phone. We'll confirm availability and arrange payment and
            delivery/pickup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-primary-foreground/10 rounded-lg">
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wider mb-1">Email</p>
              <p className="text-primary-foreground font-medium">shop@lestitans.co.ke</p>
            </div>
            <div className="px-6 py-3 bg-primary-foreground/10 rounded-lg">
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wider mb-1">Phone</p>
              <p className="text-primary-foreground font-medium">+254 700 123 456</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
