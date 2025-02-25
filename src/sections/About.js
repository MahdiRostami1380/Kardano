import Link from "next/link";

export default function About() {
  return (
    <section className="relative mt-10 h-[964px] md:h-[900px] lg:h-[720px] xl:h-[870px] 2xl:h-[921px] flex items-center">
      <img
        src="/vectors/aboutBg.svg"
        alt="about image"
        className="hidden s440:block absolute top-0 left-0 w-full h-full object-cover"
      />
      <img
        src="/vectors/aboutBgMobile.svg"
        alt="about image"
        className="block s440:hidden absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="section-container flex gap-[70px] md:gap-[40px] lg:gap-14 xl:gap-20 2xl:gap-28 relative items-center mt-0 lg:mt-20 flex-col-reverse lg:flex-row z-10">
        <div className="absolute w-[4px] lg:w-[9px] h-[84px] lg:h-[186px] bg-[#F37915] rounded-full left-1/2 -translate-x-1/2 -top-16 lg:-top-36 xl:-top-40 z-10"></div>
        <div className="flex flex-col px-10 md:px-0 gap-[70px] md:gap-[40px] lg:gap-5 xl:gap-7 w-full lg:w-1/3">
          <h2 className="relative text-[29px] lg:text-[24px] xl:text-[29px] 2xl:text-[36px] font-[800] w-fit">
            <span>درباره </span>
            <span className="text-[rgb(243,121,21)]">پژوهاد</span>
            <div className="absolute whitespace-nowrap -top-[10px] lg:-top-[10px] xl:-top-3 2xl:-top-4 left-1/2 -translate-x-1/2 text-[#19191A0D] text-[29px] lg:text-[24px] xl:text-[29px] 2xl:text-[37px]">
              About Us
            </div>
          </h2>
          <p className="text-justify text-[14px] lg:text-base xl:text-lg 2xl:text-xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت ...
          </p>
          <Link href={"/"} className="self-end flex gap-3 items-center">
            <div className="text-[#F37915] text-[14px] lg:text-xl">
              مشاهده همه
            </div>
            <img src="/vectors/chevronLeft.svg" alt="chevron down" />
          </Link>
        </div>
        <div className="isolate w-1/2 sm:w-1/3 lg:w-1/3 flex items-center justify-center relative">
          <img
            src="/aboutImage.png"
            alt="about image"
            className="h-[310px] sm:h-[370px] md:h-[460px] lg:h-[500px] xl:h-[620px] 2xl:h-[684px] object-cover rounded-full"
          />
          <div className="absolute w-full h-full rounded-full bg-yellow-600 bg-opacity-20 z-10"></div>
          <div className="absolute w-full h-full rounded-full bg-white -rotate-[26deg] md:-rotate-[40deg] lg:-rotate-[26deg] -z-10"></div>
        </div>
        <div className="w-1/3 hidden lg:flex flex-col lg:gap-4 xl:gap-7">
          <div className="flex lg:gap-3 xl:gap-4 2xl:gap-5 items-center">
            <img
              src="/vectors/teacher.svg"
              alt="teacher"
              className="lg:scale-75 xl:scale-[.85] 2xl:scale-100"
            />
            <div className="font-[800] lg:text-[30px] xl:text-[40px] 2xl:text-[48px] text-[#19191A]">
              145+
            </div>
            <div className="lg:text-lg xl:text-[22px] 2xl:text-[24px] font-normal text-[#F37915]">
              استاد برسجته
            </div>
          </div>
          <div className="flex lg:gap-3 xl:gap-4 2xl:gap-5 items-center">
            <img
              src="/vectors/book.svg"
              alt="book"
              className="lg:scale-75 xl:scale-[.85] 2xl:scale-100"
            />
            <div className="font-[800] lg:text-[30px] xl:text-[40px] 2xl:text-[48px] text-[#19191A]">
              386+
            </div>
            <div className="lg:text-lg xl:text-[22px] 2xl:text-[24px] font-normal text-[#F37915]">
              دوره اجرا شده
            </div>
          </div>
          <div className="flex lg:gap-3 xl:gap-4 2xl:gap-5 items-center">
            <img
              src="/vectors/student.svg"
              alt="student"
              className="lg:scale-75 xl:scale-[.85] 2xl:scale-100"
            />
            <div className="font-[800] lg:text-[30px] xl:text-[40px] 2xl:text-[48px] text-[#19191A]">
              2749+
            </div>
            <div className="lg:text-[18px] xl:text-[22px] 2xl:text-[24px] font-normal text-[#F37915]">
              دانش آموخته
            </div>
          </div>
        </div>
        <div className="absolute w-[4px] h-[46px] lg:w-[9px] lg:h-[103px] bg-[#F37915] rounded-full left-1/2 -translate-x-1/2 -bottom-[70px] md:-bottom-16 lg:-bottom-14 z-10"></div>
      </div>
      <img
        src="/layer1.png"
        alt="layer"
        className="absolute bottom-28 md:bottom-16 xl:bottom-40 2xl:bottom-20 left-0 rotate-90 z-0 w-[362px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[595px]"
      />
    </section>
  );
}
