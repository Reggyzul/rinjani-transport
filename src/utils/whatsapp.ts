export const DEFAULT_WA_NUMBER = '6285964280931';

export const DEFAULT_WA_TEMPLATE = `*Rinjani Transport Lombok*
==========================
*Your Journey, Our Priority.*

Halo Rinjani Transport, saya ingin konsultasi layanan transportasi & wisata di Lombok:

📍 *Kebutuhan Layanan:*
👉 Airport Transfer (Bandara Lombok)
👉 Hotel & Pelabuhan Transfer (Bangsal / Gili)
👉 Rental Mobil + Driver (Innova / Hiace / Avanza)
👉 Wisata & Tour Lombok (Sembalun / Benang Kelambu / Tetebatu)
👉 One Way Transport

Mohon informasi ketersediaan unit dan penawaran harga terbaik. Terima kasih!`;

export const openWhatsApp = (customMessage?: string) => {
  const text = customMessage && customMessage.trim().length > 0 ? customMessage : DEFAULT_WA_TEMPLATE;
  const url = `https://api.whatsapp.com/send?phone=${DEFAULT_WA_NUMBER}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noreferrer');
};

