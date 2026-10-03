"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/lib/assets";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={containerRef} className="relative bg-konica-charcoal py-24 flex flex-col">
      {/* Cinematic Interlude */}
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
          <img
            src={IMAGES.banquetCelebration}
            alt="Banquet Celebration"
            className="object-cover w-full h-full"
          />
        </motion.div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.span variants={fadeUpVariant} className="block text-konica-gold tracking-widest uppercase text-sm mb-4">
              The Konica Promise
            </motion.span>
            <motion.h2 variants={fadeUpVariant} className="text-white font-serif text-5xl md:text-7xl mb-6">
              Every Detail, <span className="italic text-konica-copper">Perfected</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              From the gold-leaf ceilings that catch the light of a thousand crystals to the impeccably styled banquet tables — every element at Konica Resorts has been curated to elevate your celebration.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Detail Strip */}
      <div className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { src: IMAGES.buffetDisplay, alt: "Opulent golden banquet buffet display" },
            { src: IMAGES.baraatArrival, alt: "Cinematic baraat arrival" },
            { src: IMAGES.exteriorSunset, alt: "Konica Resorts at sunset" }
          ].map((img, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="relative group overflow-hidden aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
