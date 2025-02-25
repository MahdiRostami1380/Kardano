import HeroImage from "@/components/HeroImage";
import Menu from "@/components/Menu";
import Search from "@/components/Search";
import { headerOptions } from "@/constants";
import Link from "next/link";

export default function Header() {
  return (
    <section className="relative h-[912px] md:h-[1163px] lg:h-[863px] xl:h-[963px] 2xl:h-[1063px]">
      <Link
        href={"/#videos"}
        className="absolute z-10 -bottom-[65px] rounded-full left-1/2 -translate-x-1/2 bg-white size-[130px] hidden lg:flex items-center justify-center"
      >
        <img src="/vectors/chevron.svg" alt="chevron" className="size-[74px]" />
      </Link>
      <Link
        href={"/#videos"}
        className="absolute z-10 -bottom-[33px] rounded-full left-1/2 -translate-x-1/2 bg-white size-[66px] flex lg:hidden items-center justify-center"
      >
        <img src="/vectors/chevron.svg" alt="chevron" className="size-[38px]" />
      </Link>
      <div className="absolute top-0 h-[912px] md:h-[1163px] lg:h-[863px] xl:h-[963px] 2xl:h-[1063px] w-full flex flex-col left-1/2 -translate-x-1/2">
        <div className="bg-gradient-to-r from-[#DCE3EC] to-[#F7F9FA] h-full w-full rotate-180 [border-radius:_50%/100px_100px_0_0]"></div>
      </div>
      <div className="relative overflow-hidden h-full">
        <div className="section-container">
          <Menu />
          <div className="relative flex gap-8 py-5 z-10 overflow-x-scroll lg:hidden">
            {headerOptions.map((option, index) => (
              <div
                key={index}
                className="whitespace-nowrap text-[14px] md:text-[15px] text-[#606060]"
              >
                {option.title}
              </div>
            ))}
          </div>
          <HeroImage />
          <Search />
        </div>
      </div>
    </section>
  );
}
