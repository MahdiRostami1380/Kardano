"use client";

import { useState } from "react";

export default function Categories({ options }) {
  const [currentCategory, setCurrentCategory] = useState(0);
  return (
    <div className="py-4 border-b border-[#F37915] flex gap-6 mb-6 md:mb-10 mt-0 md:mt-4 overflow-scroll md:overflow-hidden">
      {options.map((option, index) => (
        <div
          key={index}
          className={`${
            currentCategory === option.category
              ? "text-[#2C343D] before:absolute before:left-0 before:-bottom-[16px] before:w-full before:rounded-full before:h-[5px] before:bg-[#F37915]"
              : "text-[#A4A4A4]"
          } cursor-pointer whitespace-nowrap text-xs md:text-base lg:text-xl relative`}
          onClick={() => setCurrentCategory(option.category)}
        >
          {option.title}
        </div>
      ))}
    </div>
  );
}
