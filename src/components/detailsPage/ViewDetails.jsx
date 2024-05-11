import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ViewDetails() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-5 min-h-screen ">
    <div className="grid grid-cols-1 md:h-[500px] md:mt-10  md:grid-cols-2 gap-8 border-2 border-sky-400 ">
      <div className="p-1">
        <img src="" className="w-full md:h-full" />
      </div>

      {/* right side */}
      <div className="pr-5 flex flex-col justify-between p-1">
        <h1 className="text-3xl font-bold mb-4">Name</h1>
        <h2 className="text-xl font-semibold mb-2">SubCategory</h2>
        <p className="text-gray-700 mb-4">dricsadfkjsadf</p>
        <div className="flex items-center mb-4 justify-between">
          <span className="text-lg font-semibold text-blue-600 mr-2">Price :</span>
          <span className="text-gray-600 flex items-center">Rating: <FaStar></FaStar></span>
          <p>Customization: <Link className="py-1 px-3 bg-sky-500 text-light-color rounded-full"></Link></p>
        </div>
        <div className="mb-4 flex justify-between gap-5 items-center">
          
          <p>Processing Time:</p>
          <p>Stock Status:</p>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <p>Woner Email:</p>
          <p>Create by</p>
        </div>
        {/* Add any additional details or actions here */}
      </div>
    </div>
  </div>
  )
}

export default ViewDetails
