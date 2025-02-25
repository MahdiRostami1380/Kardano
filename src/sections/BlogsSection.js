import ThreeCircle from "@/components/ThreeCircle";
import Blogs from "@/components/Blogs";
import Link from "next/link";

export default function BlogsSection() {
  return (
    <section className="section-container md:my-10 lg:my-20">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <ThreeCircle />
          <h2 className="font-KamandBlack text-[20px] lg:text-[36px] font-[800]">
            <span className="text-[#F37915]">وبلاگ </span> کادرانو
          </h2>
        </div>
        <Link href={"/"} className="flex gap-3 items-center">
          <div className="text-[#F37915] text-[14px] lg:text-xl">
            مشاهده همه
          </div>
          <img
            src="/vectors/chevronLeft.svg"
            alt="chevron down"
            className="size-[20px] lg:size-[25px]"
          />
        </Link>
      </div>
      <Blogs />
    </section>
  );
}
