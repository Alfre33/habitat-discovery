import { CategoriaEspecies, HabitatType } from "@prisma/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AnimalImage{
  id: string;
  url: string;
  animalId: string;
}

interface Especie {
  id: string;
  name: string;
  description: string;
  habitatId: string;
  habitatType: HabitatType;
  category: CategoriaEspecies;
  AnimalImage:AnimalImage[];
}
interface Category {
  name: string;
  colorHex: string;
}

interface State {
  especies: Especie[];
  categories: Category[];
  setEspecies: (especies: Especie[]) => void;
  setInitialState: (
    initialEspecies: Especie[],
    initialCategories: Category[]
  ) => void;
}

export const useEspeciesStore = create<State>()(
  persist(
    (set, get) => ({
      especies: [],
      categories: [],
      setEspecies: (especies) =>
        set(() => ({
          especies,
        })),
      setCategories: (categories: Category[]) =>
        set(() => ({
          categories,
        })),
      setInitialState: (initialEspecies, initialCategories) =>
        set(() => ({
          especies: initialEspecies,
          categories: initialCategories,
        })),
    }),
    { name: "especies" }
  )
);
