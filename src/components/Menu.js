"use client";

import { hamburgerMenuItems, navItems, pazhuhadItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Menu() {
  const pathname = usePathname();
  const hamburgerMenu = useRef(null);
  const pazhuhadRef = useRef(null);
  const [menuStatus, setMenuStatus] = useState(false);
  const [pazhuhadStatus, setPazhuhadStatus] = useState(false);

  useEffect(() => {
    menuStatus
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [menuStatus]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setMenuStatus(false);
        setPazhuhadStatus(false);
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target?.id === "closeMenu") {
        return;
      }

      if (
        hamburgerMenu.current &&
        !hamburgerMenu.current.contains(event.target)
      ) {
        setMenuStatus(false);
      }

      if (event.target?.id === "pazhuhad") {
        return;
      }

      if (pazhuhadRef.current && !pazhuhadRef.current.contains(event.target)) {
        setPazhuhadStatus(false);
      }
    });
  }, []);

  return (
    <>
      <div className="relative h-[100px] md:h-[120px] xl:h-[165px] z-50">
        <div className="flex items-center justify-between border-b lg:border-none border-white h-full font-[500]">
          <div
            className={`relative flex gap-8 lg:gap-12 xl:gap-16 ${
              pazhuhadStatus ? "border-transparent" : "border-white"
            } h-full items-center lg:border-b`}
          >
            {menuStatus ? (
              <img
                src="/vectors/closeMenu.svg"
                id="closeMenu"
                alt="close menu"
                className="cursor-pointer lg:hidden"
                onClick={() => setMenuStatus(false)}
              />
            ) : (
              <img
                src="/vectors/hamburgerMenu.svg"
                id="hamburgerMenu"
                alt="open menu"
                className="cursor-pointer lg:hidden"
                onClick={() => setMenuStatus(true)}
              />
            )}
            <img
              src="/vectors/logo.svg"
              alt="logo"
              className="cursor-pointer lg:h-[27px] xl:h-[32px] lg:translate-y-4"
            />
            <nav className="hidden lg:flex gap-9 xl:gap-14 text-[#2C343D] lg:text-lg xl:text-xl lg:translate-y-4">
              {navItems.map((item, index) => (
                <Link
                  href={item.link}
                  id={item.title === "پژوهاد" ? "pazhuhad" : "item"}
                  key={index}
                  className={`${
                    pathname === item.link &&
                    "text-[#F37915] relative before:w-1 before:h-3 before:rounded-t-full before:bg-[#F37915] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2"
                  } flex gap-2 items-center`}
                  onClick={() => {
                    if (item.title === "پژوهاد") {
                      setPazhuhadStatus(!pazhuhadStatus);
                    }
                  }}
                >
                  {item.title}
                  {item.sub && (
                    <img
                      src="/vectors/chevronDown.svg"
                      className={`${
                        pathname === item.link && "text-[#F37915] translate-y-1"
                      }`}
                    />
                  )}
                </Link>
              ))}
            </nav>
            {pazhuhadStatus && (
              <div
                ref={pazhuhadRef}
                className="hidden lg:flex absolute left-0 top-full w-full bg-white rounded-xl p-4 gap-6"
              >
                {pazhuhadItems.map((itemsArray, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    {itemsArray.map((item, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        <div className="bg-[#19191A] rounded-full size-[9px]"></div>
                        <Link
                          href={item.link}
                          className="text-[15px] text-[#606060]"
                        >
                          {item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-8 lg:translate-y-4">
            <button className="text-white text-[12px] md:text-base xl:text-[20px] bg-gradient-to-l from-[#FF9D29] to-[#F37915] px-5 py-4 rounded-xl md:rounded-2xl">
              ورود | عضویت
            </button>
            <button className="hidden md:block text-[12px] md:text-base xl:text-[20px] bg-transparent border border-[#F37915] rounded-xl md:rounded-2xl px-5 py-4 text-[#F37915]">
              عضویت اساتید
            </button>
          </div>
        </div>
      </div>
      <div
        ref={hamburgerMenu}
        className={`text-white bg-[#2C343DF2] h-full fixed top-[99px] w-4/5 backdrop-blur-sm md:top-[119px] right-0 z-50 duration-500 ${
          menuStatus ? "translate-x-0" : "translate-x-full"
        } p-7`}
      >
        <div className="flex w-full justify-between py-2 px-3 bg-white rounded-xl mb-10">
          <input
            type="text"
            placeholder="جستجو کلاس یا مدرسه ..."
            className="bg-transparent outline-none text-[#19191A] text-xs"
          />
          <img src="/vectors/chevronLeft.svg" alt="chevron left" />
        </div>
        <div className="flex flex-col gap-6 items-start">
          {hamburgerMenuItems.map((item, index) => {
            if (item.seprator) {
              return <div className="my-3" key={index}></div>;
            } else {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="flex gap-3 items-center"
                >
                  <img src={item.icon} alt={item.title} />
                  <div>{item.title}</div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
