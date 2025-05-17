import React from 'react'
import Image from 'next/image';
import Navbar from "../components/Navbar";
import HeroSection from './Hero';
import Herocards from './Herocards';
import { motion } from "framer-motion";

const One = () => {
  return ( 
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    id="Home" className='w-full bg-stone-100 px-6 py-5 sm:px-20 sm:py-14 '>
    <Navbar/>
    <div className='py-10 md:pt-16'>
    <HeroSection/>
    </div>
     
</motion.div>
  )
}

export default One