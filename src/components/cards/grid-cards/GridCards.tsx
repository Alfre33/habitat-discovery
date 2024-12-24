import { GridHabitat } from "@/components";
import { HabitatCard } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props{
  data:HabitatCard[]
}
export const GridCards= ({data}:Props) => {


  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      {/* Card Grid */}
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {data.map((habitat) => (
          // Card Item
        //   <div
        //     key={`${post.title}-${i}`}
        //     className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
        //   >
        //     <Link href={"/"} className="cursor-pointer">
        //       <figure>
        //         <Image
        //           src={post.image}
        //           alt={post.title}
        //           height={288} 
        //           width={400}
        //           className="rounded-t h-72 w-full object-cover"
        //         />
        //         <figcaption className="p-4">
        //           <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
        //             {post.title}
        //           </p>
        //           <small className="leading-5 text-gray-500 dark:text-gray-400">
        //             {post.description}
        //           </small>
        //         </figcaption>
        //       </figure>
        //     </Link>
        //   </div>
        <GridHabitat habitat={habitat} key={habitat.id}/>
        ))}
      </div>
    </section>
  );
};
