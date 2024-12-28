"use server";

import prisma from "@/lib/prisma";

export const getEspeciesBySlug = async (
  slugZoo: string,
  slugEspecie: string
) => {
  try {
    const especie = await prisma.animal.findFirst({
      where: {
        Habitat: { slug: slugZoo },
        animalSlug: slugEspecie,
      },
      include:{AnimalImage:true}
    });
    return {
      ok: true,
      message: "Especie encontrada correctamente",
      especie,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: `Error al obtener esta especie ${slugEspecie}`,
    };
  }
};
