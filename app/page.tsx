"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PostCard from "./components/PostCard";
import Accordion from "./components/Accordion";
import CardSlider from "./components/CardSlider";
import { bdsData, raoVatData, jobData, newsData } from "./data/mockData";

// Dữ liệu Câu hỏi thường gặp
const faqItems = [
  {
    question: "Đăng tin trên CanGio247 có mất phí không?",
    answer:
      "Hoàn toàn MIỄN PHÍ! Bạn có thể đăng tin rao vặt, bất động sản, việc làm thông thường mà không tốn bất kỳ chi phí nào. Chỉ khi bạn muốn tin đăng của mình luôn hiển thị trên cùng và nổi bật hơn, bạn mới cần mua gói tin VIP.",
  },
  {
    question: "Làm thế nào để tin đăng của tôi được duyệt nhanh nhất?",
    answer:
      "Để tin đăng được duyệt nhanh chóng, bạn vui lòng điền đầy đủ và chính xác các thông tin: tiêu đề rõ ràng, mô tả chi tiết sản phẩm/dịch vụ, chọn đúng danh mục, cung cấp giá cả thực tế và hình ảnh thực tế tự chụp sắc nét.",
  },
  {
    question: "Tôi có thể đăng bao nhiêu tin miễn phí mỗi ngày?",
    answer:
      "Hiện tại, CanGio247 không giới hạn số lượng tin đăng miễn phí của mỗi tài khoản. Tuy nhiên, các tin đăng trùng lặp hoặc đăng quá nhiều tin cùng nội dung trong thời gian ngắn sẽ bị hệ thống tự động lọc và từ chối duyệt để tránh spam.",
  },
  {
    question: "Gói tin VIP hoạt động như thế nào và thanh toán ra sao?",
    answer:
      "Tin VIP sẽ có nhãn VIP màu xanh lục rực rỡ nổi bật và luôn được ghim ở vị trí ưu tiên đầu tiên của danh mục cũng như trang chủ. Để đăng tin VIP, vui lòng chọn gói VIP khi đăng tin hoặc liên hệ bộ phận hỗ trợ khách hàng để thanh toán nhanh qua chuyển khoản ngân hàng hoặc ví điện tử.",
  },
];

