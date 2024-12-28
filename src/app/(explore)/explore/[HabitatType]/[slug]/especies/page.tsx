// 'use client'
import { getEspeciesByHabitat } from "@/actions";
import { EspecieCard, FilterCategories, Header } from "@/components";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { GridCards } from "./ui/GridCards";
import { HabitatType } from "@prisma/client";
interface Props {
  params: Promise<{
    slug: string;
    HabitatType: HabitatType;
  }>;
}
export default async function EspeciesPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug, HabitatType } = resolvedParams;
  const { especies, categories, name, habitatCategories } =
    await getEspeciesByHabitat(slug);
  const color = HabitatType === "ZOO" ? "watercourse" : "teal";
  // console.log(especies)

  return (
    <div className="flex flex-col items-center gap-5">
      <Header name={name ?? "Habitat Name"} color={color} url="" />
      <FilterCategories
        categories={habitatCategories}
        slug={slug}
        initialEspecies={especies}
      />
      <GridCards initialEspecies={especies} categories={categories} />
    </div>
  );
}
