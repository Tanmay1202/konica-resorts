"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/assets";

const GALLERY_IMAGES = [
  { src: IMAGES.banquetGoldenHall, alt: "Opulent golden banquet hall", span: "col-span-2 row-span-2" },
  { src: IMAGES.exteriorNight, alt: "Konica Resorts illuminated at night", span: "col-span-1 row-span-1" },
  { src: IMAGES.banquetBlueElegant, alt: "Elegant blue-lit banquet hall", span: "col-span-1 row-span-1" },
  { src: IMAGES.buffetDiningHall, alt: "Luxurious buffet dining hall", span: "col-span-2 row-span-1" },
  { src: IMAGES.banquetSymmetrical, alt: "Symmetrical golden banquet hall", span: "col-span-1 row-span-1" },
  { src: IMAGES.buffetIndian, alt: "Elegant Indian buffet display", span: "col-span-1 row-span-1" },
  { src: IMAGES.banquetGoldenInterior, alt: "Golden banquet hall interior", span: "col-span-1 row-span-1" },
  { src: IMAGES.banquetBlueLuxurious, alt: "Luxurious blue-lit banquet setting", span: "col-span-1 row-span-1" },
  { src: IMAGES.buffetDisplay, alt: "Opulent banquet buffet display", span: "col-span-2 row-span-2" },
  { src: IMAGES.baraatArrival, alt: "Cinematic baraat arrival at Konica", span: "col-span-2 row-span-1" },
  { src: IMAGES.banquetWedding, alt: "Lavish Punjabi wedding setup", span: "col-span-1 row-span-1" },
  { src: IMAGES.banquetCelebration, alt: "South Asian banquet celebration", span: "col-span-1 row-span-1" },
  { src: IMAGES.exteriorSunset, alt: "Konica Resorts at golden sunset", span: "col-span-2 row-span-1" },
  { src: IMAGES.buffetGoldenInterior, alt: "Golden buffet interior", span: "col-span-1 row-span-1" },
  { src: IMAGES.banquetGoldenInterior2, alt: "Grand golden hall interior", span: "col-span-1 row-span-1" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
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

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] lg:auto-rows-[300px] gap-2 md:gap-3">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.05 }}
              className={`relative overflow-hidden group cursor-pointer ${image.span}`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-konica-navy/0 group-hover:bg-konica-navy/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs uppercase tracking-widest">View</span>
                </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              >
                <ChevronRight size={32} />
              </button>

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_IMAGES[selectedImage].src}
                alt={GALLERY_IMAGES[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl mb-12"
              />
              
              <div className="absolute bottom-6 left-0 right-0 text-center text-white/70">
                <p className="text-sm tracking-widest uppercase">{selectedImage + 1} / {GALLERY_IMAGES.length}</p>
                <p className="mt-2 text-white/90 font-serif text-lg">{GALLERY_IMAGES[selectedImage].alt}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
