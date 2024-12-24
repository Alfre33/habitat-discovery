import Link from "next/link";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

export const EspecieCard = () => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-watercourse-700 rounded-lg shadow-lg group min-h-64 max-w-xs lg:max-w-sm">
      <div className="absolute right-3 top-3">
        <MdOutlineFavorite size={30}/>
      </div>
      <svg
        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
        viewBox="0 0 375 283"
        fill="none"
        style={{ opacity: 0.1 }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: 0.2,
          }}
        ></div>
        <img
          className="relative w-40 h-40"
          src="/especies/tigrezoo.png"
          alt=""
        />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="opacity-75 -mb-1 w-auto bg-white px-3 py-1 text-sm rounded-2xl text-watercourse-600 font-semibold">
          Mamiferos
        </span>
        <div className="flex justify-between mt-2">
          <span className="block font-semibold text-xl px-1">Tigre</span>
          <Link
            href={"especie/tigre"}
            className=" bg-white rounded-full text-watercourse-600 text-xs font-bold px-3 py-2 leading-none flex items-center hover:bg-watercourse-50"
          >
            Conocer mas..
          </Link>
        </div>
      </div>
    </div>
  );
};
