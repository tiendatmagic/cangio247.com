"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PostCard from "../components/PostCard";
import { bdsData } from "../data/mockData";

export default function BatDongSan() {
  const [filterCat, setFilterCat] = useState("all");
  const [filterPrice, setFilterPrice] = useState("all");
  const [filterArea, setFilterArea] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleReset = () => {
    setFilterCat("all");
    setFilterPrice("all");
    setFilterArea("all");
    setFilterLocation("all");
    setSearchKey("");
  };

  const filteredData = bdsData.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(searchKey.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchKey.toLowerCase());

    const matchCat = filterCat === "all" || item.cat === filterCat;

    const matchLocation =
      filterLocation === "all" || item.location === filterLocation;

    let matchPrice = true;
    if (filterPrice === "under-2") matchPrice = item.priceVal < 2;
    else if (filterPrice === "2-5")
      matchPrice = item.priceVal >= 2 && item.priceVal <= 5;
    else if (filterPrice === "5-10")
      matchPrice = item.priceVal >= 5 && item.priceVal <= 10;
    else if (filterPrice === "over-10") matchPrice = item.priceVal > 10;

    let matchArea = true;
    if (filterArea === "under-100") matchArea = item.area < 100;
    else if (filterArea === "100-300")
      matchArea = item.area >= 100 && item.area <= 300;
    else if (filterArea === "300-1000")
      matchArea = item.area >= 300 && item.area <= 1000;
    else if (filterArea === "over-1000") matchArea = item.area > 1000;

    return matchSearch && matchCat && matchLocation && matchPrice && matchArea;
  });

  const itemsPerPage = 10;
  useEffect(() => {
    setCurrentPage(1);
  }, [filterCat, filterPrice, filterArea, filterLocation, searchKey]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full flex-1 bg-[#f8fafc]">
      {/* Banner trang - Light Mode Gradient */}
      <section className="bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 text-zinc-955 py-10 md:py-14 relative overflow-hidden border-b border-zinc-150/40">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#006dd0_1px,transparent_1px),linear-gradient(to_bottom,#006dd0_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        {/* Quầng sáng nền loang */}
        <div className="glow-orb glow-primary w-96 h-96 -top-20 -right-20 opacity-12 animate-float pointer-events-none"></div>
        <div className="glow-orb glow-cyan w-80 h-80 -bottom-20 left-10 opacity-8 animate-float-reverse pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="inline-flex bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase  px-3 py-1.5 rounded-full font-display">
            Danh mục uy tín
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase  text-zinc-900 font-display">
            Bất động sản Cần Giờ
          </h1>
          <p className="text-zinc-650 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
            Danh sách tin đăng mua bán, ký gửi nhà đất, đất nền thổ cư, đất vườn
            sinh thái chính chủ giá tốt nhất tại huyện Cần Giờ.
          </p>
        </div>
      </section>

      {/* Main Content Layout - Asymmetric Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cột Trái (Col 8): Bộ lọc và Danh sách tin */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hộp bộ lọc nâng cao gương mờ */}
            <div className="glass-premium p-6 rounded-[2rem] shadow-[0_10px_25px_-5px_rgba(0,109,208,0.04)] space-y-5 relative z-10">
              <div className="flex items-center justify-between border-b border-zinc-150/40 pb-3">
                <h3 className="text-sm sm:text-base font-bold uppercase  text-zinc-900 flex items-center gap-2 font-display">
                  <svg
                    className="h-4.5 w-4.5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Bộ lọc tìm kiếm nâng cao
                </h3>
                <button
                  onClick={handleReset}
                  className="text-xs sm:text-sm font-bold text-primary hover:text-primary-hover uppercase  transition-colors cursor-pointer font-display"
                >
                  Xóa tất cả bộ lọc
                </button>
              </div>

              {/* Lưới lọc */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Loại hình */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                    Loại nhà đất
                  </label>
                  <div className="relative">
                    <select
                      value={filterCat}
                      onChange={(e) => setFilterCat(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-150/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800 font-display"
                    >
                      <option value="all">Tất cả loại hình</option>
                      <option value="dat-nen">Đất nền dự án</option>
                      <option value="nha-pho">Nhà phố biệt thự</option>
                      <option value="dat-vuon">Đất vườn sinh thái</option>
                      <option value="dat-khac">Đất nuôi thủy sản</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Khoảng giá */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                    Mức giá
                  </label>
                  <div className="relative">
                    <select
                      value={filterPrice}
                      onChange={(e) => setFilterPrice(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-150/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800 font-display"
                    >
                      <option value="all">Tất cả mức giá</option>
                      <option value="under-2">Dưới 2 Tỷ</option>
                      <option value="2-5">Từ 2 - 5 Tỷ</option>
                      <option value="5-10">Từ 5 - 10 Tỷ</option>
                      <option value="over-10">Trên 10 Tỷ</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Diện tích */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                    Diện tích
                  </label>
                  <div className="relative">
                    <select
                      value={filterArea}
                      onChange={(e) => setFilterArea(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-150/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800 font-display"
                    >
                      <option value="all">Tất cả diện tích</option>
                      <option value="under-100">Dưới 100 m²</option>
                      <option value="100-300">100 - 300 m²</option>
                      <option value="300-1000">300 - 1000 m²</option>
                      <option value="over-1000">Trên 1000 m²</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Khu vực */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                    Khu vực
                  </label>
                  <div className="relative">
                    <select
                      value={filterLocation}
                      onChange={(e) => setFilterLocation(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-150/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800 font-display"
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
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Tìm kiếm từ khóa */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập địa chỉ, tên đường hoặc thông tin mô tả chi tiết..."
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-150/60 px-4 py-3 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-zinc-800 font-display"
                />
              </div>
            </div>

            {/* Số lượng kết quả & Tiêu đề phụ */}
            <div className="flex items-center justify-between">
              <span className="text-sm md:text-base font-bold uppercase  text-zinc-550 font-display">
                Tìm thấy{" "}
                <span className="text-primary font-black">
                  {filteredData.length}
                </span>{" "}
                bất động sản phù hợp
              </span>
              <div className="flex items-center gap-1.5 text-sm md:text-base font-bold text-zinc-700 font-display">
                <span>Sắp xếp:</span>
                <select className="bg-transparent border-0 font-black focus:outline-none text-primary cursor-pointer text-sm md:text-base font-display">
                  <option>Tin VIP ưu tiên</option>
                  <option>Giá từ thấp đến cao</option>
                  <option>Giá từ cao đến thấp</option>
                  <option>Tin mới nhất</option>
                </select>
              </div>
            </div>

            {/* Lưới hiển thị kết quả */}
            {paginatedData.length > 0 ? (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paginatedData.map((bds) => (
                    <PostCard key={bds.id} {...bds} />
                  ))}
                </div>

                {/* Bộ phân trang (Pagination) */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-6">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`h-10 px-4 rounded-xl border flex items-center justify-center font-bold text-xs transition-all cursor-pointer font-display ${
                        currentPage === 1
                          ? "bg-zinc-100 text-zinc-400 border-zinc-200 cursor-not-allowed"
                          : "bg-white text-zinc-700 border-zinc-200 hover:bg-primary/5 hover:text-primary hover:border-primary/30"
                      }`}
                    >
                      Trước
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
                    ))}
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
              <div className="text-center py-20 bg-white border border-dashed border-zinc-150 rounded-2xl shadow-sm">
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
                <p className="mt-4 text-zinc-450 font-bold text-sm md:text-base font-display">
                  Không tìm thấy bất động sản phù hợp.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 inline-block bg-primary hover:bg-primary-hover text-white text-sm md:text-base font-bold px-6 py-2.5 uppercase  rounded-full shadow-md transition-colors cursor-pointer font-display"
                >
                  Đặt lại bộ lọc
                </button>
              </div>
            )}
          </div>

          {/* Cột Phải (Col 4): Bản đồ mô phỏng và Quảng cáo tin VIP */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Bản đồ định vị dự án Cần Giờ */}
            <div className="glass-premium border border-zinc-150/60 rounded-[2rem] p-5 shadow-[0_10px_25px_-5px_rgba(0,109,208,0.04)] space-y-4">
              <h3 className="text-sm sm:text-base font-bold uppercase  text-zinc-800 border-b border-zinc-150/40 pb-2 font-display">
                Bản đồ định vị dự án Cần Giờ
              </h3>

              {/* Box bản đồ màu sáng */}
              <div className="relative h-64 bg-slate-100 overflow-hidden rounded-xl border border-zinc-150/40 flex items-center justify-center group">
                {/* Lưới giả lập */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#006dd0_1px,transparent_1px),linear-gradient(to_bottom,#006dd0_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Đồ họa bản đồ mờ nhẹ */}
                <div className="absolute inset-4 border border-dashed border-zinc-300 rounded-lg flex items-center justify-center text-center">
                  <span className="text-zinc-455 font-mono text-xs sm:text-sm uppercase ">
                    [BẢN ĐỒ DỰ ÁN CẦN GIỜ DEMO]
                  </span>
                </div>

                {/* Các Marker ghim tin VIP màu xanh dương rực rỡ */}
                <div className="absolute top-1/4 left-1/3 animate-bounce cursor-pointer group-hover:scale-110 transition-transform">
                  <div className="h-3 w-3 bg-primary rounded-full border border-white relative">
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    </span>
                  </div>
                  <div className="absolute top-4 -left-8 bg-white text-zinc-850 text-xs sm:text-sm font-bold uppercase px-2 py-1 rounded-md border border-zinc-150/40 whitespace-nowrap shadow-md font-display">
                    Long Hòa VIP
                  </div>
                </div>

                <div
                  className="absolute top-1/2 left-2/3 animate-bounce cursor-pointer group-hover:scale-110 transition-transform"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="h-3 w-3 bg-primary rounded-full border border-white relative">
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    </span>
                  </div>
                  <div className="absolute top-4 -left-8 bg-white text-zinc-850 text-xs sm:text-sm font-bold uppercase px-2 py-1 rounded-md border border-zinc-150/40 whitespace-nowrap shadow-md font-display">
                    Cần Thạnh VIP
                  </div>
                </div>

                <div
                  className="absolute bottom-1/3 left-1/4 animate-bounce cursor-pointer group-hover:scale-110 transition-transform"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="h-3 w-3 bg-primary rounded-full border border-white relative"></div>
                  <div className="absolute top-4 -left-6 bg-white text-zinc-850 text-xs sm:text-sm font-bold uppercase px-2 py-1 rounded-md border border-zinc-150/40 whitespace-nowrap shadow-md font-display">
                    Bình Khánh
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 text-xs sm:text-sm font-bold uppercase bg-white text-primary border border-zinc-150/40 px-3 py-1 rounded-full shadow-sm cursor-pointer hover:bg-zinc-50 font-display">
                  Tải Bản Đồ
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-650 font-medium leading-relaxed">
                Nhấp vào bản đồ để tìm bất động sản theo tọa độ vệ tinh và bản
                đồ quy hoạch chi tiết huyện Cần Giờ 2026.
              </p>
            </div>

            {/* Box Hỗ trợ đăng tin nhanh - Nền gương mờ */}
            <div className="glass-premium rounded-[2rem] p-6 shadow-md space-y-4 relative overflow-hidden text-zinc-900 bg-white/75 border border-white/50">
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="glow-orb glow-cyan w-48 h-48 -right-10 -bottom-10 opacity-15 animate-float" />
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-base sm:text-lg font-black uppercase  leading-none text-zinc-900 font-display">
                  Bạn có nhà đất cần bán?
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed">
                  Đăng tin mua bán ký gửi hoàn toàn miễn phí tại CanGio247. Hỗ
                  trợ chụp ảnh và làm video thực tế cho các tin đăng VIP.
                </p>
                <Link
                  href="/lien-he"
                  className="glow-btn shine-effect block text-center bg-primary hover:bg-primary-hover text-white text-sm md:text-base font-bold uppercase  py-3.5 rounded-full shadow-[0_6px_15px_rgba(0,109,208,0.25)] transition-colors font-display"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
