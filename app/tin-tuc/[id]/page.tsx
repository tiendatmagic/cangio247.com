"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "../../data/mockData";
import PostCard from "../../components/PostCard";

export default function TinTucDetail() {
  const { id } = useParams();
  const post = newsData.find((p) => p.id === id);

  if (!post) {
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
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 uppercase font-display">
            Không tìm thấy bài viết
          </h2>
          <p className="text-sm md:text-base text-zinc-500 font-bold">
            Bài viết này không tồn tại hoặc đã bị gỡ bỏ khỏi hệ thống CanGio247.
          </p>
          <Link
            href="/tin-tuc"
            className="glow-btn inline-block bg-primary text-white font-black uppercase text-xs md:text-sm  px-8 py-4 rounded-full shadow-md"
          >
            Quay lại Tin tức
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex-1 bg-[#f8fafc] pb-16 relative overflow-hidden animate-fade-in-up">
      {/* Quầng sáng nền loang */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="glow-orb glow-primary w-[500px] h-[500px] -top-20 -right-20 opacity-12 animate-float pointer-events-none" />
        <div className="glow-orb glow-cyan w-[400px] h-[400px] bottom-10 left-10 opacity-8 animate-float-reverse pointer-events-none" />
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
                href="/tin-tuc"
                className="hover:text-primary transition-colors"
              >
                Tin tức
              </Link>
              <span>/</span>
              <span className="text-zinc-800 line-clamp-1">{post.title}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <article className="glass-premium p-6 sm:p-10 md:p-14 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,109,208,0.03)] space-y-8 relative z-10">
            {/* Header Bài Báo */}
            <div className="space-y-5">
              <span className="inline-flex bg-primary/10 text-primary text-xs md:text-sm font-black uppercase  px-3.5 py-1.5 rounded-lg">
                {post.category}
              </span>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 leading-tight uppercase font-display">
                {post.title}
              </h1>

              {/* Thông tin tác giả & ngày đăng */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs md:text-sm font-bold text-zinc-550 border-b border-zinc-100 pb-5">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Tác giả:{" "}
                  <span className="text-zinc-800 font-extrabold">
                    {post.author}
                  </span>
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Ngày đăng: {post.date}
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Thời gian đọc: 4 phút
                </span>
              </div>
            </div>

            {/* Ảnh Đại Diện Lớn Báo Chí */}
            <div className="relative w-full h-[240px] sm:h-[380px] lg:h-[450px] rounded-2xl overflow-hidden shadow-sm bg-zinc-50 border border-zinc-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Nội dung Tạp Chí Cao Cấp (Tăng kích thước lên 16px-18px) */}
            <div className="text-zinc-700 leading-relaxed font-semibold text-base md:text-[18px] space-y-6">
              {/* Lời tựa (Excerpt) in đậm nghiêng */}
              <p className="text-zinc-900 font-extrabold border-l-4 border-primary pl-4 py-1.5 italic text-lg md:text-[19px] leading-relaxed">
                {post.excerpt}
              </p>

              <p>
                Theo quyết định quy hoạch phát triển không gian huyện Cần Giờ
                đến năm 2030 và định hướng tầm nhìn 2045, khu vực sẽ tập trung
                xây dựng mô hình đô thị sinh thái kết hợp du lịch hiện đại hàng
                đầu khu vực phía Nam. Trong đó, dự án Cảng trung chuyển quốc tế
                Cần Giờ là một trong những cột mốc chiến lược thu hút các tập
                đoàn logistics đa quốc gia hàng đầu thế giới quan tâm đầu tư.
              </p>

              <p>
                Bên cạnh đó, dự án cầu Cần Giờ kết nối trực tiếp huyện Nhà Bè và
                Cần Giờ đi qua sông Soài Rạp cũng được UBND TP.HCM đốc thúc các
                ban ngành khẩn trương rà soát giải phóng mặt bằng để sớm khởi
                công xây dựng. Khi cây cầu đi vào hoạt động, thời gian di chuyển
                từ trung tâm TP.HCM về Cần Giờ sẽ được rút ngắn đáng kể, gỡ bỏ
                hoàn toàn nút thắt cô lập giao thông hiện tại.
              </p>

              {/* Khối trích dẫn nổi bật */}
              <div className="bg-zinc-50 p-6 sm:p-8 rounded-2xl border border-zinc-100/60 my-6 text-center text-zinc-900 italic font-extrabold text-base sm:text-lg">
                "Cần Giờ sẽ là động lực tăng trưởng kinh tế biển mới của TP.HCM
                thông qua các siêu dự án hạ tầng lớn, song song với việc gìn giữ
                và bảo vệ tuyệt đối khu dự trữ sinh quyển rừng ngập mặn thế
                giới."
              </div>

              <p>
                Ngoài ra, thị trường bất động sản đất nền, nhà vườn nghỉ dưỡng
                ven biển Long Hòa và khu vực trung tâm thị trấn Cần Thạnh cũng
                chứng kiến xu hướng dịch chuyển dòng tiền thông minh của các nhà
                đầu tư trung và dài hạn. Với lợi thế quỹ đất rộng lớn, không khí
                trong lành mát mẻ ven biển, Cần Giờ hứa hẹn sẽ bùng nổ mạnh mẽ
                khi cơ sở hạ tầng giao thông kết nối hoàn thiện đồng bộ.
              </p>

              <p>
                Ban quản lý dự án cho biết sẽ tiếp tục cập nhật đầy đủ các bản
                đồ quy hoạch chi tiết 1/500, các dự án hạ tầng chuẩn bị triển
                khai cũng như tình hình biến động thị trường đất đai Cần Giờ để
                truyền tải kịp thời nhất tới quý bạn đọc trên trang tin
                cangio247.com.
              </p>
            </div>

            {/* Footer bài viết: nút share / quay lại */}
            <div className="pt-8 border-t border-zinc-100 flex items-center justify-between">
              <Link
                href="/tin-tuc"
                className="text-xs md:text-sm font-black uppercase  text-primary hover:underline flex items-center gap-1.5"
              >
                <svg
                  className="h-4 w-4 rotate-180"
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
                Quay lại danh sách tin tức
              </Link>

              <span className="text-xs md:text-sm font-bold text-zinc-400">
                © cangio247.com - Bảo lưu mọi bản quyền
              </span>
            </div>
          </article>
        </div>

        {/* Section tin đăng liên quan */}
        {(() => {
          const relatedItems = newsData
            .filter((p) => p.id !== post.id)
            .sort((a, b) => {
              if (a.category === post.category && b.category !== post.category)
                return -1;
              if (a.category !== post.category && b.category === post.category)
                return 1;
              return 0;
            })
            .slice(0, 3);

          if (relatedItems.length === 0) return null;

          return (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-12 border-t border-zinc-150/50 mt-6 reveal">
              <div className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 font-display">
                  Tin tức & Sự kiện liên quan khác
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
