"use client";

import { useCallback, useState } from "react";
import { cn } from "../lib/cn";

export interface CopyButtonProps {
  /** Text written to the clipboard on click. */
  text: string;
  /** Default button label. */
  label: string;
  /** Label shown for 2s after a successful copy. */
  copied?: string;
  /** Optional side effect after copy (e.g. analytics) — the DS ships no tracking. */
  onCopy?: (text: string) => void;
  className?: string;
}

/** One-click clipboard button that flips to a confirmation state for 2 seconds. */
export function CopyButton({ text, label, copied = "Copied ✓", onCopy, className }: CopyButtonProps) {
  const [done, setDone] = useState(false);
  const handleCopy = useCallback(() => {
    navigator.clipboard?.writeText(text).then(() => {
      setDone(true);
      onCopy?.(text);
      setTimeout(() => setDone(false), 2000);
    });
  }, [text, onCopy]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label}
      className={cn(
        "shrink-0 rounded-md px-4 py-2 text-sm font-semibold transition-colors",
        done ? "bg-success text-black" : "bg-primary text-primary-foreground hover:bg-primary/90",
        className,
      )}
    >
      {done ? copied : label}
    </button>
  );
}
