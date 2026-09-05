import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  {
    id: 'toyota-avanza',
    name: 'Toyota Avanza',
    nameAr: 'تويوتا أفانزا',
    category: 'Family MPV',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/avanza.jpg',
    seats: 6,
    transmission: 'Manual/Matic',
    fuel: 'Gasoline',
    fuelAr: 'بنزين',
    includeList: ['Mobil', 'Driver Berpengalaman', 'AC Dingin & Bersih'],
    includeListAr: ['السيارة', 'السائق', 'مكيف نظيف'],
    description: 'Kendaraan keluarga terpopuler yang lincah, efisien, dan nyaman untuk perjalanan wisata maupun antar-jemput di Lombok.',
    descriptionAr: 'سيارة عائلية اقتصادية ومريحة ومجهزة بمكيف هواء لتوفير أقصى درجات الراحة في لومبوك.',
    rating: 4.9,
    reviewsCount: 118,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 6 Penumpang', labelAr: 'السعة', valueAr: '٦ ركاب' },
      { label: 'Fasilitas', value: 'Full AC, Audio/Bluetooth, Kabin Bersih & Wangi', labelAr: 'الميزات', valueAr: 'مكيف، بلوتوث، داخلي نظيف' },
      { label: 'Layanan', value: 'Termasuk Driver Berpengalaman', labelAr: 'الخدمة', valueAr: 'سائق محترف' }
    ]
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova',
    nameAr: 'تويوتا إنوفا',
    category: 'Premium MPV',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/innova.jpg',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Diesel / Gasoline',
    fuelAr: 'ديزل / بنزين',
    includeList: ['Mobil', 'Driver Berpengalaman', 'Kenyamanan Ekstra'],
    includeListAr: ['السيارة', 'السائق', 'راحة إضافية'],
    description: 'MPV kelas premium dengan suspensi empuk, ruang kabin lapang, dan kenyamanan optimal untuk rute perbukitan Sembalun & wisata Lombok.',
    descriptionAr: 'سيارة عائلية فاخرة ومريحة للغاية بمساحة داخلية واسعة ونظام تعليق ممتاز لرحلات لومبوك.',
    rating: 4.9,
    reviewsCount: 165,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 7 Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas', value: 'Kabin Luas, AC Double Blower, Suspensi Halus', labelAr: 'الميزات', valueAr: 'راحة ممتازة، مكيف مزدوج' },
      { label: 'Layanan', value: 'Termasuk Driver Berpengalaman', labelAr: 'الخدمة', valueAr: 'سائق محترف' }
    ]
  },
  {
    id: 'toyota-hiace-commuter',
    name: 'Toyota Hiace Commuter',
    nameAr: 'تويوتا هايس كوميوتر',
    category: 'Minibus Rombongan',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/hiace.jpg',
    seats: 14,
    transmission: 'Manual',
    fuel: 'Diesel',
    fuelAr: 'ديزل',
    includeList: ['Mobil', 'Driver Berpengalaman', 'Kapasitas Rombongan'],
    includeListAr: ['السيارة', 'السائق', 'للمجموعات'],
    description: 'Minibus berkapasitas besar dengan pendingin udara merata hingga baris belakang, pilihan utama untuk tour keluarga besar atau rombongan.',
    descriptionAr: 'ميني باص واسع ومكيف بالكامل، خيار مثالي للمجموعات والعائلات الكبيرة في لومبوك.',
    rating: 4.8,
    reviewsCount: 94,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 14 Penumpang', labelAr: 'السعة', valueAr: '١٤ راكب' },
      { label: 'Fasilitas', value: 'Kabin Sangat Lapang, Reclining Seats, Bagasi Besar', labelAr: 'الميزات', valueAr: 'كابينة واسعة، مقاعد قابلة للإمالة' },
      { label: 'Layanan', value: 'Termasuk Driver Berpengalaman', labelAr: 'الخدمة', valueAr: 'سائق محترف' }
    ]
  },
  {
    id: 'toyota-hiace-premio',
    name: 'Toyota Hiace Premio',
    nameAr: 'تويوتا هايس بريميو',
    category: 'Minibus VIP Executive',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/hiace_premio.jpg',
    seats: 12,
    transmission: 'Manual',
    fuel: 'Diesel',
    fuelAr: 'ديزل',
    includeList: ['Mobil', 'Driver Berpengalaman', 'VIP Interior'],
    includeListAr: ['السيارة', 'السائق', 'داخلي فاخر'],
    description: 'Minibus kelas eksekutif dengan kabin modern kedap suara, kenyamanan berkelas VIP, dan performa handal menjelajahi penjuru Lombok.',
    descriptionAr: 'ميني باص تنفيذي فاخر مع مقصورة داخلية راقية ومريحة لرحلات كبار الشخصيات.',
    rating: 5.0,
    reviewsCount: 82,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 11-12 Penumpang', labelAr: 'السعة', valueAr: '١١-١٢ راكب' },
      { label: 'Fasilitas', value: 'Interior VIP Eksklusif, Peredam Suara Prima, AC Merata', labelAr: 'الميزات', valueAr: 'تصميم فخم، عزل صوت، راحة مطلقة' },
      { label: 'Layanan', value: 'Termasuk Driver Berpengalaman', labelAr: 'الخدمة', valueAr: 'سائق محترف' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Budi Santoso',
    role: 'Wisatawan dari Jakarta',
    text: 'Sangat puas dengan layanan Rinjani Transport saat liburan ke Sembalun dan Bukit Pergasingan. Mobil Toyota Innova sangat bersih, wangi, dan driver-nya ramah banget serta hafal spot foto terbaik di kaki Gunung Rinjani!',
    rating: 5,
    carModel: 'Toyota Innova',
    date: 'Agustus 2026'
  },
  {
    id: 'testi-2',
    name: 'Sarah Jenkins',
    role: 'Tourist from Australia',
    text: 'Fantastic experience with Rinjani Transport! Punctual airport pickup from Lombok Airport to our hotel, then an amazing day tour to Benang Kelambu waterfall. Truly living up to "Your Journey, Our Priority"!',
    rating: 5,
    carModel: 'Toyota Avanza',
    date: 'Juli 2026'
  },
  {
    id: 'testi-3',
    name: 'Keluarga Hendra',
    role: 'Family Trip dari Surabaya',
    text: 'Sewa Toyota Hiace Premio untuk rombongan keluarga 10 orang ke Tetebatu dan Monkey Forest. Nyaman sekali, AC dingin merata, driver sabar dan sangat mengutamakan keselamatan. Recommended banget di Lombok!',
    rating: 5,
    carModel: 'Toyota Hiace Premio',
    date: 'Agustus 2026'
  }
];
