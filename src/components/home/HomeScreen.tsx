import Image from "next/image";
import React from "react";

export const HomeScreen = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white  h-[1200px] sm:h-[900px] bg-gradient-to-b from-watercourse-400 to-transparent w-full">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-watercourse-50 sm:text-6xl">
                Explora Hábitats y crea Recuerdos
              </h1>
              <p className="mt-4 text-xl text-white">
                "Descubre zoológicos, acuarios y parques naturales. Compra tus
                boletos y disfruta de experiencias inolvidables explorando la
                vida silvestre y los océanos."
              </p>
              <a
                  href="#"
                  className="mt-10 inline-block rounded-md border border-transparent bg-watercourse-400 px-8 py-3 text-center font-medium text-white hover:bg-watercourse-800"
                >
                  Shop Collection
                </a>
            </div>
            <div>
              <div className="mt-10">
                {/* <!-- Decorative image grid --> */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            src="/ecenarios/zoo1.jpg"
                            // src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="size-full object-cover"
                            height={256}
                            width={176}
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="/ecenarios/acu1.jpg"
                            // src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="size-full object-cover"
                            height={256}
                            width={176}
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="/ecenarios/zoo2.jpg"
                            // src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="size-full object-cover"
                            height={256}
                            width={176}
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="/ecenarios/zoo3.jpg"
                            // src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="size-full object-cover"
                            height={256}
                            width={176}
                          />
                        </div>
                        <div className="h-60 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="/ecenarios/acu2.jpg"
                            // src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="size-full object-cover"
                            height={256}
                            width={176}
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="/ecenarios/acu3.jpg"
                            // src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="size-full object-cover"
                            height={256}
                            width={176}
                          />
                        </div>
                        <div className="h-auto w-44 overflow-hidden rounded-lg">
                          <Image
                            src="/ecenarios/acu4.jpg"
                            // src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="size-full object-cover"
                            height={256}
                            width={176}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
