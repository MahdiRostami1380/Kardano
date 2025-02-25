import RequestButton from "./RequestButton";

export default function VideoCard() {
  return (
    <div className="w-full flex justify-between rounded-2xl lg:rounded-3xl p-3 xl:p-4 shadow-[0_0_10px_rgba(0,0,0,0.25)]">
      <img
        src="/videoCardImage.png"
        alt="video card image"
        className="size-[93px] lg:size-[130px] xl:size-[146px] object-cover rounded-xl ml-3 xl:ml-4"
      />
      <div className="flex flex-1 flex-col md:flex-row justify-between">
        <div className="flex flex-wrap flex-row md:flex-col justify-between mt-1 xl:mt-4 xl:mb-3 gap-3">
          <h3 className="w-full md:w-fit text-[13px] lg:text-[17px] xl:text-[20px] font-[900]">
            مدرس زبان انگلیسی سطح پیشرفته
          </h3>
          <div className="flex flex-1 flex-row md:flex-col justify-between xl:gap-3">
            <div className="flex gap-1 items-center">
              <img
                src="/vectors/home.svg"
                alt="home icon"
                className="size-[12px] lg:size-[24px]"
              />
              <h4 className="text-[10px] lg:text-[12px] xl:text-base">
                <span>مدرسه: </span>
                <span>شهید مولایی نژاد</span>
              </h4>
            </div>
            <div className="flex gap-1 items-center">
              <img
                src="/vectors/location.svg"
                alt="home icon"
                className="size-[12px] lg:size-[24px]"
              />
              <h4 className="text-[10px] lg:text-[12px] xl:text-base">
                <span>آدرس: </span>
                <span>تهران، شهرک غرب</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between md:flex-col items-center md:justify-end gap-3">
          <p className="text-[12px] xl:text-base">12 تا 15 میلیون تومان</p>
          <RequestButton video={{}} />
        </div>
      </div>
    </div>
  );
}
