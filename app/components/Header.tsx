"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Danh sách menu kèm các icon SVG tương ứng
  const menuItems = [
    {
      name: "Trang chủ",
      path: "/",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Bất động sản",
      path: "/bat-dong-san",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      name: "Rao vặt",
      path: "/rao-vat",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      name: "Việc làm",
      path: "/viec-lam",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "Tin tức",
      path: "/tin-tuc",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012-2h1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5m3 0a2 2 0 00-2 2v12m-6-12h2m-2 4h4m-4 4h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Menu Header nền màu trắng trên mobile, màu xanh dương trên desktop */}
      <header className="sticky top-0 z-50 bg-white text-zinc-800 xl:bg-primary xl:text-white shadow-md border-b border-zinc-100 xl:border-white/10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Layout cho màn hình Desktop (xl trở lên) */}
          <div className="hidden xl:flex h-20 items-center justify-between">
            {/* Logo & Tên web */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-12 w-12 bg-white p-1 rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105 border border-zinc-200/50">
                  <Image
                    src="/images/logo.svg"
                    alt="CanGio247 Logo"
                    fill
                    className="object-contain p-0.5"
                    priority
                  />
                </div>
                <span className="text-2xl lg:text-3xl font-black  text-white font-display">
                  CanGio<span className="text-white/80">247</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu - Tối ưu chữ 16px font Be Vietnam Pro, màu trắng mờ */}
            <nav className="flex items-center gap-1.5 font-display">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-2 px-3 py-2.5 text-[15px] xl:text-[16px] font-bold  whitespace-nowrap transition-all duration-200 relative group ${
                      isActive
                        ? "text-white bg-white/15 rounded-lg shadow-xs"
                        : "text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                    }`}
                  >
                    <span
                      className={`${isActive ? "text-white" : "text-white/60 group-hover:text-white"}`}
                    >
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Button Liên hệ trên desktop - NỀN TRẮNG CHỮ XANH DƯƠNG CHỦ ĐẠO */}
            <div>
              <Link
                href="/lien-he"
                className="glow-btn shine-effect inline-flex items-center justify-center bg-white hover:bg-zinc-50 text-primary font-bold px-7 py-3 text-sm md:text-base  uppercase shadow-[0_6px_20px_rgba(255,255,255,0.15)] rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
              >
                Liên hệ ngay
              </Link>
            </div>
          </div>

          {/* Layout cho màn hình Mobile/Tablet (dưới xl) - Hamburger trái (màu xanh chủ đạo), Logo giữa, Icon Đăng tin phải */}
          <div className="flex xl:hidden h-20 items-center justify-between w-full">
            {/* Nút Hamburger nằm bên trái - Đổi màu xanh chủ đạo */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-primary hover:bg-primary/5 hover:text-primary-hover focus:outline-none transition-all cursor-pointer border border-primary/10"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo nằm ở giữa */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-9 w-9 bg-white p-1 rounded-lg shadow-xs border border-zinc-200/50">
                <Image
                  src="/images/logo.svg"
                  alt="CanGio247 Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <span className="text-xl font-black  text-primary font-display">
                CanGio<span className="text-primary/80">247</span>
              </span>
            </Link>

            {/* Nút Gọi điện thoại Liên hệ nhanh - NỀN TRẮNG CHỮ XANH DƯƠNG CHỦ ĐẠO */}
            <a
              href="tel:0909123456"
              className="glow-btn shine-effect inline-flex items-center justify-center bg-white hover:bg-zinc-50 text-primary font-bold rounded-full shadow-md hover:scale-105 border border-primary/20 transition-all duration-300 w-11 h-11 md:w-auto md:h-auto md:px-5 md:py-2.5 p-0 md:gap-2 animate-hotline"
              title="Gọi hotline ngay"
            >
              <svg
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="hidden md:inline  uppercase text-xs md:text-sm font-display">
                Liên hệ ngay
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE RESPONSIVE MENU SIDEBAR (TRƯỢT TRÁI) */}
      <div
        className={`fixed inset-0 xl:hidden transition-all duration-300 ${
          isOpen
            ? "visible opacity-100 pointer-events-auto"
            : "invisible opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 99999 }}
      >
        {/* Overlay mờ đen phía sau */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 transition-opacity duration-300 cursor-pointer"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />

        {/* Khung Sidebar trượt từ bên trái */}
        <div
          className="fixed top-0 bottom-0 left-0 w-80 max-w-[85vw] text-zinc-800 shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out overflow-hidden"
          style={{
            backgroundColor: "#ffffff",
            opacity: 1,
            zIndex: 100000,
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          {/* Quầng sáng nền loang cho Sidebar */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-r-[2rem]">
            <div className="glow-orb glow-primary w-48 h-48 -left-16 top-1/3 opacity-15 animate-float" />
          </div>

          <div className="space-y-6 relative z-10">
            {/* Header Sidebar: Logo + Nút đóng [X] */}
            <div className="flex items-center justify-between border-b border-zinc-100 pb-5">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="relative h-10 w-10 bg-primary/5 p-1 rounded-xl border border-primary/10">
                  <Image
                    src="/images/logo.svg"
                    alt="CanGio247 Logo"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="text-xl font-black  text-primary font-display">
                  CanGio<span className="text-primary/80">247</span>
                </span>
              </Link>

              {/* Nút đóng Sidebar */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Danh sách Menu trong Sidebar */}
            <nav className="space-y-2.5">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3 text-sm font-bold transition-all rounded-xl ${
                      isActive
                        ? "text-primary bg-primary/10 font-black"
                        : "text-primary/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {/* Icon hình tròn nhỏ */}
                    <div
                      className={`h-9 w-9 flex items-center justify-center rounded-full transition-colors ${
                        isActive
                          ? "bg-primary text-white shadow-[0_4px_10px_rgba(24,103,255,0.25)]"
                          : "bg-primary/5 text-primary/70"
                      }`}
                    >
                      {item.icon}
                    </div>
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Nút hành động dưới đáy Sidebar */}
          <div className="border-t border-zinc-100/50 pt-6 mt-auto relative z-10">
            <Link
              href="/lien-he"
              onClick={() => setIsOpen(false)}
              className="glow-btn shine-effect w-full flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-primary font-extrabold py-4 rounded-xl text-xs uppercase  shadow-[0_6px_20px_rgba(0,109,208,0.1)] border border-primary/20 transition-all"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
