"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const images = [
    "/269369857_11088894.png", // Replace with your actual image paths
    "/269369858_11088895.png",
    "/269369857_11088894.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500); // Delay to match fade-out duration
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative bg-gradient-to-r from-blue-300 to-blue-100 text-white rounded-3xl overflow-hidden h-[35rem] md:h-[30rem]">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left w-full md:w-1/2 order-1">
          <p className="uppercase text-lg md:text-xl tracking-widest">
            Crafting Tomorrow's Living Spaces
          </p>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Set New Standards <br /> in <span className="italic">Modern Home</span> Construction
          </h1>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center order-2">
          <Image
            src={images[currentImageIndex]}
            alt="Building"
            width={900}
            height={1100}
            className={`${
              isFading ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500 transform scale-110 md:scale-125`}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
