import Link from "next/link";

export default function CourseCard() {
  return (
    <Link
      href={"/"}
      className="rounded-lg overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.25)]"
    >
      <img src="/blogCardImage.png" alt="course" />
      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-[14px] font-[900]">آزمون آمادگی آیلتس</h3>
        <p className="text-[10px] text-[#606060]">
          مدرس: <span>بهرامی نژاد</span>
        </p>
        <div className="text-[10px] flex items-center gap-1">
          <img
            src="/vectors/person.svg"
            alt="person icon"
            className="size-[10px]"
          />
          <div className="flex gap-1">
            <span>374</span>
            <span className="text-[#606060]">دانش آموخته</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[10px] flex items-center gap-1">
            <img
              src="/vectors/blackStar.svg"
              alt="person icon"
              className="size-[10px]"
            />
            <div className="flex gap-1">
              <span>4.7</span>
              <span className="text-[#606060]">(254 نظر)</span>
            </div>
          </div>
          <div className="text-[#BBBBBB] text-xs line-through">4,500,000</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="bg-[#F37915] px-3 py-1 rounded-lg text-white font-[900] text-[13px]">
            %25
          </div>
          <div className="text-[#19C809] text-[12px] font-[700]">
            3.500.000 تومان
          </div>
        </div>
      </div>
    </Link>
  );
}
