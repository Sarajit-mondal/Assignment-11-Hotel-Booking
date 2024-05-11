import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaStar,FaStarHalf } from 'react-icons/fa'
import { userContext } from '../providers/AuthProvider'
import Swal from 'sweetalert2'

function Rooms() {
  const {user} = useContext(userContext)
  const navigate = useNavigate()
// handle reviews
// handle reviews
 const handleReview =()=>{
   if(!user){
    Swal.fire({
      text: "Please SignUp or LogIn First ",
      showConfirmButton: true,
      confirmButtonText: "Ok",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // Code to handle when "Yes" is clicked
        navigate('/logIn')
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Code to handle when "No" is clicked or outside the modal is clicked
      }
    });
    

   }else if(user){
    Swal.fire({
      text: "Please Book This Room Frist",
      showConfirmButton: true,
      confirmButtonText: "Ok",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // Code to handle when "Yes" is clicked
        navigate('/viewDetails')
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Code to handle when "No" is clicked or outside the modal is clicked
      }
    });
    
   }
 }
// handle reviews
// handle reviews
  return (
    <div className=" border-2 border-sky-400 p-5 my-5 rounded-xl">
      <h2 className="text-4xl font-bold text-sky-400 mb-10 text-center">
        Our All Rooms
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* card */}
        <div className=" hover:scale-105 ease-linear duration-300 card bg-sky-100 shadow-xl">
          
          <div className='relative'>
          <figure>
            <img
              src="https://i.postimg.cc/0QH4p3dM/logo-make-11-06-2023-62.jpg"
              alt="room"
              className="w-full h-64 rounded-t-xl"
            />
          </figure>
          <Link to='/viewDetails' className="absolute top-2/4 left-2/4 rounded-xl -translate-x-2/4 -translate-y-2/4 w-full h-full bg-[#87CEEB33] flex justify-center items-center [&>*]:hover:block hover:bg-[#87CEEB80] ease-linear duration-300">
            <button className="btn hidden border-sky-500 border-2 bg-transparent hover:bg-sky-300 font-bold text-white text-lg ">
              See Details
            </button>
          </Link>
          </div>
          
          <div className="p-5">
            {/* userReviews */}
            {/* userReviews */}
          <div className=" min-w-48">
        <h2 className="text-2xl text-skyBlue-400 font-bold">Total Review : 786 </h2>
         <span className="flex items-end"><h3 className="text-[#fc6f03] text-3xl font-bold">4.8</h3> <p className='text-skyBlue-400'>out of 5 Stars</p></span>
         <div className="flex text-xl text-[#fc6f03] ">
         <FaStar></FaStar>
         <FaStar></FaStar>
         <FaStar></FaStar>
         <FaStar></FaStar>
         <FaStarHalf></FaStarHalf>
         </div>
         <small className='text-skyBlue-400'>(786 Verifled Reviews)</small>
         <br />
         <Link className="underline text-lg font-extrabold text-[#fc6f03]" onClick={handleReview}>Post Review</Link>
          </div>
      {/* userReviews */}
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Rooms
