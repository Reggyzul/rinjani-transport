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
    badge: 'Hemat & Nyaman',
    inclusions: [
      'Transportasi Privat AC Sesuai Jumlah Peserta',
      'Driver Berpengalaman & BBM',
      'Air Mineral Selama Perjalanan'
    ],
    inclusionsEn: [
      'Private AC Transport according to group size',
      'Experienced Driver & Fuel',
      'Mineral Water during the tour'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Tour',
    badge: 'Paling Populer',
    inclusions: [
      'Transportasi Privat AC (Avanza / Innova / Hiace)',
      'Driver Lokal Berpengalaman & BBM',
      'Tiket Masuk Objek Wisata',
      'Air Mineral & Snack Box',
      'Bantuan Dokumentasi Foto'
    ],
    inclusionsEn: [
      'Private AC Vehicle (Avanza / Innova / Hiace)',
      'Experienced Local Driver & Fuel',
      'Attraction Entrance Tickets',
      'Mineral Water & Snack Box',
      'Photo Assistance by Driver'
    ]
  },
  {
    id: 'platinum',
    name: 'VIP All-Inclusive',
    badge: 'VIP All-In',
    inclusions: [
      'Transportasi Eksekutif (Innova / Hiace Premio)',
      'Driver Profesional, BBM, & Parkir',
      'Tiket Masuk Semua Objek Wisata',
      'Makan Siang Kuliner Khas Lombok',
      'Snack Box & Air Mineral Premium',
      'Layanan Antar-Jemput Fleksibel'
    ],
    inclusionsEn: [
      'Executive Vehicle (Innova / Hiace Premio)',
      'Professional Driver, Fuel, & Parking Included',
      'All Attraction Entrance Tickets',
      'Authentic Lombok Lunch included',
      'Premium Snacks & Mineral Water',
      'Flexible Door-to-Door Pickup'
    ]
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'benang-kelambu',
    title: 'Air Terjun Benang Kelambu',
    titleEn: 'Benang Kelambu Waterfall Tour',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'FAVORIT ALAM',
    image: '/hero_tumpak.png',
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
      'Driver Berpengalaman & BBM',
      'Air Mineral Selama Perjalanan',
      'Parkir Lokasi Wisata'
    ],
    includedEn: [
      'Private AC Transport (Airport / Hotel Pickup)',
      'Experienced Driver & Fuel Included',
      'Mineral Water during the trip',
      'Parking at destination'
    ],
    excluded: [
      'Pengeluaran Pribadi',
      'Tiket Masuk & Local Guide (Opsional)',
      'Makan Siang'
    ],
    excludedEn: [
      'Personal Expenses',
      'Entrance Tickets & Local Guide (Optional)',
      'Lunch'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '08:30 - Penjemputan', desc: 'Driver kami menjemput Anda di hotel atau Bandara Lombok.' },
      { title: '10:00 - Tiba di Kawasan Benang Kelambu', desc: 'Memulai jalan santai menyusuri jalur asri menuju tirai air terjun.' },
      { title: '10:30 - Eksplorasi & Relaksasi', desc: 'Menikmati kesegaran air terjun Benang Kelambu & Benang Stokel, berfoto di spot alami.' },
      { title: '13:00 - Makan Siang', desc: 'Menikmati kuliner lokal Lombok di restoran terdekat.' },
      { title: '15:30 - Kembali & Drop-off', desc: 'Perjalanan kembali dengan nyaman menuju hotel penginapan Anda.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya tertarik dengan paket wisata Air Terjun Benang Kelambu. Mohon informasi ketersediaan unit dan penawaran harganya.'
  },
  {
    id: 'tetebatu',
    title: 'Tetebatu Nature & Village Tour',
    titleEn: 'Tetebatu Heritage & Nature Tour',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'WISATA PEDESAAN',
    image: '/hero_batu.png',
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
      'Mobil Privat AC Bersih + Driver',
      'BBM & Parkir Wisata',
      'Air Mineral Selama Perjalanan',
      'Layanan Antar-Jemput Hotel'
    ],
    includedEn: [
      'Clean Private AC Vehicle + Driver',
      'Fuel & Destination Parking',
      'Mineral Water throughout the day',
      'Hotel Door-to-Door Pickup'
    ],
    excluded: [
      'Pengeluaran Pribadi',
      'Makan Siang & Donasi Lokal',
      'Tips Driver (Sukarela)'
    ],
    excludedEn: [
      'Personal Expenses',
      'Lunch & Local Village Donations',
      'Driver Gratuity (Voluntary)'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '08:00 - Penjemputan', desc: 'Penjemputan di hotel atau lokasi yang Anda tentukan di Lombok.' },
      { title: '09:30 - Tiba di Tetebatu', desc: 'Menikmati panorama sawah terasering dan udara sejuk pegunungan Rinjani.' },
      { title: '11:00 - Walking Tour Pedesaan', desc: 'Menyusuri perkebunan rempah, kopi, dan melihat aktivitas warga pedesaan.' },
      { title: '12:30 - Makan Siang', desc: 'Santap siang kuliner khas pedesaan dengan pemandangan alam sawah.' },
      { title: '15:00 - Kembali ke Penginapan', desc: 'Pengantaran kembali ke hotel dengan aman dan nyaman.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin berkonsultasi mengenai paket wisata Tetebatu Lombok. Mohon info detailnya.'
  },
  {
    id: 'monkey-forest',
    title: 'Monkey Forest Tetebatu',
    titleEn: 'Tetebatu Monkey Forest Sanctuary',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'WISATA SATWA ALAM',
    image: '/malang_batu.png',
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
      'Kendaraan Privat AC + Driver Berpengalaman',
      'BBM & Parkir Wisata',
      'Air Mineral Selama Perjalanan'
    ],
    includedEn: [
      'Private AC Vehicle + Seasoned Driver',
      'Fuel & Parking Fees',
      'Mineral Water'
    ],
    excluded: [
      'Makanan untuk Monyet / Satwa (Bisa dibeli di lokasi)',
      'Tiket Masuk Hutan Wisata',
      'Makan Siang Pribadi'
    ],
    excludedEn: [
      'Fruits for Animals (Available locally)',
      'Sanctuary Entrance Fees',
      'Personal Lunch'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '08:30 - Penjemputan', desc: 'Driver kami siap menjemput Anda di bandara atau hotel.' },
      { title: '10:00 - Tiba di Monkey Forest', desc: 'Memasuki kawasan hutan lindung Tetebatu dan melihat satwa kera di habitat alaminya.' },
      { title: '12:00 - Bersantai di Kawasan Sekitar', desc: 'Melanjutkan santap siang dan menikmati keindahan panorama kaki Gunung Rinjani.' },
      { title: '15:00 - Pengantaran Pulang', desc: 'Kembali menuju hotel Anda.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin reservasi tour Monkey Forest Tetebatu. Mohon info penawaran harganya.'
  },
  {
    id: 'sembalun-tour',
    title: 'Sembalun Highland Tour',
    titleEn: 'Sembalun Highland Panorama Tour',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'BEST SELLER',
    image: '/hero_bromo.png',
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
      'Armada Privat Nyaman & Kuat di Tanjakan Pegunungan',
      'Driver Berpengalaman yang Menguasai Medan Sembalun',
      'BBM & Biaya Parkir',
      'Air Mineral Selama Perjalanan'
    ],
    includedEn: [
      'Private AC Vehicle optimized for mountain roads',
      'Experienced Driver knowledgeable in Sembalun routes',
      'Fuel & Destination Parking',
      'Mineral Water'
    ],
    excluded: [
      'Petik Stroberi & Tiket Masuk',
      'Makan Siang & Pengeluaran Pribadi',
      'Tips Driver (Sukarela)'
    ],
    excludedEn: [
      'Strawberry Picking & Entry Fees',
      'Personal Lunch & Souvenirs',
      'Driver Tipping (Voluntary)'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '07:30 - Penjemputan', desc: 'Driver menjemput di lokasi penginapan Anda di Lombok.' },
      { title: '09:30 - Melewati Jalur Pusuk Sembalun', desc: 'Menikmati rute jalan berkelok indah dengan pemandangan hutan dan monyet liar.' },
      { title: '10:30 - Tiba di Lembah Sembalun', desc: 'Foto di spot ikonik pemandangan Gunung Rinjani & memetik stroberi segar.' },
      { title: '12:30 - Makan Siang', desc: 'Menikmati kuliner khas Lombok dengan panorama perbukitan.' },
      { title: '14:00 - Mengunjungi Desa Adat Beleq', desc: 'Mengenal sejarah dan rumah tradisional asli leluhur Sembalun.' },
      { title: '16:00 - Perjalanan Kembali', desc: 'Pengantaran kembali ke hotel Anda.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya tertarik dengan paket Sembalun Highland Tour. Mohon info ketersediaan dan harganya.'
  },
  {
    id: 'bukit-selong',
    title: 'Bukit Selong Sembalun',
    titleEn: 'Bukit Selong Scenic Hilltop',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'SPOT FOTO IKONIK',
    image: '/hero_batu.png',
    description: 'Menikmati pemandangan perbukitan dan hamparan sawah dari ketinggian dengan panorama khas Sembalun yang berwarna-warni.',
    descriptionEn: 'Feast your eyes on sweeping hilltops and colorful patchwork rice paddies from above, showcasing Sembalun’s most famous iconic panorama.',
    highlights: [
      'Viewpoint hamparan petak sawah warna-warni yang sangat fotogenik',
      'Akses jalan setapak mudah dan ramah untuk semua usia',
      'Latar belakang bukit-bukit megah Sembalun',
      'Spot foto favorit fotografer dan wisatawan mancanegara'
    ],
    highlightsEn: [
      'Photogenic hilltop view overlooking colorful patchwork agricultural fields',
      'Short and easy walking trail suitable for all fitness levels',
      'Dramatic backdrop of Sembalun surrounding mountain ranges',
      'Top choice for landscape photographers and travelers'
    ],
    included: [
      'Mobil Privat AC + Driver Berpengalaman',
      'BBM & Parkir Destinasi',
      'Air Mineral',
      'Antar-Jemput Hotel Fleksibel'
    ],
    includedEn: [
      'Private AC Car + Skilled Driver',
      'Fuel & Parking',
      'Mineral Water',
      'Door-to-door Hotel Transfer'
    ],
    excluded: [
      'Tiket Masuk Bukit Selong (Sangat Terjangkau)',
      'Pengeluaran Pribadi',
      'Makan Siang'
    ],
    excludedEn: [
      'Bukit Selong Entrance Fee (Affordable)',
      'Personal Expenses',
      'Lunch'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '08:00 - Penjemputan', desc: 'Penjemputan di hotel atau bandara oleh driver Rinjani Transport.' },
      { title: '10:30 - Tiba di Bukit Selong', desc: 'Trekking singkat menaiki tangga menuju dek pandang Bukit Selong.' },
      { title: '11:00 - Sesi Foto & Relaksasi', desc: 'Mengabadikan keindahan petak sawah Sembalun dari ketinggian.' },
      { title: '13:00 - Makan Siang', desc: 'Santap siang di kafe/resto dengan pemandangan lembah Sembalun.' },
      { title: '15:30 - Perjalanan Pulang', desc: 'Kembali dengan nyaman ke akomodasi Anda.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin memesan paket tour Bukit Selong Sembalun. Mohon info detail tarifnya.'
  },
  {
    id: 'bukit-pergasingan',
    title: 'Bukit Pergasingan Panorama',
    titleEn: 'Bukit Pergasingan Sunrise & Trekking',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari / Sunrise Trip',
    durationEn: '1 Day / Sunrise Trip',
    badge: 'TREKKING FAVORIT',
    image: '/tumpak_sewu.png',
    description: 'Destinasi favorit bagi wisatawan yang ingin menikmati panorama Sembalun dari atas bukit dengan pemandangan spektakuler Gunung Rinjani.',
    descriptionEn: 'The ultimate favorite destination for travelers desiring panoramic views of Sembalun from a majestic hill ridge, offering sensational views of Mount Rinjani.',
    highlights: [
      'Pemandangan spektakuler berhadapan langsung dengan puncak Gunung Rinjani',
      'Sensasi matahari terbit (sunrise) dan lautan awan yang menakjubkan',
      'Jalur hiking favorit untuk pecinta petualangan alam',
      'Pemandangan 360 derajat lanskap Sembalun dari puncak bukit'
    ],
    highlightsEn: [
      'Spectacular direct vantage point facing Mount Rinjani summit',
      'Breathtaking sunrise and sea of clouds experience',
      'Top-rated trekking trail for adventure enthusiasts',
      'Unobstructed 360-degree views over the entire Sembalun basin'
    ],
    included: [
      'Transportasi Privat AC Antar-Jemput Basecamp',
      'Driver Siap Jemput Dini Hari (untuk Sunrise)',
      'BBM & Parkir Wisata',
      'Air Mineral'
    ],
    includedEn: [
      'Private AC Transport to Basecamp and return',
      'Driver ready for early-morning pickup (for Sunrise tours)',
      'Fuel & Parking',
      'Mineral Water'
    ],
    excluded: [
      'Local Guide Trekking / Tiket Registrasi Basecamp',
      'Peralatan Camping (Jika Menginap)',
      'Makan Pribadi'
    ],
    excludedEn: [
      'Trekking Guide / Basecamp Registration',
      'Camping Gear (If camping overnight)',
      'Personal Meals'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '03:00 / 07:00 - Penjemputan', desc: 'Penjemputan sesuai opsi Sunrise atau Day Trip di hotel Anda.' },
      { title: '05:00 - Tiba di Basecamp Pergasingan', desc: 'Briefing persiapan dan mulai pendakian santai menyusuri punggungan bukit.' },
      { title: '06:30 - Puncak Pergasingan', desc: 'Menikmati golden sunrise dan panorama magis Gunung Rinjani di depan mata.' },
      { title: '09:30 - Turun ke Basecamp', desc: 'Kembali ke kaki bukit dan beristirahat sejenak.' },
      { title: '11:00 - Eksplorasi Sembalun & Makan Siang', desc: 'Makan siang dan menikmati suasana sejuk sebelum pulang.' },
      { title: '14:00 - Pengantaran Kembali', desc: 'Tiba kembali di hotel dengan selamat dan penuh kenangan indah.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya tertarik dengan tour Bukit Pergasingan. Mohon info paket dan harganya.'
  },
  {
    id: 'bukit-anak-dara',
    title: 'Bukit Anak Dara Sembalun',
    titleEn: 'Bukit Anak Dara Hiking Adventure',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: '1 Hari (Full Day)',
    durationEn: '1 Day (Full Day)',
    badge: 'WISATA ALAM EKSOTIS',
    image: '/pantai_malang.png',
    description: 'Menawarkan pemandangan alam Sembalun yang indah dan cocok bagi wisatawan yang menyukai wisata alam dan perbukitan eksotis.',
    descriptionEn: 'Offers magnificent natural vistas of Sembalun, perfectly suited for travelers who appreciate untamed nature and dramatic exotic hill ridges.',
    highlights: [
      'Puncak bukit tertinggi kedua di kawasan Sembalun (1.921 mdpl)',
      'Spot menikmati sunset dan panorama Gunung Rinjani yang memukau',
      'Hamparan padang rumput sabana pegunungan yang luas',
      'Jalur pendakian yang menantang namun sangat memuaskan'
    ],
    highlightsEn: [
      'Second highest viewpoint hill around Sembalun (1,921 meters ASL)',
      'Incredible sunset view looking out towards Mount Rinjani and the ocean',
      'Expansive mountain savanna grasslands',
      'Thrilling yet deeply rewarding natural trail'
    ],
    included: [
      'Transportasi Privat AC Antar-Jemput',
      'Driver Berpengalaman & BBM',
      'Air Mineral Selama Perjalanan',
      'Parkir Destinasi'
    ],
    includedEn: [
      'Private AC Transport Round Trip',
      'Skilled Driver & Fuel',
      'Mineral Water',
      'Parking Fees'
    ],
    excluded: [
      'Tiket Registrasi Pendakian & Local Guide',
      'Pengeluaran Pribadi & Snack',
      'Makan Pribadi'
    ],
    excludedEn: [
      'Trail Registration & Local Guide Fee',
      'Personal Snacks & Expenses',
      'Meals'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '07:00 - Penjemputan', desc: 'Penjemputan di hotel oleh driver Rinjani Transport.' },
      { title: '09:00 - Tiba di Titik Start Sembalun', desc: 'Mempersiapkan perlengkapan mendaki bersama pemandu lokal.' },
      { title: '11:30 - Tiba di Punggung Bukit Anak Dara', desc: 'Menikmati hamparan sabana hijau dan pemandangan spektakuler Sembalun.' },
      { title: '13:00 - Istirahat & Makan Siang', desc: 'Menikmati bekal makan siang di puncak dengan udara sejuk.' },
      { title: '15:00 - Turun ke Kaki Bukit', desc: 'Perjalanan turun menuju titik penjemputan mobil.' },
      { title: '17:00 - Kembali ke Hotel', desc: 'Pengantaran kembali ke penginapan dengan selamat.' }
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin bertanya tentang paket wisata Bukit Anak Dara Sembalun. Mohon info lengkapnya.'
  }
];
