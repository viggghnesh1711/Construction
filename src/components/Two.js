import React from 'react'
import Twopartone from './Twopartone'
import Twoparttwo from './Twoparttwo'


const Two = () => {
  return (
    <div  id="Two" className='w-full bg-stone-100 flex flex-col-reverse md:flex-row justify-evenly px-6 pb-14 sm:px-20 rounded-b-3xl'>
        <Twoparttwo/>
        <Twopartone/>
    </div>
  )
}

export default Two