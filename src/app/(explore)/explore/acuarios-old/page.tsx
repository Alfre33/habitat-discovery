import { getDataByType } from "@/actions";
import { GridCards } from "@/components";
import { HabitatType } from "@/interfaces";
import { acuarios } from "@/seed";

interface Props {
  params: Promise<{
    TypeHabitat: HabitatType;
  }>;
}

export default async function AcuariosPage({params}:Props) {
  const resolvedParams = await params;
  const { TypeHabitat } = resolvedParams;
  const {habitat}=await getDataByType(TypeHabitat)
  return (
    <>
      <GridCards data={habitat}/>
    </>
  );
}
