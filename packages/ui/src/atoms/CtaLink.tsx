import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export type CtaVariant = "solid" | "outline" | "ghost";

export interface CtaLinkProps {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  /** Optional click side effect (e.g. analytics) — the DS ships no tracking. */
  onClick?: () => void;
  className?: string;
}

/** Anchor styled as a call-to-action. External hrefs open in a new tab. */
export function CtaLink({ href, children, variant = "solid", onClick, className }: CtaLinkProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors",
        variant === "solid" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" && "border border-primary/60 text-foreground hover:bg-primary/10",
        variant === "ghost" && "text-brand-accent hover:underline",
        className,
      )}
    >
      {children}
    </a>
  );
}
