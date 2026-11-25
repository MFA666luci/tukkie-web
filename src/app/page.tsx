import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { CtaSection } from "@/components/sections/CtaSection";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Product } from "@/components/sections/Product";
import { featuredProduct } from "@/data/products";
import { siteUrl } from "@/lib/site-url";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: featuredProduct.name,
  description: featuredProduct.shortDescription,
  image: [`${siteUrl}${featuredProduct.image}`],
  brand: {
    "@type": "Brand",
    name: "Tukkie",
  },
  offers: {
    "@type": "Offer",
    price: featuredProduct.price.toString(),
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Product />
        <Features />
        <Gallery />
        <CtaSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </>
  );
}
