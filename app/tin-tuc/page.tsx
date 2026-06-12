"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "../data/mockData";
import PostCard from "../components/PostCard";

export default function TinTuc() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 10;

  // Lấy danh sách các danh mục tin tức duy nhất từ dữ liệu mock
  const categories = Array.from(new Set(newsData.map((p) => p.category)));

  // Đọc tham số truy vấn từ URL khi trang tải lên trên client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const search = params.get("search") || "";
      const category = params.get("category") || "all";
      setSearchQuery(search);
      setSelectedCategory(category);
    }
  }, []);

  // Reset page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Lọc danh sách bài viết dựa trên bộ lọc từ khóa & danh mục
  const filteredPosts = newsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Bài viết nổi bật (Lấy bài nổi bật có trong kết quả lọc, hoặc bài đầu tiên)
  const featuredPost = filteredPosts.find((p) => p.isFeatured) || filteredPosts[0];
  // Danh sách các tin bài thường (loại bỏ tin bài nổi bật để tránh trùng lặp)
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  // Phân trang danh sách bài viết thường
  const totalPages = Math.ceil(regularPosts.length / itemsPerPage);
  const paginatedRegularPosts = regularPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full flex-1 bg-[#f8fafc]">
      {/* Banner trang */}
      <section className="bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 text-zinc-955 py-16 relative overflow-hidden border-b border-zinc-100/40">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0889ff_1px,transparent_1px),linear-gradient(to_bottom,#0889ff_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        {/* Quầng sáng nền loang */}
        <div className="glow-orb glow-primary w-96 h-96 -top-20 -right-20 opacity-12 animate-float pointer-events-none"></div>
        <div className="glow-orb glow-cyan w-80 h-80 -bottom-20 left-10 opacity-8 animate-float-reverse pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="inline-flex bg-primary/10 text-primary text-xs md:text-sm font-black uppercase px-3 py-1.5 rounded-full">
            Bản tin nóng
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-zinc-900 font-display">
            Tin tức & Quy hoạch Cần Giờ
          </h1>
          <p className="text-zinc-550 font-bold text-sm md:text-base max-w-2xl leading-relaxed">
            Cập nhật liên tục tin nóng về dự án xây cầu Cần Giờ, quy hoạch cảng
            biển, thị trường bất động sản và các thông tin kinh tế, văn hóa địa
            phương mới nhất.
          </p>
        </div>
      </section>

      {/* Thanh bộ lọc tìm kiếm tin tức */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="glass-premium p-5 md:p-6 shadow-[0_15px_30px_rgba(0,109,208,0.08)] rounded-[2rem] bg-white/90 backdrop-blur-md border border-zinc-200/50">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Ô nhập tìm kiếm */}
            <div className="md:col-span-5 flex flex-col gap-2">
              <label className="text-[11px] md:text-xs font-bold uppercase text-zinc-500 pl-1 font-display">
                Tìm kiếm từ khóa
              </label>
              <input
                type="text"
                placeholder="Nhập tiêu đề hoặc nội dung bài viết..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  // Cập nhật URL tìm kiếm
                  const params = new URLSearchParams(window.location.search);
                  if (e.target.value) params.set("search", e.target.value);
                  else params.delete("search");
                  window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
                }}
                className="w-full bg-zinc-50/50 border border-zinc-200 px-4 py-3 text-sm font-bold rounded-xl text-zinc-800 focus:outline-none focus:border-primary transition-all font-display"
              />
            </div>

            {/* Lọc theo danh mục */}
            <div className="md:col-span-4 flex flex-col gap-2">
              <label className="text-[11px] md:text-xs font-bold uppercase text-zinc-500 pl-1 font-display">
                Danh mục tin tức
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    // Cập nhật URL danh mục
                    const params = new URLSearchParams(window.location.search);
                    if (e.target.value !== "all") params.set("category", e.target.value);
                    else params.delete("category");
                    window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
                  }}
                  className="w-full bg-zinc-50/50 border border-zinc-200 px-4 py-3 text-sm font-bold rounded-xl text-zinc-800 focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer font-display"
                >
                  <option value="all">Tất cả danh mục</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Nút đặt lại bộ lọc */}
            <div className="md:col-span-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  if (typeof window !== "undefined") {
                    window.history.pushState({}, "", "/tin-tuc");
                  }
                }}
                className="w-full glow-btn shine-effect bg-zinc-150 hover:bg-zinc-200 text-zinc-700 font-bold uppercase py-3.5 text-xs md:text-sm rounded-full transition-all cursor-pointer font-display border border-zinc-200/50"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tin tức Layout - Tạp chí hiện đại */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-12 reveal">
        {filteredPosts.length === 0 ? (
          /* Trạng thái không tìm thấy bài viết */
          <div className="text-center py-20 bg-white border border-dashed border-zinc-200 rounded-[2rem] shadow-sm max-w-2xl mx-auto space-y-4">
            <div className="text-6xl flex justify-center text-zinc-300">🔍</div>
            <p className="text-zinc-550 font-bold text-sm md:text-base font-display">
              Không tìm thấy bài viết nào phù hợp với bộ lọc hiện tại.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                if (typeof window !== "undefined") {
                  window.history.pushState({}, "", "/tin-tuc");
                }
              }}
              className="glow-btn shine-effect bg-primary hover:bg-primary-hover text-white text-xs md:text-sm font-bold uppercase px-6 py-3 rounded-full transition-all cursor-pointer font-display"
            >
              Xem tất cả bài viết
            </button>
          </div>
        ) : (
          <>
            {/* Bài viết nổi bật (Featured Post) - Chỉ hiển thị ở trang 1 */}
            {featuredPost && currentPage === 1 && (
              <div className="overflow-hidden glowing-card group rounded-[2.5rem]">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Ảnh bên trái */}
                  <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[450px] overflow-hidden bg-zinc-100">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                  </div>

                  {/* Nội dung bên phải */}
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="bg-primary text-white text-xs md:text-sm font-black uppercase px-3 py-1.5 rounded-full shadow-sm">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs md:text-sm font-bold text-zinc-400">
                        {featuredPost.date}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 group-hover:text-primary transition-colors leading-tight uppercase font-display">
                      <Link href={`/tin-tuc/${featuredPost.id}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-sm md:text-base text-zinc-650 leading-relaxed font-bold">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-6 border-t border-zinc-100/40 flex items-center justify-between">
                      <span className="text-xs md:text-sm font-bold text-zinc-500">
                        Tác giả:{" "}
                        <span className="text-zinc-900 font-extrabold">
                          {featuredPost.author}
                        </span>
                      </span>

                      <Link
                        href={`/tin-tuc/${featuredPost.id}`}
                        className="text-xs md:text-sm font-black uppercase text-primary hover:text-primary-hover flex items-center gap-1 group/btn"
                      >
                        Đọc toàn bộ bài
                        <svg
                          className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
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
                  </div>
                </div>
              </div>
            )}

            {/* Lưới các tin bài thông thường */}
            {paginatedRegularPosts.length > 0 && (
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-xs md:text-sm font-black uppercase text-zinc-400 border-b border-zinc-100/40 pb-2 font-display">
                    Các tin bài khác
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {paginatedRegularPosts.map((post) => (
                      <PostCard key={post.id} {...post} />
                    ))}
                  </div>
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
            )}
          </>
        )}

        {/* Form đăng ký nhận bản tin quy hoạch nhanh Nền gương mờ */}
        <div className="glass-premium text-zinc-900 p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-xl relative overflow-hidden max-w-7xl mx-auto border border-zinc-150/50 reveal bg-white/70 backdrop-blur-md">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="glow-orb glow-cyan w-64 h-64 -right-10 -bottom-10 opacity-20 animate-float" />
            <div className="glow-orb glow-primary w-56 h-56 -left-10 -top-10 opacity-15 animate-float-reverse" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Cột trái: Nội dung kêu gọi & Lợi ích */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-block bg-primary text-white font-black text-xs md:text-sm uppercase px-4 py-1.5 rounded-full shadow-md">
                Đăng ký ngay
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight text-zinc-900 font-display">
                Nhận bản đồ quy hoạch & tin sốt dẻo Cần Giờ
              </h3>
              <p className="text-sm md:text-base text-zinc-550 font-bold leading-relaxed max-w-2xl">
                Chúng tôi sẽ gửi các bản tin cập nhật quy hoạch 2026, thông tin hạ tầng đất đai và tin đăng VIP mới nhất tới email của bạn hàng tuần.
              </p>

              {/* Danh sách lợi ích */}
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm md:text-base font-bold text-zinc-750">
                  <svg
                    className="h-5 w-5 text-primary shrink-0"
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
                  <span>Bản đồ quy hoạch chi diện 2026 & hạ tầng đất đai mới nhất.</span>
                </li>
                <li className="flex items-center gap-3 text-sm md:text-base font-bold text-zinc-750">
                  <svg
                    className="h-5 w-5 text-primary shrink-0"
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
                  <span>Bản tin sốt dẻo hàng tuần cập nhật trực tiếp tại địa phương.</span>
                </li>
                <li className="flex items-center gap-3 text-sm md:text-base font-bold text-zinc-750">
                  <svg
                    className="h-5 w-5 text-primary shrink-0"
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
                  <span>Thông tin các bất động sản giá ngộp, tin tuyển dụng hot nhất.</span>
                </li>
              </ul>
            </div>

            {/* Cột phải: Form nhập email */}
            <div className="lg:col-span-5 bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-zinc-150/40 shadow-lg space-y-4">
              <h4 className="text-base font-black uppercase text-zinc-900 font-display">
                Đăng ký nhận tin tức hàng tuần
              </h4>
              <p className="text-xs text-zinc-400 font-bold">
                Chúng tôi cam kết bảo mật thông tin, không gửi thư rác.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Đăng ký thành công! Cảm ơn bạn.");
                }}
                className="space-y-3.5 relative z-10"
              >
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Nhập địa chỉ email của bạn..."
                    required
                    className="w-full bg-white border border-zinc-200 px-4 py-3.5 pl-11 text-sm md:text-base font-bold rounded-xl text-zinc-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="glow-btn shine-effect w-full bg-primary hover:bg-primary-hover text-white font-black uppercase text-sm md:text-base py-4 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  Đăng ký nhận tin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
