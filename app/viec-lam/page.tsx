"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PostCard from "../components/PostCard";
import { jobData } from "../data/mockData";

const jobCategories = [
  { id: "all", name: "Tất cả công việc" },
  { id: "sales", name: "Kinh doanh / Sales" },
  { id: "services", name: "Du lịch / Lễ tân / Bếp" },
  { id: "aquaculture", name: "Thủy sản / Kỹ sư" },
  { id: "manual", name: "Lao động phổ thông" },
];

export default function ViecLam() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [selectedSalary, setSelectedSalary] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleReset = () => {
    setSelectedCat("all");
    setSelectedSalary("all");
    setSelectedLocation("all");
    setSearchWord("");
  };

  const filteredData = jobData.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchWord.toLowerCase());

    const matchCat = selectedCat === "all" || item.cat === selectedCat;

    const matchLocation =
      selectedLocation === "all" || item.location === selectedLocation;

    let matchSalary = true;
    if (selectedSalary === "under-10") matchSalary = item.salaryVal < 10000000;
    else if (selectedSalary === "10-15")
      matchSalary = item.salaryVal >= 10000000 && item.salaryVal <= 15000000;
    else if (selectedSalary === "over-15")
      matchSalary = item.salaryVal > 15000000;

    return matchSearch && matchCat && matchLocation && matchSalary;
  });

  const itemsPerPage = 10;
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCat, selectedSalary, selectedLocation, searchWord]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="w-full flex-1 bg-[#f8fafc]">
      {/* Banner trang */}
      <section className="bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 text-zinc-955 py-14 relative overflow-hidden border-b border-zinc-100/40">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#006dd0_1px,transparent_1px),linear-gradient(to_bottom,#006dd0_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        {/* Quầng sáng nền loang */}
        <div className="glow-orb glow-primary w-96 h-96 -top-20 -right-20 opacity-12 animate-float pointer-events-none"></div>
        <div className="glow-orb glow-cyan w-80 h-80 -bottom-20 left-10 opacity-8 animate-float-reverse pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="inline-flex bg-primary/10 text-primary text-xs md:text-sm font-black uppercase  px-3 py-1.5 rounded-full">
            Tuyển dụng nhanh
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase  text-zinc-900 font-display">
            Việc làm tại Cần Giờ
          </h1>
          <p className="text-zinc-500 font-bold text-sm md:text-base max-w-2xl leading-relaxed">
            Kết nối nhà tuyển dụng địa phương và ứng viên. Tìm việc làm du lịch,
            dịch vụ nhà hàng resort, kỹ sư nuôi tôm và nhiều cơ hội hấp dẫn
            khác.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cột Trái (Col 4): Bộ lọc */}
          <div className="lg:col-span-4 space-y-6">
            {/* Hộp bộ lọc gương mờ */}
            <div className="glass-premium p-6 rounded-[2rem] shadow-[0_10px_25px_-5px_rgba(0,109,208,0.04)] space-y-5 relative z-10">
              <h3 className="text-sm md:text-base font-black uppercase  text-zinc-800 border-b border-zinc-100/40 pb-2 font-display">
                Bộ lọc tuyển dụng
              </h3>

              {/* Tìm kiếm */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                  Từ khóa tìm kiếm
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Lễ tân, kỹ sư..."
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-100/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-zinc-800"
                />
              </div>

              {/* Ngành nghề */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                  Lĩnh vực ngành nghề
                </label>
                <div className="relative">
                  <select
                    value={selectedCat}
                    onChange={(e) => setSelectedCat(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-100/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800"
                  >
                    {jobCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Khu vực */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                  Xã / Thị trấn
                </label>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-100/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800"
                  >
                    <option value="all">Toàn bộ Cần Giờ</option>
                    <option value="TT. Cần Thạnh">Thị trấn Cần Thạnh</option>
                    <option value="Xã Bình Khánh">Xã Bình Khánh</option>
                    <option value="Xã Long Hòa">Xã Long Hòa</option>
                    <option value="Xã Tam Thôn Hiệp">Xã Tam Thôn Hiệp</option>
                    <option value="Xã An Thới Đông">Xã An Thới Đông</option>
                    <option value="Xã Lý Nhơn">Xã Lý Nhơn</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Mức lương */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                  Mức lương mong muốn
                </label>
                <div className="relative">
                  <select
                    value={selectedSalary}
                    onChange={(e) => setSelectedSalary(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-100/60 px-3 py-2.5 text-sm md:text-base font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800"
                  >
                    <option value="all">Tất cả mức lương</option>
                    <option value="under-10">Dưới 10 Triệu</option>
                    <option value="10-15">Từ 10 - 15 Triệu</option>
                    <option value="over-15">Trên 15 Triệu</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Nút reset */}
              <button
                onClick={handleReset}
                className="w-full py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-extrabold text-sm md:text-base uppercase  rounded-full transition-all cursor-pointer"
              >
                Đặt lại bộ lọc
              </button>
            </div>

            {/* Dành cho nhà tuyển dụng - Nền gương mờ */}
            <div className="glass-premium rounded-[2rem] p-6 shadow-[0_15px_30px_-5px_rgba(24,103,255,0.02)] space-y-4 relative overflow-hidden text-zinc-900">
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="glow-orb glow-cyan w-48 h-48 -right-10 -bottom-10 opacity-15 animate-float" />
              </div>
              <div className="relative z-10 space-y-4">
                <span className="inline-block text-xs md:text-sm font-black uppercase  bg-primary text-white px-2.5 py-1 rounded-full shadow-sm">
                  Doanh nghiệp
                </span>
                <h4 className="text-base font-black uppercase leading-tight text-zinc-900 font-display">
                  Bạn đang tìm nhân sự?
                </h4>
                <p className="text-sm text-zinc-500 font-bold leading-relaxed">
                  Đăng tuyển dụng của bạn tại CanGio247 để tiếp cận hàng ngàn
                  ứng viên tiềm năng tại địa phương hoàn toàn miễn phí.
                </p>
                <Link
                  href="/lien-he"
                  className="glow-btn shine-effect block text-center bg-primary hover:bg-primary-hover text-white text-sm md:text-base font-black uppercase  py-3.5 rounded-full shadow-md transition-colors"
                >
                  Đăng tuyển ngay
                </Link>
              </div>
            </div>
          </div>

          {/* Cột Phải (Col 8): Danh sách việc làm */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header thống kê */}
            <div className="flex items-center justify-between border-b border-zinc-100/40 pb-3">
              <span className="text-sm md:text-base font-black uppercase  text-zinc-400">
                Tìm thấy{" "}
                <span className="text-primary font-black">
                  {filteredData.length}
                </span>{" "}
                tin tuyển dụng
              </span>
              <span className="text-sm md:text-base text-zinc-400 font-bold">
                Cập nhật liên tục 24h
              </span>
            </div>

            {/* Lưới việc làm */}
            {paginatedData.length > 0 ? (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paginatedData.map((job) => (
                    <PostCard key={job.id} {...job} />
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
                <p className="mt-4 text-zinc-400 font-bold text-sm md:text-base">
                  Không tìm thấy việc làm phù hợp.
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
