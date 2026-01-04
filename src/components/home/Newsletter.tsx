import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 animate-fade-in-up">
            <Send className="h-4 w-4" />
            <span className="text-sm font-medium">Stay Updated</span>
          </div>
          
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in-up animation-delay-100">
            Subscribe to Our Newsletter
          </h2>
          
          <p className="text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
            Get exclusive deals, new product launches, and tech news delivered straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-fade-in-up animation-delay-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:bg-card transition-smooth"
            />
            <Button variant="accent" size="lg" className="shrink-0">
              Subscribe
              <Send className="h-4 w-4 ml-2" />
            </Button>
          </form>
          
          <p className="text-muted-foreground/60 text-sm mt-4 animate-fade-in-up animation-delay-400">
            No spam, unsubscribe anytime. By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
