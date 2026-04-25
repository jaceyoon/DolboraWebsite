import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { NAV_ITEMS } from "@/lib/nav";

const COMPANY_INFO: { label: string; value: string }[] = [
  { label: "상호명", value: "주식회사 돌보라 (DOLBORA Co., Ltd.)" },
  { label: "대표자", value: "김민정" },
  { label: "사업자등록번호", value: "748-88-03806" },
  { label: "주소", value: "—" },
  { label: "연락처", value: "—" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-deep text-white/85">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo variant="light" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            현장을 아는 사회복지 전문가가 설계하고 AI가 완성한 요양시설 전용 운영체제,
            돌보라 OS. 시니어 케어의 표준을 다시 씁니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-brand-deep transition hover:bg-accent hover:text-brand-deep"
            >
              리빙랩 도입 문의 <span aria-hidden>→</span>
            </Link>
            <Link
              href="/solution"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-white/85 transition hover:border-white hover:text-white"
            >
              솔루션 자세히 보기
            </Link>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
            Sitemap
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
            Company
          </h4>
          <dl className="mt-5 space-y-3 text-sm">
            {COMPANY_INFO.map((row) => (
              <div key={row.label} className="grid grid-cols-[96px_1fr] gap-3">
                <dt className="whitespace-nowrap text-white/55">{row.label}</dt>
                <dd className="text-white/85">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} DOLBORA Co., Ltd. All rights reserved.</p>
          <p className="tracking-[0.2em] text-white/40">BEYOND CARE, TOWARD DIGNITY.</p>
        </div>
      </div>
    </footer>
  );
}
