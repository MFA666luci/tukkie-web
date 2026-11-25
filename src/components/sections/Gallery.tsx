import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/data/site";
import { asset } from "@/lib/site-url";

export function Gallery() {
  return (
    <section
      id="galeri"
      aria-labelledby="galeri-title"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="galeri-title"
            eyebrow="Galeri"
            title="Sekilas Kenikmatan Tukkie"
            lead="Dari kotak kraft sampai satu gigitan — intip getuk goreng dengan cokelat lumer dan taburan oreo yang kami siapkan."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.src} delay={index * 60}>
              <figure className="group relative aspect-[3/2] w-full overflow-hidden rounded-[1.5rem] bg-cream-100 shadow-soft">
                <Image
                  src={asset(item.src)}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum-900/85 via-plum-900/30 to-transparent p-4 pt-10 text-sm font-medium text-cream-50 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
