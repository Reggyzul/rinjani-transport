import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface FaqSectionProps {
  lang: 'ID' | 'EN';
}

interface FaqItem {
  questionEn: string;
  questionId: string;
  answerEn: string;
  answerId: string;
  tagEn: string;
  tagId: string;
}

export const FAQS: FaqItem[] = [
  {
    tagEn: 'Airport Transfer',
    tagId: 'Antar Jemput Bandara',
    questionEn: 'How do I get from Lombok International Airport (LOP) to Senaru or Sembalun (Mount Rinjani)?',
    questionId: 'Bagaimana cara menuju Senaru atau Sembalun (Gunung Rinjani) dari Bandara Lombok (LOP)?',
    answerEn: 'Rinjani Transport provides direct, door-to-door private airport transfers from Lombok International Airport (LOP) directly to your homestay, hotel, or trekking basecamp in Senaru or Sembalun. The journey takes approximately 2.5 to 3 hours in a comfortable air-conditioned private vehicle with a professional licensed driver. We track your flight schedule 24/7 to ensure timely pickup without waiting fees.',
    answerId: 'Rinjani Transport menyediakan layanan antar-jemput privat door-to-door langsung dari Bandara Internasional Lombok (LOP) menuju hotel, homestay, atau basecamp pendakian Anda di Senaru maupun Sembalun. Perjalanan memakan waktu sekitar 2.5 hingga 3 jam menggunakan armada ber-AC yang nyaman dengan supir lokal berlisensi dan ramah. Kami memantau jadwal kedatangan penerbangan Anda selama 24 jam.',
  },
  {
    tagEn: 'Car Rental Inclusions',
    tagId: 'Fasilitas Rental Mobil',
    questionEn: 'What is included in the Lombok car rental with driver service?',
    questionId: 'Apa saja fasilitas yang termasuk dalam layanan sewa mobil dengan supir di Lombok?',
    answerEn: 'Our private car rental service includes a clean, chilled air-conditioned vehicle (Toyota Avanza, Innova Reborn, or Hiace Commuter/Premio), an experienced and licensed local driver who speaks English, fuel (BBM), and complete passenger comfort. We also offer All-In packages covering road tolls, parking fees, and driver meals for total peace of mind.',
    answerId: 'Layanan sewa mobil privat kami sudah mencakup kendaraan ber-AC bersih dan terawat (Toyota Avanza, Innova Reborn, atau Hiace Commuter/Premio), driver lokal berpengalaman dan berlisensi, bahan bakar (BBM), serta kenyamanan penuh selama perjalanan. Kami juga menyediakan paket All-In yang mencakup biaya parkir, tol, dan makan driver.',
  },
  {
    tagEn: 'Harbor & Gili Islands',
    tagId: 'Pelabuhan Bangsal & Gili',
    questionEn: 'Do you offer pickup and transfers between Bangsal Harbor and Senaru / Mount Rinjani?',
    questionId: 'Apakah melayani penjemputan dari Pelabuhan Bangsal menuju Senaru / Gunung Rinjani?',
    answerEn: 'Yes! Bangsal Harbor is the primary gateway for speedboats and public boats connecting Gili Trawangan, Gili Meno, and Gili Air. We specialize in point-to-point transfers connecting Bangsal Harbor, Teluk Nare, and Senaru / Sembalun (travel time ~1.5 to 2 hours). Our driver meets you right at the harbor terminal to assist with your backpacks and luggage.',
    answerId: 'Ya, tentu! Pelabuhan Bangsal adalah pintu gerbang utama perahu dan fast boat dari/menuju Gili Trawangan, Gili Meno, dan Gili Air. Kami melayani rute langsung Pelabuhan Bangsal, Teluk Nare, ke Senaru / Sembalun dengan estimasi waktu 1.5 - 2 jam. Driver kami siap menyambut langsung di dermaga untuk membantu koper dan tas carrier Anda.',
  },
  {
    tagEn: 'Rinjani Trekking',
    tagId: 'Pendakian Rinjani',
    questionEn: 'Can I store extra luggage safely during my Mount Rinjani trekking expedition?',
    questionId: 'Bisakah menitipkan koper/barang bawaan berlebih selama mendaki Gunung Rinjani?',
    answerEn: 'Absolutely. We offer complimentary safe luggage storage for our transfer guests while you trek Mount Rinjani. You can bring only your summit daypack, and our driver will return your stored luggage safely upon finishing your trek in Senaru, Sembalun, or drop it off at your next hotel anywhere in Lombok.',
    answerId: 'Sangat bisa! Kami menyediakan penitipan koper dan barang berharga yang aman tanpa biaya tambahan bagi pelanggan transportasi kami selama Anda mendaki Gunung Rinjani. Anda cukup membawa daypack ke puncak, dan driver kami akan mengantarkan barang Anda kembali setelah selesai pendakian.',
  },
  {
    tagEn: 'Custom Tours',
    tagId: 'Tour & Wisata Kustom',
    questionEn: 'What day tour destinations can be combined with Rinjani Transport in Lombok?',
    questionId: 'Destinasi wisata apa saja yang bisa dikunjungi bersama Rinjani Transport di Lombok?',
    answerEn: 'We offer customizable day tours including Sindang Gila & Tiu Kelep Waterfalls in Senaru, Sembalun Valley & Pergasingan Hill, Benang Kelambu & Benang Stokel Waterfalls, Tetebatu Rice Terraces & Monkey Forest, Lombok Wildlife Park in Sire Tanjung, Pink Beach, Kuta Mandalika, and Whale Shark snorkeling tours in Saleh Bay / Sumbawa.',
    answerId: 'Kami melayani rute wisata fleksibel meliputi Air Terjun Sindang Gila & Tiu Kelep Senaru, Panorama Lembah Sembalun & Bukit Pergasingan, Air Terjun Benang Kelambu & Benang Stokel, Persawahan Tetebatu & Monkey Forest, Lombok Wildlife Park di Sire Tanjung, Pantai Pink, Kuta Mandalika, serta wisata Hiu Paus Teluk Saleh.',
  },
  {
    tagEn: 'Booking & Payment',
    tagId: 'Cara Pesan & Pembayaran',
    questionEn: 'How do I book transport and what payment methods are accepted?',
    questionId: 'Bagaimana cara reservasi transportasi dan apa saja metode pembayarannya?',
    answerEn: 'Booking is simple and fast via our official WhatsApp or online reservation modal. Simply provide your travel date, pickup location, destination, and vehicle choice. We accept cash in Indonesian Rupiah (IDR), international currencies (USD, EUR, AUD), and direct bank transfers with transparent pricing and no hidden costs.',
    answerId: 'Pemesanan sangat mudah dan cepat melalui WhatsApp resmi kami atau form reservasi online di website. Cukup infokan tanggal, lokasi jemput, tujuan, dan pilihan unit mobil. Pembayaran dapat dilakukan secara tunai (Cash IDR/Valas) maupun transfer bank dengan harga transparan tanpa biaya tersembunyi.',
  },
];

