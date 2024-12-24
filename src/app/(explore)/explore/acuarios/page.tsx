import { GridCards } from "@/components";
import { acuarios } from "@/seed";


export default function AcuariosPage() {
  const dataAcuarios = acuarios;
  return (
    <>
      <GridCards data={dataAcuarios}/>
    </>
  );
}
