import React from 'react';
import { Headset, Phone, MapPin, Instagram } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { openWhatsApp, DEFAULT_WA_NUMBER } from '../utils/whatsapp';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
}

export default function Footer({ onNavClick, lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="contact" className="bg-luxury-black text-white pt-14 pb-8 border-t border-white/5 relative overflow-hidden font-sans">
      
      {/* Absolute background accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Footer grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
          
          {/* Column 1: Brand & Office Address */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex items-center justify-center shadow-lg border border-luxury-gold/30 bg-white shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Rinjani Transport Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl text-white tracking-tight">
                  RINJANI TRANSPORT
                </span>
                <span className="text-[10px] text-luxury-gold uppercase font-bold tracking-widest">
                  Your Journey, Our Priority
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
              {t.footer_desc}
            </p>

            <div className="text-xs text-gray-400 font-sans space-y-2.5">
              <a 
                href="https://www.google.com/maps?q=-8.2610326,116.4259218&z=17&hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-luxury-gold transition-colors group"
                title="Buka lokasi di Google Maps"
              >
                <MapPin className="w-4.5 h-4.5 text-luxury-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline underline-offset-2">{t.footer_office}</span>
              </a>
              <p>©2026 Rinjani Transport. {t.footer_rights}</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-luxury-gold uppercase border-l-2 border-luxury-gold pl-2">
              Menu
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-gray-400">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_about}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('cars')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_cars}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('tours')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_tours}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('extra-services')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_services}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('steps')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_steps}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details & Interactive Google Map */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-luxury-gold uppercase border-l-2 border-luxury-gold pl-2">
              {t.footer_hubungi}
            </h4>
            
            <div className="space-y-4 text-xs font-sans text-gray-400">
              {/* WhatsApp Fast Response */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Headset className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">WhatsApp Fast Response</p>
                  <button 
                    onClick={() => openWhatsApp()}
                    className="text-sm font-display font-bold text-white hover:text-luxury-gold mt-0.5 block cursor-pointer text-left"
                  >
                    0859-6428-0931
                  </button>
                </div>
              </div>

              {/* Direct Call Tel */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">Direct Call</p>
                  <a href={`tel:+${DEFAULT_WA_NUMBER}`} className="font-semibold text-white mt-0.5 block hover:text-luxury-gold">
                    0859-6428-0931
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed (New Coordinates) */}
            <div className="pt-2">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg w-full h-36 bg-white/5 relative group">
                <iframe 
                  src="https://maps.google.com/maps?q=-8.2610326,116.4259218&z=17&hl=id&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rinjani Transport Lombok Location Map"
                ></iframe>
                <a
                  href="https://www.google.com/maps?q=-8.2610326,116.4259218&z=17&hl=id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 bg-luxury-black/90 hover:bg-black text-luxury-gold hover:text-white text-[10px] font-display font-bold px-2.5 py-1 rounded-lg border border-luxury-gold/30 shadow transition-all flex items-center gap-1 backdrop-blur-sm"
                  title="Buka titik lokasi di Google Maps"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Buka Google Maps</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>©2026 Rinjani Transport. {t.footer_rights}</p>
          <p className="text-gray-400">{t.footer_disclaimer}</p>
        </div>

      </div>
    </footer>
  );
}
