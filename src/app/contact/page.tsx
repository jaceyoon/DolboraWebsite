import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact | 돌보라",
  description:
    "도입 문의 / 리빙랩 참여 / 제휴 제안 — 우리 시설의 디지털 전환, 돌보라와 함께 시작하세요.",
};

const LOCATIONS = [
  { tag: "본사", title: "주식회사 돌보라", desc: "주소 정보 준비 중" },
  { tag: "리빙랩", title: "양평 Living Lab", desc: "현장 검증 파트너 시설 (위치 정보 준비 중)" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            <span className="whitespace-nowrap">우리 시설의 디지털 전환,</span>{" "}
            <span className="whitespace-nowrap text-brand">돌보라와 함께 시작하세요.</span>
          </>
        }
        description="도입 문의·리빙랩 참여·제휴 제안 모두 환영합니다. 현장의 전문가가 직접 상담해 드립니다."
      />

      <section className="bg-white">
        <div className="container-page grid gap-10 py-20 md:py-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-eyebrow">상담 안내</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-2xl font-bold leading-[1.3] text-ink md:text-[1.75rem]">
                <span className="whitespace-nowrap">평일 09:00 – 18:00,</span>{" "}
                <span className="whitespace-nowrap">담당자가 직접 회신 드립니다.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-3 text-sm text-ink-soft md:text-[15px]">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>도입 문의: 시설별 맞춤 모듈 제안 및 견적 안내</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>리빙랩 참여: 양평 거점 기반의 현장 실증 협업</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>제휴 제안: 연구기관·기술 파트너·요양 시설 협력 논의</span>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 rounded-2xl bg-brand-mist/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  COMPANY
                </p>
                <p className="mt-3 text-sm font-bold text-ink">주식회사 돌보라</p>
                <p className="mt-1 text-xs text-ink-muted">
                  대표 김민정 · 사업자등록번호 748-88-03806
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="bg-brand-mist/30">
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <span className="section-eyebrow">Visit Us</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-5 max-w-2xl">오시는 길.</h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {LOCATIONS.map((l) => (
              <Reveal key={l.tag}>
                <article className="overflow-hidden rounded-3xl border border-black/5 bg-white">
                  <div className="relative h-56 w-full bg-gradient-to-br from-brand-mist to-brand-sand md:h-64">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,92,74,0.18),transparent_60%)]" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand shadow-md">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s-7-7-7-12a7 7 0 1114 0c0 5-7 12-7 12z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </div>
                      <p className="mt-3 text-xs tracking-[0.2em] text-ink-muted">MAP PLACEHOLDER</p>
                    </div>
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-brand">
                      {l.tag}
                    </span>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg font-bold text-ink md:text-xl">{l.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{l.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
