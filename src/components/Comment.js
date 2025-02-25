export default function Comment({ comment, isActive }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <img
        src={comment.image}
        alt={comment.name}
        className={`size-[107px] rounded-full object-cover ${
          isActive || "mt-16"
        }`}
      />
      {isActive && (
        <>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-1 lg:text-lg xl:text-xl font-[900]">
              <h3 className="font-IRANSansBlack">{comment.name}</h3>
              <div>(1402/12/05)</div>
            </div>
            <div className="flex gap-1">
              <img src="/vectors/grayStar.svg" alt="star" />
              <img src="/vectors/yellowStar.svg" alt="star" />
              <img src="/vectors/yellowStar.svg" alt="star" />
              <img src="/vectors/yellowStar.svg" alt="star" />
              <img src="/vectors/yellowStar.svg" alt="star" />
            </div>
          </div>
          <p className="text-center text-xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان ...لورم ایپسوم متن ساختگی با ...
          </p>
        </>
      )}
    </div>
  );
}
