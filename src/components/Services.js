"use client";

import React from "react";
import { SiCssdesignawards } from "react-icons/si";
import { MdOutlineConstruction } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { RiContractFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const values = [
    {
      icon: <SiCssdesignawards className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />,
      title: "Design",
      description: "Crafting innovative and functional designs tailored to your vision and needs.",
    },
    {
      icon: <MdOutlineConstruction className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />,
      title: "Construction",
      description: "Delivering high-quality construction services for residential, commercial, and industrial projects",
    },
    {
      icon: <FaUserTie className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />,
      title: "Supervising",
      description: "On-site supervision to guarantee quality, safety, and smooth project progression.",
    },
    {
      icon: <RiContractFill className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />,
      title: "Labor Contracting",
      description: "Providing skilled labor for various construction tasks, ensuring efficiency and expertise",
    },
  ];

  return (
    <section id="Services" className="px-6 py-20 sm:px-20 sm:my-20 bg-black rounded-t-3xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white">
          Top <span className="italic text-gray-300">Services</span> for you
        </h2>
        <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-12">
          Try a variety of benefits when using our services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false, // animate in and out on scroll
              threshold: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={serviceVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center p-6 sm:p-8 bg-stone-950 rounded-lg sm:rounded-xl shadow-lg"
              >
                <div className="text-stone-300">{value.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-white">{value.title}</h3>
                <p className="text-sm sm:text-lg text-gray-400">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
