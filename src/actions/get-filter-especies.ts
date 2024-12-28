"use server";

import prisma from "@/lib/prisma";
import { CategoriaEspecies } from "@prisma/client";
interface FilterParams {
  habitatSlug: string;
  search?: string;
  category?: string;
}

// export const getFilterEspecies = async (
//  {habitatSlug,category,search}:FilterParams
// ) => {
//   try {
//      const especies =await  prisma.animal.findMany({
//       where: {
//         Habitat: {
//           slug: habitatSlug, // Filtro por hábitat
//         },
//         ...(search && { name: { contains: search, mode: "insensitive" } }), // Filtro por búsqueda
//         ...(category && category !== "All" && { category:category as CategoriaEspecies}), // Filtro por categoría
//       },
//       include: {
//         Habitat: true,
//       },
//     });
//     return{
//         especies: especies,
//         ok: true,
//         message:'Especies filtradas correctamente '
//     }
//   } catch (error) {
//     console.log(error)
//     return{
//         ok:false,
//         message:'Error al filtrar las especies'
//     }
//   }
// };

export const getEspeciesbyName = async (slug: string, name: string) => {
  try {
    const especie = await prisma.animal.findMany({
      where: {
        Habitat: { slug: slug },
        name:name
      },
    });
    // const especie = especies.find((especie) => especie.name === name);
    // console.log(especie)
    return {
      ok: true,
      message: "Animal encontrado correctamente",
      especie: especie,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al filtrar especies",
    };
  }
};

export const getEspeciesWithCategory = async (
  slug: string,
  category: string
) => {
  try {
    const especies = await prisma.animal.findMany({
      where: {
        Habitat: { slug: slug },
        category:category as CategoriaEspecies
      },
    });
    // const especiesCategory = especies.filter(
    //   (especie) => especie.category === category
    // );
// console.log(especies)
    return {
      ok: true,
      message: "Animal encontrado correctamente",
      especies: especies,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al filtrar especies",
    };
  }
};
export const getEspeciesFiltered = async (
  slug: string,
  category?: string,
  name?:string
) => {
  try {
    const especies = await prisma.animal.findMany({
      where: {
        Habitat: { slug: slug },
        category:category as CategoriaEspecies,
        name:name
      },
    });
    // const especiesCategory = especies.filter(
    //   (especie) => especie.category === category
    // );
    // console.log(especies)
    return {
      ok: true,
      message: "Animal encontrado correctamente",
      especies: especies,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al filtrar especies",
    };
  }
};
