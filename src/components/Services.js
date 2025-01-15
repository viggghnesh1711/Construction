import React from 'react';
import { SiCssdesignawards } from "react-icons/si";
import { MdOutlineConstruction } from "react-icons/md";
import { FaUserTie } from 'react-icons/fa'; // Best tour guide icon
import { RiContractFill } from "react-icons/ri";

const Services = () => {
    const values = [
        {
          icon: <SiCssdesignawards className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />, // Airport pickup icon
          title: "Design",
          description: "Crafting innovative and functional designs tailored to your vision and needs.",
        },
        {
          icon: <MdOutlineConstruction className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />, // Easy booking icon
          title: "Construction",
          description: "Delivering high-quality construction services for residential, commercial, and industrial projects",
        },
        {
          icon: <FaUserTie className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />, // Best tour guide icon
          title: "Supervising",
          description: "On-site supervision to guarantee quality, safety, and smooth project progression.",
        },
        {
          icon: <RiContractFill className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />, // Lots of promos icon
          title: "Labor Contracting",
          description: "Providing skilled labor for various construction tasks, ensuring efficiency and expertise",
        },
    ];

    return (
        <>
            <section id="Services" className="px-6 py-20 sm:px-20 sm:my-20 bg-black rounded-t-3xl">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white">
                        Top <span className="italic text-gray-300">Services</span> for you
                    </h2>
                    <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-12">
                        Try a variety of benefits when using our services
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 sm:p-8 bg-stone-950 rounded-lg sm:rounded-xl shadow-lg"
                            >
                                <div className="text-stone-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-white">
                                    {value.title}
                                </h3>
                                <p className="text-sm sm:text-lg text-gray-400">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
