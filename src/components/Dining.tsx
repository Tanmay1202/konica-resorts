"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";

export function Dining() {
  return (
    <section id="dining" className="py-28 md:py-40 bg-konica-surface-elevated relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-[1px] bg-konica-gold mx-auto mb-8" />
            <p className="text-konica-gold uppercase tracking-[0.25em] text-[11px] font-medium mb-5">
              Culinary Experience
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
              A Feast for
              <br />
              <span className="italic text-konica-cream/70">Every Palate</span>
            </h2>
            <p className="text-white/50 font-light text-[15px] max-w-xl mx-auto leading-relaxed">
              From lavish multi-cuisine buffets featuring the finest Punjabi, North Indian, and continental flavors to artfully presented live cooking stations — every banquet at Konica is a culinary celebration in its own right.
            </p>
          </motion.div>
        </div>

        {/* Editorial image layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 aspect-[4/3] overflow-hidden group relative"
          >
            <img
              src={IMAGES.buffetDiningHall}
              alt="Luxurious buffet dining hall at Konica Resorts"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-konica-gold font-serif text-lg italic">Grand Buffet Service</span>
            </div>
          </motion.div>

          {/* Stacked images */}
          <div className="md:col-span-5 grid grid-cols-1 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="aspect-[16/10] overflow-hidden group relative"
            >
              <img
                src={IMAGES.buffetIndian}
                alt="Elegant Indian buffet display"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="text-konica-gold font-serif text-lg italic">Traditional Cuisine</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="aspect-[16/10] overflow-hidden group relative"
            >
              <img
                src={IMAGES.buffetGoldenInterior}
                alt="Luxurious golden buffet interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="text-konica-gold font-serif text-lg italic">Banquet Dining</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
