export default function HeroImage() {
  return (
    <>
      <div className="absolute -left-[410px] md:-left-[420px] 2xl:-left-[200px] top-[103px] md:top-[125px] xl:top-[105px] 2xl:top-[200px] w-[700px] md:w-[1000px] h-[370px] md:h-[540px] xl:h-[650px] 2xl:h-[750px] rounded-r-full rotate-[10deg] bg-[#D9D9D94D]"></div>
      <div className="select-none absolute -left-[386px] 2xl:-left-[300px] top-[50px] w-[700px] md:w-[1000px] 2xl:w-[1200px] h-[370px] md:h-[540px] xl:h-[650px] 2xl:h-[850px] rounded-r-full rotate-[30deg] bg-white">
        <div className="absolute w-full h-full rounded-r-full overflow-hidden">
          <img
            src="/layer1.png"
            alt="layer"
            className="absolute h-[300px] md:h-[460px] 2xl:h-[550px] -rotate-[30deg] md:-translate-x-[80px] 2xl:-translate-x-[130px] 2xl:translate-y-[130px]"
          />
          <img
            src="/hero.png"
            alt="hero"
            className="absolute w-[250px] md:w-[370px] xl:w-[450px] 2xl:w-[595px] translate-x-[20px] -rotate-[30deg]"
          />
        </div>
        <img
          src="/vectors/heroHand.svg"
          alt="hero"
          className="absolute top-[27px] left-[614px] md:left-[871px] md:top-[36px] translate-x-[20px] -rotate-[30deg] md:h-[111px] xl:h-[132px] 2xl:h-[177px] xl:top-[46px] xl:left-[844px] 2xl:top-[59px] 2xl:left-[992px]"
        />
        <img
          src="/vectors/heroObject1.svg"
          alt="hero object 1"
          className="absolute -rotate-[30deg] right-[40px] md:right-[75px] top-[10px] md:top-[10px] md:h-[40px] 2xl:h-[67px] 2xl:right-[150px]"
        />
        <img
          src="/vectors/heroObject2.svg"
          alt="hero object 2"
          className="absolute -rotate-[30deg] right-[150px] md:right-[300px] -bottom-[20px] 2xl:-bottom-[40px] md:h-[80px] 2xl:h-[111px] 2xl:right-[450px]"
        />
      </div>
    </>
  );
}
