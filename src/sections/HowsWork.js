import HowsWorkCard from "@/components/HowsWorkCard";
import { howsWorkCards } from "@/constants";

export default function HowsWork() {
  return (
    <section className="hidden lg:block section-container isolate mb-40 mt-10">
      <div className="relative w-full">
        <h2 className="w-fit mx-auto font-[800] text-4xl mb-10">
          کاردانو چطوری کار می‌کنه؟
        </h2>
        <div className="flex justify-between">
          {howsWorkCards.map((card, index) => (
            <HowsWorkCard key={index} card={card} />
          ))}
        </div>
        <img
          src="/vectors/curvedDotted.svg"
          alt="_"
          className="absolute bottom-0 left-0 -z-10"
        />
      </div>
    </section>
  );
}
