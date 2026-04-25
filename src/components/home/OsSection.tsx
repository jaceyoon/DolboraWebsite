import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const STEPS = [
  {
    badge: "Step 1",
    keyword: "Safety",
    title: "Edge-AI 비전 엔진",
    body: "기존 CCTV를 ‘눈’으로 활용하여 관절 각도, 자세 변화, 체위 유지 시간을 분석. 낙상 및 야간 이상 행동을 실시간으로 탐지합니다.",
    points: ["기존 CCTV 활용", "낙상 / 이상행동 탐지", "Edge-AI 영상 즉시 폐기"],
  },
  {
    badge: "Step 2",
    keyword: "Freedom",
    title: "자동 케어 기록 시스템",
    body: "기저귀 교체, 이동 보조 등 케어 활동을 AI가 감지하여 디지털 로그를 생성. RPA 방식으로 기존 ERP에 자동 입력 보조합니다.",
    points: ["기록 업무 30%↓", "ERP 자동 연동", "케어 활동 자동 감지"],
  },
  {
    badge: "Step 3",
    keyword: "Trust",
    title: "통합 안심 대시보드",
    body: "활동량·수면 패턴·운영 지표를 데이터화하여 시설장에게는 리스크 관리, 보호자에게는 실시간 안심 리포트를 제공합니다.",
    points: ["실시간 리스크 알림", "보호자 안심 리포트", "운영 KPI 시각화"],
  },
];

export default function OsSection() {
  return (
    <section id="os" className="relative overflow-hidden bg-brand-deep text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-light/40 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container-page py-24 md:py-32">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                The Product · DOLBORA OS
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold leading-[1.25] tracking-tight md:text-4xl lg:text-[2.625rem]">
                <span className="whitespace-nowrap">추가 장비 도입 없이,</span>{" "}
                <span className="whitespace-nowrap">
                  <span className="text-accent">소프트웨어 업데이트</span>만으로
                </span>{" "}
                <span className="whitespace-nowrap">시작하는 스마트 요양원</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-white/75 md:text-base">
                돌보라 OS는 하드웨어 독립적인 소프트웨어 엔진입니다. 시설의 규모와 예산에 따라
                필요한 모듈을 레고 블록처럼 선택할 수 있는, 모듈형 스마트 케어 플랫폼입니다.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/[0.07]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/85">
                    {s.badge}
                  </span>
                  <span className="font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                    {s.keyword}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-white md:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.body}</p>
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-xs text-white/85">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/solution"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-accent"
            >
              솔루션 로드맵 자세히 보기 <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white"
            >
              리빙랩 도입 문의
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
