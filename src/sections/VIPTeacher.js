import Categories from "@/components/Categories";
import ThreeCircle from "@/components/ThreeCircle";
import VIPTeacherCard from "@/components/VIPTeacherCard";
import { VIPTeacherOptions } from "@/constants";
import Link from "next/link";

export default function VIPTeacher() {
  const VIPTeachersArray = [{}, {}, {}, {}];
  return (
    <section className="section-container my-10 hidden md:block">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <ThreeCircle />
          <h2 className="font-KamandBlack text-[20px] lg:text-[36px] font-[800]">
            دبیرهای <span className="text-[#F37915]">VIP</span> کاردانو
          </h2>
        </div>
        <Link href={"/"} className="hidden md:flex gap-3 items-center">
          <div className="text-[#F37915] text-[14px] lg:text-xl">
            مشاهده همه
          </div>
          <img src="/vectors/chevronLeft.svg" alt="chevron down" />
        </Link>
      </div>
      <Categories options={VIPTeacherOptions} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-3">
        {VIPTeachersArray.map((teacher, index) => (
          <VIPTeacherCard key={index} />
        ))}
      </div>
    </section>
  );
}
