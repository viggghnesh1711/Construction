import React from 'react'

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
            <svg 
                className="animate-spin h-10 w-10 text-black" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
            >
                <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    fill="none" 
                    strokeWidth="4"
                />
                <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M12 2a10 10 0 1 1-2 0h2z"
                />
            </svg>
        </div>
  )
}

export default loading