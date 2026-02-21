import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logoImg from "@/assets/logo.png";

const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Gallery", href: "/gallery" },
    { label: "News & Events", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ],
  programs: [
    { label: "Reception Programme", href: "/academics#reception" },
    { label: "Nursery Programme", href: "/academics#nursery" },
    { label: "Primary School", href: "/academics#primary" },
    { label: "Secondary School", href: "/academics#secondary" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img
              src={logoImg}
              alt="Dagrojel Excel Academy"
              className="h-16 w-16 object-contain rounded-full bg-primary-foreground/10 p-1"
            />
            <div>
              <p className="font-display font-bold text-lg leading-tight">
                Dagrojel Excel Academy
              </p>
              <p className="text-xs text-accent italic">Building Solid Foundation</p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/75 leading-relaxed mb-6">
            Nurturing minds and building character since our founding. We are committed to academic excellence and holistic development for every child.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-accent text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-primary-foreground/75 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-accent text-xs">▸</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-display font-semibold text-accent text-lg mb-5">Our Programmes</h4>
          <ul className="space-y-3">
            {footerLinks.programs.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-primary-foreground/75 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-accent text-xs">▸</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-accent text-lg mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm text-primary-foreground/75">
                Along Road D, Aco Estate Phase 1/2, Airport Road, Abuja
              </span>
            </li>
            <li>
              <a
                href="tel:+2348164800973"
                className="flex gap-3 text-sm text-primary-foreground/75 hover:text-accent transition-colors"
              >
                <Phone size={16} className="text-accent flex-shrink-0" />
                +234 816 4800 973
              </a>
            </li>
            <li>
              <a
                href="tel:+2348033995446"
                className="flex gap-3 text-sm text-primary-foreground/75 hover:text-accent transition-colors"
              >
                <Phone size={16} className="text-accent flex-shrink-0" />
                +234 803 3995 446
              </a>
            </li>
            <li>
              <a
                href="mailto:excel@dagrojel.com"
                className="flex gap-3 text-sm text-primary-foreground/75 hover:text-accent transition-colors"
              >
                <Mail size={16} className="text-accent flex-shrink-0" />
                excel@dagrojel.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Dagrojel Excel Academy, Abuja. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
