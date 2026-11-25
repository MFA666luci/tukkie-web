type DecorationProps = {
  className?: string;
};

export function LeafSprig({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M30 102C56 82 76 56 83 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M61 66c-16-2-26-12-28-28 16 2 26 12 28 28Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M67 50c2-16 12-26 28-28-2 16-12 26-28 28Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M49 82c-15-1-24-10-27-24 15 1 24 10 27 24Z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}

export function DotGrid({ className }: DecorationProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className ?? ""}`}
      style={{
        backgroundImage:
          "radial-gradient(rgb(138 79 121 / 0.16) 1.5px, transparent 1.5px)",
        backgroundSize: "18px 18px",
      }}
    />
  );
}

export function Sparkle({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2c.6 4.9 2.5 6.8 7.4 7.4C14.5 10 12.6 11.9 12 16.8c-.6-4.9-2.5-6.8-7.4-7.4C9.5 8.8 11.4 6.9 12 2Z"
        fill="currentColor"
      />
      <path
        d="M19 15c.3 2.4 1.2 3.3 3.6 3.6-2.4.3-3.3 1.2-3.6 3.6-.3-2.4-1.2-3.3-3.6-3.6 2.4-.3 3.3-1.2 3.6-3.6Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}
