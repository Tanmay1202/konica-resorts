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
              Our Legacy
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.15] mb-8">
              Where Grandeur Meets
              <br />
              <span className="italic text-konica-cream/70">Gracious Hospitality</span>
            </h2>
            <div className="space-y-5 text-white/55 font-light leading-[1.8] text-[15px]">
              <p>
                From the moment you enter, you are immersed in a world of unparalleled luxury. Our opulent golden interiors, illuminated by magnificent crystal chandeliers, set the perfect stage for life&apos;s most momentous occasions. As Phagwara&apos;s premier celebration destination near the Jalandhar Highway and LPU, we pride ourselves on turning dreams into resplendent realities.
              </p>
              <p>
                Whether you are hosting a traditional Punjabi wedding of epic proportions or an intimate, sophisticated gathering, our legacy is built on impeccable service and attention to every detail. At Konica Resorts, every event is a masterpiece, crafted with passion and surrounded by architectural grandeur.
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
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full max-w-2xl mx-auto lg:ml-auto overflow-hidden shadow-2xl border-l-2 border-konica-gold">
              <img
                src={IMAGES.banquetGoldenInterior}
                alt="Opulent golden banquet hall interior at Konica Resorts"
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
                src={IMAGES.exteriorSunset}
                alt="Konica Resorts at sunset"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
