"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";
import { useState } from "react";
import { X } from "lucide-react";

const GALLERY_IMAGES = [
  { src: IMAGES.ballroomWide, alt: "Grand Ballroom panoramic view", span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2" },
  { src: IMAGES.exteriorDusk, alt: "Konica Resorts exterior at dusk", span: "col-span-1 row-span-1" },
  { src: IMAGES.courtyardHall, alt: "The Courtyard with blue lighting", span: "col-span-1 row-span-1" },
  { src: IMAGES.diningBuffetLong, alt: "Elaborate buffet service", span: "col-span-2 row-span-1 md:col-span-2" },
  { src: IMAGES.ballroomStage, alt: "Ballroom stage with floral arch", span: "col-span-1 row-span-1" },
  { src: IMAGES.diningIndian, alt: "Indian cuisine station", span: "col-span-1 row-span-1" },
  { src: IMAGES.ballroomCeiling, alt: "Ornate ceiling and dining area", span: "col-span-1 row-span-1" },
  { src: IMAGES.courtyardTables, alt: "Courtyard table settings", span: "col-span-1 row-span-1" },
  { src: IMAGES.diningBuffetFront, alt: "Copper buffet station with pergola", span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2" },
  { src: IMAGES.hotelRoom, alt: "Luxury hotel room", span: "col-span-2 row-span-1 md:col-span-2" },
  { src: IMAGES.exteriorSign, alt: "Konica Resorts signage", span: "col-span-1 row-span-1" },
  { src: IMAGES.courtyardSetup, alt: "Courtyard event setup", span: "col-span-1 row-span-1" },
  { src: IMAGES.ballroomDining, alt: "Grand Ballroom dining view", span: "col-span-2 row-span-1 md:col-span-2" },
  { src: IMAGES.hotelBathroom, alt: "Luxury hotel bathroom", span: "col-span-1 row-span-1" },
  { src: IMAGES.diningPlated, alt: "Gourmet plated cuisine", span: "col-span-1 row-span-1" },
];

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-28 md:py-40 bg-[#0c0c0c]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 h-[1px] bg-konica-gold mx-auto mb-8" />
              <p className="text-konica-gold uppercase tracking-[0.25em] text-[11px] font-medium mb-5">
                Gallery
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-white">
                A Glimpse of <span className="italic text-konica-cream/70">Konica</span>
              </h2>
            </motion.div>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] lg:auto-rows-[300px] gap-2 md:gap-3">
            {GALLERY_IMAGES.map((img, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative overflow-hidden group cursor-pointer w-full h-full ${img.span}`}
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-konica-navy/0 group-hover:bg-konica-navy/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs uppercase tracking-widest">View</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <img
            src={GALLERY_IMAGES[lightboxIndex].src}
            alt={GALLERY_IMAGES[lightboxIndex].alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Nav arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
