import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface WindowCardProps {
  /** Title shown in the default title-only body (ignored when `children` is set). */
  title?: ReactNode;
  /** Optional badge on the right of the chrome bar (e.g. "live"). */
  badge?: string;
  /** Optional mono meta label left of the badge (e.g. a file path). */
  meta?: string;
  /** Optional custom body below the chrome bar. Replaces the title-only body. */
  children?: ReactNode;
  className?: string;
}

/** A card wearing macOS-style window chrome (three traffic dots) with an
 *  optional status badge — the "venture chip" treatment. */
export function WindowCard({ title, badge, meta, children, className }: WindowCardProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-card text-left transition-transform hover:-translate-y-0.5", className)}>
      <div className="flex items-center gap-1 border-b border-border/60 bg-muted/40 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-destructive/70" />
        <span className="h-2 w-2 rounded-full bg-warning/70" />
        <span className="h-2 w-2 rounded-full bg-success/70" />
        {meta && <span className="ml-2 truncate font-mono text-[10px] text-muted-foreground">{meta}</span>}
        {badge && (
          <span className="ml-auto rounded-full bg-success/15 px-1.5 py-px font-mono text-[9px] font-semibold uppercase text-success">
            {badge}
          </span>
        )}
      </div>
      {children ?? (
        <div className="px-3 py-2.5 font-display text-sm font-bold text-card-foreground">{title}</div>
      )}
    </div>
  );
}
