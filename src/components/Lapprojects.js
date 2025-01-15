"use client"
import { useEffect, useState } from "react";

export default function Lapprojects() {
  const [destinations, setDestinations] = useState([])
        useEffect(() => {
            const fetchProjects = async () => {
                try {
                    const response = await fetch('/api/fetch'); // Adjust the API endpoint as needed
                    if (response.ok) {
                        const projects = await response.json();
                        setDestinations(projects);
                    } else {
                        console.error("Failed to fetch projects");
                    }
                } catch (error) {
                    console.error("Error fetching projects:", error);
                }
            };
    
            fetchProjects();
        }, []);
  
    return (
      <div className="grid grid-cols-3 gap-4 auto-rows-fr h-5/6 w-full ">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg shadow-lg ${destination.colSpan} ${destination.rowSpan}`}
          >
            <img
              src={destination.imgurl}
              alt={destination.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">{destination.title}</h3>
              <p className="text-xl">{destination.desc}</p>
            </div>
            <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              
            </div>
          </div>
        ))}
      </div>
    );
  }