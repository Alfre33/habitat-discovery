"use client";

import { useEspeciesStore } from "@/store/especies/especies-store";
import {
  getEspeciesbyName,
  getEspeciesFiltered,
  getEspeciesWithCategory,
} from "@/actions";
import { CategoriaEspecies, HabitatType } from "@prisma/client";
import { useState, useEffect } from "react";

interface Props {
  categories?: CategoriaEspecies[];
  slug: string;
  initialEspecies?: Especie[];
}

interface Especie {
  id: string;
  name: string;
  description: string;
  habitatId: string;
  habitatType: HabitatType;
  category: CategoriaEspecies;
}

export const FilterCategories = ({
  categories,
  slug,
  initialEspecies,
}: Props) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { setEspecies } = useEspeciesStore();
  const [error, setError] = useState("");

  const handleFilterChange = async () => {
    try {
      let updatedEspecies;

      if (!search && selectedCategory !== "All") {
        const result = await getEspeciesWithCategory(slug, selectedCategory);
        if (!result.ok || result.especies!.length < 1) {
          setError("No hay resultados para la categoría seleccionada.");
          updatedEspecies = initialEspecies;
        } else {
          updatedEspecies = result.especies;
          setError(""); // Limpia errores
        }
      } else if (search && selectedCategory === "All") {
        const result = await getEspeciesbyName(slug, search);
        if (!result.ok || result.especie!.length < 1) {
          setError("No hay resultados para el nombre buscado.");
          updatedEspecies = initialEspecies;
        } else {
          updatedEspecies = result.especie;
          setError(""); // Limpia errores
        }
      } else if (search && selectedCategory !== "All") {
        const result = await getEspeciesFiltered(
          slug,
          selectedCategory,
          search
        );
        if (!result.ok || result.especies!.length < 1) {
          setError("No hay resultados para los filtros aplicados.");
          updatedEspecies = initialEspecies;
        } else {
          updatedEspecies = result.especies;
          setError(""); // Limpia errores
        }
      } else {
        updatedEspecies = initialEspecies;
        setError("Restaurando estado inicial sin resultados específicos.");
      }

      setEspecies(updatedEspecies as Especie[]);
    } catch (err) {
      console.error("Error al filtrar especies:", err);
      setError("Ocurrió un error inesperado. Intenta nuevamente.");
    }
  };

  return (
    <>
      <form className="flex flex-col md:flex-row gap-3">
        <div className="flex">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Nombre de la especie"
            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-gray-500"
          />
          <button
            type="button"
            className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
            onClick={handleFilterChange}
          >
            Buscar
          </button>
        </div>
        <select
          id="category"
          name="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        >
          <option value="All">All</option>
          {categories?.map((category,i) => (
            <option key={`${category}-${i}`} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
      {error && <p className="text-red-500 text-2xl mt-2">{error}</p>}
    </>
  );
};
