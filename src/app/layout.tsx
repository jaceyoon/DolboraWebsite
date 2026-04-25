import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "돌보라 (DOLBORA) — 시니어 케어의 표준을 다시 쓰다",
  description:
    "현장을 아는 사회복지 전문가가 설계하고 AI가 완성한 요양시설 전용 운영체제, 돌보라 OS. 직원에게는 효율, 어르신에게는 안전, 보호자에게는 안심을.",
  keywords: [
    "돌보라",
    "DOLBORA",
    "스마트 요양",
    "Vision AI",
    "Edge AI",
    "요양원 OS",
    "실버테크",
    "낙상 감지",
    "케어 자동 기록",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKR.variable}`}>
      <body className="font-sans bg-white text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
