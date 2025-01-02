import React from 'react'

const Twopartone = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 md:py-20 px-6 md:w-6/12">
    <div className="max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-gray-900 mb-6">
        If you can <span className="italic text-gray-700">dream it</span>, we can <span className="italic text-gray-700">build it.</span>
      </h1>
      <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-10">
        We adopt a uniquely personalized perspective to each project to deliver stunning spaces of optimal function. Renowned for our architectural understanding and masterful craftsmanship, our portfolio of residential projects speaks for itself.
      </p>
      <button className="px-8 py-4 text-base bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition duration-200">
        Get in touch
      </button>
    </div>
  </section>
  )
}

export default Twopartone