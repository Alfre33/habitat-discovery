"use client";

import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface Slide {
  id: number;
  image: string;
  name: string;
}

export const RelatedAnimalsSlider: React.FC = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between px-3 mb-4 md:px-7 lg:px-12 w-full text-green-700 font-semibold text-md md:text-xl">
        <h2 className="">Especies destacadas</h2>
        <a href="#" className="underline">
          Ver todos...
        </a>
      </div>
      <div className="relative w-full max-w-7xl">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow text-watercourse-800 hover:bg-watercourse-800 "
        >
          <MdKeyboardDoubleArrowLeft className="text-4xl hover:text-white" />
        </button>

        {/* Images */}
        <div className="flex overflow-hidden gap-4 justify-center">
          {slides.slice(currentIndex, currentIndex + 4).map((slide) => (
            <div key={slide.id} className="flex flex-col items-center w-1/5">
              <img
                src={slide.image}
                alt={slide.name}
                className="w-16 h-16 md:h-24 md:w-24 object-cover rounded-full "
              />
              <span className="text-center mt-2 text-sm text-green-900 font-semibold md:text-xl">
                {slide.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow text-watercourse-800 hover:bg-watercourse-800 "
        >
          <MdKeyboardDoubleArrowRight className="text-4xl hover:text-white" />
        </button>
      </div>
    </div>
  );
};
