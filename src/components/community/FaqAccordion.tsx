"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Item = {
  q: string;
  a: string;
};

const ITEMS: Item[] = [
  {
    q: "기존에 설치된 CCTV를 그대로 사용할 수 있나요?",
    a: "네, 돌보라 OS는 하드웨어 독립적인 소프트웨어 엔진입니다. 기존 인프라를 활용하여 추가 장비 부담 없이 스마트 요양 환경을 구축할 수 있습니다.",
  },
  {
    q: "어르신들의 사생활 침해(CCTV 노출) 문제는 없나요?",
    a: "돌보라 OS는 ‘Edge-AI’ 기술을 사용합니다. 영상 원본은 현장에서 즉시 분석 후 폐기되며, 개인을 식별할 수 없는 데이터(스켈레톤·수치)만 남으므로 개인정보 보호에 안전합니다.",
  },
  {
    q: "요양보호사들이 기기 사용을 어려워하지 않을까요?",
    a: "돌보라는 ‘자동화’에 집중합니다. 요양보호사가 별도로 앱을 조작하는 것이 아니라, AI가 작성해 둔 기록을 ‘확인’만 하는 직관적인 UI를 제공합니다.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="space-y-3">
      {ITEMS.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <li
            key={item.q}
            className={`overflow-hidden rounded-2xl border transition ${
              isOpen ? "border-brand bg-white" : "border-black/5 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 px-6 py-5 text-left md:px-8 md:py-6"
            >
              <span className="font-display text-sm font-bold text-accent-dark">
                Q{idx + 1}.
              </span>
              <span className="flex-1 text-base font-semibold text-ink md:text-lg">
                {item.q}
              </span>
              <span
                aria-hidden
                className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/10 transition ${
                  isOpen ? "rotate-45 border-brand text-brand" : "text-ink-muted"
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8">
                    <div className="ml-9 border-l-2 border-brand-mist pl-5 text-sm leading-relaxed text-ink-soft md:text-[15px]">
                      <span className="font-display font-bold text-brand">A. </span>
                      {item.a}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
