"use client"
import React, { useEffect, useState } from 'react';
import Bottomnav from '@/components/Bottomnav';
import Loginnav from '@/components/Loginnav';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';


const AdminPage = () => {
   const router = useRouter();
  const [awardWinning, setAwardWinning] = useState('');
  const [propertyReady, setPropertyReady] = useState('');
  const [happyCustomers, setHappyCustomers] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/updateservices',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({awardWinning,propertyReady,happyCustomers})
    })
    if(response.ok){
        const result = await response.json()
        toast.success(result.message)
                router.push('/Dashboard');
    }
    else{
        toast.error(result.message)
    }
  };

   useEffect(() => {
        const fetchservice = async () =>{
           try{
            const response = await fetch('/api/fetchservices')
            if(response.ok){
                const result = await response.json()
                setAwardWinning(result.one)
                setPropertyReady(result.two)
                setHappyCustomers(result.three)
            }
           }
           catch(error){
            console.log(error)
            toast.error("something went wrong")
           }
        }
        fetchservice()
      }, []);

  return (
    <>
    <Loginnav/>
    <div className='h-screen w-full flex justify-center items-center bg-stone-300'>
        <div className="flex flex-col items-center justify-center w-full max-w-md bg-gray-200 rounded-2xl shadow-2xl p-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Award Winning:</label>
          <input
            type="number"
            value={awardWinning}
            onChange={(e) => setAwardWinning(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Property Ready:</label>
          <input
            type="text"
            value={propertyReady}
            onChange={(e) => setPropertyReady(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Happy Customers:</label>
          <input
            type="text"
            value={happyCustomers}
            onChange={(e) => setHappyCustomers(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md"
        >
          Update Values
        </button>
      </form>
    </div>
    </div>
    <Bottomnav/>
    </>
  );
};

export default AdminPage;
