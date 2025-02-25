import FooterBigLogo from "@/components/FooterBigLogo";
import FooterSmallLogo from "@/components/FooterSmallLogo";
import { footerItems } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="h-[461px] sm:h-[444px] bg-[#F7F9FA] mt-24">
        <div className="relative section-container h-full flex flex-col sm:flex-row justify-evenly sm:justify-between items-start sm:items-center">
          <div className="hidden lg:block lg:w-[410px] xl:w-[540px] 2xl:w-[596px] relative mt-auto self-end">
            <FooterBigLogo />
          </div>
          <FooterSmallLogo />
          {footerItems.map((item, index) => (
            <div key={index}>
              <div className="flex gap-4 items-center mb-7">
                <div className="size-[17px] bg-[#F37915] rounded-full"></div>
                <div className="font-KamandBlack text-xl xl:text-2xl font-[900]">
                  {item.subject}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {item.sub.map((subItem, i) => (
                  <div key={i}>
                    {subItem.iconImage ? (
                      <div
                        className={`flex items-center gap-3 ${
                          subItem.iconImage || "font-[900]"
                        }`}
                      >
                        <div className="text-[#F37915] text-xl">
                          {subItem.iconImage ? (
                            <img src={subItem.iconImage} alt="icon" />
                          ) : (
                            ">"
                          )}
                        </div>
                        <div>{subItem.title}</div>
                      </div>
                    ) : (
                      <Link
                        href={subItem.link}
                        className={`flex items-center gap-3 ${
                          subItem.iconImage || "font-[900]"
                        }`}
                      >
                        <div className="text-[#F37915] text-xl">
                          {subItem.iconImage ? (
                            <img src={subItem.iconImage} alt="icon" />
                          ) : (
                            ">"
                          )}
                        </div>
                        <div>{subItem.title}</div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="absolute bottom-4 left-3 sm:static flex gap-3 flex-col xl:flew-row ">
            <img src="/vectors/zarrinpal.svg" alt="_" />
            <img src="vectors/enamad.svg" alt="_" />
          </div>
        </div>
      </section>
      <div className="font-Kamand bg-gradient-to-r text-white text-center from-[#2C343D] to-[#3A4654] text-[14px] md:text-xl lg:text-2xl px-3 py-4 md:py-8">
        کلیه حقوق مادی و معنوی این وبسایت متعلق به مجموعه کادرانو می‌باشد.
      </div>
    </>
  );
}
