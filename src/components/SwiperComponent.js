"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { commentsItems } from "@/constants";
import Comment from "./Comment";
import "swiper/css";
import { useCallback, useRef } from "react";

export default function () {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="relative">
      <Swiper ref={sliderRef} className="w-full" slidesPerView={3} loop={true}>
        {commentsItems.map((comment, index) => (
          <SwiperSlide key={index}>
            {({ isNext }) => <Comment comment={comment} isActive={isNext} />}
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        onClick={handleNext}
      >
        <img src="/vectors/next.svg" alt="prev" />
      </button>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        onClick={handlePrev}
      >
        <img src="/vectors/prev.svg" alt="prev" />
      </button>
    </div>
  );
}
