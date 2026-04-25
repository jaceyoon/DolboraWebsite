"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FaqAccordion from "./FaqAccordion";

type Tab = "news" | "notice" | "faq" | "blog" | "careers";

const TABS: { id: Tab; label: string }[] = [
  { id: "news", label: "뉴스 하이라이트" },
  { id: "notice", label: "공지사항" },
  { id: "faq", label: "FAQ" },
  { id: "blog", label: "현장 이야기" },
  { id: "careers", label: "인재 채용" },
];

const RECRUITS = [
  {
    role: "사회복지 전문가",
    desc: "현장 경험과 케어 통찰을 바탕으로 돌보라 OS의 시나리오와 운영 표준을 함께 설계합니다.",
  },
  {
    role: "AI 엔지니어",
    desc: "Edge-AI 비전 / 멀티모달 센싱 / RPA 자동 기록 파이프라인을 구축합니다.",
  },
  {
    role: "서비스 기획자",
    desc: "운영자·요양보호사·보호자, 세 주체의 경험을 한 화면에 풀어내는 사람을 찾습니다.",
  },
];

export default function CommunityTabs() {
  const [active, setActive] = useState<Tab>("faq");

  return (
    <div>
      <div className="overflow-x-auto">
        <div role="tablist" aria-label="Community sections" className="inline-flex min-w-full gap-2 border-b border-black/10 pb-px">
          {TABS.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${t.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(t.id)}
                className={`relative px-5 py-3 text-sm font-medium transition md:text-[15px] ${
                  isActive ? "text-brand" : "text-ink-muted hover:text-ink-soft"
                }`}
              >
                {t.label}
                {isActive && (
                  <motion.span
                    layoutId="community-tab"
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            id={`tabpanel-${active}`}
            aria-labelledby={`tab-${active}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
          >
            {active === "news" && <EmptyPanel label="뉴스 하이라이트" />}
            {active === "notice" && <EmptyPanel label="공지사항" />}
            {active === "blog" && <EmptyPanel label="현장 이야기 (블로그)" />}
            {active === "faq" && <FaqAccordion />}
            {active === "careers" && <CareersPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function EmptyPanel({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-black/10 bg-white px-6 py-20 text-center">
      <span className="rounded-full bg-brand-mist px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-brand">
        COMING SOON
      </span>
      <h3 className="mt-5 text-xl font-bold text-ink md:text-2xl">{label}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
        준비 중인 콘텐츠입니다. 곧 새로운 소식으로 찾아뵙겠습니다.
      </p>
    </div>
  );
}

function CareersPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-deep p-8 text-white md:p-10">
          <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-[0.2em]">
            CAREERS · WE ARE HIRING
          </span>
          <h3 className="mt-6 text-2xl font-bold leading-[1.3] md:text-[1.75rem]">
            <span className="whitespace-nowrap">시니어의 존엄성을 지키는</span>{" "}
            <span className="whitespace-nowrap">
              <span className="text-accent">기술을 함께 만들 동료</span>를 찾습니다.
            </span>
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-white/80 md:text-base">
            “따뜻한 마음과 차가운 기술력”을 가진 분과 함께 일하고 싶습니다. 사회복지의 언어와
            엔지니어의 언어가 한 테이블에서 만나는 곳, 돌보라입니다.
          </p>
        </div>
      </div>
      <div className="lg:col-span-7">
        <ul className="grid gap-3">
          {RECRUITS.map((r, i) => (
            <li
              key={r.role}
              className="card-soft flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6"
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-sm font-semibold tracking-[0.18em] text-accent-dark">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="text-base font-bold text-ink md:text-lg">{r.role}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{r.desc}</p>
                </div>
              </div>
              <span className="self-start rounded-full border border-black/10 px-3 py-1 text-[11px] font-medium text-ink-muted md:self-auto">
                상시 채용
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
