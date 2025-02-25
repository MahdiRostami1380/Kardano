import { twMerge } from "tailwind-merge";

export default function SearchSelectOptions({ title, options, className }) {
  return (
    <select
      className={twMerge(
        "bg-white border cursor-pointer border-[#F37915] appearance-none bg-[url('/vectors/chevronDown.svg')] bg-no-repeat bg-[10px_23px] md:bg-[10px_27px] lg:bg-[10px_27px] xl:bg-[20px_32px] outline-none p-4 md:p-5 rounded-2xl xl:rounded-3xl text-[14px] lg:text-[13px] xl:text-[20px] flex justify-between items-center",
        className
      )}
    >
      <option hidden>{title}</option>
    </select>
  );
}
