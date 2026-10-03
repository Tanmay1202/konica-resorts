"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IMAGES } from "@/lib/assets";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.exteriorNight}
          alt="Konica Resorts Exterior Night"
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-[#0c0c0c]/40 to-[#0c0c0c]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/60 via-transparent to-[#0c0c0c]/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 mt-4 md:mt-8">
        <div className="max-w-4xl text-left flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-4 md:mb-5"
          >
            Where Every <br />
            Occasion Finds Its <br />
            <span className="italic text-konica-cream/90">Perfect Setting</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl font-sans tracking-wide leading-relaxed mb-6 md:mb-8"
          >
            A premier hotel and banquet destination on the Jalandhar Highway — offering grand celebrations, intimate gatherings, and restful stays.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Link
              href="#venues"
              className="px-6 py-3 md:px-8 md:py-3.5 bg-[#D4AF37] text-[#0c0c0c] text-xs font-medium tracking-widest uppercase hover:bg-white transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Explore Venues
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 md:px-8 md:py-3.5 border border-white/30 text-white hover:border-white text-xs font-medium tracking-widest uppercase transition-colors duration-300 w-full sm:w-auto group relative overflow-hidden text-center"
            >
              <span className="relative z-10 transition-colors duration-300">Plan Your Event</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className="w-full h-full bg-konica-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
