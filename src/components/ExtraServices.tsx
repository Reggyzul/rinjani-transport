import React from 'react';
import { motion } from 'motion/react';
import { Plane, Hotel, Anchor, Compass, Palmtree, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface ExtraServicesProps {
  lang: 'ID' | 'EN';
}

export default function ExtraServices({ lang }: ExtraServicesProps) {
  const services = [
    {
      id: 'airport-transfer',
      icon: <Plane className="w-7 h-7 text-[#2563eb]" />,
      badge: lang === 'EN' ? 'Airport Transfer' : 'Bandara Lombok',
      title: lang === 'EN' ? 'Airport Transfer' : 'Airport Transfer (Bandara LOP)',
      subtitle: lang === 'EN' ? 'Lombok International Airport (LOP)' : 'Bandara Internasional Lombok ke Hotel / Destinasi',
      description: lang === 'EN'
        ? 'Punctual pick-up and drop-off to and from Lombok International Airport with dedicated professional drivers ready to take you to your hotel or destination.'
        : 'Layanan antar-jemput dari dan menuju Bandara Internasional Lombok dengan driver yang siap mengantarkan Anda ke hotel maupun destinasi tujuan.',
      highlights: [
        lang === 'EN' ? '24/7 Flight Schedule Monitoring' : 'Monitoring Jadwal Penerbangan 24 Jam',
        lang === 'EN' ? 'Luggage Assistance Included' : 'Bantuan Bagasi & Pengemudi Ramah',
        lang === 'EN' ? 'Direct Hotel Drop-off' : 'Antar Langsung ke Depan Pintu Hotel'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: 'Halo Rinjani Transport, saya ingin memesan layanan Airport Transfer Bandara Internasional Lombok. Mohon info ketersediaan armada dan tarifnya.'
    },
    {
      id: 'hotel-transfer',
      icon: <Hotel className="w-7 h-7 text-[#d97706]" />,
      badge: lang === 'EN' ? 'Hotel Transfer' : 'Antar-Jemput Hotel',
      title: lang === 'EN' ? 'Hotel Transfer' : 'Hotel Transfer',
      subtitle: lang === 'EN' ? 'Resort, Hotel & Villa Transfers' : 'Hotel ke Bandara, Pelabuhan, & Destinasi',
      description: lang === 'EN'
        ? 'Comfortable transfers from your hotel to the airport, harbors, or tourist attractions across Lombok without hassle.'
        : 'Antar-jemput dari hotel menuju bandara, pelabuhan, atau destinasi wisata di Lombok dengan kendaraan yang nyaman dan bersih.',
      highlights: [
        lang === 'EN' ? 'Flexible Pickup Times' : 'Jam Penjemputan Fleksibel Sesuai Jadwal Anda',
        lang === 'EN' ? 'Clean & Chilled AC Fleet' : 'Armada Bersih, Nyaman, & AC Dingin',
        lang === 'EN' ? 'Safe and Reliable Service' : 'Pelayanan Aman, Santun, & Terpercaya'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: 'Halo Rinjani Transport, saya membutuhkan layanan Hotel Transfer di Lombok. Mohon informasi tarif dan penjemputannya.'
    },
    {
      id: 'pelabuhan-transfer',
      icon: <Anchor className="w-7 h-7 text-emerald-600" />,
      badge: lang === 'EN' ? 'Harbor Transfer' : 'Pelabuhan & Gili',
      title: lang === 'EN' ? 'Harbor Transfer' : 'Pelabuhan Transfer',
      subtitle: lang === 'EN' ? 'Bangsal, Lembar & Kayangan Ports' : 'Rute Pelabuhan Bangsal (Kawasan Gili) & Lainnya',
      description: lang === 'EN'
        ? 'Serving reliable transfers to and from various Lombok harbors, including the popular Bangsal route for tourists heading to the Gili Islands.'
        : 'Melayani perjalanan menuju maupun dari berbagai pelabuhan, termasuk rute Bangsal untuk wisatawan yang akan melanjutkan perjalanan ke kawasan Gili.',
      highlights: [
        lang === 'EN' ? 'Special Route to Bangsal (Gili Islands)' : 'Spesialis Rute Pelabuhan Bangsal (Gili Trawangan, Meno, Air)',
        lang === 'EN' ? 'Also Serving Lembar & Kayangan Ports' : 'Melayani Pelabuhan Lembar & Kayangan',
        lang === 'EN' ? 'Spacious Luggage Trunk' : 'Kapasitas Bagasi Cukup untuk Koper Wisatawan'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: 'Halo Rinjani Transport, saya ingin memesan layanan Pelabuhan Transfer (Bangsal / Gili / Pelabuhan lainnya). Mohon info lengkapnya.'
    },
    {
      id: 'one-way-transport',
      icon: <Compass className="w-7 h-7 text-purple-600" />,
      badge: lang === 'EN' ? 'Point-to-Point' : 'Satu Arah Fleksibel',
      title: lang === 'EN' ? 'One Way Transport' : 'One Way Transport',
      subtitle: lang === 'EN' ? 'Direct Destination Drop' : 'Transportasi Satu Arah Tanpa Sewa Seharian',
      description: lang === 'EN'
        ? 'One-way transport service tailored to your destination, ideal for travelers needing rides from one point to another without full-day rental commitments.'
        : 'Layanan transportasi satu arah sesuai tujuan, cocok bagi wisatawan yang membutuhkan kendaraan dari satu lokasi ke lokasi lainnya tanpa harus menyewa kendaraan selama seharian.',
      highlights: [
        lang === 'EN' ? 'Economical & Direct Drop' : 'Lebih Hemat & Efisien Sesuai Kebutuhan',
        lang === 'EN' ? 'No Full-day Rental Needed' : 'Tidak Perlu Komitmen Sewa 1 Hari Penuh',
        lang === 'EN' ? 'Custom Route Anywhere in Lombok' : 'Bisa Menjangkau Berbagai Sudut Lombok'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: 'Halo Rinjani Transport, saya membutuhkan layanan One Way Transport dari [Lokasi Jemput] ke [Lokasi Tujuan]. Mohon informasi tarifnya.'
    },
    {
      id: 'wisata-tour-lombok',
      icon: <Palmtree className="w-7 h-7 text-amber-600" />,
      badge: lang === 'EN' ? 'Island Exploration' : 'Tour Wisata',
      title: lang === 'EN' ? 'Wisata & Tour Lombok' : 'Wisata & Tour Lombok',
      subtitle: lang === 'EN' ? 'Highlands, Waterfalls & Beaches' : 'Eksplorasi Destinasi Populer Bersama Keluarga/Rombongan',
      description: lang === 'EN'
        ? 'Dedicated transportation to explore popular destinations in Lombok, perfect for both private individual trips and family/group vacations.'
        : 'Transportasi untuk menjelajahi berbagai destinasi wisata populer di Lombok, baik untuk perjalanan pribadi maupun bersama keluarga/rombongan.',
      highlights: [
        lang === 'EN' ? 'Sembalun, Tetebatu, Waterfalls & Beaches' : 'Sembalun, Tetebatu, Air Terjun & Pantai Eksotis',
        lang === 'EN' ? 'Flexible Itinerary on Request' : 'Rute & Jadwal Fleksibel Menyesuaikan Keinginan Anda',
        lang === 'EN' ? 'Local Driver with Destination Insights' : 'Driver Lokal yang Mengetahui Spot Terbaik & Rekomendasi Kuliner'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: 'Halo Rinjani Transport, saya ingin konsultasi paket Wisata & Tour Lombok untuk keluarga/rombongan. Mohon rekomendasi rutenya.'
    }
  ];

  const handleWhatsApp = (waMessage: string) => {
    openWhatsApp(waMessage);
  };

  return (
    <section id="extra-services" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-luxury-gold tracking-widest uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block">
            {lang === 'EN' ? 'ADDITIONAL SERVICES' : 'LAYANAN TAMBAHAN'}
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'COMPLETE TRANSPORT SOLUTIONS' : 'LAYANAN PERJALANAN LOMBOK'}
          </h2>

          <div className="w-16 h-1 bg-luxury-gold rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {lang === 'EN'
              ? 'Enjoy convenient transfers and customized transportation options tailored to your itinerary in Lombok.'
              : 'Nikmati kemudahan antar-jemput dan layanan transportasi fleksibel yang disesuaikan dengan rencana perjalanan Anda di Lombok.'}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-3xl p-6 sm:p-8 bg-white border border-gray-100 hover:border-luxury-gold/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-amber-50 flex items-center justify-center transition-colors border border-gray-100 group-hover:border-amber-200">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-display font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-luxury-gold border border-amber-200/50">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-luxury-gold transition-colors text-left">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mt-0.5 text-left">
                    {service.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed text-left">
                  {service.description}
                </p>

                {/* Highlights checkmarks */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  {service.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                      <span className="text-left">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleWhatsApp(service.waMessage)}
                  className="w-full py-3 px-4 rounded-xl bg-gray-900 hover:bg-luxury-gold text-white font-display font-bold text-xs uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{service.priceText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
