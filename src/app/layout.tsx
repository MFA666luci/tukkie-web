import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tukkie | Getuk Goreng",
    template: "%s | Tukkie",
  },
  description:
    "Nikmati Getuk Goreng Tukkie dengan cokelat lumer dan taburan oreo. Camilan tradisional, dipesan dengan mudah melalui WhatsApp.",
  keywords: [
    "Getuk Goreng",
    "Getuk Goreng Cokelat Oreo",
    "Getuk Oreo",
    "Jual Getuk Goreng",
    "Camilan Tradisional Indonesia",
    "Tukkie",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Tukkie",
    title: "Tukkie | Getuk Goreng",
    description:
      "Nikmati Getuk Goreng Tukkie dengan cokelat lumer dan taburan oreo. Camilan tradisional, dipesan dengan mudah melalui WhatsApp.",
    images: [
      {
        url: `${siteUrl}/images/og-cover.webp`,
        width: 1200,
        height: 630,
        alt: "Getuk goreng Tukkie dengan topping cokelat lumer dan taburan oreo dalam kemasan kraft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tukkie | Getuk Goreng",
    description:
      "Nikmati Getuk Goreng Tukkie dengan cokelat lumer dan taburan oreo. Camilan tradisional, dipesan dengan mudah melalui WhatsApp.",
    images: [`${siteUrl}/images/og-cover.webp`],
  },
};

export const viewport: Viewport = {
  themeColor: "#F8ECD9",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tukkie",
  url: siteUrl,
  logo: `${siteUrl}/images/tukkie-logo.png`,
  description:
    "Brand camilan tradisional Indonesia yang menghadirkan Getuk Goreng.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+6285113232315",
      contactType: "sales",
      availableLanguage: "id",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal { opacity: 1; transform: none; }`}</style>
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-plum-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream-50"
        >
          Lewati ke konten utama
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
