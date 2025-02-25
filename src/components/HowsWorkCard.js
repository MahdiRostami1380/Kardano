export default function HowsWorkCard({ card }) {
  return (
    <div className="flex flex-col items-center lg:w-[220px] xl:w-[263px] bg-white">
      <img
        src={card.image}
        alt={card.title}
        className={`${card.className} lg:w-[40px] xl:w-fit`}
      />
      <h3 className="lg:text-xl xl:text-2xl font-[900] text-[#19191A] mb-5">
        {card.title}
      </h3>
      <p className="text-[#606060] lg:text-base xl:text-xl font-normal">
        {card.description}
      </p>
    </div>
  );
}
