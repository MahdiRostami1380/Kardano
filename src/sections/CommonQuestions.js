"use client";

import { commonQuestions } from "@/constants";
import { useState } from "react";

export default function CommonQuestions() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  return (
    <section className="section-container my-10">
      <h2 className="font-[800] text-[32px] my-5">
        <span className="text-[#F37915]">سوالات</span> متداول شما
      </h2>
      <div className="flex justify-between border-r border-[#D9D9D9] pt-5 pr-5">
        <div className="flex flex-col gap-4 lg:gap-6">
          {commonQuestions.map((qa, index) => (
            <div
              key={index}
              className={`${
                selectedQuestion !== index && "text-[#A4A4A4]"
              } text-lg xl:text-xl 2xl:text-2xl cursor-pointer whitespace-nowrap`}
              onClick={() => setSelectedQuestion(index)}
            >
              <div className="mb-6 lg:mb-0">{qa.question}</div>
              {selectedQuestion === index && (
                <div className="bg-[#F7F9FA] rounded-2xl py-3 px-6 block lg:hidden w-full whitespace-normal font-normal">
                  <div className="text-[#F37915] mb-3">پاسخ پژوهاد:</div>
                  <div className="text-justify text-[14px]">{qa.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:block text-base xl:text-lg 2xl:text-xl text-[#606060] max-w-[650px] xl:max-w-[850px] 2xl:max-w-[1008px] bg-[#F7F9FA] rounded-3xl py-4 px-7">
          <div className="text-[#F37915] mb-5 text-lg xl:text-xl 2xl:text-2xl">
            پاسخ پژوهاد:
          </div>
          <div className="text-justify">
            {commonQuestions[selectedQuestion].answer}
          </div>
        </div>
      </div>
    </section>
  );
}
