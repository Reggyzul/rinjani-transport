export interface PackageTier {
  id: 'standard' | 'premium' | 'platinum';
  name: string;
  badge?: string;
  inclusions: string[];
  inclusionsEn: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  titleEn?: string;
  category?: 'flagship' | 'trekking' | 'nature';
  priceText: string;
  priceTextEn?: string;
  numericPrice: number;
  duration: string;
  durationEn?: string;
  badge?: string | null;
  image: string;
  description: string;
  descriptionEn?: string;
  highlights: string[];
  highlightsEn?: string[];
  included: string[];
  includedEn?: string[];
  excluded: string[];
  excludedEn?: string[];
  packageTiers: PackageTier[];
  itinerary: { title: string; desc: string }[];
  waMessage: string;
}

export const COMMON_PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'standard',
    name: 'Standard Tour',
    badge: 'Hemat dan Nyaman',
    inclusions: [
      'Transportasi Privat AC Sesuai Jumlah Peserta',
      'Driver Berpengalaman dan BBM',
      'Air Mineral Selama Perjalanan'
    ],
    inclusionsEn: [
      'Private AC Transport according to group size',
      'Experienced Driver and Fuel',
      'Mineral Water during the tour'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Tour',
    badge: 'Paling Populer',
    inclusions: [
      'Transportasi Privat AC (Avanza / Innova / Hiace)',
      'Driver Lokal Berpengalaman dan BBM',
      'Tiket Masuk Objek Wisata',
      'Air Mineral dan Snack Box',
      'Bantuan Dokumentasi Foto'
    ],
    inclusionsEn: [
      'Private AC Vehicle (Avanza / Innova / Hiace)',
      'Experienced Local Driver and Fuel',
      'Attraction Entrance Tickets',
      'Mineral Water and Snack Box',
      'Photo Assistance by Driver'
    ]
  },
  {
    id: 'platinum',
    name: 'VIP All-Inclusive',
    badge: 'VIP All-In',
    inclusions: [
      'Transportasi Eksekutif (Innova / Hiace Premio)',
      'Driver Profesional, BBM, dan Parkir',
      'Tiket Masuk Semua Objek Wisata',
      'Makan Siang Kuliner Khas Lombok',
      'Snack Box dan Air Mineral Premium',
      'Layanan Antar-Jemput Fleksibel'
    ],
    inclusionsEn: [
      'Executive Vehicle (Innova / Hiace Premio)',
      'Professional Driver, Fuel, and Parking Included',
      'All Attraction Entrance Tickets',
      'Authentic Lombok Lunch included',
      'Premium Snacks and Mineral Water',
      'Flexible Door-to-Door Pickup'
    ]
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  // 1. WHALE SHARK TRIP (2D1N)
  {
    id: 'whale-shark',
    title: 'Whale Shark Trip - 2 Days 1 Night',
    titleEn: 'Whale Shark Trip - 2 Days 1 Night (Start Lombok)',
    category: 'flagship',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '2 Hari 1 Malam',
    durationEn: '2 Days 1 Night',
    badge: 'WISATA BAHARI SPESIAL',
    image: '/tour_whale_shark.jpg',
    description: 'Pengalaman berenang dan snorkeling bersama hiu paus (whale shark) di Teluk Saleh Sumbawa dengan titik penjemputan dan pengantaran langsung dari hotel Anda di Lombok.',
    descriptionEn: 'An exclusive 2 Days 1 Night marine adventure to swim and snorkel with gentle whale sharks in Saleh Bay, starting and finishing directly from your hotel in Lombok.',
    highlights: [
      'Berenang dan snorkeling bersama kawanan hiu paus di habitat alaminya',
      'Penyeberangan kapal ferry rute Lombok menuju Sumbawa',
      'Layanan transportasi darat privat antar-jemput dari hotel di Lombok',
      'Penginapan satu malam di Sumbawa dan perahu privat ke titik hiu paus',
      'Pemandangan alam pesisir Teluk Saleh yang tenang dan asri'
    ],
    highlightsEn: [
      'Swim and snorkel with gentle whale sharks in their natural habitat',
      'Scenic ferry crossing between Lombok and Sumbawa',
      'Private door-to-door hotel transport in Lombok',
      'Includes 1-night hotel stay in Sumbawa and private boat trip',
      'Peaceful coastal beauty of Saleh Bay'
    ],
    included: [
      'Antar-jemput hotel di Lombok (PP)',
      'Transportasi darat mobil privat AC',
      'Tiket kapal ferry Lombok - Sumbawa - Lombok',
      'Hotel 1 malam di Sumbawa / Labuan Jambu',
      'Perahu trip privat menuju titik hiu paus',
      'Peralatan snorkeling dan pelampung',
      'Sarapan di atas perahu',
      'Driver, BBM, dan biaya parkir'
    ],
    includedEn: [
      'Hotel pick-up and drop-off in Lombok',
      'Private AC land transportation',
      'Ferry tickets (Lombok - Sumbawa - Lombok)',
      'Hotel 1 night in Sumbawa',
      'Boat trip to whale shark point',
      'Snorkeling gear and life jacket',
      'Breakfast on the boat',
      'Driver, fuel, and parking fees'
    ],
    excluded: [
      'Pengeluaran pribadi',
      'Makan malam dan makan siang di luar jadwal',
      'Tips untuk guide dan kru perahu',
      'Asuransi perjalanan'
    ],
    excludedEn: [
      'Personal expenses',
      'Meals not mentioned in the itinerary',
      'Tips for guide and boat crew',
      'Travel insurance'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { 
        title: 'Hari 1: 06:30 - 07:00 | Penjemputan di Hotel Lombok', 
        desc: 'Driver kami menjemput Anda di hotel kawasan Lombok lalu menuju Pelabuhan Kayangan.' 
      },
      { 
        title: 'Hari 1: 08:30 - 10:30 | Penyeberangan Ferry ke Sumbawa', 
        desc: 'Menyeberang ferry sekitar 1.5 sampai 2 jam dan tiba di Pelabuhan Pototano Sumbawa.' 
      },
      { 
        title: 'Hari 1: 11:00 - 16:30 | Perjalanan Darat ke Labuan Jambu', 
        desc: 'Melanjutkan perjalanan darat dengan mobil ber-AC, singgah untuk makan siang, dan check-in hotel di Labuan Jambu.' 
      },
      { 
        title: 'Hari 1: 19:00 | Makan Malam dan Istirahat', 
        desc: 'Makan malam di restoran lokal dan istirahat untuk persiapan trip dini hari.' 
      },
      { 
        title: 'Hari 2: 04:00 - 08:30 | Berenang Bersama Hiu Paus', 
        desc: 'Berangkat ke pelabuhan, naik perahu menuju titik hiu paus, berenang dan snorkeling bersama hiu paus, serta sarapan di atas perahu.' 
      },
      { 
        title: 'Hari 2: 09:00 - 11:30 | Kembali ke Hotel dan Istirahat', 
        desc: 'Kembali ke pelabuhan sekitar 08:00 - 09:00, mandi di hotel, istirahat sejenak, lalu check-out.' 
      },
      { 
        title: 'Hari 2: 12:00 - 21:00 | Perjalanan Kembali ke Lombok', 
        desc: 'Perjalanan kembali ke Pelabuhan Pototano, menyeberang ferry ke Lombok, dan drop-off ke hotel Anda dengan estimasi tiba 20:00 - 22:00.' 
      }
    ],
    waMessage: 'Halo Rinjani Transport, saya tertarik dengan paket Whale Shark Trip 2 Days 1 Night (Start Lombok). Mohon informasi ketersediaan tanggal dan penawarannya.'
  },

  // 2. BUKIT PERGASINGAN ONE DAY TRIP
  {
    id: 'bukit-pergasingan',
    title: 'Bukit Pergasingan One Day Trip',
    titleEn: 'Bukit Pergasingan One Day Trip',
    category: 'flagship',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'TREKKING FAVORIT',
    image: '/tour_bukit_pergasingan.jpg',
    description: 'Paket trip pendakian privat 1 hari ke Bukit Pergasingan Sembalun dengan layanan lengkap antar-jemput dari hotel Anda di mana saja di Lombok.',
    descriptionEn: 'A full-day private trekking trip to Bukit Pergasingan in Sembalun with complete door-to-door hotel pick-up and drop-off in Lombok.',
    highlights: [
      'Pemandangan spektakuler Lembah Sembalun dari ketinggian',
      'Panorama lanskap sawah berpetak warna-warni yang menakjubkan',
      'Pemandangan pegunungan dan kaldera dinding Gunung Rinjani',
      'Spot terbaik untuk fotografi sunrise dan pemandangan alam',
      'Trip privat fleksibel yang dapat disesuaikan dengan ritme pendakian Anda'
    ],
    highlightsEn: [
      'Amazing panoramic views of Sembalun Valley',
      'Beautiful rice-field landscape from high viewpoint',
      'Panoramic views of the surrounding mountains',
      'Perfect spot for sunrise and mountain photography',
      'Private trip adjustable according to your pace and hotel location'
    ],
    included: [
      'Antar-jemput hotel di mana saja di Lombok',
      'Pendakian 1 hari (one day trekking) ke Bukit Pergasingan',
      'Tiket masuk objek wisata',
      'Pemandu trekking lokal berpengalaman',
      'Air minum selama trip',
      'Makan siang (lunch)',
      'Bantuan keselamatan dasar pendakian',
      'Bantuan dokumentasi foto selama pendakian'
    ],
    includedEn: [
      'Hotel pick-up and drop-off anywhere in Lombok',
      'One day trekking to Bukit Pergasingan',
      'Entrance ticket',
      'Local trekking guide',
      'Drinking water',
      'Lunch',
      'Basic trekking safety assistance',
      'Assistance for taking photos during the trek'
    ],
    excluded: [
      'Pengeluaran pribadi',
      'Perlengkapan mendaki pribadi',
      'Tips untuk pemandu atau driver',
      'Asuransi perjalanan'
    ],
    excludedEn: [
      'Personal expenses',
      'Personal trekking gear',
      'Tips for guide or driver',
      'Travel insurance'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { 
        title: '05:00 - 06:00 | Penjemputan di Hotel', 
        desc: 'Driver Rinjani Transport menjemput Anda di hotel kawasan Lombok.' 
      },
      { 
        title: '07:00 | Tiba di Bukit Pergasingan', 
        desc: 'Tiba di titik awal pendakian Sembalun dan persiapan memulai trekking.' 
      },
      { 
        title: '07:15 | Memulai Pendakian', 
        desc: 'Mulai mendaki menyusuri jalur perbukitan didampingi pemandu lokal.' 
      },
      { 
        title: '09:00 - 09:30 | Tiba di Viewpoint Puncak', 
        desc: 'Mencapai titik dek pandang dengan panorama indah Lembah Sembalun.' 
      },
      { 
        title: '09:30 - 11:00 | Menikmati Pemandangan dan Foto', 
        desc: 'Waktu santai menikmati pemandangan dan sesi foto berlatar Gunung Rinjani.' 
      },
      { 
        title: '11:00 | Berjalan Turun', 
        desc: 'Perjalanan menuruni bukit kembali ke basecamp.' 
      },
      { 
        title: '12:30 | Selesai Trekking dan Makan Siang', 
        desc: 'Tiba di pos bawah dan menikmati makan siang yang telah disiapkan.' 
      },
      { 
        title: '13:30 | Berangkat Menuju Hotel', 
        desc: 'Perjalanan kembali dengan mobil privat ber-AC yang nyaman.' 
      },
      { 
        title: '15:00 - 17:00 | Tiba Kembali di Hotel', 
        desc: 'Pengantaran kembali ke hotel Anda di Lombok tergantung jarak lokasi.' 
      }
    ],
    waMessage: 'Halo Rinjani Transport, saya tertarik dengan paket Bukit Pergasingan One Day Trip. Mohon info ketersediaan dan penawaran harganya.'
  },

  // 3. BUKIT ANAK DARA ONE DAY TRIP
  {
    id: 'bukit-anak-dara',
    title: 'Bukit Anak Dara One Day Trip',
    titleEn: 'Bukit Anak Dara One Day Trip',
    category: 'flagship',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'PANORAMA EKSOTIS',
    image: '/tour_bukit_anak_dara.jpg',
    description: 'Nikmati salah satu dek pandang terindah di Sembalun dengan trip privat 1 hari ke Bukit Anak Dara, lengkap dengan fasilitas antar-jemput dari pintu hotel Anda.',
    descriptionEn: 'Experience one of the most beautiful viewpoints in Sembalun with a full-day private trip to Bukit Anak Dara, from hotel pick-up to hotel drop-off.',
    highlights: [
      'Pemandangan panorama Lembah Sembalun yang menawan',
      'Dek pandang Bukit Anak Dara dengan ketinggian 1.921 mdpl',
      'Pemandangan petak sawah dan perbukitan hijau',
      'Banyak titik spot foto alam yang mengagumkan',
      'Petualangan outdoor satu hari yang sangat memuaskan',
      'Layanan nyaman dari hotel ke gunung dan kembali ke hotel'
    ],
    highlightsEn: [
      'Panoramic view of Sembalun Valley',
      'Beautiful Anak Dara viewpoint standing at 1,921 m',
      'Stunning rice-field scenery and rolling ridges',
      'Amazing photo spots facing Mount Rinjani',
      'Perfect one-day outdoor adventure',
      'Convenient hotel-to-hotel private transportation service'
    ],
    included: [
      'Antar-jemput privat dari hotel di mana saja di Lombok',
      'Transportasi privat ber-AC',
      'Pemandu trekking lokal',
      'Tiket masuk objek wisata',
      'Air minum selama trip',
      'Makan siang (lunch)',
      'Pendampingan selama trekking',
      'Bantuan dokumentasi foto'
    ],
    includedEn: [
      'Private hotel pick-up and drop-off',
      'Private transportation',
      'Local trekking guide',
      'Entrance ticket',
      'Drinking water',
      'Lunch',
      'Trekking assistance',
      'Photo assistance'
    ],
    excluded: [
      'Pengeluaran pribadi',
      'Perlengkapan trekking pribadi',
      'Tips untuk pemandu atau driver',
      'Asuransi perjalanan'
    ],
    excludedEn: [
      'Personal expenses',
      'Personal trekking equipment',
      'Tips for guide or driver',
      'Travel insurance'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { 
        title: '05:00 - 06:00 | Penjemputan di Hotel', 
        desc: 'Penjemputan privat dari hotel Anda di mana saja di Lombok.' 
      },
      { 
        title: '07:30 | Tiba di Titik Start Pendakian', 
        desc: 'Tiba di pos trekking Bukit Anak Dara dan persiapan mendaki.' 
      },
      { 
        title: '08:00 | Mulai Trekking ke Bukit Anak Dara', 
        desc: 'Mulai berjalan menyusuri jalur pendakian bersama pemandu lokal.' 
      },
      { 
        title: '10:00 | Tiba di Viewpoint Puncak', 
        desc: 'Tiba di puncak dek pandang, menikmati panorama spektakuler Lembah Sembalun, perbukitan sekitar, dan Gunung Rinjani.' 
      },
      { 
        title: '10:00 - 11:30 | Waktu Bebas dan Foto', 
        desc: 'Waktu santai untuk menikmati panorama alam dan berfoto di titik-titik terbaik.' 
      },
      { 
        title: '11:30 | Mulai Berjalan Turun', 
        desc: 'Perjalanan menuruni bukit kembali menuju pos awal.' 
      },
      { 
        title: '13:00 | Selesai Trekking dan Makan Siang', 
        desc: 'Menyelesaikan pendakian dan menikmati santap siang.' 
      },
      { 
        title: '14:00 | Berangkat Kembali dari Sembalun', 
        desc: 'Meninggalkan Sembalun dan kembali menuju hotel Anda.' 
      },
      { 
        title: '16:00 - 18:00 | Pengantaran Tiba di Hotel', 
        desc: 'Tiba kembali di hotel Anda di Lombok tergantung jarak lokasi hotel.' 
      }
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin bertanya mengenai paket Bukit Anak Dara One Day Trip. Mohon info lengkap dan penawarannya.'
  },

  // 4. MOUNT RINJANI 2 DAYS 1 NIGHT
  {
    id: 'mount-rinjani-2d1n',
    title: 'Mount Rinjani 2 Days 1 Night',
    titleEn: 'Mount Rinjani 2 Days 1 Night (Sembalun Summit Trek)',
    category: 'flagship',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '2 Hari 1 Malam',
    durationEn: '2 Days 1 Night',
    badge: 'SUMMIT EXPEDITION',
    image: '/tour_rinjani_summit.jpg',
    description: 'Petualangan pendakian privat 2 hari 1 malam menuju puncak Gunung Rinjani (3.726 mdpl) melalui jalur Sembalun, lengkap dengan fasilitas antar-jemput langsung dari hotel Anda di Lombok.',
    descriptionEn: 'Experience the spectacular Mount Rinjani summit (3,726 m) in a challenging 2 Days 1 Night private trekking adventure, starting and finishing at your hotel in Lombok.',
    highlights: [
      'Puncak Gunung Rinjani di ketinggian 3.726 mdpl',
      'Matahari terbit dari puncak dengan pemandangan pulau Lombok, Bali, dan Sumbawa',
      'Bibir kawah Plawangan Sembalun (Sembalun Crater Rim)',
      'Pemandangan spektakuler Danau Segara Anak dan Gunung Baru Jari',
      'Panorama lanskap pulau Lombok dari ketinggian',
      'Layanan antar-jemput dari pintu hotel hingga kembali ke hotel'
    ],
    highlightsEn: [
      'Mount Rinjani Summit at 3,726 meters altitude',
      'Sunrise from the summit overlooking Lombok, Bali and Sumbawa',
      'Sembalun Crater Rim campsite vistas',
      'Breathtaking view of Segara Anak Lake',
      'Panoramic views of Lombok island',
      'Convenient hotel-to-hotel private transportation service'
    ],
    included: [
      'Antar-jemput privat dari hotel di mana saja di Lombok',
      'Transportasi darat privat ber-AC',
      'Izin resmi pendakian dan tiket Taman Nasional Gunung Rinjani',
      'Pemandu trekking lokal profesional',
      'Porter untuk membawa perlengkapan kelompok',
      'Tenda perkemahan dome',
      'Matras tidur yang nyaman',
      'Makan dan minum lengkap selama pendakian',
      'Air minum selama trip',
      'Bantuan dan dukungan keselamatan dasar trekking'
    ],
    includedEn: [
      'Private hotel pick-up and drop-off anywhere in Lombok',
      'Private AC transportation',
      'Mount Rinjani trekking permit and entrance ticket',
      'Professional local trekking guide',
      'Porters for group equipment',
      'Camping tent',
      'Sleeping mattress',
      'Meals during the trek',
      'Drinking water',
      'Trekking assistance and basic safety support'
    ],
    excluded: [
      'Perlengkapan mendaki pribadi (jaket tebal, sepatu tracking, sarung tangan)',
      'Sewa jaket, sarung tangan, dan trekking pole',
      'Pengeluaran pribadi',
      'Asuransi perjalanan',
      'Tips untuk pemandu dan porter'
    ],
    excludedEn: [
      'Personal trekking equipment',
      'Jacket, gloves, and trekking poles rental',
      'Personal expenses',
      'Travel insurance',
      'Tips for guide and porter'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { 
        title: 'Hari 1: 05:00 - 06:00 | Penjemputan di Hotel', 
        desc: 'Driver menjemput Anda di hotel kawasan Lombok menuju Sembalun.' 
      },
      { 
        title: 'Hari 1: 08:00 - 08:30 | Persiapan dan Registrasi di Sembalun', 
        desc: 'Tiba di Desa Sembalun, briefing persiapan, dan mulai mendaki menyusuri jalur padang sabana.' 
      },
      { 
        title: 'Hari 1: 12:00 | Istirahat Makan Siang di Jalur', 
        desc: 'Istirahat makan siang hangat yang disiapkan porter di pos pendakian.' 
      },
      { 
        title: 'Hari 1: 16:00 - 17:00 | Tiba di Plawangan Sembalun', 
        desc: 'Tiba di bibir kawah Plawangan Sembalun dan tenda sudah siap berdiri.' 
      },
      { 
        title: 'Hari 1: 17:00 - 18:00 | Sunset dan Pemandangan Danau Segara Anak', 
        desc: 'Menikmati matahari terbenam dan panorama Danau Segara Anak dari ketinggian tebing kawah.' 
      },
      { 
        title: 'Hari 1: 18:30 | Makan Malam dan Istirahat', 
        desc: 'Makan malam hangat di area campsite dan istirahat lebih awal untuk persiapan summit.' 
      },
      { 
        title: 'Hari 2: 02:00 - 02:30 | Bangun dan Mulai Summit Attack', 
        desc: 'Bangun dini hari, camilan hangat, dan mulai mendaki menuju Puncak Gunung Rinjani (3.726 mdpl).' 
      },
      { 
        title: 'Hari 2: 06:00 - 07:00 | Puncak Rinjani dan Sunrise Spektakuler', 
        desc: 'Mencapai puncak, menyaksikan golden sunrise berlatar kepulauan Nusa Tenggara dan Gunung Agung Bali jika cuaca cerah.' 
      },
      { 
        title: 'Hari 2: 07:00 - 10:00 | Turun ke Plawangan dan Sarapan', 
        desc: 'Turun kembali ke campsite Plawangan Sembalun, sarapan lezat, dan istirahat sejenak.' 
      },
      { 
        title: 'Hari 2: 11:00 - 14:30 | Melanjutkan Turun ke Desa Sembalun', 
        desc: 'Melanjutkan perjalanan menuruni gunung menuju Desa Sembalun.' 
      },
      { 
        title: 'Hari 2: 14:30 - 15:00 | Selesai Trekking dan Makan Siang', 
        desc: 'Tiba di titik kumpul dan menikmati makan siang penutup.' 
      },
      { 
        title: 'Hari 2: 15:00 - 19:00 | Pengantaran Kembali ke Hotel', 
        desc: 'Perjalanan kembali dengan mobil privat dan drop-off di hotel Anda di Lombok.' 
      }
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin konsultasi dan reservasi paket Mount Rinjani 2 Days 1 Night (Summit Trek). Mohon informasi ketersediaan jadwalnya.'
  },

  // 5. SEMBALUN HIGHLAND TOUR (Destinasi Wisata)
  {
    id: 'sembalun-tour',
    title: 'Sembalun Highland Tour',
    titleEn: 'Sembalun Highland Panorama Tour',
    category: 'nature',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'BEST SELLER',
    image: '/tour_sembalun.jpg',
    description: 'Perjalanan menuju Sembalun dengan panorama pegunungan dan perbukitan yang menjadi salah satu daya tarik utama Lombok Timur.',
    descriptionEn: 'Journey towards Sembalun valley, surrounded by grand mountain vistas and rolling hills that represent one of East Lombok’s most breathtaking highlights.',
    highlights: [
      'Lembah Sembalun di ketinggian 1.156 mdpl dengan udara super sejuk',
      'Pemandangan megah dinding kaldera Gunung Rinjani',
      'Kebun stroberi petik sendiri dan pertanian sayur mayur khas pegunungan',
      'Wisata Rumah Adat Desa Beleq Sembalun'
    ],
    highlightsEn: [
      'Sembalun valley nestled at 1,156 meters altitude with refreshing cool climate',
      'Magnificent views of Mount Rinjani volcanic ridge and peaks',
      'Hand-pick strawberry orchards and highland organic farms',
      'Cultural stop at historic Beleq traditional Sasak village'
    ],
    included: [
      'Armada Privat Nyaman dan Kuat di Tanjakan Pegunungan',
      'Driver Berpengalaman yang Menguasai Medan Sembalun',
      'BBM dan Biaya Parkir',
      'Air Mineral Selama Perjalanan'
    ],
    includedEn: [
      'Private AC Vehicle optimized for mountain roads',
      'Experienced Driver knowledgeable in Sembalun routes',
      'Fuel and Destination Parking',
      'Mineral Water'
    ],
    excluded: [
      'Petik Stroberi dan Tiket Masuk',
      'Makan Siang dan Pengeluaran Pribadi',
      'Tips Driver'
    ],
    excludedEn: [
      'Strawberry Picking and Entry Fees',
      'Personal Lunch and Souvenirs',
      'Driver Tipping'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '07:30 | Penjemputan', desc: 'Driver menjemput di lokasi penginapan Anda di Lombok.' },
      { title: '09:30 | Melewati Jalur Pusuk Sembalun', desc: 'Menikmati rute jalan berkelok indah dengan pemandangan hutan dan monyet liar.' },
      { title: '10:30 | Tiba di Lembah Sembalun', desc: 'Foto di spot ikonik pemandangan Gunung Rinjani dan memetik stroberi segar.' },
      { title: '12:30 | Makan Siang', desc: 'Menikmati kuliner khas Lombok dengan panorama perbukitan.' },
      { title: '14:00 | Mengunjungi Desa Adat Beleq', desc: 'Mengenal sejarah dan rumah tradisional asli leluhur Sembalun.' },
      { title: '16:00 | Perjalanan Kembali', desc: 'Pengantaran kembali ke hotel Anda.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya tertarik dengan paket Sembalun Highland Tour. Mohon info ketersediaan dan harganya.'
  },

  // 6. BUKIT SELONG SEMBALUN (Destinasi Wisata)
  {
    id: 'bukit-selong',
    title: 'Bukit Selong Sembalun',
    titleEn: 'Bukit Selong Scenic Hilltop',
    category: 'nature',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'SPOT FOTO IKONIK',
    image: '/tour_bukit_selong.jpg',
    description: 'Menikmati pemandangan perbukitan dan hamparan sawah dari ketinggian dengan panorama khas Sembalun yang berwarna-warni.',
    descriptionEn: 'Feast your eyes on sweeping hilltops and colorful patchwork rice paddies from above, showcasing Sembalun’s most famous iconic panorama.',
    highlights: [
      'Viewpoint hamparan petak sawah warna-warni yang sangat fotogenik',
      'Akses jalan setapak mudah dan ramah untuk semua usia',
      'Latar belakang bukit-bukit megah Sembalun',
      'Spot foto favorit fotografer dan wisatawan'
    ],
    highlightsEn: [
      'Photogenic hilltop view overlooking colorful patchwork agricultural fields',
      'Short and easy walking trail suitable for all fitness levels',
      'Dramatic backdrop of Sembalun surrounding mountain ranges',
      'Top choice for landscape photographers and travelers'
    ],
    included: [
      'Mobil Privat AC dan Driver Berpengalaman',
      'BBM dan Parkir Destinasi',
      'Air Mineral',
      'Antar-Jemput Hotel Fleksibel'
    ],
    includedEn: [
      'Private AC Car and Skilled Driver',
      'Fuel and Parking',
      'Mineral Water',
      'Door-to-door Hotel Transfer'
    ],
    excluded: [
      'Tiket Masuk Bukit Selong',
      'Pengeluaran Pribadi',
      'Makan Siang'
    ],
    excludedEn: [
      'Bukit Selong Entrance Fee',
      'Personal Expenses',
      'Lunch'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '08:00 | Penjemputan', desc: 'Penjemputan di hotel atau bandara oleh driver Rinjani Transport.' },
      { title: '10:30 | Tiba di Bukit Selong', desc: 'Trekking singkat menaiki tangga menuju dek pandang Bukit Selong.' },
      { title: '11:00 | Sesi Foto dan Relaksasi', desc: 'Mengabadikan keindahan petak sawah Sembalun dari ketinggian.' },
      { title: '13:00 | Makan Siang', desc: 'Santap siang di kafe/resto dengan pemandangan lembah Sembalun.' },
      { title: '15:30 | Perjalanan Pulang', desc: 'Kembali dengan nyaman ke akomodasi Anda.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin memesan paket tour Bukit Selong Sembalun. Mohon info detail tarifnya.'
  },

  // 7. AIR TERJUN BENANG KELAMBU (Destinasi Wisata)
  {
    id: 'benang-kelambu',
    title: 'Air Terjun Benang Kelambu',
    titleEn: 'Benang Kelambu Waterfall Tour',
    category: 'nature',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'FAVORIT ALAM',
    image: '/tour_benang_kelambu.jpg',
    description: 'Nikmati perjalanan menuju salah satu air terjun terkenal di Lombok yang memiliki pemandangan alam hijau dan suasana yang menyegarkan.',
    descriptionEn: 'Enjoy a refreshing journey to one of the most celebrated waterfalls in Lombok, enveloped by lush tropical greenery and pristine curtains of natural water.',
    highlights: [
      'Tirai air alami yang menyerupai kelambu di tengah tebing hijau',
      'Suasana sejuk dan asri di kawasan hutan lindung',
      'Mata air alami yang jernih dan menyegarkan',
      'Bisa dikombinasikan dengan Air Terjun Benang Stokel'
    ],
    highlightsEn: [
      'Natural water curtains resembling silky curtains on green cliffs',
      'Refreshing cool mountain breeze in protected forest area',
      'Crystal-clear natural spring pools',
      'Easily combined with Benang Stokel Waterfall'
    ],
    included: [
      'Transportasi Privat AC (Jemput Bandara / Hotel)',
      'Driver Berpengalaman dan BBM',
      'Air Mineral Selama Perjalanan',
      'Parkir Lokasi Wisata'
    ],
    includedEn: [
      'Private AC Transport (Airport / Hotel Pickup)',
      'Experienced Driver and Fuel Included',
      'Mineral Water during the trip',
      'Parking at destination'
    ],
    excluded: [
      'Pengeluaran Pribadi',
      'Tiket Masuk dan Local Guide',
      'Makan Siang'
    ],
    excludedEn: [
      'Personal Expenses',
      'Entrance Tickets and Local Guide',
      'Lunch'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '08:30 | Penjemputan', desc: 'Driver kami menjemput Anda di hotel atau Bandara Lombok.' },
      { title: '10:00 | Tiba di Kawasan Benang Kelambu', desc: 'Memulai jalan santai menyusuri jalur asri menuju tirai air terjun.' },
      { title: '10:30 | Eksplorasi dan Relaksasi', desc: 'Menikmati kesegaran air terjun Benang Kelambu dan Benang Stokel, berfoto di spot alami.' },
      { title: '13:00 | Makan Siang', desc: 'Menikmati kuliner lokal Lombok di restoran terdekat.' },
      { title: '15:30 | Kembali dan Drop-off', desc: 'Perjalanan kembali dengan nyaman menuju hotel penginapan Anda.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya tertarik dengan paket wisata Air Terjun Benang Kelambu. Mohon informasi ketersediaan unit dan penawaran harganya.'
  },

  // 8. TETEBATU NATURE & VILLAGE (Destinasi Wisata)
  {
    id: 'tetebatu',
    title: 'Tetebatu Nature and Village Tour',
    titleEn: 'Tetebatu Heritage and Nature Tour',
    category: 'nature',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'WISATA PEDESAAN',
    image: '/tour_tetebatu.jpg',
    description: 'Menjelajahi kawasan Tetebatu dengan suasana pedesaan, persawahan, dan panorama alam yang berada di kaki Gunung Rinjani.',
    descriptionEn: 'Explore the scenic Tetebatu region, renowned for its peaceful rural atmosphere, rice terraces, and breathtaking views nestled at the foot of Mount Rinjani.',
    highlights: [
      'Terasering persawahan hijau dengan latar belakang Gunung Rinjani',
      'Udara sejuk pedesaan khas Lombok Timur',
      'Interaksi hangat dengan kearifan lokal masyarakat Sasak',
      'Perkebunan kopi, vanili, dan rempah-rempah alami'
    ],
    highlightsEn: [
      'Lush green rice terraces with Mount Rinjani as the majestic backdrop',
      'Crisp, cool mountain climate in East Lombok',
      'Cultural encounters with the hospitable Sasak rural village',
      'Traditional coffee, vanilla, and spice plantations'
    ],
    included: [
      'Mobil Privat AC Bersih dan Driver',
      'BBM dan Parkir Wisata',
      'Air Mineral Selama Perjalanan',
      'Layanan Antar-Jemput Hotel'
    ],
    includedEn: [
      'Clean Private AC Vehicle and Driver',
      'Fuel and Destination Parking',
      'Mineral Water throughout the day',
      'Hotel Door-to-Door Pickup'
    ],
    excluded: [
      'Pengeluaran Pribadi',
      'Makan Siang dan Donasi Lokal',
      'Tips Driver'
    ],
    excludedEn: [
      'Personal Expenses',
      'Lunch and Local Village Donations',
      'Driver Gratuity'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '08:00 | Penjemputan', desc: 'Penjemputan di hotel atau lokasi yang Anda tentukan di Lombok.' },
      { title: '09:30 | Tiba di Tetebatu', desc: 'Menikmati panorama sawah terasering dan udara sejuk pegunungan Rinjani.' },
      { title: '11:00 | Walking Tour Pedesaan', desc: 'Menyusuri perkebunan rempah, kopi, dan melihat aktivitas warga pedesaan.' },
      { title: '12:30 | Makan Siang', desc: 'Santap siang kuliner khas pedesaan dengan pemandangan alam sawah.' },
      { title: '15:00 | Kembali ke Penginapan', desc: 'Pengantaran kembali ke hotel dengan aman dan nyaman.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin berkonsultasi mengenai paket wisata Tetebatu Lombok. Mohon info detailnya.'
  },

  // 9. MONKEY FOREST TETEBATU (Destinasi Wisata)
  {
    id: 'monkey-forest',
    title: 'Monkey Forest Tetebatu',
    titleEn: 'Tetebatu Monkey Forest Sanctuary',
    category: 'nature',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'WISATA SATWA ALAM',
    image: '/tour_monkey_forest.jpg',
    description: 'Destinasi wisata alam yang dapat menjadi bagian dari perjalanan wisata di kawasan Tetebatu dengan keanekaragaman flora dan satwa primata alami.',
    descriptionEn: 'An enchanting natural sanctuary that forms a delightful highlight of any Tetebatu excursion, featuring natural primate habitats in a pristine forest setting.',
    highlights: [
      'Habitat alami kera hitam endemik Lombok (Lutung) dan monyet ekor panjang',
      'Hutan lindung yang rimbun dan teduh di kaki Rinjani',
      'Spot edukatif yang sangat cocok untuk keluarga dan anak-anak',
      'Jalur tracking yang mudah dan menyenangkan'
    ],
    highlightsEn: [
      'Natural habitat of endemic black langurs (Lutung) and long-tailed macaques',
      'Lush canopy of protected forest greenery',
      'Educational and fun experience suitable for families and nature lovers',
      'Gentle, scenic forest walking paths'
    ],
    included: [
      'Kendaraan Privat AC dan Driver Berpengalaman',
      'BBM dan Parkir Wisata',
      'Air Mineral Selama Perjalanan'
    ],
    includedEn: [
      'Private AC Vehicle and Seasoned Driver',
      'Fuel and Parking Fees',
      'Mineral Water'
    ],
    excluded: [
      'Makanan untuk Satwa',
      'Tiket Masuk Hutan Wisata',
      'Makan Siang Pribadi'
    ],
    excludedEn: [
      'Fruits for Animals',
      'Sanctuary Entrance Fees',
      'Personal Lunch'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '08:30 | Penjemputan', desc: 'Driver kami siap menjemput Anda di bandara atau hotel.' },
      { title: '10:00 | Tiba di Monkey Forest', desc: 'Memasuki kawasan hutan lindung Tetebatu dan melihat satwa kera di habitat alaminya.' },
      { title: '12:00 | Bersantai di Kawasan Sekitar', desc: 'Melanjutkan santap siang dan menikmati keindahan panorama kaki Gunung Rinjani.' },
      { title: '15:00 | Pengantaran Pulang', desc: 'Kembali menuju hotel Anda.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin reservasi tour Monkey Forest Tetebatu. Mohon info penawaran harganya.'
  }
];

// The 4 core flagship packages requested for the landing page:
export const LANDING_PAGE_PACKAGES: TourPackage[] = TOUR_PACKAGES.slice(0, 4);
