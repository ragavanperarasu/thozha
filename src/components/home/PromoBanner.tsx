import { Zap, Truck, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% protected checkout",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "2-3 business days",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated assistance",
  },
];

export function PromoBanner() {
  return (
    <section className="py-12 bg-card border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-foreground text-sm lg:text-base">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-xs lg:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
