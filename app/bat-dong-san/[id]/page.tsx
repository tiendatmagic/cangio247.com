"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { bdsData } from "../../data/mockData";
import PostCard from "../../components/PostCard";

export default function BatDongSanDetail() {
  const { id } = useParams();
  const item = bdsData.find((p) => p.id === id);

  if (!item) {
    return (
      <div className="w-full flex-1 bg-[#f8fafc] py-20 text-center">
        <div className="mx-auto max-w-md px-4 space-y-6">
          <div className="text-6xl flex justify-center text-zinc-300">
            <svg
              className="h-16 w-16 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-zinc-900 uppercase">
            Không tìm thấy tin đăng
          </h2>
          <p className="text-sm md:text-base text-zinc-500 font-bold">
            Tin đăng này không tồn tại hoặc đã được gỡ bỏ khỏi hệ thống
            CanGio247.
          </p>
          <Link
            href="/bat-dong-san"
            className="glow-btn inline-block bg-primary text-white font-black uppercase text-xs md:text-sm  px-8 py-4 rounded-full shadow-md"
          >
            Quay lại Bất động sản
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex-1 bg-[#f8fafc] pb-16 relative overflow-hidden animate-fade-in-up">
      {/* Quầng sáng nền loang */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="glow-orb glow-primary w-[450px] h-[450px] -top-20 -right-20 opacity-12 animate-float pointer-events-none" />
        <div className="glow-orb glow-cyan w-[350px] h-[350px] bottom-10 left-10 opacity-8 animate-float-reverse pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-zinc-100/60 py-4.5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-zinc-500">
              <Link href="/" className="hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <Link
                href="/bat-dong-san"
                className="hover:text-primary transition-colors"
              >
                Bất động sản
              </Link>
              <span>/</span>
              <span className="text-zinc-800 line-clamp-1">{item.title}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cột trái: Chi tiết tin đăng (Col 8) */}
            <div className="lg:col-span-8 bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-zinc-200/60 shadow-[0_20px_50px_-20px_rgba(0,109,208,0.05)] space-y-8">
              {/* Tiêu đề & Tag VIP */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  {item.isVip && (
                    <span className="bg-btn-primary text-white px-3.5 py-1.5 text-xs md:text-sm font-black uppercase  shadow-md rounded-lg animate-pulse-glow border border-white/20">
                      Tin VIP
                    </span>
                  )}
                  <span className="bg-primary/10 text-primary text-xs md:text-sm font-black uppercase  px-3 py-1.5 rounded-lg">
                    {item.cat === "dat-nen"
                      ? "Đất nền"
                      : item.cat === "nha-pho"
                        ? "Nhà phố"
                        : item.cat === "dat-vuon"
                          ? "Đất vườn"
                          : item.cat === "biet-thu"
                            ? "Biệt thự"
                            : "Khác"}
                  </span>
                </div>

                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 uppercase leading-snug font-display">
                  {item.title}
                </h1>

                {/* Thông tin Meta */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs md:text-sm font-bold text-zinc-550 border-b border-zinc-100/80 pb-4">
                  <span className="flex items-center gap-1.5">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    {item.location}, Cần Giờ
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="h-4.5 w-4.5 text-zinc-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Đăng lúc: {item.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="h-4.5 w-4.5 text-zinc-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Lượt xem: 215
                  </span>
                </div>
              </div>

              {/* Ảnh lớn bất động sản */}
              <div className="relative w-full h-[260px] sm:h-[400px] rounded-2xl overflow-hidden shadow-sm bg-zinc-50 border border-zinc-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thông số chính (Price, Area, Location) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-blue-50/30 p-5 rounded-2xl border border-blue-100/20">
                <div className="space-y-1">
                  <span className="text-xs md:text-sm font-bold text-zinc-500 block">
                    Mức giá
                  </span>
                  <span className="text-xl md:text-2xl font-black text-primary ">
                    {item.price}
                  </span>
                </div>
                <div className="space-y-1 border-l border-zinc-200/50 pl-4">
                  <span className="text-xs md:text-sm font-bold text-zinc-500 block">
                    Diện tích
                  </span>
                  <span className="text-xl md:text-2xl font-black text-primary ">
                    {item.area} m²
                  </span>
                </div>
                <div className="space-y-1 border-l border-zinc-200/50 pl-4 col-span-2 sm:col-span-1 pt-3 sm:pt-0">
                  <span className="text-xs md:text-sm font-bold text-zinc-500 block">
                    Đơn giá
                  </span>
                  <span className="text-base md:text-lg font-black text-zinc-800 ">
                    {Math.round((item.priceVal / item.area) * 100) / 10} Tr/m²
                  </span>
                </div>
              </div>

              {/* Chi tiết nội dung bài đăng */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl font-black uppercase text-zinc-900 border-b border-zinc-100 pb-2 font-display">
                  Thông tin mô tả chi tiết
                </h3>

                <div className="text-sm md:text-base text-zinc-700 leading-relaxed font-semibold space-y-4">
                  <p>{item.excerpt}</p>
                  <p>
                    Đất đẹp vuông vức, không bị lỗi phong thủy, lộ giới đường
                    nhựa thông thoáng, hạ tầng hoàn thiện đồng bộ, kết nối thuận
                    lợi. Xung quanh dân cư hiện hữu văn minh, an ninh tốt, gần
                    chợ, trường học, trạm y tế và các khu du lịch biển Cần Giờ.
                  </p>
                  <p>
                    Pháp lý đầy đủ rõ ràng, sổ hồng riêng chính chủ đứng tên
                    sang nhượng, công chứng sang tên ngay trong ngày. Hỗ trợ thủ
                    tục vay vốn ngân hàng lãi suất tốt nếu khách hàng có nhu
                    cầu.
                  </p>

                  <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100/60 mt-6 space-y-3.5">
                    <h4 className="text-sm md:text-base font-black text-zinc-900 uppercase font-display">
                      Đặc điểm bất động sản
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base text-zinc-650 font-bold">
                      <li className="flex items-center gap-2.5">
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
                        <span>Pháp lý: Sổ hồng riêng chính chủ</span>
                      </li>
                      <li className="flex items-center gap-2.5">
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
                        <span>Loại hình: Đất thổ cư 100%</span>
                      </li>
                      <li className="flex items-center gap-2.5">
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
                        <span>Hướng đất: Đông Nam mát mẻ</span>
                      </li>
                      <li className="flex items-center gap-2.5">
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
                        <span>Lộ giới đường: Nhựa 12m thông thoáng</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải: Liên hệ nhà bán (Col 4) */}
            <div className="lg:col-span-4 space-y-6 sticky top-24">
              {/* Box Liên hệ chủ tin */}
              <div className="glass-premium p-6 rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,109,208,0.04)] text-center space-y-6">
                <div className="space-y-3">
                  {/* Avatar */}
                  <div className="relative h-18 w-18 bg-primary/10 text-primary flex items-center justify-center font-black text-2xl rounded-full mx-auto shadow-inner border border-primary/5">
                    M
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-black text-zinc-900 font-display">
                      Môi giới chính chủ
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 font-bold">
                      Thành viên kiểm duyệt CanGio247
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Nút Gọi điện thoại */}
                  <a
                    href="tel:0909123456"
                    className="glow-btn shine-effect w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-[#00b7ff] text-white font-black uppercase text-xs md:text-sm  py-4 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02]"
                  >
                    <svg
                      className="h-5 w-5 animate-wiggle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    0909 123 456
                  </a>

                  {/* Nút Chat Zalo */}
                  <a
                    href="https://zalo.me/0909123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-btn shine-effect w-full flex items-center justify-center gap-2 bg-[#0068ff] hover:bg-[#0052cc] text-white font-black uppercase text-xs md:text-sm  py-4 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="relative h-5.5 w-5.5 bg-white p-0.5 rounded-full shrink-0">
                      <Image
                        src="/images/zalo.svg"
                        alt="Zalo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    Trò chuyện Zalo
                  </a>
                </div>
              </div>

              {/* Box Mẹo An toàn */}
              <div className="glass-premium p-6 rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,109,208,0.04)] space-y-4">
                <h4 className="text-sm md:text-base font-black uppercase  text-zinc-800 border-b border-zinc-100 pb-2 flex items-center gap-2 font-display">
                  <svg
                    className="h-5 w-5 text-primary shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Mẹo giao dịch an toàn</span>
                </h4>
                <ul className="space-y-3.5 text-sm md:text-base text-zinc-550 font-bold leading-relaxed">
                  <li className="flex gap-2.5">
                    <svg
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
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
                    <span>
                      Không chuyển khoản đặt cọc trước khi xem trực tiếp bất
                      động sản và kiểm tra giấy tờ pháp lý.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <svg
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
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
                    <span>
                      Yêu cầu giao dịch công chứng tại văn phòng công chứng uy
                      tín của huyện Cần Giờ.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <svg
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
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
                    <span>
                      Kiểm tra quy hoạch chi tiết tại UBND xã/thị trấn trước khi
                      chốt giao dịch.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section tin đăng liên quan */}
        {(() => {
          const relatedItems = bdsData
            .filter((p) => p.id !== item.id)
            .sort((a, b) => {
              if (a.cat === item.cat && b.cat !== item.cat) return -1;
              if (a.cat !== item.cat && b.cat === item.cat) return 1;
              if (a.location === item.location && b.location !== item.location)
                return -1;
              if (a.location !== item.location && b.location === item.location)
                return 1;
              return 0;
            })
            .slice(0, 3);

          if (relatedItems.length === 0) return null;

          return (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-150/50 mt-12 reveal">
              <div className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 font-display">
                  Các bất động sản liên quan
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedItems.map((relatedItem) => (
                    <PostCard key={relatedItem.id} {...relatedItem} />
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
