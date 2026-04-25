import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Solution & Technology | 돌보라",
  description:
    "돌보라 OS의 3단계 로드맵: Vision AI 기반 안전·자동 기록 → 레이더 정밀 센싱 → 케어 로봇·AI 비서. 모듈형 스마트 케어 플랫폼.",
};

const PHASES = [
  {
    tag: "Phase 1",
    sub: "현재 · NOW",
    title: "Vision AI 기반 안전 & 자동 기록",
    desc: "기존 CCTV 인프라를 활용하여 추가 장비 부담 없이 시작하는 스마트 요양원의 첫 발걸음.",
    items: [
      {
        title: "하이엔드 시니어 케어 설계",
        body: "노후화된 시설을 인수하여 AI 기술로 가치를 끌어올리는 밸류업(Value-up) 컨설팅을 제공합니다.",
      },
      {
        title: "AI/로봇 통합 솔루션",
        body: "글로벌 트렌드(일본 SOMPO 등) 리서치를 기반으로 한 한국형 스마트 요양 시스템을 보급합니다.",
      },
      {
        title: "R&D 파트너십",
        body: "국가 연구기관과의 협업을 통해 공신력 있는 기술 개발을 추진합니다.",
      },
    ],
  },
  {
    tag: "Phase 2",
    sub: "도약 · NEXT",
    title: "레이더 및 정밀 센싱 통합",
    desc: "비전 AI의 한계를 넘어 데이터의 정확도를 99%까지 끌어올리는 다중 복합 센싱 단계.",
    items: [
      {
        title: "다중 복합 센싱 (Multi-Modal)",
        body: "비전 AI의 한계를 넘어 다층 센서 데이터로 응급 상황을 더 정확하게 추론합니다.",
      },
      {
        title: "레이더 센싱 모듈",
        body: "조도가 낮은 야간이나 화장실 등 프라이버시가 중요한 공간에서도 비접촉 방식으로 호흡·맥박·미세 움직임을 측정합니다.",
      },
      {
        title: "데이터 교차 검증",
        body: "비전 AI와 레이더 데이터의 실시간 교차 분석으로 낙상 오탐지율을 획기적으로 낮춥니다.",
      },
    ],
  },
  {
    tag: "Phase 3",
    sub: "미래 · FUTURE",
    title: "케어 로봇 및 AI 비서 통합",
    desc: "사람의 노동력을 ‘대체’하는 것이 아니라 ‘극대화’하는 로봇 기술을 통합한 완전한 스마트 요양 생태계.",
    items: [
      {
        title: "이송·배설 보조 로봇",
        body: "요양보호사의 근골격계 질환을 유발하는 고강도 육체 노동을 로봇이 분담합니다.",
      },
      {
        title: "정서 케어·인지 로봇",
        body: "돌보라 OS와 연동된 로봇이 어르신의 상태에 맞춰 맞춤형 인지 프로그램을 수행하고 교감합니다.",
      },
      {
        title: "현장 리빙랩 검증",
        body: "유관 기관과의 협업을 통해 검증된 로봇 기술만을 선별하여 OS에 탑재합니다.",
      },
    ],
  },
];

const TECH = [
  {
    title: "데이터 보안 정책",
    points: [
      "Edge-AI: 영상 원본은 현장에서 즉시 분석 후 폐기",
      "개인 식별 불가능한 스켈레톤 / 수치 데이터만 저장",
      "프라이버시 우선 설계 — CCTV 노출 위험 최소화",
    ],
  },
  {
    title: "모듈화 기술 (Plug & Play)",
    points: [
      "기존 인프라에 필요한 기능을 레고 블록처럼 선택 추가",
      "낙상 / 자동 기록 / 레이더 / 로봇 모듈 자유 결합",
      "표준 API 기반 개방형 구조 — 미래 실버테크 즉시 연결",
    ],
  },
];

const SOLUTIONS_BY_TARGET = [
  {
    target: "운영자 (시설장)",
    pain: "사고 리스크 및 운영 불투명성",
    solution: "데이터 기반의 사고 예방 및 투명한 관리 대시보드",
  },
  {
    target: "케어 기여자",
    pain: "과도한 수기 기록 및 업무 과중",
    solution: "AI 자동 기록 시스템을 통한 업무 자유 및 돌봄 집중",
  },
  {
    target: "보호자",
    pain: "정보 비대칭으로 인한 불안",
    solution: "과학적 지표 기반의 ‘실시간 안심 리포트’ 제공",
  },
];

