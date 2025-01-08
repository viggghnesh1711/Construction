
import ContactPage from "@/components/Contact";
import One from "@/components/One";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Bottom from "@/components/Footer";
import Two from "@/components/Two";

import Image from "next/image";


export default function Home() {
  return (
    <>
   <div className="bg-black">
   <One/>
    <Two/>
    <Services/>
    <Projects/>
    <ContactPage/>
    <Bottom/>
   </div>
    </>
  );
}
