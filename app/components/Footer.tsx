import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white pt-16 pb-8 border-t border-white/10 mt-auto">
      {/* Quầng sáng nền loang cho Footer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="glow-orb glow-primary w-[350px] h-[350px] -bottom-24 -left-24 opacity-15 animate-float" />
        <div className="glow-orb glow-accent w-[250px] h-[250px] -top-12 -right-12 opacity-8 animate-float-reverse" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Cột 1: Thông tin Logo & Giới thiệu */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 bg-white p-1.5 rounded-xl shadow-md border border-white/20">
                <Image
                  src="/images/logo.svg"
                  alt="CanGio247 Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-2xl font-black  text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                CanGio<span className="text-accent">247</span>
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed font-medium">
              Cổng thông tin đăng tin và tìm kiếm Bất động sản, Rao vặt, Việc
              làm số 1 tại Cần Giờ. Kết nối thông suốt, giao dịch nhanh chóng và
              an toàn 24/7.
            </p>
            {/* Mạng xã hội */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent text-white transition-colors duration-200 shadow-md"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent text-white transition-colors duration-200 shadow-md"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent text-white transition-colors duration-200 shadow-md"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Cột 2: Các Liên kết chính */}
          <div className="space-y-4 md:pl-8">
            <h3 className="text-lg font-black  border-b-2 border-accent w-fit pb-1 font-display">
              LIÊN KẾT NHANH
            </h3>
            <ul className="space-y-3 text-sm font-semibold text-white/95">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/bat-dong-san"
                  className="hover:text-accent transition-colors"
                >
                  Bất động sản Cần Giờ
                </Link>
              </li>
              <li>
                <Link
                  href="/rao-vat"
                  className="hover:text-accent transition-colors"
                >
                  Rao vặt tổng hợp
                </Link>
              </li>
              <li>
                <Link
                  href="/viec-lam"
                  className="hover:text-accent transition-colors"
                >
                  Tuyển dụng việc làm
                </Link>
              </li>
              <li>
                <Link
                  href="/tin-tuc"
                  className="hover:text-accent transition-colors"
                >
                  Tin tức & Quy hoạch
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ khách hàng */}
          <div className="space-y-4">
            <h3 className="text-lg font-black  border-b-2 border-accent w-fit pb-1 font-display">
              HỖ TRỢ ĐĂNG TIN
            </h3>
            <ul className="space-y-3 text-sm font-semibold text-white/95">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Quy định đăng tin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Báo giá tin VIP
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Hướng dẫn thanh toán
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="hover:text-accent transition-colors"
                >
                  Gửi yêu cầu hỗ trợ
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Thông tin Liên hệ Demo */}
          <div className="space-y-4">
            <h3 className="text-lg font-black  border-b-2 border-accent w-fit pb-1 font-display">
              THÔNG TIN LIÊN HỆ
            </h3>
            <ul className="space-y-3 text-sm font-semibold text-white/95">
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-accent shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Duyên Hải, Thị trấn Cần Thạnh, Huyện Cần Giờ, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-accent shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>0909 123 456 - 0909 654 321</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-accent shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact@cangio247.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dòng bản quyền (Copyright) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm font-bold text-white/80 ">
          <div>
            Copyright © 2026{" "}
            <Link
              href="/"
              className="hover:text-white hover:underline transition-colors"
            >
              cangio247.com
            </Link>
            , Design by{" "}
            <a
              href="https://kieugia.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-colors"
            >
              Kiều Gia Group
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Điều khoản dịch vụ
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Sơ đồ trang web
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
