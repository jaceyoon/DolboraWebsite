import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function CtaSection() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-8 py-14 text-white md:px-14 md:py-20">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/90">
                  LIVING LAB · 양평
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-[1.25] md:text-4xl lg:text-[2.75rem]">
                  <span className="whitespace-nowrap">우리 시설의 디지털 전환,</span>{" "}
                  <span className="whitespace-nowrap">
                    <span className="text-accent">돌보라</span>와 함께 시작하세요.
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
                  도입 문의, 리빙랩 참여, 제휴 제안 모두 환영합니다. 현장의 전문가가 직접 상담해
                  드립니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-accent hover:text-brand-deep"
                >
                  도입 문의하기 <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/solution"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white"
                >
                  솔루션 보기
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
