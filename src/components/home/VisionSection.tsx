import Reveal from "@/components/motion/Reveal";

export default function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-page py-24 md:py-32 text-center">
        <Reveal>
          <span className="section-eyebrow">Our Vision</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-6 max-w-5xl text-3xl font-bold leading-[1.25] tracking-tight text-ink md:text-5xl md:leading-[1.15] lg:text-[3.75rem]">
            <span className="whitespace-nowrap">
              시니어 케어의 <span className="text-brand">표준을 다시 쓰다</span>,
            </span>{" "}
            <span className="whitespace-nowrap font-display tracking-tight">Project DOLBORA</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            기록에 갇힌 돌봄, 보이지 않는 위협, 운영의 블랙박스. 초고령 사회의 세 가지 비극을
            데이터와 사람의 손길로 함께 풀어냅니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
