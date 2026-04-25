import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import CommunityTabs from "@/components/community/CommunityTabs";

export const metadata: Metadata = {
  title: "Community | 돌보라",
  description:
    "돌보라의 뉴스, 공지사항, 자주 묻는 질문, 현장 이야기와 인재 채용 소식을 만나보세요.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title={
          <>
            <span className="whitespace-nowrap">
              돌보라가 <span className="text-brand">살아 움직이는 모습</span>을
            </span>{" "}
            <span className="whitespace-nowrap">가까이에서 만나보세요.</span>
          </>
        }
        description="현장의 이야기, 기술 노트, 공지와 채용 소식을 한 곳에서 확인하실 수 있습니다."
      />

      <section className="bg-white">
        <div className="container-page py-20 md:py-24">
          <CommunityTabs />
        </div>
      </section>
    </>
  );
}
