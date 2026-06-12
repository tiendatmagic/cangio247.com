"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { raoVatData } from "../../data/mockData";
import PostCard from "../../components/PostCard";

export default function RaoVatDetail() {
  const { id } = useParams();
  const item = raoVatData.find((p) => p.id === id);

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
            Tin đăng rao vặt này không tồn tại hoặc đã được gỡ bỏ khỏi hệ thống
            CanGio247.
          </p>
          <Link
            href="/rao-vat"
            className="glow-btn inline-block bg-primary text-white font-black uppercase text-xs md:text-sm  px-8 py-4 rounded-full shadow-md"
          >
            Quay lại Rao vặt
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
                href="/rao-vat"
                className="hover:text-primary transition-colors"
              >
                Rao vặt
              </Link>
              <span>/</span>
              <span className="text-zinc-800 line-clamp-1">{item.title}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cột trái: Chi tiết tin đăng (Col 8) */}
            <div className="lg:col-span-8 bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-zinc-200/60 shadow-[0_20px_50px_-20px_rgba(0,109,208,0.05)] space-y-8 animate-fade-in-up">
              {/* Tiêu đề & Tag VIP */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  {item.isVip && (
                    <span className="bg-btn-primary text-white px-3.5 py-1.5 text-xs md:text-sm font-black uppercase  shadow-md rounded-lg animate-pulse-glow border border-white/20">
                      Tin VIP
                    </span>
                  )}
                  <span className="bg-primary/10 text-primary text-xs md:text-sm font-black uppercase  px-3 py-1.5 rounded-lg">
                    {item.cat === "xe-co"
                      ? "Xe cộ"
                      : item.cat === "cong-nghe"
                        ? "Công nghệ"
                        : item.cat === "hai-san"
                          ? "Hải sản & Ngư cụ"
                          : item.cat === "gia-dung"
                            ? "Đồ gia dụng"
                            : "Rao vặt khác"}
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
                    Lượt xem: 98
                  </span>
                </div>
              </div>

              {/* Ảnh sản phẩm rao vặt */}
              <div className="relative w-full h-[260px] sm:h-[400px] rounded-2xl overflow-hidden shadow-sm bg-zinc-50 border border-zinc-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Giá tiền */}
              <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10 flex items-center justify-between">
                <div>
                  <span className="text-xs md:text-sm font-bold text-zinc-500 block">
                    Giá bán công khai
                  </span>
                  <span className="text-2xl md:text-3xl font-black text-primary ">
                    {item.price}
                  </span>
                </div>
                <span className="bg-primary/10 text-primary font-black text-xs md:text-sm px-4 py-2 rounded-xl">
                  Có thương lượng nhẹ
                </span>
              </div>

              {/* Chi tiết nội dung bài đăng */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl font-black uppercase text-zinc-900 border-b border-zinc-100 pb-2 font-display">
                  Mô tả chi tiết sản phẩm
                </h3>

                <div className="text-sm md:text-base text-zinc-700 leading-relaxed font-semibold space-y-4">
                  <p>{item.excerpt}</p>
                  <p>
                    Sản phẩm đang sử dụng hoàn toàn bình thường, ổn định, hình
                    thức đẹp lung linh như trên hình chụp thực tế. Tôi cam kết
                    tin đăng đúng sự thật, không bán hàng kém chất lượng hay
                    hàng giả.
                  </p>
                  <p>
                    Mua bán giao dịch trực tiếp tại nhà riêng hoặc địa điểm hẹn
                    thuận tiện cho đôi bên trong khu vực huyện Cần Giờ. Ưu tiên
                    khách hàng ở gần có thể qua kiểm tra trực tiếp sản phẩm và
                    trao đổi cụ thể. Có bớt chút lộc lá, xăng xe cho anh em
                    thiện chí mua nhanh gọn.
                  </p>

                  <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100/60 mt-6 space-y-3.5">
                    <h4 className="text-sm md:text-base font-black text-zinc-900 uppercase font-display">
                      Thông số & Tình trạng
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
                        <span>
                          Tình trạng: Đã qua sử dụng (độ mới &gt; 95%)
                        </span>
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
                        <span>Xuất xứ: Hàng chính hãng, nguồn gốc rõ ràng</span>
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
                        <span>Bảo hành: Bao test tại chỗ 7 ngày</span>
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
                        <span>Khu vực giao dịch: {item.location}, Cần Giờ</span>
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
                    R
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-black text-zinc-900 font-display">
                      Người bán cá nhân
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 font-bold">
                      Đã xác minh số điện thoại
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Nút Gọi điện thoại */}
                  <a
                    href="tel:0909123456"
                    className="glow-btn shine-effect w-full flex items-center justify-center gap-2 bg-btn-primary text-white font-black uppercase text-xs md:text-sm  py-4 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02]"
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
                      Gặp mặt trực tiếp tại nơi công cộng hoặc đông người để
                      giao dịch sản phẩm.
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
                      Kiểm tra kỹ tình trạng sản phẩm, dùng thử các chức năng
                      trước khi thanh toán tiền.
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
                      Không chuyển khoản đặt cọc trước cho người lạ dưới bất kỳ
                      hình thức nào.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section tin đăng liên quan */}
        {(() => {
          const relatedItems = raoVatData
            .filter((p) => p.id !== item.id)
            .sort((a, b) => {
              if (a.cat === item.cat && b.cat !== item.cat) return -1;
              if (a.cat !== item.cat && b.cat === item.cat) return 1;
              if (a.location === item.location && b.location !== item.location) return -1;
              if (a.location !== item.location && b.location === item.location) return 1;
              return 0;
            })
            .slice(0, 4);

          if (relatedItems.length === 0) return null;

          return (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-150/50 mt-12 reveal">
              <div className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 font-display">
                  Sản phẩm rao vặt liên quan khác
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
