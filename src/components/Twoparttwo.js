"use client"
import React, { useEffect, useState } from 'react'

const Twoparttwo = () => {
   const [awardWinning, setAwardWinning] = useState('');
    const [propertyReady, setPropertyReady] = useState('');
    const [happyCustomers, setHappyCustomers] = useState('');

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
    <div className="flex flex-col justify-between w-full max-w-md bg-gray-200 rounded-2xl shadow-xl p-10">
      <div className="space-y-8">
        {/* Stats */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">{awardWinning}</h2>
          <p className="text-base md:text-lg font-semibold text-gray-700">Award Winning</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">{propertyReady}+</h2>
          <p className="text-base md:text-lg font-semibold text-gray-700">Property Ready</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">{happyCustomers}+</h2>
          <p className="text-base md:text-lg font-semibold text-gray-700">Happy Customers</p>
        </div>
      </div>
      {/* Decorative Image */}
      <div className="mt-8">
  <img 
    src="/269369858_11088895.png" 
    alt="Decorative Element" 
    className="w-full h-24 object-cover rounded-md"
  />
</div>

    </div>
  )
}

export default Twoparttwo