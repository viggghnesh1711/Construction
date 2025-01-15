import Link from 'next/link'
import React from 'react'

const Back = () => {
  return (
    <Link href='/Dashboard'>
    <button
    className="bg-stone-900 hover:bg-stone-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
>
    Go Back
</button>
</Link>
  )
}

export default Back