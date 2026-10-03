"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation, Calendar, Users, MessageCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    eventType: "Wedding",
    venue: "Not Sure",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, phone, date, guests, eventType, venue } = formData;
    
    const message = `Hello Konica Resorts, I would like to inquire about booking an event.
    
*Name:* ${name}
*Phone:* ${phone}
*Event Date:* ${date || "Not decided"}
*Guest Count:* ${guests || "Not decided"}
*Event Type:* ${eventType}
*Venue Preference:* ${venue}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919501111011?text=${encodedMessage}`, "_blank");
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <p className="text-white/50 font-light leading-relaxed text-[15px] mb-10 max-w-lg">
                Whether you are planning a grand wedding, an intimate celebration, or a relaxing stay near LPU — our team is ready to craft the perfect experience. Reach out to us directly or visit our property to begin planning.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-konica-gold/30 flex items-center justify-center shrink-0 text-konica-gold group-hover:bg-konica-gold group-hover:text-[#0c0c0c] transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-white uppercase tracking-[0.15em] text-[10px] font-semibold mb-2 mt-1">Call Us For Bookings</h4>
                    <a href="tel:9501111011" className="text-konica-gold font-serif text-2xl hover:text-konica-gold/80 transition-colors block">
                      950 111 1011
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-konica-gold/30 flex items-center justify-center shrink-0 text-konica-gold group-hover:bg-konica-gold group-hover:text-[#0c0c0c] transition-all duration-300">
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
                  <div className="w-12 h-12 rounded-full border border-konica-gold/30 flex items-center justify-center shrink-0 text-konica-gold group-hover:bg-konica-gold group-hover:text-[#0c0c0c] transition-all duration-300">
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
            </div>

            {/* Google Maps Visual Link (Smaller format) */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Konica+Resorts+Phagwara+Punjab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative w-full aspect-[21/9] border border-white/[0.08] overflow-hidden group"
              aria-label="Open Konica Resorts in Google Maps"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.399201991873!2d75.78206921514332!3d31.23438498146522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a54db687a41%3A0xc3f7a2db0f8d9b1!2sKonica%20Resorts!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full grayscale-[50%] contrast-[1.1] opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 pointer-events-none scale-110 group-hover:scale-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-[#0c0c0c]/40 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#0c0c0c] border border-konica-gold/40 px-5 py-3 flex items-center gap-2 shadow-2xl transform group-hover:scale-105 group-hover:border-konica-gold transition-all duration-300">
                  <Navigation size={14} className="text-konica-gold" />
                  <span className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold">Get Directions</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right Column: Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0c0c0c] border border-white/[0.06] p-8 md:p-12 relative"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-konica-gold/40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-konica-gold/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-konica-gold/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-konica-gold/40" />

            <div className="mb-8">
              <h3 className="text-2xl font-serif text-white mb-2">Plan Your Event</h3>
              <p className="text-white/50 text-sm font-light">Fill out the details below to inquire directly via WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/70 text-[10px] uppercase tracking-wider font-medium">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-konica-gold transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-white/70 text-[10px] uppercase tracking-wider font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-konica-gold transition-colors text-sm"
                    placeholder="Your contact number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label htmlFor="date" className="text-white/70 text-[10px] uppercase tracking-wider font-medium flex items-center gap-2">
                    <Calendar size={12} /> Event Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-konica-gold transition-colors text-sm"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                {/* Guests */}
                <div className="space-y-2">
                  <label htmlFor="guests" className="text-white/70 text-[10px] uppercase tracking-wider font-medium flex items-center gap-2">
                    <Users size={12} /> Expected Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-konica-gold transition-colors text-sm"
                    placeholder="Estimated count"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Event Type */}
                <div className="space-y-2">
                  <label htmlFor="eventType" className="text-white/70 text-[10px] uppercase tracking-wider font-medium">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-konica-gold transition-colors text-sm appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%22//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23D4AF37%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7rem top 50%', backgroundSize: '.65rem auto' }}
                  >
                    <option value="Wedding" className="bg-[#0c0c0c]">Wedding</option>
                    <option value="Reception" className="bg-[#0c0c0c]">Reception</option>
                    <option value="Engagement" className="bg-[#0c0c0c]">Engagement / Roka</option>
                    <option value="Birthday / Anniversary" className="bg-[#0c0c0c]">Birthday / Anniversary</option>
                    <option value="Corporate Event" className="bg-[#0c0c0c]">Corporate Event</option>
                    <option value="Other" className="bg-[#0c0c0c]">Other</option>
                  </select>
                </div>
                {/* Venue */}
                <div className="space-y-2">
                  <label htmlFor="venue" className="text-white/70 text-[10px] uppercase tracking-wider font-medium">Preferred Venue</label>
                  <select
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-konica-gold transition-colors text-sm appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%22//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23D4AF37%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7rem top 50%', backgroundSize: '.65rem auto' }}
                  >
                    <option value="Not Sure" className="bg-[#0c0c0c]">Not Sure Yet</option>
                    <option value="The Grand Ballroom" className="bg-[#0c0c0c]">The Grand Ballroom (300-1500 guests)</option>
                    <option value="The Courtyard" className="bg-[#0c0c0c]">The Courtyard (60-80 guests)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white py-4 px-8 flex items-center justify-center gap-3 transition-colors duration-300 font-semibold tracking-widest text-xs uppercase"
                >
                  <MessageCircle size={18} />
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
