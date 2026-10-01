"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Resort", href: "#resort" },
  { name: "Stay", href: "#stay" },
  { name: "Venues", href: "#venues" },
  { name: "Dining", href: "#dining" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-konica-charcoal/95 backdrop-blur-lg py-3 shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 group">
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-[0.25em] uppercase text-white font-medium leading-none">
              Konica
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-konica-gold font-medium mt-0.5">
              Resorts
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] text-white/75 hover:text-konica-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-konica-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:9501111011"
            className="flex items-center gap-2 text-white/60 hover:text-konica-gold transition-colors text-xs tracking-wider"
          >
            <Phone size={14} />
            <span>950 111 1011</span>
          </a>
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-konica-gold text-konica-navy text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-konica-gold-light transition-colors duration-300"
          >
            Enquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-konica-charcoal z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden",
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center gap-7">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-3xl font-serif text-white hover:text-konica-gold transition-all duration-300",
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 80}ms` : "0ms" }}
                onClick={closeMobile}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-12 flex flex-col items-center gap-4">
            <a href="tel:9501111011" className="text-konica-gold font-serif text-xl">
              950 111 1011
            </a>
            <Link
              href="#contact"
              className="mt-4 px-8 py-3 bg-konica-gold text-konica-navy uppercase tracking-[0.2em] text-xs font-semibold"
              onClick={closeMobile}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
