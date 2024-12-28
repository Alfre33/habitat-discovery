"use server";

import { HabitatType } from "@/interfaces";
import prisma from "@/lib/prisma";

export const getDataByType = async (HabitatType: HabitatType) => {
  try {
    const data=await prisma.habitat.findMany({
      where:{ type: HabitatType },
      include:{AddressHabitat: true,ImageInstalaciones: true}
    });
    return{
        ok:true,
        message:`Habitats ${HabitatType} encontrados`,
        habitat:data
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "ERROR al obtener las habitats by type",
    };
  }
};
