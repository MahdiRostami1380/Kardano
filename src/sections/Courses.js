import CourseCard from "@/components/CourseCard";
import ThreeCircle from "@/components/ThreeCircle";
import Link from "next/link";

export default function Courses() {
  const courses = [{}, {}, {}, {}, {}, {}];
  return (
    <section className="section-container mt-10 md:hidden">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <ThreeCircle />
          <h2 className="font-KamandBlack text-[20px] lg:text-[36px] font-[800]">
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
      <div className="grid grid-cols-2 gap-5 my-10">
        {courses.map((course, index) => (
          <CourseCard key={index} />
        ))}
      </div>
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
