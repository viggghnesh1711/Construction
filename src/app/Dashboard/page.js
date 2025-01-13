"use client"
import Bottomnav from '@/components/Bottomnav';
import Loginnav from '@/components/Loginnav';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const Dashboard =  () => {
    const [activeSection, setActiveSection] = useState('projects');
    const [projectsData, setProjectsData] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/fetch'); // Adjust the API endpoint as needed
                if (response.ok) {
                    const projects = await response.json();
                    setProjectsData(projects);
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
        <div className="flex flex-col h-screen bg-stone-300 pb-20">
          <Loginnav/>
            <div className="flex-1 p-8 px-4  overflow-auto">
                {activeSection === 'projects' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectsData.map((project) => (
                         
                            <div key={project._id} className="bg-stone-200 rounded-lg shadow-md flex p-4">
                                <img src={project.imgurl} alt={project.title} className="w-24 h-24 rounded mr-4" />
                                <div className="flex-grow">
                                    <h2 className="text-xl font-semibold">{project.title}</h2>
                                    <p className="text-gray-600">{project.desc}</p>
                                    <Link key={project._id} href={`/Projects/${project._id}`}>
                                    <button className="mt-2 bg-green-500 text-white text-base px-3 py-1 rounded hover:bg-blue-600">
                                        Update
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-lg">
                        {/* Placeholder for Services Section */}
                        <h1>Services Section</h1>
                        <p>Details about services will be displayed here.</p>
                    </div>
                )}
            </div>
            <Bottomnav/>
        </div>
    );
};

export default Dashboard;
