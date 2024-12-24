import { GridCards } from "@/components";
import { zoologicos } from "@/seed";

export default function ZooPage() {
  const dataZoo = zoologicos;
  return (
    <>
      <GridCards data={dataZoo}/>
    </>
  );
}
