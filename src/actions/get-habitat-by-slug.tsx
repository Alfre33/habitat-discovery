"use server";

import prisma from "@/lib/prisma";

export const getHabitatBySlug = async (slug: string) => {
  try {
    const habitat = await prisma.habitat.findFirst({
      where: { slug: slug },
      include:{AddressHabitat: true}
    });
    return{
        ok: true,
        message:`Informacion del ${slug} encontrado`,
        habitat
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: `No se pudo obtener informacion de ${slug}`,
    };
  }
};
