"use client"
import React from 'react'
import Cookies from 'js-cookie';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Logout = () => {
    const router = useRouter()
    const handleclick = async () =>{
        try {
            const response = await fetch('/api/logout', {
                method: 'POST',
            });

            if (response.ok) {
                const result = await response.json()
                toast.success(result.message);
                router.push('/Login')
            } else {
                const result = await response.json()
                toast.error(result.message);
            }
        } catch (error) {
            toast.error("An error occurred.");
        }
    }
  return (
    <div>
            <Toaster />
        <button 
        className='px-4 py-2 bg-stone-800 rounded-lg text-stone-50 '
        onClick={handleclick}
        >
            Logout
        </button>
    </div>
  )
}

export default Logout