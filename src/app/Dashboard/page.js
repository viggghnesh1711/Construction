"use client"
import Loginnav from '@/components/Loginnav';
import React, { useState } from 'react';


const projectsData = [
    {
        id: 1,
        title: "Project One",
        description: "This is a description of Project One.",
        imageUrl: "/images/project1.jpg",
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is a description of Project Two.",
        imageUrl: "/images/project2.jpg",
    },
    {
        id: 3,
        title: "Project Three",
        description: "This is a description of Project Three.",
        imageUrl: "/images/project3.jpg",
    },
    {
        id: 4,
        title: "Project Four",
        description: "This is a description of Project Four.",
        imageUrl: "/images/project4.jpg",
    },
];

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('projects');
    // const history = useHistory(); // For navigation

    // const handleNavigation = (section) => {
    //     if (section === 'services') {
    //         history.push('/services'); // Navigate to services route
    //     }
    //     setActiveSection(section);
    // };

    return (
        <div className="flex flex-col h-screen bg-stone-300">
          <Loginnav/>
            <div className="flex-1 p-8 px-4  overflow-auto">
                {activeSection === 'projects' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectsData.map((project) => (
                            <div key={project.id} className="bg-stone-200 rounded-lg shadow-md flex p-4">
                                <img src={project.imageUrl} alt={project.title} className="w-24 h-24 rounded mr-4" />
                                <div className="flex-grow">
                                    <h2 className="text-xl font-semibold">{project.title}</h2>
                                    <p className="text-gray-600">{project.description}</p>
                                    <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                        Update
                                    </button>
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

            {/* Bottom Navigation Bar */}
            <div className="bg-gray-800 text-white p-4 flex justify-around">
                <button 
                    // onClick={() => handleNavigation('projects')}
                    className={`flex-grow text-center py-2 ${activeSection === 'projects' ? 'bg-gray-700' : ''}`}
                >
                    Projects
                </button>
                <button 
                    // onClick={() => handleNavigation('services')}
                    className={`flex-grow text-center py-2 ${activeSection === 'services' ? 'bg-gray-700' : ''}`}
                >
                    Services
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
