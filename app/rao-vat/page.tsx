"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PostCard from "../components/PostCard";
import { raoVatData } from "../data/mockData";

const raoVatCategories = [
  {
    id: "all",
    name: "Tất cả",
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
    id: "xe-co",
    name: "Xe cộ",
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
          d="M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zM12 15h2l2-3h3v-2h-4.5L13 12H8V9H5v2h2l1 4h4z"
        />
      </svg>
    ),
  },
  {
    id: "cong-nghe",
    name: "Công nghệ",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path strokeLinecap="round" d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: "gia-dung",
    name: "Gia dụng",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: "hai-san",
    name: "Hải sản & Tàu thuyền",
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
          d="M3 12h18M5 12a7 7 0 0114 0M12 2v10M12 2L5 9h7"
        />
      </svg>
    ),
  },
  {
    id: "khac",
    name: "Đồ dùng khác",
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
          d="M9.5 20L2 12.5l7-7h5.5l7 7-7 7H9.5z M16.5 8.5h.01"
        />
      </svg>
    ),
  },
];

export default function RaoVat() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleReset = () => {
    setSelectedCat("all");
    setSelectedLocation("all");
    setSelectedPrice("all");
    setSearchWord("");
  };

  const filteredData = raoVatData.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchWord.toLowerCase());

    const matchCat = selectedCat === "all" || item.cat === selectedCat;

    const matchLocation =
      selectedLocation === "all" || item.location === selectedLocation;

    let matchPrice = true;
    if (selectedPrice === "under-10m") matchPrice = item.priceVal < 10000000;
    else if (selectedPrice === "10m-50m")
      matchPrice = item.priceVal >= 10000000 && item.priceVal <= 50000000;
    else if (selectedPrice === "over-50m")
      matchPrice = item.priceVal > 50000000;

    return matchSearch && matchCat && matchLocation && matchPrice;
  });

  const itemsPerPage = 10;
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCat, selectedLocation, selectedPrice, searchWord]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="w-full flex-1 bg-[#f8fafc]">
      {/* Banner trang */}
      <section className="bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 text-zinc-955 py-10 md:py-14 relative overflow-hidden border-b border-zinc-150/40">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#006dd0_1px,transparent_1px),linear-gradient(to_bottom,#006dd0_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        {/* Quầng sáng nền loang */}
        <div className="glow-orb glow-primary w-96 h-96 -top-20 -right-20 opacity-12 animate-float pointer-events-none"></div>
        <div className="glow-orb glow-accent w-80 h-80 -bottom-20 left-10 opacity-8 animate-float-reverse pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="inline-flex bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase  px-3 py-1.5 rounded-full font-display">
            Rao vặt 24h
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase  text-zinc-900 font-display">
            Rao vặt tổng hợp Cần Giờ
          </h1>
          <p className="text-zinc-650 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
            Chợ mua bán rao vặt đồ cũ, đồ điện tử, đồ gia dụng, xe cộ, tàu
            thuyền đánh bắt thủy sản giao dịch trực tiếp nhanh chóng tại địa
            phương.
          </p>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="bg-white/70 backdrop-blur-md border-b border-zinc-150/40 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start gap-4 overflow-x-auto pt-2 pb-2.5 scrollbar-thin">
            {raoVatCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 border font-bold text-sm md:text-base uppercase  whitespace-nowrap rounded-full transition-all cursor-pointer font-display ${
                  selectedCat === cat.id
                    ? "bg-primary border-primary text-white shadow-[0_4px_12px_rgba(0,109,208,0.25)] transform -translate-y-0.5"
                    : "bg-zinc-50 border-zinc-150/60 text-zinc-600 hover:bg-zinc-100 hover:border-zinc-200"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cột Trái (Col 3): Bộ lọc tìm kiếm nhanh */}
          <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-28">
            {/* Hộp bộ lọc gương mờ */}
            <div className="glass-premium p-5 rounded-[2rem] shadow-[0_10px_25px_-5px_rgba(0,109,208,0.04)] space-y-5 relative z-10">
              <h3 className="text-sm sm:text-base font-bold uppercase  text-zinc-800 border-b border-zinc-150/40 pb-2 font-display">
                Bộ lọc tìm kiếm
              </h3>

              {/* Ô tìm kiếm từ khóa */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-550 pl-1 font-display">
                  Từ khóa tìm kiếm
                </label>
                <input
                  type="text"
                  placeholder="Nhập tên sản phẩm..."
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-150/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-zinc-800 font-display"
                />
              </div>

              {/* Lọc theo khu vực */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-550 pl-1 font-display">
                  Xã / Thị trấn
                </label>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-150/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800 font-display"
                  >
                    <option value="all">Toàn Cần Giờ</option>
                    <option value="TT. Cần Thạnh">Thị trấn Cần Thạnh</option>
                    <option value="Xã Bình Khánh">Xã Bình Khánh</option>
                    <option value="Xã Long Hòa">Xã Long Hòa</option>
                    <option value="Xã Tam Thôn Hiệp">Xã Tam Thôn Hiệp</option>
                    <option value="Xã An Thới Đông">Xã An Thới Đông</option>
                    <option value="Xã Lý Nhơn">Xã Lý Nhơn</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs font-display">
                    ▼
                  </div>
                </div>
              </div>

              {/* Lọc theo khoảng giá */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-550 pl-1 font-display">
                  Khoảng giá
                </label>
                <div className="relative">
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-150/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800 font-display"
                  >
                    <option value="all">Tất cả mức giá</option>
                    <option value="under-10m">Dưới 10 Triệu</option>
                    <option value="10m-50m">Từ 10 - 50 Triệu</option>
                    <option value="over-50m">Trên 50 Triệu</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs font-display">
                    ▼
                  </div>
                </div>
              </div>

              {/* Nút đặt lại */}
              <button
                onClick={handleReset}
                className="w-full py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-850 font-bold text-sm md:text-base uppercase  rounded-full transition-all cursor-pointer font-display"
              >
                Đặt lại bộ lọc
              </button>
            </div>

            {/* Mẹo đăng tin an toàn Nền gương mờ */}
            <div className="glass-premium text-zinc-900 rounded-[2rem] p-5 shadow-[0_15px_30px_-5px_rgba(24,103,255,0.02)] space-y-3 relative overflow-hidden bg-white/75 border border-white/50">
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="glow-orb glow-accent w-32 h-32 -right-5 -bottom-5 opacity-15 animate-float" />
              </div>
              <div className="relative z-10 space-y-3">
                <span className="inline-block text-xs sm:text-sm font-bold uppercase  bg-primary text-white px-2.5 py-1 rounded-full shadow-sm font-display">
                  Mẹo an toàn
                </span>
                <h4 className="text-sm sm:text-base font-bold uppercase text-zinc-850 font-display">
                  Giao dịch trực tiếp
                </h4>
                <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed">
                  Chúng tôi khuyên người mua nên gặp trực tiếp người bán, kiểm
                  tra kỹ tình trạng sản phẩm rồi mới thanh toán tiền để tránh
                  rủi ro.
                </p>
              </div>
            </div>
          </div>

          {/* Cột Phải (Col 9): Danh sách tin rao vặt */}
          <div className="lg:col-span-9 space-y-6">
            {/* Thống kê nhanh và Sắp xếp */}
            <div className="flex items-center justify-between border-b border-zinc-150/40 pb-3">
              <span className="text-sm md:text-base font-bold uppercase  text-zinc-500 font-display">
                Tìm thấy{" "}
                <span className="text-primary font-black">
                  {filteredData.length}
                </span>{" "}
                tin rao vặt
              </span>

              <div className="flex items-center gap-2 text-sm md:text-base font-bold text-zinc-700 font-display">
                <span>Bộ lọc:</span>
                <select className="bg-transparent border-0 font-black focus:outline-none text-primary cursor-pointer text-sm md:text-base font-display">
                  <option>Tin VIP ưu tiên</option>
                  <option>Tin đăng mới nhất</option>
                  <option>Giá rẻ nhất trước</option>
                </select>
              </div>
            </div>

            {/* Lưới hiển thị kết quả */}
            {paginatedData.length > 0 ? (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedData.map((rv) => (
                    <PostCard key={rv.id} {...rv} />
                  ))}
                </div>

                {/* Bộ phân trang (Pagination) */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-6">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className={`h-10 px-4 rounded-xl border flex items-center justify-center font-bold text-xs transition-all cursor-pointer font-display ${
                        currentPage === 1
                          ? "bg-zinc-100 text-zinc-400 border-zinc-200 cursor-not-allowed"
                          : "bg-white text-zinc-700 border-zinc-200 hover:bg-primary/5 hover:text-primary hover:border-primary/30"
                      }`}
                    >
                      Trước
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`size-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all cursor-pointer font-display ${
                            currentPage === page
                              ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                              : "bg-white text-zinc-700 border-zinc-200 hover:bg-primary/5 hover:text-primary hover:border-primary/30"
                          }`}
                        >
                          {page}
                        </button>
                      ),
                    )}
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className={`h-10 px-4 rounded-xl border flex items-center justify-center font-bold text-xs transition-all cursor-pointer font-display ${
                        currentPage === totalPages
                          ? "bg-zinc-100 text-zinc-400 border-zinc-200 cursor-not-allowed"
                          : "bg-white text-zinc-700 border-zinc-200 hover:bg-primary/5 hover:text-primary hover:border-primary/30"
                      }`}
                    >
                      Sau
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20 bg-white border border-dashed border-zinc-150 rounded-2xl shadow-sm font-display">
                <svg
                  className="mx-auto h-12 w-12 text-zinc-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="mt-4 text-zinc-450 font-bold text-sm md:text-base">
                  Không tìm thấy tin rao vặt phù hợp.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 inline-block bg-primary hover:bg-primary-hover text-white text-sm md:text-base font-bold px-6 py-2.5 uppercase  rounded-full shadow-md transition-colors cursor-pointer"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
