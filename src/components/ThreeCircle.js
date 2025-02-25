export default function ThreeCircle() {
  return (
    <div className="flex isolate w-fit">
      <div className="size-[16px] lg:size-[31px] bg-[#19191A] border-2 lg:border-4 border-white rounded-full z-0"></div>
      <div className="size-[16px] lg:size-[31px] bg-[#BBBBBB] border-2 lg:border-4 border-white rounded-full z-10 -mr-2 lg:-mr-4"></div>
      <div className="size-[16px] lg:size-[31px] bg-[#F37915] border-2 lg:border-4 border-white rounded-full z-20 -mr-2 lg:-mr-4"></div>
    </div>
  );
}
