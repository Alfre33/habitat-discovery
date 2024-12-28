import { getEspeciesBySlug } from "@/actions";
import { EspecieSlider, Header, SliderSpecies } from "@/components";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
interface Props {
  params: Promise<{
    name: string;
    slug: string;
  }>;
}
export default async function Especiepage({ params }: Props) {
  const resolvedParams = await params;
  const { name, slug } = resolvedParams;
  // console.log(name,slug)
  const { especie } = await getEspeciesBySlug(slug, name);
  const color = especie?.habitatType === "ZOO" ? "watercourse" : "teal";
  return (
    <div className="flex flex-col items-center gap-5">
      <Header
        name={especie?.category ?? "Categoria de la especie"}
        url=""
        color={color}
      />
      <EspecieSlider especie={especie} />
      <section className="font-medium text-black  sm:p-2 p-5 md:px-1 w-full md:w-9/12 lg:w-8/12 mt-16 md:mt-24">
        {/* <h4 className="capitalize font-semibold mb-4 flex items-center text-2xl md:text-3xl lg:text-4xl justify-between pr-5">{name}<MdOutlineFavoriteBorder className="text-red-500 font-extrabold"/></h4> */}
        <p className="text-lg md:text-2xl">{especie?.description}</p>
      </section>
      <div className="flex justify-between px-3 mb-4 w-full md:w-10/12 lg:w-8/12 text-green-700 font-semibold text-md md:text-xl">
        <h2 className="">Especies destacadas</h2>
        <a href="#" className="underline">
          Ver todos...
        </a>
      </div>
      <SliderSpecies color={color} />
      <div className="flex justify-around w-full my-10">
        <Link
          href={""}
          className={`p-4 text-xl md:p-6 md:text-2xl bg-${color}-500 flex rounded-2xl items-center hover:bg-${color}-800`}
        >
          <MdKeyboardDoubleArrowLeft className="mr-5 text-3xl" />
          Anterior
        </Link>
        <Link
          href={""}
          className={`p-4 text-xl md:p-6 md:text-2xl bg-${color}-500 flex rounded-2xl items-center  hover:bg-${color}-800`}
        >
          Siguiente
          <MdKeyboardDoubleArrowRight className="ml-5 text-3xl" />
        </Link>
      </div>
    </div>
  );
}
