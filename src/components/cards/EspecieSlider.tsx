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
import { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const images = [
  { id: 1, image: "/zoo/zoo.jpeg" },
  { id: 2, image: "/zoo/zoo2.webp" },
  { id: 3, image: "/zoo/zoo.jpeg" },
  { id: 4, image: "/zoo/zoo2.webp" },
  { id: 5, image: "/zoo/zoo.jpeg" },
];
export const EspecieSlider = () => {
  return (
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
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.image}
              alt=""
              width={300}
              height={250}
              objectFit="contain"
              objectPosition="center"
              className="object-contain object-center rounded-t-md md:rounded-t-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="bg-watercourse-600 p-4 md:p-6 rounded-b-md md:rounded-b-3xl w-full flex items-center">
        <h4 className="capitalize font-semibold mb-4 flex items-center text-2xl md:text-3xl lg:text-4xl justify-between pr-5 w-full">
          <span>Tigre</span>
          <MdOutlineFavoriteBorder className="text-red-500 font-extrabold" />
        </h4>
      </section>
    </div>
  );
};
