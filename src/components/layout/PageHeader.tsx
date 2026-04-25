import Reveal from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignCls = align === "center" ? "text-center" : "text-left";

  return (
    <section className="relative overflow-hidden bg-brand-mist/40 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className={`container-page pb-16 md:pb-20 ${alignCls}`}>
        <Reveal>
          <span className="section-eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1
            className={`mt-5 max-w-5xl text-3xl font-bold leading-[1.25] tracking-tight text-ink md:text-[2.25rem] lg:text-[2.75rem] ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.12}>
            <p
              className={`mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg ${
                align === "center" ? "mx-auto" : ""
              }`}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
