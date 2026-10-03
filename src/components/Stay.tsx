"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";
import { Wifi, Tv, Wind, Clock, Utensils, Car } from "lucide-react";

const AMENITIES = [
  { icon: Wind, label: "Air-Conditioned Rooms" },
  { icon: Tv, label: "Flat-Screen TV" },
  { icon: Wifi, label: "Complimentary Wi-Fi" },
  { icon: Utensils, label: "Room Service" },
  { icon: Clock, label: "24-Hour Front Desk" },
  { icon: Car, label: "Free Parking" },
];

export function Stay() {
  return (
    <section id="stay" className="py-28 md:py-40 bg-konica-surface-elevated relative overflow-hidden">
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
              The Rooms
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.15]">
              Rest, Recharge,
              <br />
              <span className="italic text-konica-cream/70">Return Refreshed</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto lg:ml-auto overflow-hidden shadow-2xl border-l-2 border-konica-gold z-10">
              <img
                src={IMAGES.hotelRoom}
                alt="Luxurious hotel room at Konica Resorts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/40 to-transparent" />
            </div>
            
            {/* Offset bathroom image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-12 -left-4 lg:-left-16 w-48 md:w-60 aspect-[3/4] overflow-hidden border-4 border-[#0c0c0c] shadow-2xl hidden sm:block z-20"
            >
              <img
                src={IMAGES.hotelBathroom}
                alt="Elegant hotel bathroom"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="px-3 py-1 bg-konica-gold/10 text-konica-gold text-xs font-semibold tracking-wider uppercase border border-konica-gold/20">16 Exclusive Rooms</span>
            </div>
            
            <p className="text-white/55 font-light leading-[1.8] text-[15px] mb-8">
              Beyond grand celebrations, Konica Resorts offers a restful sanctuary. Our 16 thoughtfully designed, air-conditioned rooms and spacious family suites are crafted for absolute comfort, whether you are visiting for a wedding, a getaway near LPU, or simply passing through the vibrant Punjab.
            </p>
            <p className="text-white/55 font-light leading-[1.8] text-[15px] mb-10">
              Each room is appointed with premium linens, elegant furnishings, and modern amenities, ensuring your stay is as effortless as it is memorable. Check in at 2:00 PM, unwind in luxury, and check out refreshed by 12:00 PM.
            </p>

            {/* Amenities grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {AMENITIES.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/50 group">
                  <item.icon size={18} className="text-konica-gold shrink-0" />
                  <span className="text-xs tracking-wider uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
