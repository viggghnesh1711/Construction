"use client"
import { useEffect, useState } from "react";
import One from "../components/One";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Bottom from "../components/Footer";
import Two from "../components/Two";
import Loader from "../components/Loader";
import Contact from "../components/Contact";
Contact // Import the LoadingSpinner component

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Hide loader after 5 seconds
        }, 3000);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    if (loading) {
        return <Loader />; // Show loading animation while loading
    }

    return (
        <>
            <div className="bg-black">
                <One />
                <Two />
                <Services />
                <Projects />
                <Contact />
                <Bottom />
            </div>
        </>
    );
}
