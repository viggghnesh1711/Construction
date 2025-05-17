"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Twoparttwo = () => {
  const [awardWinning, setAwardWinning] = useState('')
  const [propertyReady, setPropertyReady] = useState('')
  const [happyCustomers, setHappyCustomers] = useState('')

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false }) // no triggerOnce

  useEffect(() => {
    const fetchservice = async () => {
      try {
        const response = await fetch('/api/fetchservices')
        if (response.ok) {
          const result = await response.json()
          setAwardWinning(result.one)
          setPropertyReady(result.two)
          setHappyCustomers(result.three)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchservice()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // animate in/out on scroll
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-between w-full max-w-md bg-gray-200 rounded-2xl shadow-xl p-10"
    >
      <div className="space-y-8">
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
      <div className="mt-8">
        <img
          src="/269369858_11088895.png"
          alt="Decorative Element"
          className="w-full h-24 object-cover rounded-md"
        />
      </div>
    </motion.div>
  )
}

export default Twoparttwo
