"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CategoriaEspecies, HabitatType } from "@prisma/client";

interface Props {
  especie?:
    | ({
        id: string;
        name: string;
        description: string;
        habitatType: HabitatType;
        habitatId: string;
        animalSlug: string;
        category: CategoriaEspecies;
      } & {
        AnimalImage: {
          id: string;
          url: string;
          animalId: string;
        }[];
      })
    | null;
}

export const EspecieSlider = ({ especie }: Props) => {
  const [imageCard, ...SlidesImages] = especie!.AnimalImage;
  const color = especie?.habitatType === "ZOO" ? "watercourse" : "teal";
  return (
    <>
      {especie ? (
        <div className="w-full md:w-10/12 lg:w-8/12 h-80">
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#edfcf5",
                "--swiper-pagination-color": "#edfcf5",
              } as React.CSSProperties
            }
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper z-50"
          >
            {SlidesImages.map((image) => (
              <SwiperSlide key={image.id}>
                <Image
                  src={image.url}
                  alt=""
                  width={300}
                  height={250}
                  // objectFit="contain"
                  // objectPosition="center"
                  className="rounded-t-md md:rounded-t-3xl object-contain object-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <section className={`bg-${color}-600 p-4 md:p-6 rounded-b-md md:rounded-b-3xl w-full flex items-center`}>
            <h4 className={`capitalize text-${color}-50 font-semibold mb-4 flex items-center text-2xl md:text-3xl lg:text-4xl justify-between pr-5 w-full`}>
              <span>{especie?.name}</span>
              <MdOutlineFavoriteBorder className="text-red-500 font-extrabold"/>
            </h4>
          </section>
        </div>
      ) : (
        <div className="w-full md:w-10/12 lg:w-8/12 h-80">
          <p className="antialiased text-lg font-bold animate-pulse bg-gray-200 rounded-md w-9/12 h-80"> &nbsp;</p>
        </div>
      )}
    </>
  );
};
