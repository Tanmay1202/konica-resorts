"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image — Konica exterior at dusk */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.exteriorDusk}
          alt="Konica Resorts exterior at dusk"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/50 to-transparent" />
      </div>

      {/* Content — centered and pushed down to clear the navbar */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-24 md:pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[1px] bg-konica-gold mb-8"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8"
            >
              Where Every
              <br />
              Occasion Finds Its
              <br />
              <span className="italic text-konica-cream/80">Perfect Setting</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-lg mb-10"
            >
              A premier hotel and banquet destination on the Jalandhar Highway — offering grand celebrations, intimate gatherings, and restful stays.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#venues"
                className="px-8 py-3.5 bg-konica-gold text-konica-navy uppercase tracking-[0.15em] text-[11px] font-semibold hover:bg-konica-gold-light transition-colors duration-300"
              >
                Explore Venues
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3.5 border border-white/30 text-white uppercase tracking-[0.15em] text-[11px] font-semibold hover:border-konica-gold hover:text-konica-gold transition-all duration-300"
              >
                Plan Your Event
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/40 tracking-[0.2em] text-[9px] uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-konica-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
