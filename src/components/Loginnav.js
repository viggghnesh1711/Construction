import React from 'react'
import Logo from './Logo'
import Logout from './Logout'


const Loginnav = () => {
  return (
    <div className='flex justify-between px-3 py-5 bg-stone-200 rounded-b-2xl shadow-2xl '>
        <Logo/>
        <Logout/>
    </div>
  )
}

export default Loginnav