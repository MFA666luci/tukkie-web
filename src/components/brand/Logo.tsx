import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/site-url";

type LogoProps = {
  variant?: "dark" | "light";
};

export function Logo({ variant = "dark" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="#home"
      aria-label="Tukkie — kembali ke atas"
      className="group inline-flex items-center gap-2.5"
    >
      <span
        className={`size-11 shrink-0 overflow-hidden rounded-full shadow-soft ring-2 transition-transform duration-300 group-hover:-rotate-6 sm:size-12 ${
          isDark ? "ring-gold-300/80" : "ring-gold-400/50"
        }`}
      >
        <Image
          src={asset("/images/tukkie-logo.png")}
          alt=""
          width={96}
          height={96}
          className="size-full object-cover"
        />
      </span>
      <span
        className={`font-display text-2xl font-bold leading-none tracking-tight sm:text-[1.7rem] ${
          isDark ? "text-plum-800" : "text-cream-50"
        }`}
      >
        Tukkie<span className="text-gold-500">.</span>
      </span>
    </Link>
  );
}
