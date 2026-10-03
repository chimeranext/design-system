import { cn } from "../lib/cn";

export interface StatTileProps {
  /** The headline number/figure, rendered in the brand gradient. */
  value: string;
  /** Caption below the value. */
  label: string;
  className?: string;
}

/** A single metric tile: gradient number over an uppercase caption. */
export function StatTile({ value, label, className }: StatTileProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-5 text-center transition-transform hover:-translate-y-0.5", className)}>
      <div className="bg-brand-gradient bg-clip-text font-display font-extrabold text-transparent text-[clamp(1.75rem,1.2rem+1.4vw,3rem)]">
        {value}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground lg:text-[13px]">
        {label}
      </div>
    </div>
  );
}
