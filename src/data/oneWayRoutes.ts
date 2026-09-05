export interface OneWayRoute {
  id: string;
  name: string;
  from: string;
  to: string;
  duration: string;
  durationEn: string;
  category: 'port' | 'airport' | 'tourism' | 'city';
  description: string;
  descriptionEn: string;
  keyPoints: string[];
  keyPointsEn: string[];
  included: string[];
  includedEn: string[];
  waMessage: string;
}

export const ONE_WAY_ROUTES: OneWayRoute[] = [
  {
    id: 'senaru-bangsal',
    name: 'Senaru - Bangsal PP',
    from: 'Senaru',
    to: 'Pelabuhan Bangsal (Gili Islands)',
    duration: '1.5 - 2 Jam',
    durationEn: '1.5 - 2 Hours',
    category: 'port',
    description: 'Layanan transportasi privat antar-jemput rute Senaru menuju atau dari Pelabuhan Bangsal, dermaga penyeberangan resmi menuju Gili Trawangan, Gili Meno, dan Gili Air.',
    descriptionEn: 'Private transfer service between Senaru and Bangsal Harbor, the main boat crossing port to Gili Trawangan, Gili Meno, and Gili Air.',
    keyPoints: [
      'Pelabuhan Penyeberangan Utama ke 3 Gili',
      'Rute pesisir Lombok Utara yang lancar',
      'Bantuan membawa koper dan barang bawaan'
    ],
    keyPointsEn: [
      'Main Boat Harbor to the 3 Gili Islands',
      'Smooth North Lombok scenic coastal road',
      'Luggage and bag handling support'
    ],
    included: [
      'Mobil Privat AC Nyaman',
      'Driver Lokal Berpengalaman',
      'BBM dan Biaya Parkir Pelabuhan',
      'Antar-Jemput Hotel / Titik Temu'
    ],
    includedEn: [
      'Comfortable Private AC Car',
      'Experienced Local Driver',
      'Fuel and Harbor Parking Fees',
      'Hotel / Meeting Point Door-to-Door Service'
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin memesan layanan transfer Senaru - Bangsal PP. Mohon info ketersediaan armada dan penawaran harganya.'
  },
  {
    id: 'senaru-senggigi',
    name: 'Senaru - Senggigi PP',
    from: 'Senaru',
    to: 'Kawasan Wisata Senggigi',
    duration: '2 - 2.5 Jam',
    durationEn: '2 - 2.5 Hours',
    category: 'tourism',
    description: 'Layanan perjalanan privat dari Senaru menuju kawasan resor tepi pantai, restoran, kafe, dan sentra wisata Senggigi di Lombok Barat.',
    descriptionEn: 'Private transfer connecting Senaru with the beach resorts, dining, sunset spots, and hospitality hub of Senggigi, West Lombok.',
    keyPoints: [
      'Kawasan Resor, Hotel Bintang, dan Kuliner Pantai',
      'Pemandangan tebing pantai Lombok Barat yang menawan',
      'Jadwal penjemputan fleksibel sesuai kebutuhan tamu'
    ],
    keyPointsEn: [
      'Beach Resort, Hotel, and Coastal Dining Area',
      'Scenic ocean cliffs along the West Coast',
      'Flexible departure schedule tailored to guests'
    ],
    included: [
      'Mobil Privat AC Bersih',
      'Driver Profesional dan BBM',
      'Parkir dan Air Mineral',
      'Layanan Antar ke Depan Lobi Hotel'
    ],
    includedEn: [
      'Clean Private AC Vehicle',
      'Professional Driver and Fuel',
      'Parking and Mineral Water',
      'Direct Hotel Lobby Drop-off'
    ],
    waMessage: 'Halo Rinjani Transport, saya tertarik memesan rute Senaru - Senggigi PP. Mohon informasi ketersediaan unit dan tarifnya.'
  },
  {
    id: 'senaru-mataram',
    name: 'Senaru - Mataram PP',
    from: 'Senaru',
    to: 'Kota Mataram',
    duration: '2 - 2.5 Jam',
    durationEn: '2 - 2.5 Hours',
    category: 'city',
    description: 'Transportasi privat dari kawasan lereng Rinjani Senaru menuju pusat Kota Mataram, pusat administrasi, pusat perbelanjaan, dan pusat oleh-oleh khas Lombok.',
    descriptionEn: 'Direct private transportation from Senaru highlands to Mataram City center, shopping malls, administrative offices, and local souvenir centers.',
    keyPoints: [
      'Pusat Ibu Kota Provinsi NTB',
      'Akses mudah ke pusat oleh-oleh mutiara dan tenun',
      'Rute cepat melalui jalur utama Lombok'
    ],
    keyPointsEn: [
      'Provincial Capital City Center',
      'Easy access to souvenir markets and malls',
      'Fast route via main Lombok highways'
    ],
    included: [
      'Kendaraan Privat AC',
      'Driver Berpengalaman dan BBM',
      'Antar ke Hotel, Kantor, atau Pusat Belanja',
      'Bantuan Bagasi'
    ],
    includedEn: [
      'Private AC Vehicle',
      'Experienced Driver and Fuel Included',
      'Drop-off at Hotels, Offices, or Shopping Centers',
      'Luggage Assistance'
    ],
    waMessage: 'Halo Rinjani Transport, saya membutuhkan transportasi rute Senaru - Mataram PP. Mohon info harga dan penjemputannya.'
  },
  {
    id: 'senaru-lembar',
    name: 'Senaru - Lembar PP',
    from: 'Senaru',
    to: 'Pelabuhan Lembar',
    duration: '3 - 3.5 Jam',
    durationEn: '3 - 3.5 Hours',
    category: 'port',
    description: 'Layanan antar-jemput dari Senaru menuju Pelabuhan Lembar, dermaga penyeberangan kapal ferry rute Lombok menuju Pelabuhan Padangbai, Bali.',
    descriptionEn: 'Transfer service between Senaru and Lembar Harbor, the main inter-island ferry terminal connecting Lombok to Padangbai, Bali.',
    keyPoints: [
      'Pelabuhan Ferry Penyeberangan Lombok - Bali',
      'Jadwal penjemputan disesuaikan dengan jam tiket ferry',
      'Armada nyaman untuk perjalanan jarak jauh'
    ],
    keyPointsEn: [
      'Main Ferry Port to Bali (Padangbai)',
      'Departure timed according to ferry schedules',
      'Comfortable ride for long-distance transit'
    ],
    included: [
      'Armada Privat AC',
      'Driver Berpengalaman Rute Pelabuhan',
      'BBM dan Biaya Parkir',
      'Kapasitas Bagasi Koper Luas'
    ],
    includedEn: [
      'Private AC Vehicle',
      'Experienced Harbor Route Driver',
      'Fuel and Destination Parking',
      'Spacious Trunk for Heavy Bags'
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin memesan transfer Senaru - Lembar PP untuk penyeberangan ferry. Mohon info ketersediaannya.'
  },
  {
    id: 'senaru-airport',
    name: 'Senaru - Airport PP',
    from: 'Senaru',
    to: 'Bandara Internasional Lombok (LOP)',
    duration: '2.5 - 3 Jam',
    durationEn: '2.5 - 3 Hours',
    category: 'airport',
    description: 'Layanan antar-jemput bandara tepat waktu antara Senaru dan Bandara Internasional Lombok (Zainuddin Abdul Madjid - LOP) di Praya.',
    descriptionEn: 'Punctual airport transfer service between Senaru and Lombok International Airport (LOP) in Praya, guaranteeing peace of mind for your flights.',
    keyPoints: [
      'Garansi Tepat Waktu Sesuai Jadwal Penerbangan',
      'Pemantauan jam boarding dan status penerbangan',
      'Penjemputan langsung di pintu lobi kedatangan'
    ],
    keyPointsEn: [
      'Guaranteed On-Time Airport Arrival',
      'Flight and boarding monitoring support',
      'Meet & greet at arrival hall lobby'
    ],
    included: [
      'Mobil Privat AC Bersih dan Nyaman',
      'Driver Profesional dan BBM',
      'Parkir Bandara Termasuk',
      'Air Mineral Selama Perjalanan'
    ],
    includedEn: [
      'Clean & Chilled Private AC Car',
      'Professional Driver and Fuel Included',
      'Airport Parking Fees Covered',
      'Complimentary Mineral Water'
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin reservasi Airport Transfer rute Senaru - Bandara Internasional Lombok PP. Mohon info ketersediaan tanggal dan jamnya.'
  },
  {
    id: 'senaru-kuta-lombok',
    name: 'Senaru - Kuta Lombok PP',
    from: 'Senaru',
    to: 'Kuta Mandalika (Lombok Selatan)',
    duration: '3.5 - 4 Jam',
    durationEn: '3.5 - 4 Hours',
    category: 'tourism',
    description: 'Perjalanan privat dari utara ke selatan Lombok menghubungkan Senaru dengan kawasan wisata Kuta Mandalika, Sirkuit Mandalika, Pantai Tanjung Aan, dan Bukit Merese.',
    descriptionEn: 'Scenic cross-island transfer connecting Senaru in the north with Kuta Mandalika in South Lombok, home to the MotoGP circuit, Tanjung Aan, and pristine beaches.',
    keyPoints: [
      'Kawasan Wisata Mandalika dan Sirkuit Internasional',
      'Destinasi pantai pasir putih dan tebing eksotis',
      'Perjalanan lintas pulau dengan pemandangan bervariasi'
    ],
    keyPointsEn: [
      'Mandalika Tourism Hub and MotoGP Circuit',
      'White sand beaches and ocean cliff viewpoints',
      'Scenic north-to-south island crossing'
    ],
    included: [
      'Mobil Privat AC Jarak Jauh',
      'Driver Ramah Menguasai Medan Jalan',
      'BBM dan Biaya Parkir',
      'Pemberhentian Istirahat / Makan Fleksibel'
    ],
    includedEn: [
      'Long-distance Private AC Vehicle',
      'Friendly Driver Experienced on Island Routes',
      'Fuel and Parking Fees',
      'Flexible Rest and Lunch Stops along the way'
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin memesan transportasi rute Senaru - Kuta Lombok Mandalika PP. Mohon info tarif terbaiknya.'
  },
  {
    id: 'senaru-ekas',
    name: 'Senaru - Ekas PP',
    from: 'Senaru',
    to: 'Teluk Ekas (Lombok Timur Selatan)',
    duration: '3.5 - 4 Jam',
    durationEn: '3.5 - 4 Hours',
    category: 'tourism',
    description: 'Layanan transportasi privat menuju Teluk Ekas di ujung tenggara Lombok, destinasi populer bagi pecinta olahraga selancar (surfing), snorkeling, dan resort eksklusif.',
    descriptionEn: 'Private transport to Ekas Bay in southeastern Lombok, a world-class surfing destination, secluded marine bay, and luxury eco-resort area.',
    keyPoints: [
      'Spot Surfing Dunia dan Wisata Bahari Tenang',
      'Teluk tersembunyi dengan pemandangan tebing memukau',
      'Driver memahami rute jalan menuju area Ekas'
    ],
    keyPointsEn: [
      'World-renowned Surf Breaks and Secluded Bay',
      'Untouched natural coastline and cliffs',
      'Driver knowledgeable in navigating southern rural tracks'
    ],
    included: [
      'Armada Privat AC Prima',
      'Driver Lokal Berpengalaman dan BBM',
      'Bantuan Angkut Papan Surfing / Bagasi',
      'Parkir dan Air Mineral'
    ],
    includedEn: [
      'High-performance Private AC Fleet',
      'Experienced Local Driver and Fuel',
      'Surfboard & Luggage Handling Assistance',
      'Parking and Mineral Water'
    ],
    waMessage: 'Halo Rinjani Transport, saya memerlukan transportasi rute Senaru - Teluk Ekas PP. Mohon informasi ketersediaan armada dan harganya.'
  },
  {
    id: 'senaru-labuan-lombok',
    name: 'Senaru - Labuan Lombok PP',
    from: 'Senaru',
    to: 'Labuan Lombok (Pelabuhan Kayangan)',
    duration: '2 - 2.5 Jam',
    durationEn: '2 - 2.5 Hours',
    category: 'port',
    description: 'Transportasi privat dari Senaru menuju Labuan Lombok / Pelabuhan Kayangan di Lombok Timur, dermaga penyeberangan kapal ferry menuju Pototano, Sumbawa.',
    descriptionEn: 'Private transit between Senaru and Labuan Lombok (Kayangan Port) in East Lombok, the ferry gateway to Pototano Harbor on Sumbawa Island.',
    keyPoints: [
      'Pelabuhan Penyeberangan Ferry ke Pulau Sumbawa',
      'Rute utama untuk ekspedisi hiu paus dan overland Sumbawa',
      'Waktu tempuh efisien melalui Lombok Utara - Timur'
    ],
    keyPointsEn: [
      'Main Ferry Port to Sumbawa Island',
      'Prime gateway for Whale Shark trips and Sumbawa overland',
      'Direct efficient route via North-East Lombok'
    ],
    included: [
      'Mobil Privat AC',
      'Driver Berpengalaman dan BBM',
      'Biaya Parkir Pelabuhan',
      'Antar Tepat Waktu Sesuai Jadwal Penyeberangan'
    ],
    includedEn: [
      'Private AC Car',
      'Experienced Driver and Fuel',
      'Port Parking Included',
      'Punctual drop-off timed for ferry departures'
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin memesan rute Senaru - Labuan Lombok (Pelabuhan Kayangan) PP. Mohon info penawarannya.'
  },
  {
    id: 'senaru-tetebatu',
    name: 'Senaru - Tetebatu PP',
    from: 'Senaru',
    to: 'Kawasan Wisata Tetebatu',
    duration: '2.5 Jam',
    durationEn: '2.5 Hours',
    category: 'tourism',
    description: 'Perjalanan privat menghubungkan dua sisi Gunung Rinjani: dari lereng utara (Senaru) menuju lereng selatan (Tetebatu) yang terkenal dengan terasering sawah hijau dan Monkey Forest.',
    descriptionEn: 'Scenic connection between two iconic flanks of Mount Rinjani: northern gateway Senaru to southern highlands Tetebatu, famed for rice terraces and monkey forests.',
    keyPoints: [
      'Menghubungkan Jalur Pendakian Senaru dengan Pedesaan Tetebatu',
      'Rute pemandangan alam perbukitan dan pedesaan yang sejuk',
      'Sangat cocok bagi wisatawan yang melanjutkan trip budaya & air terjun'
    ],
    keyPointsEn: [
      'Connecting Northern Rinjani Trail with Southern Countryside',
      'Scenic cool mountain route through traditional villages',
      'Ideal for travelers continuing their eco-tour to waterfalls'
    ],
    included: [
      'Mobil Privat AC Tangguh di Jalur Pegunungan',
      'Driver Lokal Ramah dan BBM',
      'Biaya Parkir',
      'Air Mineral Selama Perjalanan'
    ],
    includedEn: [
      'Private AC Vehicle built for mountain terrain',
      'Friendly Local Driver and Fuel',
      'Parking Fees',
      'Mineral Water during the ride'
    ],
    waMessage: 'Halo Rinjani Transport, saya ingin memesan layanan transfer Senaru - Tetebatu PP. Mohon informasi tarif dan ketersediaannya.'
  }
];
