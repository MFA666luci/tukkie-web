import { Logo } from "@/components/brand/Logo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { navLinks } from "@/data/site";
import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum-900 text-cream-100/80">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Getuk goreng dengan topping cokelat lumer dan oreo renyah,
              dibuat sederhana dan dipesan dengan mudah melalui WhatsApp.
            </p>
            <WhatsAppLink
              qty={1}
              className="mt-6 inline-flex items-center gap-2 rounded-pill border border-gold-500/40 bg-gold-500/10 px-5 py-2.5 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              Pesan via WhatsApp
            </WhatsAppLink>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cream-50">
              Navigasi
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cream-50">
              Kontak
            </h2>
            <address className="mt-5 space-y-2 text-sm not-italic">
              <p>WhatsApp pemesanan</p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-cream-50 transition-colors hover:text-gold-300"
              >
                {WHATSAPP_DISPLAY}
              </a>
              <p className="text-cream-100/60">
                Melayani pemesanan melalui WhatsApp.
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream-50/10 pt-6 text-xs text-cream-100/60 sm:flex-row sm:items-center">
          <p>© {year} Tukkie. Semua hak dilindungi.</p>
          <p>Getuk Goreng — camilan tradisional Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
