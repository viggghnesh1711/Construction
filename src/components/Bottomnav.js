import React from 'react'
import { GoHome } from "react-icons/go";
import { FiBarChart } from "react-icons/fi";
import Link from 'next/link';


const Bottomnav = () => {
  return (
    <div
    className='fixed bottom-0 left-0 right-0 flex justify-evenly px-3 py-5 bg-stone-200 rounded-b-2xl shadow-2xl'
    > 
    <Link href='/Dashboard'><GoHome className='text-3xl'/></Link>
    
    <Link href='/Services'><FiBarChart className='text-3xl'/></Link>
    </div>
  )
}

export default Bottomnav