"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { featuredProduct } from "@/data/products";
import { formatRupiah } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { asset } from "@/lib/site-url";

export function Product() {
  const [qty, setQty] = useState(1);
  const total = featuredProduct.price * qty;

  return (
    <section
      id="produk"
      aria-labelledby="produk-title"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="produk-title"
            align="center"
            eyebrow="Menu Kami"
            title="Camilan Tradisional, Rasa yang Familiar"
            lead="Getuk singkong goreng dengan topping cokelat lumer dan taburan oreo renyah — resep rumahan yang dikemas lebih modern."
          />
        </Reveal>

        <Reveal delay={100} className="mt-10 sm:mt-14">
          <div className="mx-auto grid max-w-4xl overflow-hidden rounded-[2rem] bg-cream-50 shadow-lift ring-1 ring-plum-900/5 md:grid-cols-[0.9fr_1fr]">
            <div className="relative min-h-72 overflow-hidden bg-cream-100 sm:min-h-96 md:min-h-full">
              <Image
                src={asset(featuredProduct.image)}
                alt={featuredProduct.imageAlt}
                fill
                sizes="(min-width: 768px) 40vw, 92vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-pill bg-cream-50/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-plum-600 backdrop-blur">
                {featuredProduct.category}
              </span>
            </div>

            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-plum-800 sm:text-3xl">
                {featuredProduct.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-plum-700/90 sm:text-base">
                {featuredProduct.shortDescription}
              </p>

              <ul className="mt-5 space-y-2.5">
                {featuredProduct.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-plum-700"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-600" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-bold text-plum-800 sm:text-4xl">
                  {formatRupiah(featuredProduct.price)}
                </span>
                <span className="text-sm text-plum-600">
                  /{featuredProduct.unit}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-cream-100 px-4 py-3.5">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-plum-500">
                    Jumlah porsi
                  </p>
                  <div className="mt-2 inline-flex items-center rounded-pill border border-plum-900/10 bg-cream-50">
                    <button
                      type="button"
                      onClick={() => setQty((value) => Math.max(1, value - 1))}
                      disabled={qty <= 1}
                      aria-label="Kurangi jumlah porsi"
                      className="grid size-9 place-items-center rounded-pill text-plum-700 transition-colors hover:bg-plum-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Minus className="size-4" />
                    </button>
                    <span
                      aria-live="polite"
                      className="w-8 text-center text-sm font-semibold text-plum-800"
                    >
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty((value) => Math.min(99, value + 1))}
                      disabled={qty >= 99}
                      aria-label="Tambah jumlah porsi"
                      className="grid size-9 place-items-center rounded-pill text-plum-700 transition-colors hover:bg-plum-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-plum-500">
                    Total
                  </p>
                  <p
                    aria-live="polite"
                    className="mt-1 font-display text-xl font-bold text-plum-800"
                  >
                    {formatRupiah(total)}
                  </p>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl(qty)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-pill bg-plum-600 px-6 py-3.5 text-sm font-semibold text-cream-50 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum-700 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
              >
                <WhatsAppIcon className="size-5" />
                Pesan {qty} porsi via WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-plum-600/80">
                Pesanan dilanjutkan langsung melalui chat WhatsApp.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
