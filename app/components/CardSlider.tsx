"use client";

import { useRef, useState, useEffect } from "react";
import PostCard from "./PostCard";

interface CardSliderProps {
  items: any[];
}

export default function CardSlider({ items }: CardSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    scrollLeft: 0,
    clientWidth: 0,
    scrollWidth: 0,
  });

  const updateScrollState = () => {
    if (scrollRef.current) {
      setScrollState({
        scrollLeft: scrollRef.current.scrollLeft,
        clientWidth: scrollRef.current.clientWidth,
        scrollWidth: scrollRef.current.scrollWidth,
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      updateScrollState();
      el.addEventListener("scroll", updateScrollState);
      window.addEventListener("resize", updateScrollState);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", updateScrollState);
      }
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    
    // Cuộn theo chiều rộng của container (tương đương 1 trang hiển thị)
    const target = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    
    scrollRef.current.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  const scrollToPage = (pageIndex: number, itemsPerPage: number) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    // Mỗi trang có độ rộng tương đương clientWidth (hoặc tỷ lệ dựa trên số lượng card)
    const cardWidth = clientWidth / itemsPerPage;
    const target = pageIndex * clientWidth;
    
    scrollRef.current.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  const { scrollLeft, clientWidth, scrollWidth } = scrollState;
  
  // Tính activeIndex cho từng loại màn hình dựa trên tỷ lệ scroll
  const activeIndexDesktop = clientWidth > 0 ? Math.min(1, Math.round(scrollLeft / clientWidth)) : 0;
  const activeIndexTablet = clientWidth > 0 ? Math.min(2, Math.round(scrollLeft / clientWidth)) : 0;
  const activeIndexMobile = clientWidth > 0 ? Math.min(3, Math.round(scrollLeft / clientWidth)) : 0;

  // Kiểm tra nút cuộn
  const showLeftBtn = scrollLeft > 10;
  const showRightBtn = scrollLeft < scrollWidth - clientWidth - 10;

  return (
    <div className="relative group/slider w-full select-none">
      {/* Nút bấm Left (Chỉ hiển thị khi hover slider và có thể cuộn trái) */}
      <button
        onClick={() => scroll("left")}
        className={`absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center glass-premium text-zinc-850 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:text-primary cursor-pointer ${
          showLeftBtn ? "opacity-0 group-hover/slider:opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        title="Trượt sang trái"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Container cuộn ngang chứa danh sách card */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4 -mx-1 px-1"
      >
        {items.map((item, index) => (
          <div
            key={item.id || index}
            // Mobile: 2 cột card bằng nhau, Tablet: 3 cột, Desktop: 4 cột
            className="w-[calc(50%-8px)] sm:w-[290px] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] shrink-0 snap-start snap-always"
          >
            <PostCard {...item} />
          </div>
        ))}
      </div>

      {/* Nút bấm Right (Chỉ hiển thị khi hover slider và có thể cuộn phải) */}
      <button
        onClick={() => scroll("right")}
        className={`absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center glass-premium text-zinc-850 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:text-primary cursor-pointer ${
          showRightBtn ? "opacity-0 group-hover/slider:opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        title="Trượt sang phải"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bullets Phân trang sử dụng CSS để hiển thị tương ứng với loại màn hình */}
      <div className="flex justify-center mt-4">
        {/* Bullets cho Desktop (2 trang) */}
        <div className="hidden lg:flex justify-center gap-2">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i, 4)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndexDesktop === i ? "w-8 bg-primary" : "w-2.5 bg-zinc-200 hover:bg-zinc-300"
              }`}
            />
          ))}
        </div>

        {/* Bullets cho Tablet (3 trang) */}
        <div className="hidden md:flex lg:hidden justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i, 3)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndexTablet === i ? "w-8 bg-primary" : "w-2.5 bg-zinc-200 hover:bg-zinc-300"
              }`}
            />
          ))}
        </div>

        {/* Bullets cho Mobile (4 trang) */}
        <div className="flex md:hidden justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i, 2)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndexMobile === i ? "w-8 bg-primary" : "w-2.5 bg-zinc-200 hover:bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
