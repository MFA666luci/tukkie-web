export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Galeri", href: "#galeri" },
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery-box.webp",
    alt: "Getuk goreng dengan topping cokelat dan oreo dalam kotak kraft di atas kain pink",
    caption: "Kemasan kraft",
  },
  {
    src: "/images/gallery-closeup.webp",
    alt: "Siraman cokelat lumer di atas getuk goreng bertabur oreo",
    caption: "Cokelat lumer",
  },
  {
    src: "/images/gallery-macro.webp",
    alt: "Detail taburan oreo renyah di atas getuk goreng yang digoreng keemasan",
    caption: "Taburan oreo",
  },
  {
    src: "/images/gallery-overhead.webp",
    alt: "Enam getuk goreng dalam kotak terlihat dari atas dengan topping cokelat dan oreo",
    caption: "Isi penuh",
  },
  {
    src: "/images/gallery-bite.webp",
    alt: "Satu potong getuk goreng ditusuk menampilkan cokelat lumer dan taburan oreo",
    caption: "Satu gigitan",
  },
  {
    src: "/images/gallery-wood.webp",
    alt: "Getuk goreng di kotak kraft di atas talenan kayu dengan oreo di sekitarnya",
    caption: "Siap disajikan",
  },
];

export type Benefit = {
  icon: "tradition" | "cassava" | "moment" | "whatsapp";
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: "tradition",
    title: "Cita Rasa Tradisional",
    description:
      "Resep getuk singkong yang akrab di lidah, diolah dengan cara sederhana seperti camilan rumahan.",
  },
  {
    icon: "cassava",
    title: "Berbahan Singkong",
    description:
      "Singkong sebagai bahan utama, dipadukan dengan cokelat lumer dan oreo renyah.",
  },
  {
    icon: "moment",
    title: "Cocok Segala Suasana",
    description:
      "Teman santai di rumah, kumpul keluarga, atau camilan sore bersama teman.",
  },
  {
    icon: "whatsapp",
    title: "Pesan Praktis",
    description:
      "Tanpa aplikasi tambahan: pilih jumlah, lalu pesan langsung melalui WhatsApp.",
  },
];
