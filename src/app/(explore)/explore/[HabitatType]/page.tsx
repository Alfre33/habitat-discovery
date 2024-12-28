import { getDataByType } from "@/actions";
import { GridCards } from "@/components";
import { HabitatType } from "@/interfaces";
// import { HabitatType as Tipo } from "@prisma/client";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    HabitatType: HabitatType;
  }>;
}

export default async function AcuariosPage({ params }: Props) {
  const resolvedParams = await params;
  const { HabitatType } = resolvedParams;
  const TipoHabitat: HabitatType = HabitatType;

  const { habitat, ok } = await getDataByType(TipoHabitat);
  if (!ok) {
    redirect("/");
  }

  return (
    <>
      <GridCards data={habitat} />
    </>
  );
}
