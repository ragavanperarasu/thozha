import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  delay?: number;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badge,
  delay = 0,
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div
      className="group animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden shadow-soft hover:shadow-hover transition-smooth hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-square p-4 bg-secondary/30">
          {/* Badge */}
          {badge && (
            <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold shadow-accent">
              {badge}
            </span>
          )}

          {/* Wishlist Button */}
          <button className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-card transition-smooth opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
            <Heart className="h-5 w-5" />
          </button>

          {/* Product Image */}
          <div className="flex items-center justify-center h-full">
            <div className="text-6xl transform group-hover:scale-110 transition-smooth">
              {image}
            </div>
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-smooth">
            <Button variant="accent" size="sm" className="w-full">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3.5 w-3.5",
                    i < Math.floor(rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-muted text-muted"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({reviews})
            </span>
          </div>

          {/* Name */}
          <h3 className="font-poppins font-medium text-foreground line-clamp-2 mb-2 group-hover:text-accent transition-smooth">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-poppins font-bold text-lg text-foreground">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice.toFixed(2)}
                </span>
                <span className="text-xs font-medium text-accent">
                  -{discount}%
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
