export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  shortDescription: string;
  highlights: string[];
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    id: "getuk-goreng",
    name: "Getuk Goreng",
    category: "Makanan Tradisional",
    price: 5000,
    unit: "porsi",
    shortDescription:
      "Getuk singkong lembut yang digoreng hingga keemasan, disiram cokelat lumer, dan ditaburi oreo renyah. Camilan tradisional yang akrab di lidah, cocok dinikmati kapan saja.",
    highlights: [
      "Berbahan dasar singkong",
      "Topping cokelat lumer",
      "Taburan oreo renyah",
    ],
    image: "/images/gallery-wood.webp",
    imageAlt:
      "Getuk goreng dengan topping cokelat lumer dan taburan oreo dalam kotak kraft di atas talenan kayu",
  },
];

export const featuredProduct = products[0];
