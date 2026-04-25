import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About | 돌보라",
  description:
    "현장 전문가가 설계한 시니어 케어 OS, 돌보라의 철학과 미션 그리고 핵심 전략.",
};

const PHILOSOPHY = [
  {
    title: "신체를 넘어선 전인적 케어",
    body: "기본적인 수발을 넘어 인간의 존엄성과 깊은 만족감을 실현하는 고품격 케어 서비스를 지향합니다. 정서·인지·관계까지 포괄하는 ‘전인적 케어’를 표준으로 삼습니다.",
  },
  {
    title: "돌봄의 정의를 다시 쓰는 사람들",
    body: "돌보라의 전문가들은 어르신과 깊이 교감하며 함께 성장하는 인생의 동반자입니다. 현장의 언어와 데이터의 언어를 모두 이해하는 사람들이 모입니다.",
  },
  {
    title: "인간 중심의 기술, Warm-Tech",
    body: "AI와 로봇은 수단일 뿐, 돌보라는 기술을 통해 확보된 여유를 어르신을 향한 더 깊은 사랑과 관심으로 환원합니다.",
  },
];

const STRATEGY = [
  {
    tag: "Data-Driven",
    title: "현장의 실시간 데이터를 통한 정교한 운영",
    body: "감(感)이 아니라 데이터로 운영합니다. 사고 직전의 패턴, 케어 빈도, 활동량까지 정량화합니다.",
  },
  {
    tag: "Tech Integration",
    title: "AI·로봇 기술을 실제 요양 환경에 최적화",
    body: "글로벌 사례 리서치와 국내 현장 검증을 결합해, 한국 요양원에 맞는 표준을 만듭니다.",
  },
  {
    tag: "Human-Centric",
    title: "절감된 리소스를 종사자 처우와 서비스 질로 환원",
    body: "기술이 만들어낸 시간은 다시 사람에게 돌아가야 합니다. 그것이 우리가 기술을 쓰는 이유입니다.",
  },
];

const HISTORY: { year: string; title: string }[] = [
  { year: "—", title: "" },
  { year: "—", title: "" },
  { year: "—", title: "" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About DOLBORA"
        title={
          <>
            <span className="whitespace-nowrap">현장을 아는 사람이,</span>{" "}
            <span className="whitespace-nowrap">
              기술의 언어로 <span className="text-brand">새로운 돌봄</span>을 설계합니다.
            </span>
          </>
        }
        description="요양 현장에서 시작된 절박한 질문이 돌보라의 출발점입니다. 기술은 도구이며, 사람은 목적입니다."
      />

      {/* CEO 인사말 */}
      <section className="bg-white">
        <div className="container-page grid items-start gap-12 py-24 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <Reveal>
              <span className="section-eyebrow">CEO Message</span>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-5">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-mist to-brand-sand">
                  <div className="flex h-full w-full items-end p-6">
                    <div className="rounded-2xl bg-white/80 p-4 backdrop-blur">
                      <p className="font-display text-sm font-bold text-brand">김민정</p>
                      <p className="text-xs text-ink-muted">대표이사 · 사회복지사</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <h2 className="text-2xl font-bold leading-[1.35] text-ink md:text-[1.875rem] md:leading-[1.3]">
                <span className="whitespace-nowrap text-brand">“누군가 해결해 주길 기다렸지만,</span>{" "}
                <span className="whitespace-nowrap">
                  결국 현장을 아는 내가 움직여야 했습니다.<span className="text-brand">”</span>
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft md:text-[17px]">
                <p>
                  저는 요양원 국장과 시설장으로 근무하며 어르신들의 삶 가장 가까운 곳에서
                  호흡해 왔습니다. 요양보호사 선생님들의 눈물, 보호자들의 막연한 불안, 시설
                  운영자의 끝없는 리스크. 그 한 가운데에서 저는 스스로에게 묻고 또 물었습니다.
                </p>
                <p>
                  <span className="font-semibold text-ink">
                    “왜 기술은 이토록 눈부시게 발전하는데, 요양 현장의 고통은 10년 전과 그대로인가?”
                  </span>
                </p>
                <p>
                  익숙함만을 쫓던 제 성격마저 180도 바꾸어 놓은 것은 바로 현장의 절박함이었습니다.
                  어르신들의 안전과 동료들의 눈물을 닦아주기 위해, 저는 사회복지사의 옷 위에
                  실버테크 설계자의 옷을 덧입기로 결심했습니다.
                </p>
                <p>
                  돌보라는 단순한 IT 서비스가 아닙니다. 현장의 생리를 누구보다 잘 아는 전문가가
                  관리 사각지대를 없애고 운영의 투명성, 효율, 정확성을 확보하기 위해 깎아 만든
                  솔루션입니다. 함께 와 주십시오. 시니어 케어의 표준을, 함께 다시 쓰겠습니다.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 브랜드 철학 상세 */}
      <section className="bg-brand-sand/40">
        <div className="container-page py-24 md:py-28">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <span className="section-eyebrow">Brand Philosophy</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="section-title mt-5">
                  <span className="whitespace-nowrap">Beyond Care,</span>{" "}
                  <span className="whitespace-nowrap text-brand">Toward Dignity.</span>
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                  전인적 케어란 단지 수발을 잘 하는 것이 아니라, 어르신의 시간 전체를 함께
                  설계하는 일입니다. 돌보라는 그 시간을 데이터로 보며 사람으로 채웁니다.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="card-soft h-full">
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-accent-dark">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-ink md:text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-[15px]">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Strategy */}
      <section className="bg-white">
        <div className="container-page py-24 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <span className="section-eyebrow">Mission & Strategy</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="section-title mt-5">
                  <span className="whitespace-nowrap">데이터로 운영하고,</span>{" "}
                  <span className="whitespace-nowrap">사람으로 완성합니다.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
                  케어의 효율성·정확성·투명성을 확보하기 위한 데이터 기반 운영 체계를
                  구축하여, 어르신과 종사자 모두가 행복한 환경을 만듭니다.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-4">
                {STRATEGY.map((s, i) => (
                  <Reveal key={s.tag} delay={i * 0.06}>
                    <li className="card-soft flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
                      <span className="inline-flex h-fit shrink-0 items-center rounded-full bg-brand-mist px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-brand">
                        {s.tag}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-ink md:text-lg">{s.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-brand-mist/30">
        <div className="container-page py-24 md:py-28">
          <Reveal>
            <span className="section-eyebrow">History</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-5 max-w-2xl">돌보라가 걸어온 길.</h2>
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-3xl border border-black/5 bg-white">
            <ul className="divide-y divide-black/5">
              {HISTORY.map((h, i) => (
                <li key={i} className="grid grid-cols-1 gap-3 px-6 py-6 md:grid-cols-[160px_1fr] md:items-center md:px-10">
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand">
                    {h.year}
                  </span>
                  <p className="text-sm text-ink-muted md:text-base">
                    {h.title || "콘텐츠 준비 중입니다."}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
