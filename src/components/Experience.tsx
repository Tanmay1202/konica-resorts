"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";

export function Experience() {
  return (
    <section className="relative bg-[#0c0c0c]">
      {/* Full-bleed cinematic image */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={IMAGES.ballroomDining}
            alt="The Grand Ballroom dining experience at Konica Resorts"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/20 to-[#0c0c0c]/40" />
        
        {/* Centered editorial text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center px-6"
          >
            <p className="text-konica-gold uppercase tracking-[0.3em] text-[11px] font-medium mb-6">
              The Konica Promise
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-white max-w-3xl leading-[1.15]">
              Every Detail,{" "}
              <span className="italic text-konica-cream/80">Perfected</span>
            </h2>
            <p className="mt-6 text-white/50 font-light text-[15px] max-w-lg mx-auto leading-relaxed">
              From the ornate ceiling medallions to the copper-finished buffet stations, every element at Konica Resorts has been crafted with purpose and care.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Detail strip */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] overflow-hidden group"
          >
            <img
              src={IMAGES.diningBuffetFront}
              alt="Buffet pergola detail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-[4/3] overflow-hidden group"
          >
            <img
              src={IMAGES.courtyardWide}
              alt="The Courtyard setup"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/3] overflow-hidden group"
          >
            <img
              src={IMAGES.exteriorSign}
              alt="Konica Resorts signage at dusk"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
