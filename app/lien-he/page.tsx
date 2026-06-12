"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LienHe() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "bds",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Yêu cầu gửi thành công! Ban quản trị CanGio247 sẽ kiểm duyệt và liên hệ lại trong thời gian sớm nhất.",
      );
      setFormData({
        name: "",
        phone: "",
        email: "",
        category: "bds",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full flex-1 bg-[#f8fafc] relative overflow-hidden">
      {/* Banner trang - Đã đẩy padding-top lên pt-32 để không bị Header fixed đè khuất */}
      <section className="bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 text-zinc-955 pt-32 pb-16 relative overflow-hidden border-b border-zinc-100">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#1867ff_1px,transparent_1px),linear-gradient(to_bottom,#1867ff_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        {/* Quầng sáng nền loang */}
        <div className="glow-orb glow-primary w-96 h-96 -top-20 -right-20 opacity-12 animate-float pointer-events-none"></div>
        <div className="glow-orb glow-cyan w-80 h-80 -bottom-20 left-10 opacity-8 animate-float-reverse pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="inline-flex bg-primary/10 text-primary text-xs md:text-sm font-black uppercase  px-3 py-1.5 rounded-full">
            Kết nối 24/7
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase  text-zinc-900 font-display">
            Liên hệ & Đăng tin nhanh
          </h1>
          <p className="text-zinc-550 font-bold text-sm md:text-base max-w-2xl leading-relaxed">
            Gửi yêu cầu hỗ trợ kỹ thuật, giải đáp thắc mắc dịch vụ tin VIP hoặc
            ký gửi đăng tin nhanh trực tiếp qua form liên hệ dưới đây.
          </p>
        </div>
      </section>

      {/* Main Content Layout - Asymmetric Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Cột Trái (Col 7): Form liên hệ tối giản hiện đại */}
          <div className="lg:col-span-7 bg-white p-8 rounded-[2rem] border border-zinc-200/80 shadow-[0_15px_30px_-5px_rgba(24,103,255,0.02)] space-y-6 relative z-10">
            <div className="space-y-2">
              <span className="text-xs md:text-sm font-black uppercase  text-primary">
                Gửi tin nhắn
              </span>
              <h2 className="text-lg sm:text-xl font-black uppercase  text-zinc-900 font-display">
                Form gửi thông tin hỗ trợ / Ký gửi đăng tin
              </h2>
              <p className="text-xs md:text-sm text-zinc-500 font-bold leading-relaxed">
                Vui lòng cung cấp đầy đủ thông tin để đội ngũ kiểm duyệt viên
                CanGio247 hỗ trợ bạn duyệt tin hoặc giải đáp thắc mắc nhanh
                chóng nhất.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Họ tên */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-zinc-50/50 border border-zinc-200 px-4 py-3 text-sm font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-zinc-800"
                  />
                </div>

                {/* Điện thoại */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-550 pl-1 font-display">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0909 123 456"
                    className="w-full bg-zinc-50/50 border border-zinc-200 px-4 py-3 text-sm font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-zinc-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                    Địa chỉ Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full bg-zinc-50/50 border border-zinc-200 px-4 py-3 text-sm font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-zinc-800"
                  />
                </div>

                {/* Danh mục */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-550 pl-1 font-display">
                    Danh mục hỗ trợ
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-zinc-50/50 border border-zinc-200 px-4 py-3 text-sm font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800"
                    >
                      <option value="bds">Bất động sản Cần Giờ</option>
                      <option value="raovat">Rao vặt tổng hợp</option>
                      <option value="job">Việc làm tuyển dụng</option>
                      <option value="support">Hỗ trợ kỹ thuật / Tin VIP</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs md:text-sm">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Nội dung tin nhắn */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] md:text-xs font-bold uppercase  text-zinc-500 pl-1 font-display">
                  Nội dung tin nhắn *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nhập chi tiết yêu cầu hỗ trợ hoặc thông tin tin đăng của bạn..."
                  className="w-full bg-zinc-50/50 border border-zinc-200 px-4 py-3 text-sm font-bold rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-zinc-800"
                ></textarea>
              </div>

              {/* Nút gửi bo tròn */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full glow-btn shine-effect bg-primary hover:bg-primary-hover text-white font-black uppercase  py-4 text-xs md:text-sm rounded-full shadow-[0_6px_15px_rgba(0,109,208,0.25)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:bg-zinc-350 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Đang gửi yêu cầu...
                  </>
                ) : (
                  "Gửi thông tin liên hệ"
                )}
              </button>
            </form>
          </div>

          {/* Cột Phải (Col 5): Thông tin liên lạc & bản đồ nhúng */}
          <div className="lg:col-span-5 space-y-6">
            {/* Box Thông tin */}
            <div className="bg-white p-6 rounded-[2rem] border border-zinc-200/80 shadow-sm space-y-4 relative z-10">
              <h3 className="text-xs md:text-sm font-black uppercase  text-zinc-800 border-b border-zinc-100 pb-2 font-display">
                Thông tin văn phòng liên hệ
              </h3>

              <ul className="space-y-4 text-sm font-semibold text-zinc-700">
                <li className="flex items-start gap-2.5">
                  <svg
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    Duyên Hải, Thị trấn Cần Thạnh, Huyện Cần Giờ, Thành phố Hồ
                    Chí Minh, Việt Nam
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="h-5 w-5 text-primary shrink-0"
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
                  <span>Hotline: 0909 123 456 - 0909 654 321</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="h-5 w-5 text-primary shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email: contact@cangio247.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="h-5 w-5 text-primary shrink-0"
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
                  <span>Giờ làm việc: 08:00 - 17:30 (Thứ 2 - Thứ 7)</span>
                </li>
              </ul>
            </div>

            {/* Bản đồ nhúng Google Map dạng mô phỏng */}
            <div className="bg-white p-5 rounded-[2rem] border border-zinc-200/80 shadow-sm space-y-3 relative z-10">
              <h4 className="text-xs md:text-sm font-black uppercase  text-zinc-800 font-display">
                Vị trí địa lý văn phòng
              </h4>

              <div className="relative h-64 bg-slate-100 overflow-hidden rounded-xl border border-zinc-200">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3 z-10 bg-zinc-100/50 backdrop-blur-[1px]">
                  <svg
                    className="h-10 w-10 text-primary animate-bounce"
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
                  </svg>
                  <div>
                    <h5 className="font-extrabold text-sm md:text-base text-zinc-900">
                      VĂN PHÒNG CAN GIO 247
                    </h5>
                    <p className="text-xs md:text-sm text-zinc-500 font-bold mt-1">
                      Duyên Hải, TT. Cần Thạnh, Cần Giờ, TP.HCM
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary hover:bg-primary-hover text-white text-xs md:text-sm font-black uppercase  px-5 py-2.5 rounded-full shadow-md transition-colors"
                  >
                    Mở Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
