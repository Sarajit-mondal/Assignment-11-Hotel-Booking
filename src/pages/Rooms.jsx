import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaStar,FaStarHalf } from 'react-icons/fa'
import { userContext } from '../providers/AuthProvider'

function Rooms() {
  const {user} = useContext(userContext)
  const navigate = useNavigate()
 const handleReview =()=>{
   if(!user){
    alert("Please SignUp or LogIn Frist")
   }else if(user){
    alert("Please Room Book Frist")
   }else{
    navigate('/postReview')
   }
 }

  return (
    <div className=" border-2 border-sky-400 p-5 my-5 rounded-xl">
      <h2 className="text-4xl font-bold text-sky-400 mb-10 text-center">
        Our All Rooms
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className=" card bg-sky-100 shadow-xl">
          <div className='relative'>
          <figure>
            <img
              src="https://i.postimg.cc/0QH4p3dM/logo-make-11-06-2023-62.jpg"
              alt="room"
              className="w-full h-64 rounded-t-xl"
            />
          </figure>
          <Link className="absolute top-2/4 left-2/4 rounded-xl -translate-x-2/4 -translate-y-2/4 w-full h-full bg-[#87CEEB33] flex justify-center items-center [&>*]:hover:block hover:bg-[#87CEEB80] ease-linear duration-300">
            <button className="btn hidden border-sky-500 border-2 bg-transparent hover:bg-sky-300 font-bold text-white text-lg">
              Book Now
            </button>
          </Link>
          </div>
          <div className="p-5">
            {/* userReviews */}
          <div className=" min-w-48">
        <h2 className="text-3xl font-bold">Total Review : 786 </h2>
         <span className="flex items-end"><h3 className="text-[#fc6f03] text-3xl font-bold">4.8</h3> <p>out of 5 Stars</p></span>
         <div className="flex text-xl text-[#fc6f03] ">
         <FaStar></FaStar>
         <FaStar></FaStar>
         <FaStar></FaStar>
         <FaStar></FaStar>
         <FaStarHalf></FaStarHalf>
         </div>
         <small>(786 Verifled Reviews)</small>
         <br />
         <Link className="underline text-xl text-[#fc6f03]" onClick={handleReview}>Post Review</Link>
          </div>
      {/* userReviews */}
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Rooms
