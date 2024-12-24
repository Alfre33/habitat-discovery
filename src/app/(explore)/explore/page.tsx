import { HabitatCard, JoinCard, SearchWithFilter, SliderPromotional } from "@/components";

export default function ExplorePage() {
  return (
    <>
    <div className="h-auto flex flex-col items-center">
      <SearchWithFilter/>
      <div className="w-full sm:w-10/12 flex justify-center items-center px-3">

      <SliderPromotional/>
      </div>
      <JoinCard/>
    </div>
      <HabitatCard/>
    </>
  );
}