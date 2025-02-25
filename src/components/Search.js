import SearchSection from "./SearchSection";

export default function Search() {
  return (
    <div>
      <div className="relative isolate mt-[360px] md:mt-[580px] lg:mt-[150px] xl:mt-[130px] 2xl:mt-[200px] lg:w-2/5 xl:w-1/2 2xl:w-2/5">
        <p className="lg:text-[25px] xl:text-[32px] hidden lg:block">
          دنبال مدرسه واسه تدریس می‌گردی؟
        </p>
        <h1 className="text-[#19191A] text-[26px] lg:text-[40px] xl:text-[48px] font-[800] text-justify">
          با چند کلیک ساده کلاس خصوصی خودت رو پیدا کن!
        </h1>
        <SearchSection />
        <img
          src="/layer2.png"
          alt="layer"
          className="absolute top-6 right-0 lg:-right-28 w-[286px] md:-right-20 xl:-right-60 xl:-top-20 lg:w-[622px] -z-10 -rotate-90"
        />
      </div>
    </div>
  );
}
