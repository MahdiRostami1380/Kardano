import Link from "next/link";

export default function Register() {
  return (
    <section className="relative h-[613px] md:h-[430px] lg:h-[400px] xl:h-[480px] 2xl:h-[500px] isolate overflow-x-hidden">
      <div className="section-container flex flex-col lg:flex-row justify-start gap-4 xl:gap-6 h-full items-center lg:pt-48 xl:pt-60">
        <div className="w-full lg:w-[380px] xl:w-[460px] 2xl:w-[550px] mt-40 md:mt-14 lg:mt-0">
          <h2 className="font-[800] text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] mb-2 lg:mb-5">
            به خانواده بزرگ پژوهاد بپیوندید
          </h2>
          <p className="font-normal text-[14px] lg:text-lg xl:text-xl 2xl:text-2xl">
            تخصص خود را با دیگران به اشتراک بگذارید و کسب درآمد کنید
          </p>
        </div>
        <Link
          href={"/"}
          className="w-full lg:w-fit bg-gradient-to-l from-[#FF9D29] to-[#F37915] rounded-xl xl:rounded-2xl 2xl:rounded-3xl py-2 xl:py-4 px-4 xl:px-6 2xl:py-6 2xl:px-8 mt-3 lg:mt-6 text-white flex gap-4 items-center xl:gap-6 2xl:gap-8 justify-center"
        >
          <div>ثبت نام آنلاین</div>
          <div className="bg-white rounded-md flex items-center justify-center size-[16px] lg:size-[20px] xl:size-[25px]">
            <img
              src="/vectors/chevronDown.svg"
              alt="chevron"
              className="rotate-90 size-[10px] lg:size-fit"
            />
          </div>
        </Link>
        <img
          src="/vectors/registerBg.svg"
          alt="background"
          className="hidden s440:block absolute bottom-0 left-0 -z-30 w-full h-full lg:h-fit object-cover lg:object-contain"
        />
        <img
          src="/vectors/registerBgMobile.svg"
          alt="background"
          className="block s440:hidden absolute bottom-0 left-0 -z-30 w-full h-full lg:h-fit object-cover lg:object-contain"
        />
        <img
          src="/registerHeroImage.png"
          alt="hero image"
          className="absolute lg:left-0 bottom-0 object-cover h-[281px] lg:h-[370px] xl:h-[440px] 2xl:h-[488px] -z-10"
        />
        <img
          src="/layer1.png"
          alt="layer1"
          className="absolute bottom-5 lg:bottom-10 -translate-x-[50px] lg:-left-10 rotate-90 h-[260px] lg:h-[360px] xl:h-[430px] 2xl:h-[461px] -z-20"
        />
      </div>
    </section>
  );
}
