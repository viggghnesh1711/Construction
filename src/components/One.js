import React from 'react'
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import HeroSection from './Hero';
import Herocards from './Herocards';


const One = () => {
  return ( 
    <div className='w-full bg-stone-100 px-6 py-5 sm:px-20 sm:py-14 '>
    <Navbar/>
    <div className='py-10 md:pt-16'>
    <HeroSection/>
    </div>
    <Herocards/>
     
</div>
  )
}

export default One