"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SocialWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  // Theo dõi sự kiện cuộn trang để ẩn/hiển thị nút Back to Top
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4.5 animate-fade-in-up">
      {/* 1. Nút Back to Top (Chỉ hiển thị khi cuộn xuống) - Bỏ viền đen, nâng cấp shadow loang */}
      <button
        onClick={scrollToTop}
        className={`h-14 w-14 flex items-center justify-center bg-white text-zinc-700 hover:text-primary rounded-full shadow-[0_15px_35px_-5px_rgba(15,23,42,0.12)] border-0 transition-all duration-300 transform cursor-pointer hover:-translate-y-1 ${
          isVisible
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
        title="Cuộn lên đầu trang"
      >
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {/* 2. Nút liên kết Zalo - Nâng cấp shadow và hover scale */}
      <a
        href="https://zalo.me/0909123456"
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 flex items-center justify-center bg-white rounded-full shadow-primary-glow hover:scale-115 transition-all duration-300 border border-blue-50/50 p-1 relative overflow-hidden"
        title="Chat qua Zalo"
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/zalo.svg"
            alt="Zalo Icon"
            fill
            className="object-contain"
          />
        </div>
      </a>

      {/* 3. Nút Email - Chuyển sang gradient xanh lá & shadow loang lớn */}
      <a
        href="mailto:contact@cangio247.com"
        className="h-14 w-14 flex items-center justify-center bg-btn-accent text-white rounded-full shadow-accent-glow hover:scale-115 transition-all duration-300 relative overflow-hidden"
        title="Gửi Email liên hệ"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </a>

      {/* 4. Nút Điện thoại - Chuyển sang gradient xanh dương-lá & shadow loang lớn */}
      <a
        href="tel:0909123456"
        className="h-14 w-14 flex items-center justify-center bg-btn-primary text-white rounded-full shadow-primary-glow hover:scale-115 transition-all duration-300 relative overflow-hidden animate-pulse-glow"
        title="Gọi hotline hỗ trợ"
      >
        <svg
          className="h-6 w-6 fill-current animate-bounce"
          viewBox="0 0 24 24"
          style={{ animationDuration: "2.5s" }}
        >
          <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7 1.1 1 1 0 01.9 1V21a1 1 0 01-1 1A15 15 0 013 7a1 1 0 011-1h3.5a1 1 0 011 .9 11.72 11.72 0 001.1 3.7 1 1 0 01-.27 1.11l-2.2 2.2z" />
        </svg>
      </a>
    </div>
  );
}
