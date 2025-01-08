import React from 'react';
import { FaPlaneDeparture } from 'react-icons/fa'; // Airport pickup icon
import { FaCalendarAlt } from 'react-icons/fa'; // Easy booking icon
import { FaUserTie } from 'react-icons/fa'; // Best tour guide icon
import { FaGift } from 'react-icons/fa'; // Lots of promos icon

const Services = () => {
    const values = [
        {
          icon: <FaPlaneDeparture className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />, // Airport pickup icon
          title: "Airport pickup",
          description: "We provide escort from the airport to the hotel.",
        },
        {
          icon: <FaCalendarAlt className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />, // Easy booking icon
          title: "Easy booking",
          description: "Quick and easy booking of tours for upcoming dates.",
        },
        {
          icon: <FaUserTie className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />, // Best tour guide icon
          title: "Best tour guide",
          description: "Our best tour guide is ready to guide your trip.",
        },
        {
          icon: <FaGift className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-stone-300" />, // Lots of promos icon
          title: "Lots of promos",
          description: "Various promotions and drawings of tours.",
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
