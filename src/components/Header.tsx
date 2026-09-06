import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../utils/translations';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  Compass, 
  Car, 
  Briefcase,
  ArrowRightLeft
} from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  currentPage: 'home' | 'about' | 'tours' | 'rentals' | 'gallery';
  setCurrentPage: (page: 'home' | 'about' | 'tours' | 'rentals' | 'gallery') => void;
  activeSection: string;
  onBookingClick: () => void;
  onOneWayClick: () => void;
}

export default function Header({
  onNavClick,
  lang,
  setLang,
  currentPage,
  setCurrentPage,
  activeSection,
  onBookingClick,
  onOneWayClick
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showLayananDropdown, setShowLayananDropdown] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageClick = (pageId: 'home' | 'about' | 'tours' | 'rentals' | 'gallery') => {
    setCurrentPage(pageId);
    onNavClick(pageId);
    setIsOpen(false);
    setShowLayananDropdown(false);
  };

  const handleSectionClick = (sectionId: string) => {
    setCurrentPage('home');
    setTimeout(() => {
      onNavClick(sectionId);
    }, 100);
    setIsOpen(false);
    setShowLayananDropdown(false);
  };

  const servicesList = [
    {
      id: 'tours',
      label: lang === 'EN' ? 'Lombok Tour Packages' : 'Paket Wisata Lombok',
      desc: lang === 'EN' ? 'Sembalun, Tetebatu & Waterfalls' : 'Sembalun, Tetebatu & Air Terjun',
      icon: Compass,
      action: () => handlePageClick('tours')
    },
    {
      id: 'rentals',
      label: lang === 'EN' ? 'Car Rental Fleet' : 'Pilihan Mobil',
      desc: lang === 'EN' ? 'Avanza, Innova, Hiace Commuter & Premio' : 'Avanza, Innova, Hiace Commuter & Premio',
      icon: Car,
      action: () => handlePageClick('rentals')
    },
    {
      id: 'extra-services',
      label: lang === 'EN' ? 'Transfer Services' : 'Layanan Transfer',
      desc: lang === 'EN' ? 'Airport, Hotel & Harbor' : 'Bandara, Hotel & Pelabuhan Bangsal',
      icon: Briefcase,
      action: () => handleSectionClick('extra-services')
    },
    {
      id: 'oneway',
      label: lang === 'EN' ? 'One Way (Senaru Routes)' : 'One Way (9 Rute Senaru PP)',
      desc: lang === 'EN' ? 'Bangsal, Senggigi, Airport, Kuta & more' : 'Bangsal, Senggigi, Airport, Kuta, Lembar, dll',
      icon: ArrowRightLeft,
      action: () => {
        onOneWayClick();
        setShowLayananDropdown(false);
      }
    }
  ];

  const isLayananActive = currentPage === 'tours' || currentPage === 'rentals' || (currentPage === 'home' && activeSection === 'extra-services');

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-sm"
    >
      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2 border-b border-slate-100/80 shadow-sm'
            : 'bg-white py-2.5 border-b border-slate-100/80 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[68px]">
            
            {/* Logo */}
            <div 
              onClick={() => handlePageClick('home')}
              className="flex items-center cursor-pointer group py-1 gap-2.5 sm:gap-3"
              id="header-logo"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform border border-amber-300/60 bg-white shrink-0 p-0.5">
                <img 
                  src="/logo.png" 
                  alt="Rinjani Transport Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex flex-col text-left justify-center">
                <span className="font-display font-black text-base sm:text-xl text-gray-900 leading-none tracking-tight group-hover:text-luxury-gold transition-colors">
                  RINJANI TRANSPORT
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-luxury-gold uppercase tracking-[0.16em] mt-1">
                  Lombok Tour & Travel
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
              {/* Beranda */}
              <button
                onClick={() => handlePageClick('home')}
                className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 ${
                  currentPage === 'home' && activeSection === 'home'
                    ? 'text-luxury-gold'
                    : 'text-gray-600 hover:text-luxury-gold'
                }`}
              >
                {t.nav_home}
                {currentPage === 'home' && activeSection === 'home' && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              {/* Tentang Kami */}
              <button
                onClick={() => handlePageClick('about')}
                className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 ${
                  currentPage === 'about'
                    ? 'text-luxury-gold'
                    : 'text-gray-600 hover:text-luxury-gold'
                }`}
              >
                {lang === 'EN' ? 'About Us' : 'Tentang Kami'}
                {currentPage === 'about' && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              {/* LAYANAN DROPDOWN MENU */}
              <div 
                className="relative"
                onMouseEnter={() => setShowLayananDropdown(true)}
                onMouseLeave={() => setShowLayananDropdown(false)}
              >
                <button
                  onClick={() => setShowLayananDropdown(!showLayananDropdown)}
                  className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 flex items-center gap-1.5 ${
                    isLayananActive
                      ? 'text-luxury-gold'
                      : 'text-gray-600 hover:text-luxury-gold'
                  }`}
                >
                  <span>{lang === 'EN' ? 'Services' : 'Layanan'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showLayananDropdown ? 'rotate-180 text-luxury-gold' : ''}`} />
                  
                  {isLayananActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>

                {/* Dropdown Menu Floating Box */}
                <AnimatePresence>
                  {showLayananDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-2 border border-gray-100 z-50 overflow-hidden"
                    >
                      <div className="text-[10px] font-bold text-gray-400 uppercase px-3 py-1.5 tracking-wider border-b border-gray-100 mb-1">
                        {lang === 'EN' ? 'Select Service' : 'Pilihan Layanan Kami'}
                      </div>

                      {servicesList.map((srv) => {
                        const IconComp = srv.icon;
                        const isSrvActive = 
                          (srv.id === 'tours' && currentPage === 'tours') ||
                          (srv.id === 'rentals' && currentPage === 'rentals') ||
                          (srv.id === 'extra-services' && currentPage === 'home' && activeSection === 'extra-services');

                        return (
                          <button
                            key={srv.id}
                            onClick={srv.action}
                            className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center gap-3 cursor-pointer group ${
                              isSrvActive ? 'bg-amber-50 text-luxury-gold' : 'hover:bg-gray-50 text-gray-700'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                              isSrvActive ? 'bg-luxury-gold text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-amber-100 group-hover:text-luxury-gold'
                            }`}>
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-display font-extrabold text-xs text-gray-900 group-hover:text-luxury-gold transition-colors">
                                {srv.label}
                              </div>
                              <div className="text-[10px] text-gray-500 font-sans">
                                {srv.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Galeri (Gallery Page) */}
              <button
                onClick={() => handlePageClick('gallery')}
                className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 ${
                  currentPage === 'gallery'
                    ? 'text-luxury-gold'
                    : 'text-gray-600 hover:text-luxury-gold'
                }`}
              >
                {lang === 'EN' ? 'Gallery' : 'Galeri'}
                {currentPage === 'gallery' && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              {/* Kontak & Lokasi */}
              <button
                onClick={() => handleSectionClick('contact')}
                className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 ${
                  currentPage === 'home' && activeSection === 'contact'
                    ? 'text-luxury-gold'
                    : 'text-gray-600 hover:text-luxury-gold'
                }`}
              >
                {t.nav_contact}
                {currentPage === 'home' && activeSection === 'contact' && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </nav>

            {/* Right Utilities (Language, solid Blue CTA, Hamburger) */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="bg-luxury-gold hover:bg-[#b8860b] text-white font-display font-semibold text-xs py-2 px-4 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  id="language-btn"
                  aria-label="Select Language"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang === 'EN' ? 'EN' : 'ID'}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                
                <AnimatePresence>
                  {showLangDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl py-1.5 border border-gray-100 z-50 animate-fade-in"
                    >
                      <button
                        onClick={() => {
                          setLang('EN');
                          setShowLangDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs font-display font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <span className="font-semibold">English (EN)</span>
                        {lang === 'EN' && <span className="w-2 h-2 rounded-full bg-luxury-gold"></span>}
                      </button>
                      <button
                        onClick={() => {
                          setLang('ID');
                          setShowLangDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs font-display font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <span>Bahasa Indonesia</span>
                        {lang === 'ID' && <span className="w-2 h-2 rounded-full bg-luxury-gold"></span>}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* BOOKING SEKARANG Solid Blue CTA Button */}
              <button
                onClick={onBookingClick}
                className="bg-[#2563eb] hover:bg-blue-700 text-white font-display font-extrabold text-xs uppercase py-2.5 px-5 rounded-xl transition-all shadow-md cursor-pointer shrink-0 hidden md:block"
              >
                {lang === 'EN' ? 'BOOKING NOW' : 'BOOKING SEKARANG'}
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-luxury-gold transition-colors cursor-pointer rounded-full"
                id="mobile-menu-btn"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 text-left">
              {/* Mobile Beranda */}
              <button
                onClick={() => handlePageClick('home')}
                className={`block w-full text-left px-4 py-2.5 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'home' && activeSection === 'home'
                    ? 'bg-amber-50 text-luxury-gold border-l-4 border-luxury-gold pl-3'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav_home}
              </button>

              {/* Mobile Tentang Kami */}
              <button
                onClick={() => handlePageClick('about')}
                className={`block w-full text-left px-4 py-2.5 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'about'
                    ? 'bg-amber-50 text-luxury-gold border-l-4 border-luxury-gold pl-3'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {lang === 'EN' ? 'About Us' : 'Tentang Kami'}
              </button>

              {/* Mobile Layanan (Collapsible Dropdown Group) */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
                  className={`w-full text-left px-4 py-2.5 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                    isLayananActive
                      ? 'bg-amber-50 text-luxury-gold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{lang === 'EN' ? 'Services' : 'Layanan'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLayananOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileLayananOpen && (
                  <div className="pl-4 space-y-1 border-l-2 border-amber-200 ml-4 py-1">
                    {servicesList.map((srv) => {
                      const IconComp = srv.icon;
                      return (
                        <button
                          key={srv.id}
                          onClick={srv.action}
                          className="w-full text-left px-3 py-2 text-xs font-display font-semibold text-gray-700 hover:text-luxury-gold flex items-center gap-2.5 cursor-pointer rounded-lg hover:bg-amber-50/50"
                        >
                          <IconComp className="w-4 h-4 text-luxury-gold" />
                          <span>{srv.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Galeri */}
              <button
                onClick={() => handlePageClick('gallery')}
                className={`block w-full text-left px-4 py-2.5 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'gallery'
                    ? 'bg-amber-50 text-luxury-gold border-l-4 border-luxury-gold pl-3'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {lang === 'EN' ? 'Gallery' : 'Galeri'}
              </button>

              {/* Mobile Kontak & Lokasi */}
              <button
                onClick={() => handleSectionClick('contact')}
                className={`block w-full text-left px-4 py-2.5 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'home' && activeSection === 'contact'
                    ? 'bg-amber-50 text-luxury-gold border-l-4 border-luxury-gold pl-3'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav_contact}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="pt-3 pb-1 border-t border-gray-100 my-2">
                <div className="px-4 py-1 text-[11px] font-display font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang === 'EN' ? 'Language / Bahasa' : 'Bahasa / Language'}</span>
                </div>
                <div className="flex items-center gap-2 px-4 pt-1.5">
                  <button
                    onClick={() => {
                      setLang('EN');
                      setIsOpen(false);
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-display font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      lang === 'EN'
                        ? 'bg-luxury-gold text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>English</span>
                    {lang === 'EN' && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </button>
                  <button
                    onClick={() => {
                      setLang('ID');
                      setIsOpen(false);
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-display font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      lang === 'ID'
                        ? 'bg-luxury-gold text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>Indonesia</span>
                    {lang === 'ID' && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </button>
                </div>
              </div>

              {/* Mobile Booking Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    onBookingClick();
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-display font-extrabold text-xs uppercase py-3 rounded-xl transition-all shadow-md cursor-pointer text-center"
                >
                  {lang === 'EN' ? 'BOOKING NOW' : 'BOOKING SEKARANG'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
