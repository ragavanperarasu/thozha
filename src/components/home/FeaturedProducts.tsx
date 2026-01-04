import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 2840,
    image: "📱",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "MacBook Pro 14\" M3 Chip",
    price: 1999,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 1256,
    image: "💻",
    badge: "New",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: 349,
    originalPrice: 399,
    rating: 4.7,
    reviews: 3421,
    image: "🎧",
  },
  {
    id: 4,
    name: "Samsung 65\" 4K Smart TV",
    price: 899,
    originalPrice: 1099,
    rating: 4.6,
    reviews: 892,
    image: "📺",
    badge: "Hot Deal",
  },
  {
    id: 5,
    name: "Apple Watch Ultra 2",
    price: 799,
    rating: 4.9,
    reviews: 1567,
    image: "⌚",
  },
  {
    id: 6,
    name: "DJI Mini 3 Pro Drone",
    price: 759,
    originalPrice: 849,
    rating: 4.7,
    reviews: 654,
    image: "🚁",
  },
  {
    id: 7,
    name: "Canon EOS R6 Mark II",
    price: 2499,
    rating: 4.8,
    reviews: 421,
    image: "📷",
  },
  {
    id: 8,
    name: "LG French Door Refrigerator",
    price: 1599,
    originalPrice: 1899,
    rating: 4.5,
    reviews: 234,
    image: "🧊",
    badge: "-16%",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Handpicked products just for you
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            View All
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
