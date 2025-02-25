import Link from "next/link";

export default function Description() {
  return (
    <section className="section-container flex justify-end my-14 lg:my-20">
      <div className="flex flex-col items-end">
        <p className="max-w-[850px] 2xl:max-w-[949px] [mask-image:linear-gradient(to_bottom,black,transparent_90%,transparent)] text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان ...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان ...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان ...
        </p>
        <Link href={"/"} className="text-[#F37915]">
          <div>{"مشاهده ادامه >"}</div>
        </Link>
      </div>
    </section>
  );
}
