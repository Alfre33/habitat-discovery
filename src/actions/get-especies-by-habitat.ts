"use server";

import prisma from "@/lib/prisma";
import { getHabitatBySlug } from "./get-habitat-by-slug";
import { CategoriaEspecies } from "@prisma/client";

export const getEspeciesByHabitat = async (slug: string) => {
  try {
    const { habitat } = await getHabitatBySlug(slug);
    const dataCategories = await prisma.especiesCategory.findMany({
      select: { colorHex: true, name: true },
    });

    // const datacolor = dataCategories.filter((item) => habitat?.categories.includes(item.name as CategoriaEspecies));

    // console.log(datacolor);
    const especies = await prisma.animal.findMany({
      where: { Habitat: { slug: slug } },
      // include: { Habitat: { select: { name: true, categories: true } } },
      include:{AnimalImage:true}
    });

    return {
      ok: true,
      message: "Informacion obtenida correctamente",
      especies,
      name: habitat?.name,
      categories: dataCategories,
      habitatCategories: habitat?.categories,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al obtener especies",
    };
  }
};
