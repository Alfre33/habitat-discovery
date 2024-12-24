import { EspecieCard, FilterCategories } from "@/components";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

export default function EspeciesPage() {
  return (
    <div className="flex flex-col items-center gap-5">
      <header className="bg-watercourse-700  text-watercourse-50 w-full h-20 sm:rounded-b-full rounded-b-3xl flex items-center justify-center px-10 text-xl lg:text-2xl">
        <FaArrowLeft className=" ml-5" />
        <span className="w-full flex justify-center">Zoo</span>
      </header>
      <FilterCategories/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <EspecieCard />
        <EspecieCard />
        <EspecieCard />
        <EspecieCard />
      </div>
    </div>
  );
}
