import { LeafSprig, Sparkle } from "@/components/ui/Motifs";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function CtaSection() {
  return (
    <section aria-labelledby="cta-title" className="pb-16 pt-4 sm:pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-plum-700 px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-gold-500/15 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -right-16 size-72 rounded-full bg-plum-500/40 blur-2xl"
            />
            <LeafSprig className="absolute -left-4 bottom-0 w-28 rotate-12 text-cream-50/10 sm:left-6 sm:w-36" />
            <LeafSprig className="absolute -right-2 top-0 w-24 -rotate-12 -scale-x-100 text-cream-50/10 sm:right-8 sm:w-32" />
            <Sparkle className="absolute right-6 top-8 hidden size-8 text-gold-400/70 sm:block" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
                Pesan Sekarang
              </p>
              <h2
                id="cta-title"
                className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl"
              >
                Yuk, Nikmati Getuk Tukkie!
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream-100/85 sm:text-base">
                Getuk goreng dengan cokelat lumer dan oreo renyah — pilih jumlah
                porsi, lalu kirim pesan melalui WhatsApp.
              </p>
              <WhatsAppLink
                qty={1}
                className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-pill bg-gold-500 px-7 py-3.5 text-sm font-semibold text-plum-900 shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-plum-700"
              >
                Pesan Sekarang via WhatsApp
              </WhatsAppLink>
              <p className="mt-4 text-xs text-cream-100/70">
                Rp5.000/porsi · Dibalas langsung melalui chat WhatsApp
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
