import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  id,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-plum-500">
        <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-plum-800 sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-plum-700/90 sm:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
