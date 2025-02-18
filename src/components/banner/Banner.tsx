'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image from '@/asset/banner.jpg';
import image2 from '@/asset/banner2.jpg';  // Add your 2nd image
import image3 from '@/asset/banner3.jpg';  // Add your 3rd image
import { motion } from 'framer-motion';
import { bgColors } from '@/app/utils/color';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Baby Products",
      description: "Discover a wide range of baby care essentials",
      buttonText: "Shop Now",
      image: image,  // Link the image for this slide
    },
    {
      title: "Doctor Consultation",
      description: "Get expert advice from certified doctors online",
      buttonText: "Consult Now",
      image: image2,  // Link the 2nd image for this slide
    },
    {
      title: "Newborn Products",
      description: "Everything you need for your newborn's care",
      buttonText: "Explore Now",
      image: image3,  // Link the 3rd image for this slide
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full">
      {/* Carousel Image with smooth transition */}
      <div className="w-full h-96 relative overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            className="absolute inset-0"
            key={index} // Ensure unique key for each slide
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={slide.image}
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Content Overlay (Text, Paragraph, and Button) */}
      <div className="absolute inset-0 flex justify-center items-center text-center bg-black bg-opacity-50">
        <motion.div
          key={currentIndex} // Trigger animation on index change
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <motion.h1
            className="text-3xl font-semibold mb-2"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: '0%' }}
            transition={{ duration: 1 }}
          >
            {slides[currentIndex].title}
          </motion.h1>

          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: '0%' }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {slides[currentIndex].description}
          </motion.p>

          <motion.button
            className={`px-6 py-2 ${bgColors.secondary} text-black lora rounded-full`}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: '0%' }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {slides[currentIndex].buttonText}
          </motion.button>
        </motion.div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-black' : 'bg-white'}`}
          ></div>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Banner;
