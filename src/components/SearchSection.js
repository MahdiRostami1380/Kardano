import SearchSelectOptions from "./SearchSelectOptions";

export default function SearchSection() {
  let options = [1, 2, 3];
  return (
    <div className="flex flex-wrap gap-3 mt-6 md:mt-10">
      <SearchSelectOptions
        options={options}
        className={"w-full lg:flex-1"}
        title={"مدرس کنکور"}
      />
      <SearchSelectOptions
        options={options}
        className={"flex-1"}
        title={"استان"}
      />
      <SearchSelectOptions
        options={options}
        className={"flex-1"}
        title={"شهر"}
      />
      <div className="w-full flex gap-3">
        <input
          type="text"
          placeholder="جستجو کلاس یا مدرسه..."
          className="text-[14px] lg:text-[13px] xl:text-[20px] p-4 md:p-5 rounded-2xl xl:rounded-3xl w-full outline-none"
        />
        <div className="cursor-pointer h-full aspect-square bg-gradient-to-l from-[#FF9D29] to-[#F37915] rounded-2xl xl:rounded-3xl flex items-center justify-center">
          <div className="size-5 bg-white flex items-center justify-center rounded-lg">
            <img
              src="/vectors/chevronDown.svg"
              alt="chevron down"
              className="rotate-90 size-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
