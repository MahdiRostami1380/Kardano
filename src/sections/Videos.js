import ThreeCircle from "@/components/ThreeCircle";
import VideoCards from "@/components/VideoCards";
import Link from "next/link";

export default function Videos() {
  return (
    <section id="videos" className="section-container mt-28">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <ThreeCircle />
          <h2 className="text-[20px] lg:text-[36px] font-[800]">
            کلاس‌های درانتظار شما
          </h2>
        </div>
        <Link href={"/"} className="hidden md:flex gap-3 items-center">
          <div className="text-[#F37915] text-[14px] lg:text-xl">
            مشاهده همه
          </div>
          <img src="/vectors/chevronLeft.svg" alt="chevron down" />
        </Link>
      </div>
      <VideoCards />
      <Link
        href={"/"}
        className="flex md:hidden gap-6 items-center justify-center mt-10"
      >
        <div className="text-[#F37915] text-[14px] lg:text-xl">مشاهده همه</div>
        <img
          src="/vectors/chevronLeft.svg"
          alt="chevron down"
          className="size-[24px]"
        />
      </Link>
    </section>
  );
}