export default function FaqSection({ lang }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-gray-50/80 font-sans border-t border-gray-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-luxury-gold tracking-widest uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-luxury-gold" />
            <span>{lang === 'EN' ? 'TRAVEL GUIDE & FAQ' : 'PANDUAN WISATA & FAQ'}</span>
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN'
              ? 'FREQUENTLY ASKED QUESTIONS ABOUT RINJANI TRANSPORT'
              : 'PERTANYAAN SEPUTAR TRANSPORTASI & TOUR RINJANI LOMBOK'}
          </h2>

          <div className="w-16 h-1 bg-luxury-gold rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {lang === 'EN'
              ? 'Everything you need to know about private car rental with driver, Lombok airport transfers, Mount Rinjani trekking transport, and scenic day trips in Lombok.'
              : 'Semua informasi penting seputar sewa mobil dengan supir, antar-jemput bandara Lombok, transportasi pendakian Gunung Rinjani, dan rute wisata di Lombok.'}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const question = lang === 'EN' ? faq.questionEn : faq.questionId;
            const answer = lang === 'EN' ? faq.answerEn : faq.answerId;
            const tag = lang === 'EN' ? faq.tagEn : faq.tagId;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200/80 hover:border-luxury-gold/50 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden text-left"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 flex items-start justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 flex-grow">
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider text-luxury-gold bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/50 inline-block">
                      {tag}
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-base text-gray-900 leading-snug">
                      {question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-luxury-gold text-white rotate-180' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-gray-600 font-sans text-xs sm:text-sm leading-relaxed border-t border-gray-100/80">
                        <p>{answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-10 p-6 sm:p-8 bg-gradient-to-r from-gray-950 via-luxury-black to-gray-900 rounded-3xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left border border-luxury-gold/30">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[10px] font-display font-bold tracking-widest text-luxury-gold uppercase">
              {lang === 'EN' ? 'NEED CUSTOM ADVICE?' : 'BUTUH KONSULTASI RUTE KHUSUS?'}
            </span>
            <h4 className="font-display font-black text-lg sm:text-xl text-white">
              {lang === 'EN'
                ? 'Have a specific itinerary or urgent pickup in Lombok?'
                : 'Punya jadwal penerbangan khusus atau butuh penjemputan segera di Lombok?'}
            </h4>
            <p className="text-xs text-gray-300 font-sans leading-relaxed">
              {lang === 'EN'
                ? 'Contact our local WhatsApp support 24/7 for instant quotations, route consultations, and driver bookings.'
                : 'Hubungi tim WhatsApp kami 24 jam untuk konsultasi rute, cek jadwal armada, dan penawaran harga terbaik.'}
            </p>
          </div>

          <button
            onClick={() => openWhatsApp(lang === 'EN' ? 'Hello Rinjani Transport, I would like to consult about transport and tour routes in Lombok.' : 'Halo Rinjani Transport, saya ingin konsultasi rute perjalanan dan sewa mobil di Lombok.')}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5 shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{lang === 'EN' ? 'Chat WhatsApp 24/7' : 'Konsultasi WhatsApp 24 Jam'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
