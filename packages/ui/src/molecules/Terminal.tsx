import { cn } from "../lib/cn";
import { CopyButton } from "../atoms/CopyButton";

export interface TerminalProps {
  /** The command shown after the `$` prompt and copied by the button. */
  cmd: string;
  copyLabel?: string;
  copied?: string;
  onCopy?: (text: string) => void;
  className?: string;
}

/** A single-command terminal card with window chrome and a copy button. */
export function Terminal({ cmd, copyLabel = "Copy", copied, onCopy, className }: TerminalProps) {
  return (
    <div className={cn("terminal-dark w-full overflow-hidden rounded-lg border border-border shadow-lg", className)}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-destructive/80" />
        <span className="h-3 w-3 rounded-full bg-warning/80" />
        <span className="h-3 w-3 rounded-full bg-success/80" />
      </div>
      <div className="flex items-center gap-3 p-3 sm:p-4">
        <div className="min-w-0 flex-1">
          <code className="block whitespace-pre-wrap font-mono text-sm leading-relaxed [overflow-wrap:anywhere]">
            <span className="select-none text-brand-tertiary">$ </span>
            {cmd}
          </code>
        </div>
        <CopyButton text={cmd} label={copyLabel} copied={copied} onCopy={onCopy} />
      </div>
    </div>
  );
}
