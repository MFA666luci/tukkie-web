"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
        solid
          ? "border-b border-plum-900/5 bg-cream-50/90 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <Logo />

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 text-sm font-medium text-plum-700 transition-colors hover:text-plum-600"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-500 transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <WhatsAppLink
            qty={1}
            className="hidden items-center gap-2 rounded-pill bg-plum-600 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum-700 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 sm:inline-flex"
          >
            Pesan Sekarang
          </WhatsAppLink>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="grid size-10 place-items-center rounded-full border border-plum-900/10 bg-cream-50/80 text-plum-700 transition-colors hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-plum-900/5 bg-cream-50/95 backdrop-blur-xl lg:hidden"
        >
          <nav
            aria-label="Navigasi mobile"
            className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-6 pt-2 sm:px-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3.5 text-base font-medium text-plum-700 transition-colors hover:bg-plum-100/60 hover:text-plum-800"
              >
                {link.label}
              </a>
            ))}
            <WhatsAppLink
              qty={1}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-pill bg-plum-600 px-5 py-3.5 text-sm font-semibold text-cream-50 shadow-soft transition-colors hover:bg-plum-700"
            >
              Pesan Sekarang
            </WhatsAppLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
