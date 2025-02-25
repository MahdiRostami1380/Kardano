import Link from "next/link";

export default function Blog() {
  return (
    <div className="group relative rounded-3xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.25)] h-fit md:h-[498px] lg:h-[420px] xl:h-[450px] 2xl:h-[498px] hover:outline hover:outline-[#F37915] hover:outline-1">
      <img src="/blogCardImage.png" className="rounded-3xl" />
      <div className="p-4">
        <div className="flex flex-col gap-1 md:gap-3 xl:gap-5 mt-0 md:mt-2 xl:mt-3 group-hover:[mask-image:linear-gradient(to_bottom,black,transparent_80%,transparent)]">
          <h3 className="font-[900]">آمادگی آزمون آیلتس</h3>
          <p className="text-[#606060] font-normal text-[12px] md:text-base text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان ...
          </p>
        </div>
        <Link
          href={"/"}
          className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 text-[#F37915] hidden group-hover:block text-[12px] md:text-base"
        >
          مشاهده بیشتر ...
        </Link>
      </div>
    </div>
  );
}
