import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  id: string | number;
  type: "bds" | "raovat" | "job" | "news";
  title: string;
  excerpt: string;
  image: string;
  price?: string;
  salary?: string;
  location: string;
  date: string;
  isVip?: boolean;
  cat?: string;
  category?: string;
}

export default function PostCard({
  id,
  type,
  title,
  excerpt,
  image,
  price,
  salary,
  location,
  date,
  isVip = false,
  cat,
  category,
}: PostCardProps) {
  // Xác định link chi tiết theo danh mục
  const getDetailLink = () => {
    switch (type) {
      case "bds":
        return `/bat-dong-san/${id}`;
      case "raovat":
        return `/rao-vat/${id}`;
      case "job":
        return `/viec-lam/${id}`;
      case "news":
        return `/tin-tuc/${id}`;
      default:
        return "/";
    }
  };

  // Xác định text hiển thị danh mục
  const getCategoryLabel = () => {
    switch (type) {
      case "bds":
        return "Bất động sản";
      case "raovat":
        return "Rao vặt";
      case "job":
        return "Việc làm";
      case "news":
        return "Tin tức";
      default:
        return "";
    }
  };

  // Xác định text hiển thị danh mục con (Subcategory)
  const getSubcategoryLabel = () => {
    if (type === "news") {
      return category || "Tin tức";
    }
    switch (cat) {
      // Bất động sản
      case "dat-nen":
        return "Đất nền";
      case "nha-pho":
        return "Nhà phố";
      case "dat-vuon":
        return "Đất vườn";
      case "biet-thu":
        return "Biệt thự";
      case "dat-khac":
        return "Đất khác";
      // Rao vặt
      case "xe-co":
        return "Xe cộ";
      case "cong-nghe":
        return "Công nghệ";
      case "hai-san":
        return "Hải sản";
      case "gia-dung":
        return "Gia dụng";
      case "khac":
        return "Khác";
      // Việc làm
      case "services":
        return "Dịch vụ";
      case "aquaculture":
        return "Thủy sản";
      case "sales":
        return "Kinh doanh";
      case "manual":
        return "Lao động";
      default:
        return getCategoryLabel();
    }
  };

  // Áp dụng lớp shadow và border gương mờ cao cấp, riêng tin VIP có viền phát sáng nhẹ
  const cardBorderClass = isVip
    ? "border-primary/40 shadow-[0_10px_30px_-10px_rgba(0,109,208,0.15)] hover:border-primary"
    : "border-white/80 hover:border-primary/25";

  return (
    <div
      className={`group relative flex flex-col bg-white overflow-hidden animate-fade-in-up h-full rounded-2xl border transition-all duration-500 glowing-card ${cardBorderClass}`}
    >
      {/* Link bao quanh phần ảnh */}
      <Link
        href={getDetailLink()}
        className="relative h-36 sm:h-48 md:h-52 w-full overflow-hidden bg-zinc-100 block shrink-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isVip}
        />
        {/* Lớp phủ gradient nhẹ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />

        {/* Nhãn phụ danh mục con - Hiển thị đè lên ảnh */}
        <span className="absolute top-2.5 left-2.5 px-2.5 py-1 text-[11px] font-black uppercase  bg-primary text-white shadow-md rounded-lg z-10">
          {getSubcategoryLabel()}
        </span>
      </Link>

      {/* Nội dung tin đăng - Đệm cân đối */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 space-y-2.5 sm:space-y-3.5">
        {/* Địa điểm & Ngày đăng đưa lên trên tiêu đề, cỡ chữ 13px viết liền ngăn cách dấu chấm trung tâm */}
        <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[13px] font-bold text-zinc-500 uppercase  font-display leading-relaxed">
          <span>{location}</span>
          <span className="text-zinc-350 font-normal text-sm select-none">
            •
          </span>
          <span className="text-zinc-400 font-medium lowercase tracking-normal first-letter:uppercase">
            {date}
          </span>
        </div>

        {/* Tiêu đề - Tối ưu tỷ lệ: text-base trên mobile, text-lg trên desktop */}
        <h3 className="text-base sm:text-lg font-black text-zinc-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug font-display">
          <Link href={getDetailLink()}>{title}</Link>
        </h3>

        {/* Mô tả ngắn - Tối ưu: text-sm trên mobile, text-base trên desktop */}
        <p className="text-sm sm:text-base text-zinc-550 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>

        {/* Cột giá trị/Giá tiền/Lương ở chân card - LOẠI BỎ HOÀN TOÀN NÚT CHI TIẾT */}
        <div className="pt-3.5 border-t border-zinc-100/60 mt-auto flex items-center justify-between">
          <div>
            {(type === "bds" || type === "raovat") && price && (
              <div className="text-primary font-black text-lg sm:text-xl  font-display whitespace-nowrap">
                {price}
              </div>
            )}
            {type === "job" && salary && (
              <div className="text-primary font-black text-lg sm:text-xl  font-display whitespace-nowrap">
                {salary}
              </div>
            )}
            {type === "news" && (
              <Link
                href={getDetailLink()}
                className="text-sm md:text-base text-primary font-extrabold font-display whitespace-nowrap hover:underline flex items-center gap-1 group/link"
              >
                Xem thêm
                <svg
                  className="h-4 w-4 transform transition-transform duration-200 group-hover/link:translate-x-1"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
