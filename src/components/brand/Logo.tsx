import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
};

export default function Logo({ variant = "dark" }: Props) {
  const text = variant === "dark" ? "text-brand" : "text-white";
  const dot = variant === "dark" ? "bg-accent" : "bg-accent-light";

  return (
    <Link href="/" aria-label="DOLBORA home" className="flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand shadow-[0_4px_18px_rgba(14,92,74,0.25)]">
        <span className="font-display text-base font-bold leading-none text-white">D</span>
        <span className={`absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full ${dot} ring-2 ring-white`} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-base font-bold tracking-[0.18em] ${text}`}>DOLBORA</span>
        <span className={`mt-0.5 text-[10px] tracking-[0.32em] ${variant === "dark" ? "text-ink-muted" : "text-white/60"}`}>
          돌보라
        </span>
      </span>
    </Link>
  );
}
