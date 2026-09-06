import React, { useState } from 'react';
import { Clock, Compass, MapPin, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Filter } from 'lucide-react';
import { TOUR_PACKAGES, TourPackage, LANDING_PAGE_PACKAGES } from '../data/tours';
import TourDetailModal from './TourDetailModal';
import { motion } from 'motion/react';

interface ToursListProps {
  lang: 'ID' | 'EN';
  isLanding?: boolean;
  onViewAllTours?: () => void;
}

export default function ToursList({ lang, isLanding = false, onViewAllTours }: ToursListProps) {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'flagship' | 'nature'>('all');

  const displayedPackages = isLanding 
    ? LANDING_PAGE_PACKAGES 
    : (activeFilter === 'all' 
        ? TOUR_PACKAGES 
        : activeFilter === 'flagship' 
          ? TOUR_PACKAGES.filter(p => p.category === 'flagship') 
          : TOUR_PACKAGES.filter(p => p.category === 'nature'));

  return (
    <section id="tours" className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-luxury-gold tracking-widest uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block">
            {isLanding
              ? (lang === 'EN' ? 'FEATURED TOUR PACKAGES' : 'PAKET TOUR UNGGULAN')
              : (lang === 'EN' ? 'COMPLETE TOUR PACKAGES AND DESTINATIONS' : 'PAKET TOUR DAN DESTINASI WISATA LOMBOK')}
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {isLanding
              ? (lang === 'EN' ? 'EXCLUSIVE LOMBOK TOUR PACKAGES' : 'PILIHAN PAKET TOUR LOMBOK')
              : (lang === 'EN' ? 'EXPLORE ALL TOUR PACKAGES AND HIGHLIGHTS' : 'SEMUA PAKET TOUR DAN DESTINASI WISATA')}
          </h2>
          
          <div className="w-16 h-1 bg-luxury-gold rounded-full mx-auto my-3" />
          
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {isLanding
              ? (lang === 'EN'
                  ? 'Private, hassle-free travel experiences from whale shark snorkeling to Mount Rinjani summit expeditions, with complete hotel pick-up and drop-off in Lombok.'
                  : 'Pengalaman wisata privat terbaik mulai dari snorkeling hiu paus hingga ekspedisi puncak Gunung Rinjani, dengan fasilitas lengkap antar-jemput langsung dari hotel Anda di Lombok.')
              : (lang === 'EN'
                  ? 'Discover our full collection of mountain trekking expeditions, island adventures, and scenic nature day trips in Lombok.'
                  : 'Jelajahi seluruh pilihan paket pendakian gunung, wisata bahari hiu paus, dan perjalanan wisata alam sejuk di Lombok.')}
          </p>
        </div>

        {/* Filter Tabs for Dedicated Page */}
        {!isLanding && (
          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
                activeFilter === 'all'
                  ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-luxury-gold'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>{lang === 'EN' ? `All Packages (${TOUR_PACKAGES.length})` : `Semua Paket (${TOUR_PACKAGES.length})`}</span>
            </button>

            <button
              onClick={() => setActiveFilter('flagship')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
                activeFilter === 'flagship'
                  ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-luxury-gold'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'EN' ? `Flagship Packages (${TOUR_PACKAGES.filter(p => p.category === 'flagship').length})` : `Paket Tour Utama (${TOUR_PACKAGES.filter(p => p.category === 'flagship').length})`}</span>
            </button>

            <button
              onClick={() => setActiveFilter('nature')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
                activeFilter === 'nature'
                  ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-luxury-gold'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'EN' ? `Nature Day Tours (${TOUR_PACKAGES.filter(p => p.category === 'nature').length})` : `Destinasi Wisata Alam (${TOUR_PACKAGES.filter(p => p.category === 'nature').length})`}</span>
            </button>
          </div>
        )}

        {/* Tour Cards Grid: 4 items on landing page, 2x2 or 4 grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isLanding ? 'lg:grid-cols-4 gap-6' : 'lg:grid-cols-3 gap-8'}`}>
          {displayedPackages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={pkg.id}
              className="bg-white rounded-3xl shadow-sm border border-gray-200/80 hover:border-luxury-gold/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden"
            >
              {/* Image Container and Floating Badge */}
              <div 
                className="relative overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer"
                onClick={() => setSelectedTour(pkg)}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge on Top Right */}
                {pkg.badge && (
                  <span className="absolute top-3.5 right-3.5 bg-luxury-gold text-white px-2.5 py-1 rounded-lg font-display font-extrabold text-[10px] uppercase shadow-md tracking-wider">
                    {pkg.badge}
                  </span>
                )}

                {/* Duration on Bottom Left */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs font-semibold bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>{lang === 'EN' ? pkg.durationEn || pkg.duration : pkg.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow text-left space-y-3">
                
                {/* Package Title */}
                <h3 
                  onClick={() => setSelectedTour(pkg)}
                  className="font-display font-bold text-lg sm:text-xl text-gray-900 group-hover:text-luxury-gold transition-colors cursor-pointer leading-snug line-clamp-2"
                >
                  {lang === 'EN' ? pkg.titleEn || pkg.title : pkg.title}
                </h3>

                {/* Price Subtitle */}
                <p className="font-display font-semibold text-xs uppercase tracking-wider text-luxury-gold">
                  {lang === 'EN' ? pkg.priceTextEn || pkg.priceText : pkg.priceText}
                </p>

                {/* Description Text */}
                <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-3">
                  {lang === 'EN' ? pkg.descriptionEn || pkg.description : pkg.description}
                </p>

                {/* Key Inclusions Snippet */}
                <div className="space-y-1 pt-1 border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    {lang === 'EN' ? 'Key Inclusions:' : 'Fasilitas Utama:'}
                  </span>
                  <div className="space-y-1">
                    {pkg.included.slice(0, 2).map((inc, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Row */}
                <div className="pt-2 mt-auto border-t border-gray-100">
                  <button
                    onClick={() => setSelectedTour(pkg)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-luxury-gold text-white font-display font-bold text-xs uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow"
                  >
                    <span>{lang === 'EN' ? 'View Details and Itinerary' : 'Lihat Detail dan Jadwal'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Packages Button on Landing Page */}
        {isLanding && onViewAllTours && (
          <div className="mt-12 text-center flex justify-center">
            <button
              onClick={onViewAllTours}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white border border-gray-200/80 hover:border-luxury-gold text-gray-800 hover:text-luxury-gold font-display font-semibold text-sm rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <span>{lang === 'EN' ? 'View All Tour Packages and Destinations' : 'Lihat Semua Pilihan Paket dan Destinasi'}</span>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-luxury-gold group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        )}

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
