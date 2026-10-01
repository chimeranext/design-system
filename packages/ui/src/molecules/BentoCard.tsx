import { cn } from "../lib/cn";

export interface BentoCardProps {
  /** Group heading, tinted with the accent. */
  label: string;
  /** Bullet items; their count is shown in the badge. */
  items: string[];
  /**
   * Accent color as a raw value (hex or CSS color). Pass a token from the
   * build — e.g. `tokens.bento.dark["1"]` / `tokens.bento.light["1"]`. The
   * component never hardcodes a palette.
   */
  accent: string;
  className?: string;
}

/** A methodology bento cell: one accent per discipline, driving the top border,
 *  heading, count badge, and bullet markers. */
export function BentoCard({ label, items, accent, className }: BentoCardProps) {
  return (
    <div
      className={cn("rounded-xl border bg-card p-6 transition-transform hover:-translate-y-1", className)}
      style={{ borderColor: `${accent}55`, boxShadow: `inset 0 3px 0 0 ${accent}` }}
    >
      <div className="flex items-baseline justify-between gap-2">
        <h4 className="font-display text-sm font-bold" style={{ color: accent }}>{label}</h4>
        <span
          className="rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold"
          style={{ backgroundColor: `${accent}1f`, color: accent }}
        >
          {items.length}
        </span>
      </div>
      <ul className="mt-3 space-y-1.5">
        {items.map((it) => (
          <li key={it} className="text-[13px] leading-snug text-card-foreground/90">
            <span className="select-none" style={{ color: accent }}>· </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
