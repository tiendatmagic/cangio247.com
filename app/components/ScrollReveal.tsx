"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      root: null, // Mặc định là viewport của trình duyệt
      rootMargin: "0px 0px -60px 0px", // Kích hoạt sớm hơn 60px trước khi phần tử chạm mép dưới màn hình
      threshold: 0.05, // Kích hoạt khi ít nhất 5% phần tử xuất hiện
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          // Ngừng theo dõi phần tử này sau khi đã hiển thị hoạt ảnh
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Lấy tất cả các phần tử có chứa class .reveal
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]); // Đăng ký lại Intersection Observer mỗi khi chuyển đổi trang con

  return null;
}
