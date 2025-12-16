import Image from "next/image"
import type { Product } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all">
      {/* Image */}
      <div className="relative aspect-square bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-primary rounded-sm">
          {product.category}
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="font-display text-lg font-bold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <p className="font-display text-xl font-bold text-primary">KES {product.price.toLocaleString()}</p>
          <Button size="sm" variant="secondary" className="gap-2">
            <ShoppingBag size={14} />
            <span className="sr-only sm:not-sr-only">Add</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
