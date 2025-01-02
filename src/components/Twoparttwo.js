import React from 'react'

const Twoparttwo = () => {
  return (
    <div className="flex flex-col justify-between w-full max-w-md bg-gray-200 rounded-2xl shadow-xl p-10">
      <div className="space-y-8">
        {/* Stats */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">350</h2>
          <p className="text-base md:text-lg font-semibold text-gray-700">Award Winning</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">200+</h2>
          <p className="text-base md:text-lg font-semibold text-gray-700">Property Ready</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">5K+</h2>
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