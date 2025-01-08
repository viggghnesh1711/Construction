"use client"
import React, { useEffect, useState } from 'react';
import Mobprojects from "@/components/Mobprojects";
import Lapprojects from "@/components/Lapprojects";

const Projects = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    useEffect(() => {
        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize); // Add event listener

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
    }, []);

    return (
        <div id="Projects" className='px-6 py-14 sm:pt-10 sm:px-20 bg-stone-100 sm:h-screen rounded-t-3xl'>
            <section className=" py-8 sm:px-20 ">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 sm:mb-2">Our Projects</h2>
                        <p className="text-gray-600 text-xl sm:text-2xl">Showcasing our best work</p>
                    </div>

                    {/* Right Content */}
                    <div className="mt-4 sm:mt-0 sm:ml-10 max-w-lg text-gray-600 text-sm sm:text-xl">
                        <p>
                            For a construction company, the description can be tailored to highlight construction projects, innovation in design, and commitment to quality
                        </p>
                    </div>
                </div>
            </section>

            {isMobile ? <Mobprojects /> : <Lapprojects />}
        </div>
    );
};

export default Projects;
