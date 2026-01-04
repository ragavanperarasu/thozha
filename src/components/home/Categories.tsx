import { Smartphone, Tv, Home, Headphones, Camera, Laptop } from "lucide-react";

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    count: 120,
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    name: "Televisions",
    icon: Tv,
    count: 85,
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    name: "Appliances",
    icon: Home,
    count: 200,
    color: "from-green-500/20 to-green-600/10",
  },
  {
    name: "Audio",
    icon: Headphones,
    count: 95,
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    name: "Cameras",
    icon: Camera,
    count: 65,
    color: "from-pink-500/20 to-pink-600/10",
  },
  {
    name: "Laptops",
    icon: Laptop,
    count: 110,
    color: "from-cyan-500/20 to-cyan-600/10",
  },
];

export function Categories() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Browse through our extensive collection of electronics and find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-smooth`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-smooth group-hover:bg-accent/10">
                    <category.icon className="h-7 w-7 text-foreground group-hover:text-accent transition-smooth" />
                  </div>
                  <h3 className="font-poppins font-semibold text-foreground text-center mb-1">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm text-center">
                    {category.count} Products
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
