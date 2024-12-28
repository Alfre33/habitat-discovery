"use client";

import { EspecieCard } from "@/components";
import { useEspeciesStore } from "@/store/especies/especies-store";
import { CategoriaEspecies, HabitatType } from "@prisma/client";
import { useEffect, useState } from "react";

interface AnimalImage{
    id: string;
    url: string;
    animalId: string;
}

interface Props {
  initialEspecies?: {
    id: string;
    name: string;
    AnimalImage:AnimalImage[];
    description: string;
    habitatId: string;
    habitatType: HabitatType;
    category: CategoriaEspecies;
  }[];
  categories?: {
    name: string;
    colorHex: string;
  }[];
}

export const GridCards = ({ initialEspecies, categories }: Props) => {
  // const [especies, setespecies] = useState(initialEspecies)
  const {especies, setInitialState } = useEspeciesStore();
  const especiesStorage = useEspeciesStore(state=>state.especies);
  const categoriesStorage = useEspeciesStore(state=>state.categories);

  useEffect(() => {
    setInitialState(initialEspecies ?? especiesStorage,categories ?? categoriesStorage ); // Inicializa el estado global con las props
  }, [initialEspecies, categories, setInitialState]);

  // console.log(especies)
  return (
    <>
      {especies.length < 1 ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <p className="antialiased text-lg font-bold animate-pulse bg-gray-200 rounded-md w-72 h-96"> &nbsp;</p>
            <p className="antialiased text-lg font-bold animate-pulse bg-gray-200 rounded-md w-72 h-96"> &nbsp;</p>
            <p className="antialiased text-lg font-bold animate-pulse bg-gray-200 rounded-md w-72 h-96"> &nbsp;</p>
            <p className="antialiased text-lg font-bold animate-pulse bg-gray-200 rounded-md w-72 h-96"> &nbsp;</p>
         </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {especies?.map((especie) => (
            <EspecieCard
              key={`${especie.id}`}
              especie={especie}
              categories={categories}
            />
          ))}
        </div>
      )}
    </>
  );
};
