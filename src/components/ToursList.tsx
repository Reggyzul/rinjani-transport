import React, { useState } from 'react';
import { Clock, Compass, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { TOUR_PACKAGES, TourPackage } from '../data/tours';
import TourDetailModal from './TourDetailModal';
import { motion } from 'motion/react';

interface ToursListProps {
  lang: 'ID' | 'EN';
}

export default function ToursList({ lang }: ToursListProps) {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  return (
    <section id="tours" className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-luxury-gold tracking-widest uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block">
            {lang === 'EN' ? 'LOMBOK TOUR DESTINATIONS' : 'DESTINASI WISATA LOMBOK'}
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'EXPLORE POPULAR LOMBOK DESTINATIONS' : 'DESTINASI WISATA YANG DILAYANI'}
          </h2>
          
          <div className="w-16 h-1 bg-luxury-gold rounded-full mx-auto my-3" />
          
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {lang === 'EN' 
              ? 'Discover the natural wonders of Lombok from Sembalun highlands, refreshing waterfalls, to scenic hills at the foot of Mount Rinjani.' 
              : 'Jelajahi keindahan alam Lombok mulai dari air terjun asri, pedesaan sejuk Tetebatu, hingga panorama perbukitan spektakuler Sembalun.'}
          </p>
        </div>

        {/* Tour Cards Grid: 7 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={pkg.id}
              className="bg-white rounded-3xl shadow-sm border border-gray-200/80 hover:border-luxury-gold/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden"
            >
              {/* Image Container & Floating Badge */}
              <div 
                className="relative overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer"
                onClick={() => setSelectedTour(pkg)}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Badge on Top Right */}
                {pkg.badge && (
                  <span className="absolute top-4 right-4 bg-luxury-gold text-white px-3 py-1 rounded-lg font-display font-extrabold text-[11px] uppercase shadow-md tracking-wider">
                    {pkg.badge}
                  </span>
                )}

                {/* Duration on Bottom Left */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>{lang === 'EN' ? pkg.durationEn || pkg.duration : pkg.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow text-left space-y-3">
                
                {/* Package Title */}
                <h3 
                  onClick={() => setSelectedTour(pkg)}
                  className="font-display font-bold text-xl text-gray-900 group-hover:text-luxury-gold transition-colors cursor-pointer leading-snug"
                >
                  {lang === 'EN' ? pkg.titleEn || pkg.title : pkg.title}
                </h3>

                {/* Price Subtitle */}
                <p className="font-display font-semibold text-xs uppercase tracking-wider text-luxury-gold">
                  {lang === 'EN' ? pkg.priceTextEn || pkg.priceText : pkg.priceText}
                </p>

                {/* Description Text */}
                <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">
                  {lang === 'EN' ? pkg.descriptionEn || pkg.description : pkg.description}
                </p>

                {/* Package Tier Badge Row */}
                <div className="bg-amber-50/50 rounded-2xl p-3 border border-amber-100/80 space-y-1.5 mt-auto">
                  <span className="font-display font-bold text-[10px] uppercase text-luxury-gold tracking-wider block">
                    {lang === 'EN' ? 'Available Package Tiers:' : 'Tersedia Pilihan Paket:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
                    <span className="bg-white px-2 py-0.5 rounded-md border border-amber-200 text-gray-700">
                      Standard
                    </span>
                    <span className="bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-300 text-luxury-gold">
                      Premium
                    </span>
                    <span className="bg-luxury-gold text-white px-2 py-0.5 rounded-md">
                      VIP All-In
                    </span>
                  </div>
                </div>

                {/* Divider Line */}
                <hr className="border-t border-gray-100 pt-1" />

                {/* Card Footer Row */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedTour(pkg)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-luxury-gold text-white font-display font-bold text-xs uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow"
                  >
                    <span>{lang === 'EN' ? 'View Details & Book' : 'Lihat Detail & Pesan'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal Component */}
      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        lang={lang}
      />
    </section>
  );
}