export default function SolutionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solution & Technology"
        title={
          <>
            <span className="whitespace-nowrap">오늘의 인프라로 시작하여,</span>{" "}
            <span className="whitespace-nowrap">
              내일의 <span className="text-brand">로봇 기술까지 담아내는 그릇</span>.
            </span>
          </>
        }
        description="돌보라 OS는 멈춰있는 시스템이 아닙니다. 현장의 요구와 기술의 발전에 따라 유연하게 결합·확장되는 모듈형 스마트 케어 플랫폼입니다."
      />

      {/* Phase Roadmap */}
      <section className="bg-white">
        <div className="container-page py-24 md:py-28">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <Reveal>
                <span className="section-eyebrow">Roadmap</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="section-title mt-5">
                  <span className="whitespace-nowrap">3단계로 진화하는</span>{" "}
                  <span className="whitespace-nowrap text-brand">스마트 케어 플랫폼</span>
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-4">
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                  시설의 규모·예산·필요에 따라 맞춤형으로 구축이 가능합니다. 향후 개발될 새로운
                  실버테크 기기들도 표준 API를 통해 즉시 연결됩니다.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 space-y-10 md:space-y-14">
            {PHASES.map((p, idx) => (
              <Reveal key={p.tag} delay={idx * 0.05}>
                <article className="grid gap-6 rounded-3xl border border-black/5 bg-white p-7 md:grid-cols-12 md:p-10">
                  <div className="md:col-span-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-brand">
                      <span className="font-display">{p.tag}</span>
                      <span className="text-brand/60">·</span>
                      <span>{p.sub}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold leading-snug text-ink md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-[15px]">
                      {p.desc}
                    </p>
                  </div>
                  <ul className="grid gap-4 md:col-span-8 md:grid-cols-3">
                    {p.items.map((it, i) => (
                      <li
                        key={it.title}
                        className="group rounded-2xl bg-brand-mist/40 p-5 transition hover:bg-brand-mist md:p-6"
                      >
                        <span className="font-display text-[11px] font-semibold tracking-[0.2em] text-accent-dark">
                          0{i + 1}
                        </span>
                        <h4 className="mt-2 text-base font-bold text-ink">{it.title}</h4>
                        <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                          {it.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-brand-deep text-white">
        <div className="container-page py-24 md:py-28">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <Reveal>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Technology
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-3xl font-bold leading-[1.25] tracking-tight md:text-4xl lg:text-[2.5rem]">
                  <span className="whitespace-nowrap">안전과 확장성을 동시에,</span>{" "}
                  <span className="whitespace-nowrap">
                    <span className="text-accent">기술 원칙</span>으로 설계했습니다.
                  </span>
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-4">
              <Reveal delay={0.1}>
                <p className="text-sm leading-relaxed text-white/75 md:text-base">
                  돌보라 OS는 ‘프라이버시 보호’와 ‘플랫폼 확장성’ 두 축을 동시에 만족시키는
                  것을 기술 원칙으로 합니다.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {TECH.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9">
                  <h3 className="text-xl font-bold md:text-2xl">{t.title}</h3>
                  <ul className="mt-6 space-y-3 text-sm text-white/85">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution by Target */}
      <section className="bg-brand-mist/30">
        <div className="container-page py-24 md:py-28">
          <Reveal>
            <span className="section-eyebrow">Solution by Target</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-5 max-w-5xl">
              <span className="whitespace-nowrap">운영자 · 케어 기여자 · 보호자,</span>{" "}
              <span className="whitespace-nowrap">세 주체 모두를 위한 솔루션.</span>
            </h2>
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-3xl border border-black/5 bg-white">
            <div className="hidden grid-cols-12 bg-brand-deep text-xs font-semibold uppercase tracking-[0.18em] text-white/85 md:grid">
              <div className="col-span-3 px-6 py-4">대상</div>
              <div className="col-span-4 px-6 py-4">주요 해결 과제</div>
              <div className="col-span-5 px-6 py-4">돌보라 OS의 솔루션</div>
            </div>
            <ul className="divide-y divide-black/5">
              {SOLUTIONS_BY_TARGET.map((row) => (
                <li key={row.target} className="grid grid-cols-1 gap-2 px-6 py-6 md:grid-cols-12 md:items-center md:gap-0 md:px-0">
                  <div className="md:col-span-3 md:px-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:hidden">
                      대상
                    </span>
                    <p className="mt-1 text-base font-bold text-ink md:mt-0">{row.target}</p>
                  </div>
                  <div className="md:col-span-4 md:px-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted md:hidden">
                      해결 과제
                    </span>
                    <p className="mt-1 text-sm text-ink-soft md:mt-0 md:text-[15px]">{row.pain}</p>
                  </div>
                  <div className="md:col-span-5 md:px-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:hidden">
                      솔루션
                    </span>
                    <p className="mt-1 text-sm font-medium text-brand md:mt-0 md:text-[15px]">
                      {row.solution}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partners (placeholder) */}
      <section className="bg-white">
        <div className="container-page py-24 md:py-28">
          <Reveal>
            <span className="section-eyebrow">Our Partners</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-5 max-w-5xl">
              <span className="whitespace-nowrap">신뢰할 수 있는 파트너</span>와 함께합니다.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
              정부·연구기관, 협력 시설, 기술 파트너와 함께 한국형 스마트 요양의 표준을
              만들어가고 있습니다.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-[5/3] items-center justify-center rounded-2xl border border-dashed border-black/10 bg-brand-mist/20 text-xs font-medium tracking-[0.2em] text-ink-muted"
              >
                LOGO
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
