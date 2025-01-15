// components/FuturisticLoader.js
import React from "react";

const FuturisticLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="relative flex flex-col items-center space-y-6">
        {/* Animated Stacking Blocks */}
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded animate-bounce delay-100"></div>
          <div className="w-8 h-8 bg-yellow-400 rounded animate-bounce delay-200"></div>
          <div className="w-8 h-8 bg-yellow-300 rounded animate-bounce delay-300"></div>
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 tracking-wide">
            Shinde Construction
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            Building the Future with Precision
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuturisticLoader;
