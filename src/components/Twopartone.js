"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Twopartone = () => {
  const handleClick = () => {
    const phoneNumber = "919373609566";
    const message = "Hello, I’m interested in your services 👋";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.section
      ref={ref} // <-- Add this!
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center py-10 md:py-20 px-6 md:w-6/12"
    >
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-gray-900 mb-6">
          If you can <span className="italic text-gray-700">dream it</span>, we can <span className="italic text-gray-700">build it.</span>
        </h1>
        <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-10">
          We adopt a uniquely personalized perspective to each project to deliver stunning spaces of optimal function. Renowned for our architectural understanding and masterful craftsmanship, our portfolio of residential projects speaks for itself.
        </p>
        <button
          onClick={handleClick}
          className="px-8 py-4 text-base bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition duration-200"
        >
          Get in touch
        </button>
      </div>
    </motion.section>
  );
};

export default Twopartone;
