"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-mist/40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-14 py-20 md:py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="lg:col-span-7 xl:col-span-8">
          <Reveal>
            <span className="section-eyebrow">Project DOLBORA · AI Care OS</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-[1.75rem] font-bold leading-[1.3] tracking-tight text-ink md:text-[2.25rem] md:leading-[1.25] lg:text-[2.5rem] xl:text-[3rem] xl:leading-[1.2]">
              <span className="whitespace-nowrap">현장을 아는 사회복지 전문가</span>가 설계하고{" "}
              <br className="md:hidden" />
              AI가 완성한{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-brand">요양시설 전용 운영체제</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent/40" />
              </span>
              <span className="whitespace-nowrap text-brand">, 돌보라 OS</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              직원에게는 <strong className="font-semibold text-ink">업무의 효율</strong>을, 어르신에게는{" "}
              <strong className="font-semibold text-ink">안전</strong>을, 보호자에게는{" "}
              <strong className="font-semibold text-ink">안심</strong>을 드리는 스마트 케어의
              혁신이 시작됩니다.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/solution" className="btn-primary">
                솔루션 상세 보기 <span aria-hidden>→</span>
              </Link>
              <Link href="/contact" className="btn-ghost">
                리빙랩 도입 문의
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-black/10 pt-8">
              {[
                { k: "30%+", v: "기록 업무 시간 절감" },
                { k: "24/7", v: "AI 안전 모니터링" },
                { k: "0 추가장비", v: "기존 CCTV 활용" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-xl font-bold text-brand md:text-2xl">{s.k}</dt>
                  <dd className="mt-1 text-xs leading-snug text-ink-muted md:text-sm">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5 xl:col-span-4">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-5 shadow-[0_30px_80px_-20px_rgba(14,92,74,0.35)]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-300" />
            <span className="h-2 w-2 rounded-full bg-yellow-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
          </div>
          <span className="rounded-full bg-brand-mist px-2.5 py-1 text-[10px] font-semibold tracking-wider text-brand">
            DOLBORA OS · LIVE
          </span>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-3">
          <div className="col-span-3 overflow-hidden rounded-2xl bg-brand-deep p-4 text-white">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-accent-light">
              <span>CAM-203 · 거실</span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Edge AI
              </span>
            </div>
            <SkeletonFigure />
            <div className="mt-3 flex items-center justify-between text-[10px]">
              <span className="rounded-full bg-white/10 px-2 py-1 text-white/80">
                자세 안정 · 좌측 측면
              </span>
              <span className="font-semibold text-accent">FALL RISK 0.04</span>
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-3">
            <FloatingCard delay={0.2}>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                자동 케어 로그
              </div>
              <div className="mt-1 text-sm font-semibold text-ink">기저귀 교체 · 1건</div>
              <div className="mt-1 text-[11px] text-ink-muted">14:08 · 207호 · 자동 기록</div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-brand-mist">
                <div className="h-full w-3/4 rounded-full bg-brand" />
              </div>
            </FloatingCard>
            <FloatingCard delay={0.35}>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                활동량 (오늘)
              </div>
              <div className="mt-1 text-sm font-semibold text-ink">+18%</div>
              <Bars />
            </FloatingCard>
          </div>
        </div>

        <FloatingCard
          delay={0.5}
          className="absolute -right-4 -top-4 hidden w-56 sm:block"
        >
          <div className="text-[10px] font-semibold uppercase tracking-widest text-accent-dark">
            안심 리포트
          </div>
          <div className="mt-1 text-sm font-semibold text-ink">김OO 어르신 · 정상</div>
          <div className="mt-1 text-[11px] text-ink-muted">
            수면 7h 12m · 식사 3/3 · 낙상 0건
          </div>
        </FloatingCard>
      </motion.div>
    </div>
  );
}

function FloatingCard({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-xl border border-black/5 bg-white p-3 shadow-[0_10px_30px_-12px_rgba(14,92,74,0.25)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SkeletonFigure() {
  return (
    <div className="relative mt-3 h-32 rounded-xl bg-gradient-to-br from-brand-dark to-brand-deep p-3">
      <svg viewBox="0 0 100 110" className="h-full w-full text-accent">
        <g
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <circle cx="50" cy="20" r="6" />
          <line x1="50" y1="26" x2="50" y2="55" />
          <line x1="50" y1="34" x2="32" y2="48" />
          <line x1="50" y1="34" x2="68" y2="48" />
          <line x1="32" y1="48" x2="28" y2="68" />
          <line x1="68" y1="48" x2="74" y2="68" />
          <line x1="50" y1="55" x2="40" y2="80" />
          <line x1="50" y1="55" x2="60" y2="80" />
          <line x1="40" y1="80" x2="38" y2="100" />
          <line x1="60" y1="80" x2="62" y2="100" />
        </g>
        <g fill="currentColor">
          {[
            [50, 20], [50, 34], [50, 55], [32, 48], [68, 48],
            [28, 68], [74, 68], [40, 80], [60, 80], [38, 100], [62, 100],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" />
          ))}
        </g>
      </svg>
      <div className="absolute right-2 top-2 rounded bg-black/30 px-1.5 py-0.5 text-[9px] tracking-widest text-white/85">
        SKELETON
      </div>
    </div>
  );
}

function Bars() {
  return (
    <div className="mt-3 flex h-10 items-end gap-1">
      {[40, 65, 30, 80, 55, 72, 90].map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.7, delay: 0.4 + i * 0.05, ease: "easeOut" }}
          className="w-2 rounded-sm bg-brand"
        />
      ))}
    </div>
  );
}
