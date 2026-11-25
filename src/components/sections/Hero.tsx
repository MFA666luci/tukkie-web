import Image from "next/image";
import {
  ArrowDown,
  Leaf,
  MessageCircle,
  Sparkles,
  Wallet,
} from "lucide-react";
import { LeafSprig, Sparkle } from "@/components/ui/Motifs";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { asset } from "@/lib/site-url";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative scroll-mt-24 overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 size-[30rem] rounded-full bg-rose-200/55 blur-3xl sm:size-[36rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 size-[26rem] rounded-full bg-plum-200/35 blur-3xl"
      />
      <LeafSprig className="absolute left-4 top-24 hidden w-20 text-plum-300/70 lg:block xl:left-10" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-pill border border-gold-500/40 bg-gold-100/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-plum-700">
            <Sparkles className="size-3.5 text-gold-600" />
            Camilan Tradisional Indonesia
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-plum-800 sm:text-5xl lg:text-[3.55rem]"
          >
            Nikmatnya{" "}
            <span className="relative whitespace-nowrap italic text-plum-600">
              Tradisi
              <svg
                viewBox="0 0 220 14"
                fill="none"
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 w-full text-gold-400"
              >
                <path
                  d="M3 10c50-7 120-9 214-5"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            dalam Setiap Gigitan.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-plum-700/90 sm:text-lg">
            Getuk goreng khas Tukkie: singkong pilihan yang digoreng hingga
            keemasan, disiram cokelat lumer, dan ditaburi oreo renyah. Manis,
            legit, dan bikin susah berhenti.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppLink
              qty={1}
              className="inline-flex items-center justify-center gap-2.5 rounded-pill bg-plum-600 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum-700 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-200"
            >
              Pesan Sekarang
            </WhatsAppLink>
            <a
              href="#produk"
              className="inline-flex items-center justify-center gap-2 rounded-pill border border-plum-600/25 bg-cream-50/70 px-7 py-3.5 text-sm font-semibold text-plum-700 transition-all duration-300 hover:border-plum-600/50 hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-200"
            >
              Lihat Produk
              <ArrowDown className="size-4" />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-plum-700/90">
            <li className="inline-flex items-center gap-2">
              <Wallet className="size-4 text-gold-600" />
              Rp5.000/porsi
            </li>
            <li className="inline-flex items-center gap-2">
              <Leaf className="size-4 text-gold-600" />
              Berbahan singkong
            </li>
            <li className="inline-flex items-center gap-2">
              <MessageCircle className="size-4 text-gold-600" />
              Pesan via WhatsApp
            </li>
          </ul>
          <p className="mt-4 font-display text-sm italic text-plum-500">
            “Satu Gigitan, Bikin Nagih!”
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-x-3 -top-4 bottom-4 rounded-[2.8rem] border border-gold-400/50 sm:-inset-x-5"
          />
          <div
            aria-hidden="true"
            className="absolute -right-6 top-10 hidden size-24 rounded-full border border-dashed border-gold-500/50 sm:block sm:size-32"
          />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-cream-100 shadow-lift ring-1 ring-plum-900/5">
            <Image
              src={asset("/images/hero-product.webp")}
              alt="Getuk goreng Tukkie dengan topping cokelat lumer dan taburan oreo dalam kemasan kraft"
              width={1600}
              height={1067}
              priority
              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 80vw, 92vw"
              className="size-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-pill bg-cream-50/90 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-plum-700 backdrop-blur">
              Cokelat &amp; Oreo
            </span>
          </div>

          <div className="absolute -left-2 bottom-8 sm:left-2">
            <div className="rounded-2xl bg-cream-50/95 px-4 py-3 shadow-lift ring-1 ring-plum-900/5 backdrop-blur sm:px-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-plum-500">
                Harga
              </p>
              <p className="mt-1 font-display text-xl font-bold text-plum-800 sm:text-2xl">
                Rp5.000
                <span className="font-sans text-xs font-medium text-plum-600">
                  {" "}
                  /porsi
                </span>
              </p>
            </div>
          </div>

          <div className="absolute -top-2 -right-3 animate-float rounded-full bg-cream-50/95 p-2.5 shadow-soft ring-1 ring-plum-900/5 sm:-right-5">
            <Sparkle className="size-7 text-gold-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
