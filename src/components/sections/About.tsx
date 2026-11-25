import Image from "next/image";
import { Check } from "lucide-react";
import { LeafSprig } from "@/components/ui/Motifs";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { asset } from "@/lib/site-url";

const points = [
  "Berbahan dasar singkong",
  "Resep tradisional yang sederhana",
  "Topping cokelat lumer & oreo",
  "Dipesan langsung melalui WhatsApp",
];

export function About() {
  return (
    <section
      id="tentang"
      aria-labelledby="tentang-title"
      className="relative scroll-mt-24 overflow-hidden bg-cream-50 py-16 sm:py-24"
    >
      <LeafSprig className="absolute -right-8 top-10 w-24 text-plum-200 sm:w-32" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full rounded-card border border-gold-400/50"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-lift">
            <Image
              src={asset("/images/about-product.webp")}
              alt="Getuk goreng Tukkie dengan topping cokelat lumer dan taburan oreo dalam kotak kraft"
              fill
              sizes="(min-width: 1024px) 46vw, 88vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-2 sm:-right-6">
            <Image
              src={asset("/images/tukkie-logo.png")}
              alt=""
              width={768}
              height={768}
              className="size-28 rounded-full border-4 border-cream-50 bg-cream-50 object-cover shadow-lift ring-1 ring-gold-300/70 sm:size-36"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            id="tentang-title"
            eyebrow="Tentang Kami"
            title={
              <>
                Cerita di Balik{" "}
                <span className="italic text-plum-600">Tukkie</span>
              </>
            }
          />

          <div className="mt-6 space-y-4 text-base leading-relaxed text-plum-700/90">
            <p>
              Tukkie hadir membawa cita rasa camilan tradisional Indonesia
              melalui Getuk Goreng dengan topping cokelat lumer dan oreo renyah.
            </p>
            <p>
              Kami ingin menghadirkan pengalaman menikmati makanan tradisional
              dengan cara yang lebih praktis dan modern — sederhana, hangat, dan
              mudah dipesan.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-plum-700"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-plum-600/10 text-plum-600">
                  <Check className="size-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-display text-lg italic text-plum-600">
            “Satu Gigitan, Bikin Nagih!”
          </p>
          <p className="mt-1 text-sm text-plum-500">— Keluarga Tukkie</p>
        </Reveal>
      </div>
    </section>
  );
}
