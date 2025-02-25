export default function FooterLogo() {
  return (
    <div className="flex absolute bottom-0 right-0 text-white h-[520px] xl:h-[570px] lg:w-[410px] xl:w-[540px] 2xl:w-[596px] bg-gradient-to-t from-[#F37915] to-[#FF9D29] rounded-t-full flex-col items-center pt-32 pb-20 px-8 xl:px-14">
      <img
        src="/vectors/logo.svg"
        alt="logo"
        className="h-[90px] w-[182px] mb-10 xl:mb-16"
      />
      <p className="leading-[36px] text-justify font-normal lg:mb-9 xl:mb-14">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز ...
      </p>
      <div className="flex items-center justify-between w-full">
        <p className="text-lg font-[900]">ما را در شبکه های مجازی دنبال کنید</p>
        <div className="flex gap-3">
          <div>
            <img src="/vectors/youtube.svg" alt="youtube" />
          </div>
          <div>
            <img src="/vectors/telegram.svg" alt="telegram" />
          </div>
          <div>
            <img src="/vectors/instagram.svg" alt="instagram" />
          </div>
        </div>
      </div>
      <img
        src="layer2.png"
        alt="layer2"
        className="absolute h-[357px] rotate-180 top-20 right-20"
      />
    </div>
  );
}
