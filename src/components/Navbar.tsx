import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Reception", href: "/academics#reception" },
      { label: "Nursery", href: "/academics#nursery" },
      { label: "Primary", href: "/academics#primary" },
      { label: "Secondary", href: "/academics#secondary" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+2348164800973" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone size={13} />
              +234 816 4800 973
            </a>
            <a href="mailto:excel@dagrojel.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail size={13} />
              excel@dagrojel.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Airport Road, Abuja</span>
            <span className="text-accent font-semibold">Admission Open 2025/2026</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-card shadow-md border-b border-border"
            : "bg-card/95 backdrop-blur-sm"
        )}
      >
        <div className="container flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="Dagrojel Excel Academy Logo"
              className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <p className="font-display font-bold text-primary text-lg leading-tight">
                Dagrojel Excel Academy
              </p>
              <p className="text-xs text-muted-foreground italic">Building Solid Foundation</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    location.pathname === link.href
                      ? "text-primary bg-primary/8 font-semibold"
                      : "text-foreground hover:text-primary hover:bg-primary/6"
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        activeDropdown === link.label ? "rotate-180" : ""
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg shadow-lg border border-border py-1 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-primary/6 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/admissions"
              className="px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-gold)",
                color: "hsl(var(--accent-foreground))",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/8 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-md text-sm font-medium transition-colors",
                      location.pathname === link.href
                        ? "text-primary bg-primary/8 font-semibold"
                        : "text-foreground hover:text-primary hover:bg-primary/6"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                        >
                          → {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/admissions"
                className="mt-3 text-center px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                style={{
                  background: "var(--gradient-gold)",
                  color: "hsl(var(--accent-foreground))",
                }}
              >
                Apply Now →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
