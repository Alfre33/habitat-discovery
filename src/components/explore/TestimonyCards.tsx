'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  { id: 1, name: 'John Doe', feedback: 'This podcast is amazing! The storytelling and production quality are top-notch. I can\'t wait for the next episode!', stars: 5 },
  { id: 2, name: 'Jane Smith', feedback: 'This podcast kept me on the edge of my seat. It\'s a must-listen for true crime enthusiasts!', stars: 4 },
  { id: 3, name: 'Emily Johnson', feedback: 'I can\'t get enough of this podcast! The host\'s voice is so soothing, and the stories are gripping. Highly recommend!', stars: 5 },
  { id: 4, name: 'Michael Brown', feedback: 'One of the best podcasts I\'ve ever listened to. Each episode is better than the last.', stars: 5 },
];

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-6 text-black">WHAT LISTENERS ARE SAYING</h2>
      <div className="relative w-full max-w-3xl">
        {/* Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <p className="italic text-gray-700 mb-4">{testimonials[currentIndex].feedback}</p>
            <strong className="font-bold text-black">{testimonials[currentIndex].name}</strong>
            <div className="mt-2 flex">
              {Array.from({ length: testimonials[currentIndex].stars }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">&#9733;</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-around mt-4">
          <button
            onClick={handlePrev}
            className="bg-watercourse-600 text-watercourse-50 px-4 py-2 rounded-3xl hover:bg-watercourse-800 font-semibold focus:outline-none"

          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            className="bg-watercourse-600 text-watercourse-50 px-4 py-2 rounded-3xl hover:bg-watercourse-800 font-semibold focus:outline-none"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

