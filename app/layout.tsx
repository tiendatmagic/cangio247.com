import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialWidgets from "./components/SocialWidgets";
import ScrollReveal from "./components/ScrollReveal";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CanGio247 - Đăng Tin Bất Động Sản, Rao Vặt, Việc Làm Cần Giờ",
  description: "Cổng thông tin đăng tin rao vặt, bất động sản, việc làm trực tuyến hàng đầu tại huyện Cần Giờ. Kết nối thông tin giao dịch nhanh chóng, tin cậy và hiệu quả 24/7.",
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${plusJakartaSans.variable} ${beVietnamPro.variable} h-full antialiasedScroll`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-[#0f172a] antialiased">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <SocialWidgets />
        <ScrollReveal />
      </body>
    </html>
  );
}

