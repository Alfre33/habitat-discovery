import { acuarios } from "@/seed";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineTicket } from "react-icons/hi2";
import { ActivityCards, AddComent, HabitatMap, Header, RelatedAnimalsSlider, SliderSpecies, TestimonialSlider } from "@/components";
import { getHabitatBySlug } from "@/actions";
import { redirect } from "next/navigation";
interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default async function AcuarioPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

const {habitat,ok}=await getHabitatBySlug(slug);
if(!ok){
  redirect('/')
}
const color=habitat?.type==='ZOO' ?'watercourse':'teal'

  return (
    <div
      className="flex flex-col items-center gap-5 text-gray-800">
     <Header name={habitat?.name ?? 'Habitat name'} url={''} color={color}/>
      <Image
        src={habitat?.logo ??"/app.png"}
        alt={habitat!.name}
        width={120}
        height={120}
        className={`rounded-full shadow-xl border-${color}-700 border md:w-36 md:h-36`}
      />
      <div className={`flex w-5/6 justify-center text-${color}-500 text-md md:text-lg`}>
        <LuMapPin className="w-2/12 mt-2 lg:mt-0 mx-4" size={35} />
        <p className=" flex justify-center">
          {habitat?.AddressHabitat?.street},
          {habitat?.AddressHabitat?.city},
          {habitat?.AddressHabitat?.state},
          {habitat?.AddressHabitat?.PostalCode},
          {habitat?.AddressHabitat?.country}
          </p>
      </div>
      <HabitatMap/>
      <p className={`font-semibold text-lg md:text-xl text-${color}-700`}>Quieres visitarnos?</p>
      <Link
        href={`/explore/${habitat?.type}/${habitat?.slug}/tickets`}
        className={`bg-${color}-500 p-5 md:w-4/12 text-center text-watercourse-50 rounded-3xl flex items-center justify-center hover:bg-${color}-800`}>
        <HiOutlineTicket className="text-3xl mr-4"/>
        <span className="text-lg md:text-xl">Comprar boletos</span>
      </Link>
      {/* <RelatedAnimalsSlider/> */}
      <div className={`flex justify-between px-3 mb-4 w-full md:w-10/12 lg:w-8/12 text-${color}-500 font-semibold text-md md:text-xl`}>
        <h2 className="">Especies destacadas</h2>
        <Link href={`/explore/${habitat?.type}/${habitat?.slug}/especies`} className="underline hover:underline-offset-2">
          Ver todos...
        </Link>
      </div>
      <SliderSpecies color={color}/>
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
