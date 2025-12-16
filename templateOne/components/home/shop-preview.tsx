import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"

export function ShopPreview() {
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <ShoppingBag size={20} />
              <span className="text-sm font-medium uppercase tracking-widest">Gear Up</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">Titans Merchandise</h2>
          </div>
          <Button asChild variant="outline" className="font-display uppercase tracking-wider w-fit bg-transparent">
            <Link href="/merchandise">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="aspect-square relative bg-secondary">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-primary uppercase tracking-wider">{product.category}</span>
                <h3 className="font-display text-sm font-bold text-foreground mt-1">{product.name}</h3>
                <p className="font-display text-lg font-bold text-primary mt-2">KES {product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
