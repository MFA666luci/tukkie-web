import type { AnchorHTMLAttributes, ReactNode } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

type WhatsAppLinkProps = {
  qty?: number;
  showIcon?: boolean;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function WhatsAppLink({
  qty = 1,
  showIcon = true,
  children,
  className,
  ...rest
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppUrl(qty)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {showIcon ? <WhatsAppIcon className="size-5 shrink-0" /> : null}
      {children}
    </a>
  );
}
