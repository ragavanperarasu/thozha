import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "Electronics", href: "/electronics" },
    { name: "Smartphones", href: "/smartphones" },
    { name: "Home Appliances", href: "/appliances" },
    { name: "New Arrivals", href: "/new" },
    { name: "Best Sellers", href: "/bestsellers" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Track Order", href: "/track" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-poppins font-bold text-xl">T</span>
              </div>
              <span className="font-poppins font-bold text-2xl">Thozha</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Your trusted destination for premium electronics, smartphones, and home appliances. Quality products, exceptional service.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Tech Street, Silicon Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/70 hover:text-accent transition-smooth text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:hello@thozha.com" className="text-primary-foreground/70 hover:text-accent transition-smooth text-sm">
                  hello@thozha.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2025 Thozha. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-primary-foreground/50 hover:text-accent text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="/terms" className="text-primary-foreground/50 hover:text-accent text-sm transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
