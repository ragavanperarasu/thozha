import { useState } from "react";
import { Search, ShoppingCart, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Electronics", href: "/electronics" },
  { name: "Smartphones", href: "/smartphones" },
  { name: "Appliances", href: "/appliances" },
  { name: "Deals", href: "/deals" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent transition-smooth group-hover:scale-110">
              <span className="text-accent-foreground font-poppins font-bold text-xl">T</span>
            </div>
            <span className="font-poppins font-bold text-xl text-foreground hidden sm:block">
              Thozha
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-secondary/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-smooth group-focus-within:text-accent" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-secondary/50 border border-transparent text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:bg-card transition-smooth"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden sm:flex relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                2
              </span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                3
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isSearchOpen ? "h-14 pb-3" : "h-0"
          )}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-11 pl-11 pr-4 rounded-xl bg-secondary/50 border border-transparent text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-smooth"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "h-auto pb-4" : "h-0"
          )}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-secondary/50"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
