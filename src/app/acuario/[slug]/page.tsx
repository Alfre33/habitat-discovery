import { acuarios } from "@/seed";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineTicket } from "react-icons/hi2";
import { ActivityCards, AddComent, HabitatMap, RelatedAnimalsSlider, SliderSpecies, TestimonialSlider } from "@/components";
interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default async function AcuarioPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const dataAcuario = acuarios.filter((a) => a.slug === slug);
  const { nombre, ubicacion } = dataAcuario[0];
  return (
    <div
      className="flex flex-col items-center gap-5 text-gray-800
    "
    >
      <header className="bg-watercourse-700  text-watercourse-50 w-full h-20 rounded-b-2xl md:rounded-b-full flex items-center justify-center px-10 text-xl lg:text-2xl">
        <FaArrowLeft className=" ml-5" />
        <span className="w-full flex justify-center">{nombre}</span>
      </header>
      <Image
        src="/app.png"
        alt="example"
        width={120}
        height={120}
        className="rounded-full shadow-xl border-watercourse-800 border md:w-36 md:h-36"
      />
      <div className="flex w-5/6 justify-center text-green-600 text-md md:text-lg">
        <LuMapPin className="w-2/12 mt-2 lg:mt-0 mx-4" size={35} />
        <p>{ubicacion}</p>
      </div>
      <HabitatMap/>
      <p className=" font-semibold text-lg md:text-xl">Quieres visitarnos?</p>
      <Link
        href={`/boletos/${slug}`}
        className="bg-watercourse-700 p-5 md:w-4/12 text-center text-watercourse-50 rounded-3xl flex items-center justify-center hover:bg-watercourse-500">
        <HiOutlineTicket className="text-3xl mr-4"/>
        <span className="text-lg md:text-xl">Comprar boletos</span>
      </Link>
      {/* <RelatedAnimalsSlider/> */}
      <div className="flex justify-between px-3 mb-4 w-full md:w-10/12 lg:w-8/12 text-green-700 font-semibold text-md md:text-xl">
        <h2 className="">Especies destacadas</h2>
        <a href="#" className="underline">
          Ver todos...
        </a>
      </div>
      <SliderSpecies/>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* <h4>Principales Actividades</h4> */}
        <ActivityCards/>
        <ActivityCards/>
        <ActivityCards/>
      </div>
      <TestimonialSlider/>
      <AddComent/>
    </div>
  );
}
