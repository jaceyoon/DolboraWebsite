import Reveal from "@/components/motion/Reveal";

const PILLARS = [
  {
    label: "01",
    title: "신체를 넘어선 전인적 케어",
    body: "기본 수발을 넘어 인간의 존엄성과 깊은 만족감을 실현하는 고품격 케어를 지향합니다.",
  },
  {
    label: "02",
    title: "돌봄의 정의를 다시 쓰는 사람들",
    body: "돌보라의 전문가들은 어르신과 깊이 교감하며 함께 성장하는 인생의 동반자입니다.",
  },
  {
    label: "03",
    title: "인간 중심의 기술, Warm-Tech",
    body: "AI와 로봇은 수단일 뿐. 기술로 확보된 여유를 더 깊은 사랑과 관심으로 환원합니다.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-brand-sand/40">
      <div className="container-page py-24 md:py-28">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <span className="section-eyebrow">Beyond Care, Toward Dignity</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-5">
                <span className="whitespace-nowrap">돌보라의 철학은,</span>{" "}
                <span className="whitespace-nowrap">
                  <span className="text-brand">존엄을 향한 케어</span>입니다.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                기술이 아무리 정교해져도, 그 끝에 있어야 할 것은 사람을 향한 따뜻한 시선입니다.
                돌보라는 ‘사람을 위한 기술’의 자리에서 출발합니다.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <article className="relative h-full overflow-hidden rounded-3xl border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(14,92,74,0.35)] md:p-9">
                <div className="absolute right-7 top-7 font-display text-xs font-semibold tracking-[0.2em] text-accent-dark">
                  {p.label}
                </div>
                <div className="mt-2 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-mist text-brand">
                  <PillarIcon index={i} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-ink md:text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-[15px]">
                  {p.body}
                </p>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-brand/20 via-accent/40 to-transparent" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarIcon({ index }: { index: number }) {
  const common = "h-5 w-5";
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common}>
        <circle cx="9" cy="8" r="3" strokeLinecap="round" />
        <circle cx="17" cy="10" r="2.2" strokeLinecap="round" />
        <path d="M3 19c.8-3 3.4-4.5 6-4.5s5.2 1.5 6 4.5" strokeLinecap="round" />
        <path d="M14 18.5c.6-1.8 2.1-3 4-3s3.4 1.2 4 3" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}
