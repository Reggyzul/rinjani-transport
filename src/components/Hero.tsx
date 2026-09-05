import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquare, Car, Sparkles, MapPin } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { openWhatsApp } from '../utils/whatsapp';

interface HeroProps {
  onRentClick: () => void;
  lang: 'ID' | 'EN';
}

export default function Hero({ onRentClick, lang }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const slides = [
    {
      id: 'sembalun',
      title: lang === 'EN' ? 'EXPLORE THE MAJESTIC SEMBALUN & RINJANI' : 'JELAJAHI PESONA SEMBALUN & GUNUNG RINJANI',
      subtitle: lang === 'EN' 
        ? 'Experience unforgettable mountain views, cool highland air, and scenic valleys with Rinjani Transport.'
        : 'Nikmati panorama pegunungan nan megah, udara sejuk lembah, dan bukit eksotis di Sembalun bersama Rinjani Transport.',
      image: '/hero_bromo.png',
      location: 'Sembalun, Lombok Timur',
      waMsg: 'Halo Rinjani Transport, saya ingin konsultasi mengenai paket wisata Sembalun & perbukitan di Lombok.'
    },
    {
      id: 'benang-kelambu',
      title: lang === 'EN' ? 'REFRESHING BENANG KELAMBU WATERFALL' : 'KESEJUKAN ALAMI AIR TERJUN BENANG KELAMBU',
      subtitle: lang === 'EN'
        ? 'Discover the refreshing beauty of natural water curtains enveloped by lush tropical forest.'
        : 'Rasakan kesegaran tirai air alami di tengah tebing hijau asri bersama driver lokal berpengalaman kami.',
      image: '/hero_tumpak.png',
      location: 'Benang Kelambu, Lombok Tengah',
      waMsg: 'Halo Rinjani Transport, saya tertarik dengan tour Air Terjun Benang Kelambu. Mohon informasi ketersediaan armadanya.'
    },
    {
      id: 'tetebatu',
      title: lang === 'EN' ? 'TRANQUIL TETEBATU HERITAGE & MONKEY FOREST' : 'EKSOTISME PEDESAAN TETEBATU & MONKEY FOREST',
      subtitle: lang === 'EN'
        ? 'Immerse in peaceful rice terraces and pristine nature at the foot of Mount Rinjani.'
        : 'Eksplorasi hamparan sawah terasering, perkebunan alami, dan satwa primata di kaki Gunung Rinjani.',
      image: '/hero_batu.png',
      location: 'Tetebatu, Lombok Timur',
      waMsg: 'Halo Rinjani Transport, saya ingin bertanya tentang paket tour Tetebatu & Monkey Forest.'
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentSlideIndex];

  const handleConsultation = () => {
    openWhatsApp(currentSlide.waMsg);
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gray-950 font-sans pt-24 sm:pt-28 pb-14 sm:pb-20"
    >
      {/* Background Image Carousel Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-black/65 backdrop-brightness-90" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto flex flex-col items-center justify-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 flex flex-col items-center"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-luxury-gold shadow-lg">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span className="font-display font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                YOUR JOURNEY, OUR PRIORITY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-md">
              {currentSlide.title}
            </h1>

            {/* Subtitle description */}
            <p className="font-sans text-gray-200 text-sm sm:text-lg max-w-2xl leading-relaxed drop-shadow">
              {currentSlide.subtitle}
            </p>

            {/* Destination Pill */}
            <div className="inline-flex items-center gap-1.5 text-xs text-luxury-gold bg-white/10 backdrop-blur px-3.5 py-1 rounded-full border border-white/10">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentSlide.location}</span>
            </div>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-luxury-gold hover:bg-[#b8860b] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl flex items-center justify-center gap-2.5 cursor-pointer"
                id="hero-book-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.hero_cta_wa}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onRentClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
                id="hero-cars-btn"
              >
                <Car className="w-4 h-4" />
                <span>{t.hero_cta_cars}</span>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Slider Left / Right arrows */}
      <div className="absolute inset-y-0 left-4 sm:left-8 z-30 flex items-center">
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all duration-300 cursor-pointer group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 sm:right-8 z-30 flex items-center">
        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all duration-300 cursor-pointer group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Carousel Dots indicator */}
      <div className="absolute bottom-6 z-30 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlideIndex 
                ? 'w-8 h-2 bg-luxury-gold' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
