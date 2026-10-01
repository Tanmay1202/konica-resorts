"use client";

import Link from "next/link";

const FOOTER_NAV = [
  {
    title: "Explore",
    links: [
      { name: "Resort", href: "#resort" },
      { name: "Stay", href: "#stay" },
      { name: "Venues", href: "#venues" },
      { name: "Dining", href: "#dining" },
      { name: "Gallery", href: "#gallery" },
    ],
  },
  {
    title: "Venues",
    links: [
      { name: "The Grand Ballroom", href: "#venues" },
      { name: "The Courtyard", href: "#venues" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.25em] uppercase text-white font-medium leading-none">
                  Konica
                </span>
                <span className="text-[9px] tracking-[0.35em] uppercase text-konica-gold font-medium mt-0.5">
                  Resorts
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              A premier hotel and banquet destination in Phagwara, Punjab — where every occasion finds its perfect setting.
            </p>
          </div>

          {/* Nav Columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h4 className="text-white uppercase tracking-[0.15em] text-[10px] font-semibold mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-konica-gold transition-colors text-sm font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white uppercase tracking-[0.15em] text-[10px] font-semibold mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-light text-white/40">
              <li>
                <a href="tel:9501111011" className="hover:text-konica-gold transition-colors">
                  950 111 1011
                </a>
              </li>
              <li className="leading-relaxed">
                Jalandhar Highway, near LPU,<br />
                opposite Chandigarh Bypass,<br />
                Phagwara, Punjab 144402
              </li>
              <li className="pt-2">
                <span className="text-white/25 text-xs">Check-in: 2:00 PM · Check-out: 12:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-light text-white/25 tracking-wider">
            &copy; {new Date().getFullYear()} Konica Resorts. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[11px] text-white/25 hover:text-white/50 transition-colors tracking-wider">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[11px] text-white/25 hover:text-white/50 transition-colors tracking-wider">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
