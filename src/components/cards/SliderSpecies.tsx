"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/navigation";

interface Slide {
  id: number;
  image: string;
  name: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://loremflickr.com/100/100/tiger_white",
    name: "Tigre Blanco",
  },
  {
    id: 2,
    image: "https://loremflickr.com/100/100/tiger_bengal",
    name: "Tigre Bengala",
  },
  {
    id: 3,
    image: "https://loremflickr.com/100/100/tiger_sumatra",
    name: "Tigre Sumatra",
  },
  {
    id: 4,
    image: "https://loremflickr.com/100/100/tiger_siberian",
    name: "Tigre Siberiano",
  },
  {
    id: 5,
    image: "https://loremflickr.com/100/100/leopard",
    name: "Leopardo",
  },
  {
    id: 6,
    image: "https://loremflickr.com/100/100/tiger_white",
    name: "Tigre Blanco",
  },
  {
    id: 7,
    image: "https://loremflickr.com/100/100/tiger_bengal",
    name: "Tigre Bengala",
  },
  {
    id: 8,
    image: "https://loremflickr.com/100/100/tiger_sumatra",
    name: "Tigre Sumatra",
  },
  {
    id: 9,
    image: "https://loremflickr.com/100/100/tiger_siberian",
    name: "Tigre Siberiano",
  },
  {
    id: 10,
    image: "https://loremflickr.com/100/100/leopard",
    name: "Leopardo",
  },
];
// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export const SliderSpecies = () => {
  return (
    <div className="w-full md:w-10/12  lg:w-8/12 flex justify-center">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#d1d5db ", font: "bold",
            // "--swiper-pagination-color": "#0e8d62",
           
          } as React.CSSProperties
        }
        slidesPerView={3.5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        // freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center w-20">
              <Image
                src={slide.image}
                alt={slide.name}
                width={50}
                height={50}
                className="object-cover rounded-full w-full"
              />
              <span className="text-center mt-5 text-sm text-watercourse-600  font-semibold md:text-xl">
                {slide.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
