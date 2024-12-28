import {
  AddressHabitat,
  CategoriaEspecies,
  Habitat,
  HabitatType,
} from "@prisma/client";
import Link from "next/link";
import { MdOutlineFavorite } from "react-icons/md";
import clsx from "clsx";
import { normalizeString } from "@/seed/normalize-slug";
import Image from "next/image";
interface AnimalImage{
  id: string;
  url: string;
  animalId: string;
}

interface Props {
  especie: {
    id: string;
    name: string;
    AnimalImage?:AnimalImage[];
    description: string;
    habitatId: string;
    habitatType: HabitatType;
    category: CategoriaEspecies;
  };
  categories?: {
    name: string;
    colorHex: string;
  }[];
}

export const EspecieCard = ({ especie, categories }: Props) => {
  const datacolor = categories?.find((item) => especie.category === item.name);
  const bgColorClass = datacolor ? `${datacolor.colorHex}`: "bg-gray-400";
  const textColorClass = datacolor ? `${datacolor.colorHex}` : "text-gray-400";
// console.log(bgColorClass,textColorClass)
const {AnimalImage}=especie;
// console.log(AnimalImage);
  return (
    <div className={`flex-shrink-0 m-6 relative overflow-hidden rounded-lg shadow-lg group min-h-64 max-w-xs lg:max-w-sm bg-${bgColorClass}`}>
      <div className="absolute right-3 top-3">
        <MdOutlineFavorite size={30} />
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
        <Image
          className="relative w-40 h-40"
          src={AnimalImage![0].url}
          alt=""
          width={160}
          height={160}
        />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span
          className={`opacity-90 -mb-1 w-auto bg-white px-3 py-1 text-sm rounded-2xl text-${textColorClass} font-semibold`}
        >
          {especie.category}
        </span>
        <div className="flex justify-between mt-2 flex-col">
          <span className="block font-semibold text-xl px-2 mb-3">
            {especie.name}
          </span>
          <Link
            href={`especie/${normalizeString(especie.name)}`}
            className={`bg-white rounded-full w-4/6 text-${textColorClass} text-md font-bold px-3 py-2 leading-none text-center hover:bg-watercourse-50`}
          >
            Conocer más...
          </Link>
        </div>
      </div>
    </div>
  );
};
