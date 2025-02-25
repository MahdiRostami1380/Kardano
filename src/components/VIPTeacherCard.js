import Link from "next/link";

export default function VIPTeacherCard() {
  return (
    <div className="shadow-[0_0_10px_rgba(0,0,0,0.25)] w-full rounded-3xl overflow-hidden">
      <img
        src="/VIPTeacher.png"
        alt="teacher"
        className="w-full object-cover mb-2"
      />
      <div className="flex flex-col gap-3 p-4 lg:p-3 xl:p-4">
        <h3 className="font-[900] text-xl">مهندس علی نعمتی</h3>
        <div className="text-[#606060]">مدرس: زبان خارجی، ابتدایی</div>
        <div className="flex justify-between">
          <div className="flex gap-1 lg:text-[12px] xl:text-base items-center">
            <img src="/vectors/person.svg" alt="person" className="size-fit" />
            <span>374 </span>
            <span className="text-[#606060]">دانش آموخته</span>
          </div>
          <div className="flex gap-1 lg:text-[12px] xl:text-base items-center">
            <img src="/vectors/star.svg" alt="person" className="size-fit" />
            <span>4.7 </span>
            <span className="text-[#606060]">(254 نظر)</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-[#F37915] rounded-lg text-white py-1 px-3 font-[900]">
            VIP
          </div>
          <Link href={"/"} className="text-[#F37915] font-[700] text-xl">
            مشاهده دوره ها
          </Link>
        </div>
      </div>
    </div>
  );
}
