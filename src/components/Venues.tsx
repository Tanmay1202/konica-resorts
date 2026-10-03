"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IMAGES } from "@/lib/assets";

export function Venues() {
  return (
    <section id="venues" className="bg-[#0c0c0c] relative">
      {/* Section intro */}
      <div className="py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-[1px] bg-konica-gold mx-auto mb-8" />
            <p className="text-konica-gold uppercase tracking-[0.25em] text-[11px] font-medium mb-5">
              Our Venues
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
              Two Extraordinary Spaces
            </h2>
            <p className="text-white/50 font-light text-[15px] max-w-xl mx-auto leading-relaxed">
              From grand celebrations that fill every corner with joy to intimate gatherings that sparkle with personal warmth — Konica offers a stage for every story.
            </p>
          </motion.div>
        </div>
      </div>

      {/* THE GRAND BALLROOM */}
      <div className="relative">
        {/* Full-bleed image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="relative w-full aspect-[16/7] md:aspect-[16/6] overflow-hidden"
        >
          <img
            src={IMAGES.banquetGoldenHall}
            alt="The Grand Ballroom at Konica Resorts — opulent golden ceiling, crystal chandeliers, luxurious seating"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/60 to-transparent" />
        </motion.div>

        {/* Content overlay */}
        <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 z-10">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-lg"
            >
              <p className="text-konica-gold uppercase tracking-[0.25em] text-[11px] font-medium mb-4">
                Premier Venue
              </p>
              <h3 className="font-serif text-3xl md:text-5xl text-white mb-4">
                The Grand Ballroom
              </h3>
              <div className="mb-6">
                <span className="px-3 py-1 bg-konica-navy/50 text-konica-gold text-[10px] font-semibold tracking-wider uppercase border border-konica-gold/30">Capacity: 300 - 1500 Guests</span>
              </div>
              <p className="text-white/60 font-light leading-relaxed text-[15px] mb-8">
                Step into unparalleled grandeur. Featuring opulent gold-leaf ceilings, magnificent crystal chandeliers, hand-painted medallions, and plush seating — a space meticulously designed for the grandest Punjabi weddings, lavish receptions, and milestone celebrations that demand nothing less than perfection.
              </p>
              <Link
                href="#contact"
                className="inline-block px-8 py-3.5 border border-konica-gold text-konica-gold uppercase tracking-[0.15em] text-[11px] font-semibold hover:bg-konica-gold hover:text-konica-navy transition-all duration-300"
              >
                Enquire About the Ballroom
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ballroom detail images */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { src: IMAGES.banquetSymmetrical, alt: "Symmetrical golden banquet hall view" },
            { src: IMAGES.banquetGoldenInterior2, alt: "Ornate golden banquet hall interior" },
            { src: IMAGES.banquetWedding, alt: "Lavish Punjabi wedding setup" },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="aspect-[4/3] overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="w-full h-[1px] bg-white/10" />
      </div>

      {/* THE COURTYARD */}
      <div className="py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <p className="text-konica-gold uppercase tracking-[0.25em] text-[11px] font-medium mb-4">
                Intimate Venue
              </p>
              <h3 className="font-serif text-3xl md:text-5xl text-white mb-4">
                The Courtyard
              </h3>
              <div className="mb-6">
                <span className="px-3 py-1 bg-konica-navy/50 text-konica-gold text-[10px] font-semibold tracking-wider uppercase border border-konica-gold/30">Capacity: 60 - 80 Guests</span>
              </div>
              <p className="text-white/60 font-light leading-relaxed text-[15px] mb-6">
                A refined banquet space bathed in dramatic sapphire-blue ambient lighting. Gold-draped seating and elegant table settings create an atmosphere of warmth and intimacy — perfect for receptions, engagement ceremonies, and exclusive family gatherings.
              </p>
              <p className="text-white/60 font-light leading-relaxed text-[15px] mb-8">
                Every detail, from the atmospheric lighting to the curated table décor, ensures your intimate celebration is as unforgettable as it is beautiful.
              </p>
              <Link
                href="#contact"
                className="inline-block px-8 py-3.5 border border-konica-gold text-konica-gold uppercase tracking-[0.15em] text-[11px] font-semibold hover:bg-konica-gold hover:text-konica-navy transition-all duration-300"
              >
                Enquire About the Courtyard
              </Link>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="lg:order-1"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={IMAGES.banquetBlueElegant}
                    alt="Elegant blue-lit banquet hall"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden mt-12">
                  <img
                    src={IMAGES.banquetBlueLuxurious}
                    alt="Luxurious blue-lit banquet setting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
