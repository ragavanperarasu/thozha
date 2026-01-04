import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 animate-fade-in-up">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">New Year Sale - Up to 40% Off</span>
            </div>
            
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Discover the{" "}
              <span className="text-gradient">Future</span>
              <br />
              of Technology
            </h1>
            
            <p className="text-primary-foreground/70 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up animation-delay-200">
              Explore our curated collection of premium electronics, smartphones, and home appliances designed to elevate your everyday life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <Button variant="hero" size="xl">
                Shop Now
                <ArrowRight className="h-5 w-5 ml-1" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Explore Categories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-in-up animation-delay-400">
              <div>
                <div className="font-poppins text-2xl lg:text-3xl font-bold text-primary-foreground">500+</div>
                <div className="text-primary-foreground/50 text-sm">Products</div>
              </div>
              <div>
                <div className="font-poppins text-2xl lg:text-3xl font-bold text-primary-foreground">50K+</div>
                <div className="text-primary-foreground/50 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="font-poppins text-2xl lg:text-3xl font-bold text-primary-foreground">4.9</div>
                <div className="text-primary-foreground/50 text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
              <div className="w-full aspect-square max-w-lg mx-auto rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border border-primary-foreground/10 flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-accent">
                    <span className="text-6xl">📱</span>
                  </div>
                  <p className="text-primary-foreground/70 text-sm">Premium Tech Awaits</p>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute top-10 -left-10 p-4 rounded-2xl bg-card/90 backdrop-blur-sm shadow-card animate-float animation-delay-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-xl">🎧</span>
                </div>
                <div>
                  <div className="font-medium text-card-foreground text-sm">AirPods Pro</div>
                  <div className="text-accent font-semibold">$199</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-20 -right-5 p-4 rounded-2xl bg-card/90 backdrop-blur-sm shadow-card animate-float animation-delay-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-xl">⌚</span>
                </div>
                <div>
                  <div className="font-medium text-card-foreground text-sm">Smart Watch</div>
                  <div className="text-accent font-semibold">$299</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
