"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";

export function ResortStory() {
  return (
    <section id="resort" className="py-28 md:py-40 bg-[#0c0c0c] relative">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="w-12 h-[1px] bg-konica-gold mb-8" />
            <p className="text-konica-gold uppercase tracking-[0.25em] text-[11px] font-medium mb-5">
              The Konica Experience
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.15] mb-8">
              A Destination Crafted for
              <br />
              <span className="italic text-konica-cream/70">Celebration & Comfort</span>
            </h2>
            <div className="space-y-5 text-white/55 font-light leading-[1.8] text-[15px]">
              <p>
                Nestled along the Jalandhar Highway near Lovely Professional University, Konica Resorts stands as Phagwara's premier destination for grand celebrations and tranquil retreats. Our neoclassical architecture welcomes you into a world of refined hospitality.
              </p>
              <p>
                From ornate banquet halls adorned with hand-painted ceiling medallions to intimate courtyard gatherings bathed in ambient light — every space has been thoughtfully designed to transform your most important moments into lasting memories.
              </p>
            </div>
          </motion.div>

          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full max-w-2xl mx-auto lg:ml-auto overflow-hidden shadow-2xl">
              <img
                src={IMAGES.ballroomWide}
                alt="The Grand Ballroom at Konica Resorts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/40 to-transparent" />
            </div>
            {/* Offset accent image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-10 -left-6 lg:-left-16 w-40 md:w-56 aspect-[3/4] overflow-hidden border-4 border-[#0c0c0c] shadow-2xl hidden sm:block z-10"
            >
              <img
                src={IMAGES.exteriorDusk}
                alt="Konica Resorts exterior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
