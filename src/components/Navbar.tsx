"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/lib/assets";

const navLinks = [
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0c0c0c]/90 backdrop-blur-md py-4 border-b border-white/[0.06]"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="z-50 relative flex items-center" onClick={closeMobileMenu}>
            <img 
              src={IMAGES.logo} 
              alt="Konica Resorts" 
              className="h-10 md:h-12 w-auto" 
              draggable={false} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/80 hover:text-konica-gold transition-colors duration-300 uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+919501111011" 
              className="flex items-center gap-2 text-white/80 hover:text-konica-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider">950 111 1011</span>
            </a>
            <Link
              href="#contact"
              className="px-6 py-2.5 border border-konica-gold/50 text-konica-gold hover:bg-konica-gold hover:text-[#0c0c0c] transition-all duration-300 text-sm font-medium tracking-widest uppercase"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#0c0c0c] z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-serif text-white hover:text-konica-gold transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-12 h-px bg-konica-gold/30 my-4" />
          <a 
            href="tel:+919501111011" 
            className="flex items-center gap-3 text-white/90 hover:text-konica-gold transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg font-medium tracking-wider">950 111 1011</span>
          </a>
          <Link
            href="#contact"
            className="mt-4 px-8 py-3 border border-konica-gold text-konica-gold text-sm font-medium tracking-widest uppercase"
            onClick={closeMobileMenu}
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </>
  );
}
