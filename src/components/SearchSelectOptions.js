import { twMerge } from "tailwind-merge";

export default function SearchSelectOptions({ title, options, className }) {
  return (
    <div
      className={twMerge(
        "bg-white border cursor-pointer border-[#F37915] outline-none p-4 md:p-5 rounded-2xl xl:rounded-3xl text-[14px] lg:text-[13px] xl:text-[20px] flex justify-between items-center",
        className
      )}
    >
      <div>{title}</div>
      <img
        src="/vectors/chevronDown.svg"
        alt="chevronDown"
        className="translate-y-1"
      />
    </div>
  );
}