export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [searchLocation, setSearchLocation] = useState("all");

  const [filteredBds, setFilteredBds] = useState(bdsData.slice(0, 8));
  const [filteredRaoVat, setFilteredRaoVat] = useState(raoVatData.slice(0, 8));
  const [filteredJob, setFilteredJob] = useState(jobData.slice(0, 8));
  const [filteredNews, setFilteredNews] = useState(newsData.slice(0, 8));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const keyword = searchKeyword.toLowerCase();

    const filterFn = (item: any) => {
      const matchKeyword =
        item.title.toLowerCase().includes(keyword) ||
        item.excerpt.toLowerCase().includes(keyword);
      const matchLocation =
        searchLocation === "all" || item.location === searchLocation;
      return matchKeyword && matchLocation;
    };

    setFilteredBds(bdsData.filter(filterFn).slice(0, 8));
    setFilteredRaoVat(raoVatData.filter(filterFn).slice(0, 8));
    setFilteredJob(jobData.filter(filterFn).slice(0, 8));
    setFilteredNews(newsData.filter(filterFn).slice(0, 8));
  };

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] animate-fade-in-up">
      {/* 1. Hero Section - Glassmorphism & Hạt màu loang lớn */}
      <section className="relative bg-gradient-to-br from-blue-50/90 via-white to-blue-50/50 text-zinc-900 overflow-hidden py-12 md:py-20 lg:py-28 border-b border-zinc-100/40">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#006dd0_1px,transparent_1px),linear-gradient(to_bottom,#006dd0_1px,transparent_1px)] bg-[size:45px_45px]"></div>

        {/* Quầng sáng nền loang động tạo chiều sâu */}
        <div className="glow-orb glow-primary w-[550px] h-[550px] -top-32 -right-32 opacity-15 animate-float pointer-events-none"></div>
        <div className="glow-orb glow-accent w-[450px] h-[450px] -bottom-24 -left-24 opacity-10 animate-float-reverse pointer-events-none"></div>
        <div className="glow-orb glow-cyan w-[350px] h-[350px] top-1/3 left-1/4 opacity-8 animate-float pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Nội dung bên trái */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase  rounded-xl shadow-sm border border-primary/5 font-display">
                Cổng thông tin Cần Giờ 24/7
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black  leading-tight text-zinc-900 uppercase font-display">
                Giao dịch nhanh <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_2px_8px_rgba(24,103,255,0.15)]">
                  Kết nối thông suốt
                </span>
              </h1>
              <p className="text-zinc-650 font-medium text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Kênh đăng tin rao vặt miễn phí, cập nhật biến động bất động sản
                đất nền, cơ hội việc làm và tin tức quy hoạch mới nhất tại Cần
                Giờ.
              </p>

              {/* Nút bấm hành động nhanh */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/lien-he"
                  className="glow-btn shine-effect bg-btn-primary text-white px-8 py-3.5 font-bold uppercase  text-xs md:text-sm shadow-primary-glow rounded-full transition-all duration-300 hover:scale-105 font-display"
                >
                  Đăng tin ngay
                </Link>
                <Link
                  href="/bat-dong-san"
                  className="glass-premium hover:bg-white/90 text-zinc-850 border border-white hover:border-primary/40 hover:text-primary px-8 py-3.5 font-bold uppercase  text-xs md:text-sm rounded-full shadow-md transition-all duration-300 hover:scale-105 font-display"
                >
                  Xem Bất động sản
                </Link>
              </div>
            </div>

            {/* Khối ảnh bên phải */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="relative w-full h-[380px] border border-white/40 shadow-primary-glow p-2.5 bg-white/75 backdrop-blur-md rounded-3xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 border border-primary/10 rounded-3xl m-2.5 pointer-events-none z-10"></div>
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/bds1.jpg"
                    alt="Can Gio Development"
                    fill
                    className="object-cover filter brightness-95 contrast-[1.02]"
                    priority
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4.5 border border-white/30 shadow-lg rounded-2xl z-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-zinc-900 font-bold text-sm uppercase font-display">
                        Cầu Cần Giờ sắp khởi công
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-500 font-medium font-display">
                        Cập nhật tin quy hoạch hạ tầng
                      </p>
                    </div>
                    <span className="bg-btn-primary text-white font-bold text-xs sm:text-sm px-2.5 py-1.5 uppercase rounded-lg shadow-md font-display">
                      Hot
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Thanh bộ lọc tìm kiếm nổi bật - Glassmorphism mờ */}
          <div className="mt-12 md:mt-16 glass-premium p-5 md:p-6 shadow-primary-glow max-w-5xl mx-auto rounded-[2rem] text-zinc-800 relative z-20">
            <form
              onSubmit={handleSearch}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                  Từ khóa
                </label>
                <input
                  type="text"
                  placeholder="Tìm nhà đất, xe cộ, việc làm..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full bg-zinc-50/50 border border-zinc-150/80 px-4 py-3 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all font-display"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                  Danh mục
                </label>
                <div className="relative">
                  <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full bg-zinc-50/50 border border-zinc-150/80 px-4 py-3 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer font-display"
                  >
                    <option value="all">Tất cả danh mục</option>
                    <option value="bds">Bất động sản</option>
                    <option value="raovat">Rao vặt</option>
                    <option value="job">Việc làm</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs md:text-sm">
                    ▼
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                  Khu vực
                </label>
                <div className="relative">
                  <select
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full bg-zinc-50/50 border border-zinc-150/80 px-4 py-3 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer font-display"
                  >
                    <option value="all">Toàn bộ Cần Giờ</option>
                    <option value="TT. Cần Thạnh">Thị trấn Cần Thạnh</option>
                    <option value="Xã Bình Khánh">Xã Bình Khánh</option>
                    <option value="Xã Long Hòa">Xã Long Hòa</option>
                    <option value="Xã Tam Thôn Hiệp">Xã Tam Thôn Hiệp</option>
                    <option value="Xã An Thới Đông">Xã An Thới Đông</option>
                    <option value="Xã Lý Nhơn">Xã Lý Nhơn</option>
                    <option value="Xã Thạnh An">Xã Thạnh An</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs md:text-sm">
                    ▼
                  </div>
                </div>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full glow-btn shine-effect bg-btn-primary text-white font-bold uppercase  py-3.5 text-xs md:text-sm rounded-full transition-all shadow-primary-glow cursor-pointer font-display"
                >
                  Tìm kiếm ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. Section Thống kê nhanh */}
      <section className="bg-white py-12 border-b border-zinc-100/40 reveal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r border-zinc-100/60 last:border-0">
              <span className="block text-4xl md:text-5xl font-black text-primary ">
                12,500+
              </span>
              <span className="text-xs md:text-sm font-black uppercase  text-zinc-400 block mt-1">
                Bất động sản
              </span>
            </div>
            <div className="p-4 border-r border-zinc-100/60 last:border-0">
              <span className="block text-4xl md:text-5xl font-black text-primary ">
                8,900+
              </span>
              <span className="text-xs md:text-sm font-black uppercase  text-zinc-400 block mt-1">
                Rao vặt mới
              </span>
            </div>
            <div className="p-4 border-r border-zinc-100/60 last:border-0">
              <span className="block text-4xl md:text-5xl font-black text-[#0d9488] ">
                3,200+
              </span>
              <span className="text-xs md:text-sm font-black uppercase  text-zinc-400 block mt-1">
                Việc làm mới
              </span>
            </div>
            <div className="p-4">
              <span className="block text-4xl md:text-5xl font-black text-zinc-800 ">
                24/7
              </span>
              <span className="text-xs font-black uppercase  text-zinc-400 block mt-1">
                Hỗ trợ kết nối
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: BẤT ĐỘNG SẢN MỚI NHẤT (Slider: 8 bài, desktop 4 cột, responsive) */}
      {(searchCategory === "all" || searchCategory === "bds") && (
        <section className="py-20 bg-[#f8fafc] relative reveal">
          {/* Hạt màu loang nền Glassmorphism */}
          <div className="absolute top-20 left-10 h-[300px] w-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-100/50 pb-5 mb-8 gap-4">
              <div className="space-y-2.5">
                {/* Bao bọc label bằng background tương ứng */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-black uppercase  rounded-lg border border-primary/5">
                  Danh mục mua bán
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 uppercase  font-display">
                  Bất động sản <span className="text-primary">Mới nhất</span>
                </h2>
              </div>

              <Link
                href="/bat-dong-san"
                className="inline-flex items-center gap-1.5 text-sm md:text-base font-black uppercase  text-primary hover:text-primary-hover hover:underline transition-colors w-fit"
              >
                Xem tất cả bất động sản
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Slider hiển thị 8 bài viết */}
            {filteredBds.length > 0 ? (
              <CardSlider items={filteredBds} />
            ) : (
              <div className="text-center py-16 bg-white border border-dashed border-zinc-200 rounded-2xl shadow-sm">
                <p className="text-zinc-400 font-bold text-sm md:text-base">
                  Không tìm thấy tin đăng bất động sản phù hợp.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. SECTION 2: RAO VẶT MỚI NHẤT (Slider: 8 bài, desktop 4 cột, responsive) */}
      {(searchCategory === "all" || searchCategory === "raovat") && (
        <section className="py-20 bg-white relative reveal">
          <div className="absolute top-20 right-10 h-[300px] w-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-100/50 pb-5 mb-8 gap-4">
              <div className="space-y-2.5">
                {/* Bao bọc label bằng background tương ứng */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-black uppercase  rounded-lg border border-primary/5">
                  Chợ mua bán nhanh
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 uppercase  font-display">
                  Rao vặt <span className="text-primary">Mới nhất</span>
                </h2>
              </div>

              <Link
                href="/rao-vat"
                className="inline-flex items-center gap-1.5 text-sm md:text-base font-black uppercase  text-primary hover:text-primary-hover hover:underline transition-colors w-fit"
              >
                Xem tất cả rao vặt
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Slider hiển thị 8 bài viết */}
            {filteredRaoVat.length > 0 ? (
              <CardSlider items={filteredRaoVat} />
            ) : (
              <div className="text-center py-16 bg-[#f8fafc] border border-dashed border-zinc-200 rounded-2xl shadow-sm">
                <p className="text-zinc-400 font-bold text-sm md:text-base">
                  Không tìm thấy tin rao vặt phù hợp.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. SECTION 3: VIỆC LÀM MỚI NHẤT (Slider: 8 bài, desktop 4 cột, responsive) */}
      {(searchCategory === "all" || searchCategory === "job") && (
        <section className="py-20 bg-[#f8fafc] relative reveal">
          <div className="absolute top-20 left-10 h-[300px] w-[300px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-100/50 pb-5 mb-8 gap-4">
              <div className="space-y-2.5">
                {/* Bao bọc label bằng background tương ứng */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-black uppercase  rounded-lg border border-primary/5">
                  Tuyển dụng - Việc tìm người
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 uppercase  font-display">
                  Việc làm <span className="text-primary">Mới nhất</span>
                </h2>
              </div>

              <Link
                href="/viec-lam"
                className="inline-flex items-center gap-1.5 text-sm md:text-base font-black uppercase  text-primary hover:text-primary-hover hover:underline transition-colors w-fit"
              >
                Xem tất cả việc làm
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Slider hiển thị 8 bài viết */}
            {filteredJob.length > 0 ? (
              <CardSlider items={filteredJob} />
            ) : (
              <div className="text-center py-16 bg-white border border-dashed border-zinc-200 rounded-2xl shadow-sm">
                <p className="text-zinc-400 font-bold text-sm md:text-base">
                  Không tìm thấy tin tuyển dụng việc làm phù hợp.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. SECTION 4: TIN TỨC NỔI BẬT (Slider: 8 bài, desktop 4 cột, responsive) */}
      <section className="py-16 md:py-20 bg-white border-b border-zinc-100/40 relative reveal">
        <div className="absolute top-20 right-10 h-[300px] w-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-100/50 pb-5 mb-8 gap-4">
            <div className="space-y-2.5">
              {/* Bao bọc label bằng background tương ứng */}
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase  rounded-lg border border-primary/5 font-display">
                Bản tin quy hoạch & đời sống
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 uppercase  font-display">
                Tin tức <span className="text-primary">Nổi bật</span>
              </h2>
            </div>

            <Link
              href="/tin-tuc"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase  text-primary hover:text-primary-hover hover:underline transition-colors w-fit font-display"
            >
              Tất cả tin tức
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Slider hiển thị 8 bài viết */}
          {filteredNews.length > 0 ? (
            <CardSlider items={filteredNews} />
          ) : (
            <div className="text-center py-16 bg-white border border-dashed border-zinc-200 rounded-2xl shadow-sm">
              <p className="text-zinc-400 font-bold text-sm md:text-base font-display">
                Không tìm thấy bài viết tin tức nào.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* VIP ADVERTISING BANNER - Thiết kế Glassmorphism trên nền loang rộng */}
      <section className="py-16 bg-[#f8fafc] reveal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-premium w-full p-8 md:p-12 lg:p-14 rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,109,208,0.12)] space-y-6 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/70 border border-white/60">
            {/* Quầng sáng nền loang cho VIP Banner */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <div className="glow-orb glow-accent w-64 h-64 -right-10 -bottom-10 opacity-15 animate-float" />
              <div className="glow-orb glow-primary w-48 h-48 -left-10 -top-10 opacity-10 animate-float-reverse" />
            </div>

            <div className="space-y-4 max-w-2xl text-center lg:text-left relative z-10">
              <span className="inline-block bg-btn-primary text-white font-bold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-md border border-white/20 font-display">
                ƯU ĐÃI THÁNG 6
              </span>
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-black  leading-snug text-zinc-900 uppercase font-display">
                ĐĂNG TIN VIP <br />
                TĂNG LƯỢT XEM GẤP 10 LẦN
              </h3>
              <p className="text-sm sm:text-base text-zinc-650 leading-relaxed font-semibold">
                Tin VIP luôn hiển thị ở vị trí ưu tiên đầu tiên của danh mục, có
                nhãn VIP màu xanh lục rực rỡ thu hút khách hàng tiềm năng nhất.
              </p>

              {/* Lợi ích tin VIP thiết tế tinh tế */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base font-bold text-zinc-600 pt-2 text-left font-display">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4.5 w-4.5 text-primary shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Hiển thị vị trí ưu tiên số 1
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4.5 w-4.5 text-primary shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Nhãn VIP phát sáng rực rỡ
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4.5 w-4.5 text-primary shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Tăng lượt tiếp cận gấp 10 lần
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4.5 w-4.5 text-primary shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Hỗ trợ chụp ảnh & làm video free
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-auto shrink-0 text-center relative z-10">
              <Link
                href="/lien-he"
                className="glow-btn shine-effect inline-block bg-btn-primary text-white font-bold uppercase text-xs sm:text-sm  px-8 py-4 rounded-full shadow-primary-glow transition-all duration-300 hover:scale-105 font-display"
              >
                Liên hệ báo giá ngay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section Câu hỏi thường gặp FAQ - Thiết kế lại 2 cột bất đối xứng mới hoàn toàn */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-t border-zinc-100/40 relative overflow-hidden reveal">
        {/* Quầng sáng nền loang cho FAQ */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="glow-orb glow-primary w-[350px] h-[350px] bottom-10 left-[5%] opacity-8 animate-float" />
          <div className="glow-orb glow-accent w-[300px] h-[300px] top-10 right-[10%] opacity-5 animate-float-reverse" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase  rounded-lg border border-primary/5 font-display">
                  Hỗ trợ khách hàng
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 uppercase  font-display leading-tight">
                  Câu hỏi <br className="hidden lg:block" />
                  <span className="text-primary">Thường gặp</span>
                </h2>
                <p className="text-sm sm:text-base font-semibold text-zinc-650 leading-relaxed max-w-md">
                  Giải đáp các thắc mắc phổ biến nhất của người dùng khi sử
                  dụng, đăng tin và thanh toán tin VIP trên hệ thống
                  cangio247.com.
                </p>
              </div>

              {/* Card Hỗ trợ nhanh cao cấp */}
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-[0_10px_30px_rgba(0,109,208,0.05)] space-y-5">
                <h4 className="text-zinc-900 font-bold text-base uppercase font-display border-b border-zinc-100 pb-3">
                  Bạn cần hỗ trợ thêm?
                </h4>
                <p className="text-zinc-550 text-sm leading-relaxed">
                  Đội ngũ CSKH của chúng tôi sẵn sàng giải đáp mọi thắc mắc và
                  hỗ trợ bạn duyệt tin 24/7.
                </p>
                <div className="space-y-3.5 pt-1">
                  <a
                    href="tel:0909123456"
                    className="flex items-center gap-3 text-zinc-750 hover:text-primary font-bold text-sm transition-all group"
                  >
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <svg
                        className="h-4.5 w-4.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span>Hotline: 0909 123 456</span>
                  </a>
                  <a
                    href="mailto:contact@cangio247.com"
                    className="flex items-center gap-3 text-zinc-750 hover:text-primary font-bold text-sm transition-all group"
                  >
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <svg
                        className="h-4.5 w-4.5"
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
                    </div>
                    <span>Email: contact@cangio247.com</span>
                  </a>
                </div>
                <div className="pt-2">
                  <Link
                    href="/lien-he"
                    className="glow-btn shine-effect w-full flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-extrabold py-3.5 rounded-xl text-xs uppercase  shadow-primary-glow"
                  >
                    Gửi yêu cầu hỗ trợ
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/60 shadow-[0_15px_40px_rgba(0,0,0,0.02)]">
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
