import SwiperComponent from "@/components/SwiperComponent";

export default function Comments() {
  return (
    <section className="bg-[url('/commentsBg.svg')] h-[639px] items-center hidden lg:flex justify-center flex-col">
      <h2 className="font-KamandBlack font-[800] text-[32px] mb-7">
        <span className="text-[#F37915]">نظرات و دیدگاه‌های </span> کاربران
      </h2>
      <div className="section-container">
        <SwiperComponent />
      </div>
    </section>
  );
}
