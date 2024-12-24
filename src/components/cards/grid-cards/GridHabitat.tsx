"use client";
import { HabitatCard } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

interface Props {
  habitat: HabitatCard;
}
export const GridHabitat = ({ habitat }: Props) => {
  const [displayImage, setdisplayImage] = useState(habitat.imagenUrl[0]);
  const {
    descripcion,
    estado,
    imagenUrl,
    nombre,
    raiting,
    slug,
    ubicacion,
    habitat: tipo,
  } = habitat;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full5 duration-300 hover:-translate-y-1">
      <div className="relative">
        <Image
          src={`/${tipo}/${displayImage}`}
          //   src={displayImage}
          alt={nombre}
          width={300}
          height={200}
          className="w-full h-64 object-cover"
          onMouseEnter={() => setdisplayImage(habitat.imagenUrl[1])}
          onMouseLeave={() => setdisplayImage(habitat.imagenUrl[0])}
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          SALE
        </span>
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
          <svg
            className="w-4 h- text-center text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {nombre}
            </h2>
            <p className="text-sm text-gray-600">{estado}</p>
          </div>
        </div>
        <div className="py-2 flex items-center">
          <LuMapPin className=" text-green-600 w-2/12" size={25} />
          <p className="text-ms font-semibold text-green-600 w-10/12">
            {ubicacion}
          </p>
          {/* <p className="text-sm text-gray-500 line-through">$159.99</p> */}
        </div>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="text-gray-600 text-sm ml-2">({raiting}/5)</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{descripcion}</p>
        {/* <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <i className="fas fa-truck text-blue-500 mr-2"></i>
            <span className="text-sm text-gray-600">Free Shipping</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock text-blue-500 mr-2"></i>
            <span className="text-sm text-gray-600">In Stock</span>
          </div>
        </div> */}
        <div className="flex space-x-2">
          <Link href={`/${tipo}/${slug}`} className=" text-center flex-1 bg-watercourse-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-watercourse-700 transition-colors duration-200">
            Conocer mas...
          </Link>
          {/* <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-200">
            Quick View
          </button> */}
        </div>
      </div>
    </div>
  );
};
