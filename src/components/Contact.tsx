"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-konica-surface-elevated relative overflow-hidden border-t border-white/[0.04]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
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
              Plan Your Visit
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white">
              Get in <span className="italic text-konica-cream/70">Touch</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/50 font-light leading-relaxed text-[15px] mb-12 max-w-lg">
              Whether you are planning a grand wedding, an intimate celebration, or a relaxing stay near LPU — our team is ready to craft the perfect experience. Reach out to us directly or visit our property to begin planning.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-konica-gold/30 flex items-center justify-center shrink-0 text-konica-gold group-hover:bg-konica-gold group-hover:text-konica-navy transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-white uppercase tracking-[0.15em] text-[10px] font-semibold mb-2 mt-1">Call Us For Bookings</h4>
                  <a href="tel:9501111011" className="text-konica-gold font-serif text-2xl hover:text-konica-gold-light transition-colors block">
                    950 111 1011
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-konica-gold/30 flex items-center justify-center shrink-0 text-konica-gold group-hover:bg-konica-gold group-hover:text-konica-navy transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-white uppercase tracking-[0.15em] text-[10px] font-semibold mb-2 mt-1">Visit Konica Resorts</h4>
                  <p className="text-white/60 font-light text-[15px] leading-relaxed">
                    Jalandhar Highway, near LPU,<br />
                    opposite Chandigarh Bypass,<br />
                    Phagwara, Punjab 144402
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-konica-gold/30 flex items-center justify-center shrink-0 text-konica-gold group-hover:bg-konica-gold group-hover:text-konica-navy transition-all duration-300">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-white uppercase tracking-[0.15em] text-[10px] font-semibold mb-2 mt-1">Hotel Timings</h4>
                  <p className="text-white/60 font-light text-[15px] leading-relaxed flex items-center gap-4">
                    <span>Check-in: 2:00 PM</span>
                    <span className="w-1 h-1 rounded-full bg-konica-gold/50" />
                    <span>Check-out: 12:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Visual Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-full"
          >
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Konica+Resorts+Phagwara+Punjab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative w-full aspect-square md:aspect-[4/3] border border-white/[0.08] overflow-hidden group"
              aria-label="Open Konica Resorts in Google Maps"
            >
              {/* Using a styled iframe to create the map background look without interactivity, so the link wrapper handles the click */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.399201991873!2d75.78206921514332!3d31.23438498146522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a54db687a41%3A0xc3f7a2db0f8d9b1!2sKonica%20Resorts!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full grayscale-[50%] contrast-[1.1] opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 pointer-events-none scale-110 group-hover:scale-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-[#0c0c0c]/40 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Floating Action Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#0c0c0c] border border-konica-gold/40 px-6 py-4 rounded-none flex items-center gap-3 shadow-2xl transform group-hover:scale-105 group-hover:border-konica-gold transition-all duration-300">
                  <Navigation size={16} className="text-konica-gold" />
                  <span className="text-white text-[11px] uppercase tracking-[0.2em] font-semibold">Get Directions</span>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-konica-gold/50" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-konica-gold/50" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-konica-gold/50" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-konica-gold/50" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
