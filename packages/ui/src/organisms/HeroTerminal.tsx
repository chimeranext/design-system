import { cn } from "../lib/cn";
import { CopyButton } from "../atoms/CopyButton";

export interface HeroLine {
  /** Primary token of the line (brand-colored), e.g. an installed package name. */
  name: string;
  /** Optional muted suffix, e.g. " v1.2.0 — installed". */
  suffix?: string;
}

export interface HeroTerminalProps {
  /** The command echoed after the prompt and copied by the button. */
  command: string;
  /** Output lines that fade in one after another. */
  lines: HeroLine[];
  /** Final highlighted line after the outputs. */
  readyLine: string;
  /** Window title shown in the chrome bar. */
  title?: string;
  copyLabel?: string;
  copied?: string;
  onCopy?: (text: string) => void;
  className?: string;
}

/** Signature hero element: a terminal that "installs" a list of items with a
 *  staggered fade-in and a blinking caret. Output lines are fully parameterized. */
export function HeroTerminal({
  command,
  lines,
  readyLine,
  title = "chimeranext — ~/your-startup",
  copyLabel = "Copy",
  copied,
  onCopy,
  className,
}: HeroTerminalProps) {
  const step = 0.22;
  return (
    <div className={cn("terminal-dark w-full overflow-hidden rounded-xl border border-primary/25 text-left shadow-[0_0_80px_-12px_rgba(124,92,255,0.45)]", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-destructive/80" />
          <span className="h-3 w-3 rounded-full bg-warning/80" />
          <span className="h-3 w-3 rounded-full bg-success/80" />
          <span className="ml-3 hidden font-mono text-xs text-muted-foreground sm:inline">{title}</span>
        </div>
        <CopyButton text={command} label={copyLabel} copied={copied} onCopy={onCopy} />
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed sm:text-sm lg:text-[15px]">
        <div className="whitespace-pre-wrap [overflow-wrap:anywhere]">
          <span className="select-none text-brand-tertiary">$ </span>
          <span className="font-semibold">{command}</span>
        </div>
        {lines.map((ln, i) => (
          <div
            key={ln.name}
            className="hero-line whitespace-pre-wrap [overflow-wrap:anywhere]"
            style={{ animationDelay: `${0.55 + i * step}s` }}
          >
            <span className="select-none text-success">✓ </span>
            <span className="text-brand-primary">{ln.name}</span>
            {ln.suffix && <span className="text-muted-foreground">{ln.suffix}</span>}
          </div>
        ))}
        <div
          className="hero-line caret whitespace-pre-wrap pt-1"
          style={{ animationDelay: `${0.55 + lines.length * step + 0.3}s` }}
        >
          <span className="select-none text-brand-accent">➜ </span>
          <span className="font-semibold">{readyLine}</span>
        </div>
      </div>
    </div>
  );
}
