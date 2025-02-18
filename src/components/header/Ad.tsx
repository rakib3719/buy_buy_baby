'use client'
import React, { useState, useEffect } from 'react';

const Ad = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ads = [
    { title: "100s OF NEW ARRIVALS", description: "Up to 75% off in-store only" },
    { title: "SHOP OUR STORE CLOSING SALE", description: "Up to 75% off in-store only" },
    { title: "THE NEW VISTA V3 IS HERE!", description: "Shop UPPAbaby Now" },
  ];

  // Handle dot click to navigate to the respective slide
  const goToAd = (index: number) => {
    setCurrentIndex(index);
  };

  // Smoothly transition between ads every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="relative bg-gray-400 py-4 flex justify-center text-center m-auto gap-16 overflow-hidden">
      {/* Carousel for mobile */}
      <div className="block md:hidden relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {ads.map((ad, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <h1 className="font-semibold">{ad.title}</h1>
              <p>{ad.description}</p>
            </div>
          ))}
        </div>

        {/* Dots for navigation */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {ads.map((_, index) => (
            <div
              key={index}
              onClick={() => goToAd(index)}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-black' : 'bg-white'}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center gap-4">
        {ads.map((ad, index) => (
          <div key={index} className="flex items-center gap-4">
            <div>
              <h1 className="font-semibold">{ad.title}</h1>
              <p>{ad.description}</p>
            </div>
            {index < ads.length - 1 && <div className="h-10 ml-8 w-px bg-gray-500"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ad;
