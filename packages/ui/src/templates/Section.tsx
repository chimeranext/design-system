import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface SectionProps {
  id?: string;
  /** `light` applies the `.light` token theme (white surface); `dark` uses the
   *  default `:root` dark theme. */
  tone?: "dark" | "light";
  className?: string;
  children: ReactNode;
}

/** Fluid page section: ~1440px content that breathes up to 4K, with a dark or
 *  light token surface. */
const CONTAINER = "mx-auto w-full max-w-[min(90rem,94vw)]";

export function Section({ id, tone = "dark", className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        tone === "light" ? "light bg-background text-foreground" : "bg-background",
        "px-[clamp(1.25rem,4vw,4rem)] py-[clamp(4rem,9vh,7.5rem)]",
        className,
      )}
    >
      <div className={CONTAINER}>{children}</div>
    </section>
  );
}
