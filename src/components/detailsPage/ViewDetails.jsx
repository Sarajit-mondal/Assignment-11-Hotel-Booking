import moment from 'moment';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { update } from 'firebase/database';
import { useQueryClient } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';


function ViewDetails() {
  const room = useLoaderData()
  const {user} = useAuth()
  const queryClient = useQueryClient()
  const today = new Date();
  const tomorrow = moment().add(1,'day').format('DD-MM-YYYY');

    const [checkInDate, setCheckInDate] = useState(today);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const navigator = useNavigate()

    console.log(new Date(checkInDate))
    console.log(typeof checkOutDate)
  //handle room book 
  //handle room book 
  const handRoomBook = (e) =>{
    e.preventDefault()
    if(!user){
     navigator('/logIn')
    }else{
      document.getElementById("my_modal_4").showModal()
    }
    
  }

  // headleRoom Comfim
  // headleRoom Comfim
  // headleRoom Comfim
  // headleRoom Comfim
  const handleConfirm =(e)=>{
    e.preventDefault()

    const checkIn = moment(checkInDate).format('DD-MM-YYYY')
    const checkOut = moment(checkOutDate).format('DD-MM-YYYY')
    
//     // calculation starday and endDay gap
//     // Convert date strings to Date objects
// const startDate = new Date(checkInDate);


// Calculate the difference in milliseconds
const differenceInMs = checkOutDate - checkInDate;


// Convert milliseconds to days
const millisecondsInOneDay = 1000 * 60 * 60 * 24; // milliseconds * seconds * minutes * hours
const differenceInDays = Math.round(differenceInMs / millisecondsInOneDay);

console.log(differenceInDays)

    const booking = {
      "RoomNo": Math.ceil(Math.random() * 50 +1),
      "allRoomId" : room._id,
      "TotalReviews":room.TotalReviews,
      "roomImage": room.RoomImages,
      "roomSize": room.RoomSize,
      "checkIn":checkIn,
      "checkOut": checkOut,
      "totalCost" : differenceInDays * room.
      PricePerNight || room.PricePerNight,
    }

    axios.post(`${import.meta.env.VITE_API_URL}/bookingRoom`,booking)
    .then(res => {
      axios.patch(`${import.meta.env.VITE_API_URL}/allRoomUpdate/${room._id}`,{update:"unavailable"})
       
      // queryClient.invalidateQueries({queryKey:['allRoom']})
      Swal.fire({
        text: "Booking Successful",
        showConfirmButton: true,
        confirmButtonText: "Ok",
        icon:"success"
      })
      .then(res => {
        if(res.isConfirmed){
          navigator('/rooms')
        }
      })
      
    })
    .catch(error => {
      toast("some this is worng",error.code)
    })

    console.log(booking)


    // close model
    document.getElementById('my_modal_4').close();
  }
  // headleRoom Comfim
  // headleRoom Comfim


    // reviews handle
    const handleReview = () => {
      Swal.fire({
        text: "Please Book This Room First",
        showConfirmButton: true,
        confirmButtonText: "Ok",
        showCancelButton: true,
        cancelButtonText: "No",
      })
  };

  console.log(room)
  return (
    <div className="max-w-5xl mx-auto px-4 py-5 min-h-screen ">
       <Helmet>
    <title>Room Details</title>
   </Helmet>
    <div className="grid grid-cols-1 md:h-[500px] md:mt-10  md:grid-cols-2 gap-8 border-2 border-sky-400 ">
      <div className="p-1">
        <img src={room.RoomImages} className="w-full md:h-full" />
      </div>

      {/* right side */}
      <div className="pr-5 flex flex-col justify-between p-1">
        <h1 className="text-2xl font-bold mb-4">Price Per Night : <span className='text-[#e85415]'>$ {room.PricePerNight}</span></h1>
       
        <p className="text-gray-700 mb-4">{room.RoomDescription}</p>

        <div className="flex items-center mb-4 justify-between">
          <span className="text-dark-gray font-bold flex items-center">RoomSize : {room.RoomSize}</span>
          <p>Room Availability: <Link className="py-1 px-3 bg-skyBlue-400 text-light rounded-full">{room.Availability}</Link></p>
        </div>
        {/* offer list */}
        <ul className='[&>li]:ml-5'>
          <h3 className='font-bold'>Special Offers : </h3>
          <li>{room?.SpecialOffers[0]}</li>
          <li>{room?.SpecialOffers[1]}</li>
          <h3 className='font-bold'>Extra Offers : </h3>
          <li>{room?.ExtraOffer}</li>
        </ul>
        <div className="mb-4 flex justify-between items-center text-[#fc6f03]">
          <p>Total Review : {room.TotalReviews}</p>
          <p>Rating : {room.AverageRating}</p>
          <Link className="underline font-extrabold " onClick={handleReview}>Post Review</Link>
        </div> 
        {/* Book now and date picker */}
        {/* Book now and date picker */}
       
            <form onSubmit={handRoomBook} className="w-full flex justify-between items-center md:gap-5">
               
            <div className="mb-4">
          <label
            htmlFor="checkIn"
            className="block text-sm font-medium text-gray-700"
          >
            Check In:
          </label>
          <DatePicker
            required
            selected={moment(checkInDate, "DD-MM-YYYY").toDate()}
            onChange={(date) =>
              setCheckInDate(date)
            }
            dateFormat="dd-MM-yyyy"
            className="mt-1 p-2 border bg-transparent border-skyBlue-400 rounded-md w-full"
            minDate={new Date()} // Restrict past dates
            maxDate={checkOutDate}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="checkOut"
            className="block text-sm  font-medium text-gray-700"
          >
            Check Out:
          </label>
          <DatePicker
          required
          placeholderText ={tomorrow}
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            dateFormat="dd-MM-yyyy"
            className="mt-1 p-2 border bg-transparent border-skyBlue-400 rounded-md w-full"
            minDate={moment(checkInDate, "DD-MM-YYYY").toDate()} // Restrict past dates and dates before check-in date
          />
        </div>
                {
                  room.Availability === "unavailable" ?  <button disabled  className="bg-skyBlue-400  hover:bg-blue-500 text-white font-semibold btn rounded-md">Unavailable</button>
                   :
                 <button type="submit" className="bg-skyBlue-400 hover:bg-blue-500 text-white font-semibold btn rounded-md">Book Now</button>
                }
               
           
               
            </form>
        
        {/* Book now and date picker */}

      </div>
    </div>


    {/* show modal  */}
    {/* show modal  */}
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 md:w-3/4 max-w-xl bg-light">
          {/* content  */}
          <figure>
            <img
              src="https://img.freepik.com/premium-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-night_105762-1627.jpg?w=740"
              alt=""
              className="w-full h-64 rounded-lg"
            />
          </figure>
          <h1 className="text-2xl mt-3 font-bold mb-4">Price Per Night : <span className='text-[#e85415]'>$ {room.PricePerNight}</span></h1>
       
        <p className="text-gray-700 mb-4">{room.RoomDescription}</p>

        <div className="flex items-center mb-4 justify-between">
          <span className="text-dark-gray font-bold flex items-center">RoomSize : {room.RoomSize}</span>
          <p>Room Availability: <Link className="py-1 px-3 bg-skyBlue-400 text-light rounded-full">{room.Availability}</Link></p>
        </div>
          <div className="modal-action">
            <form method="dialog gap-5">
              {/* Close button */}
              <button
                className="btn mr-5 bg-red-400 text-white"
                onClick={(e) => {
                 e.preventDefault()
                  document.getElementById("my_modal_4").close()}
                }>
                Close
              </button>
              {/* Confirm button */}
              <button className="btn bg-skyBlue-400 text-white" onClick={handleConfirm}>
                Confirm
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
    {/* show modal  */}
    {/* show modal  */}
  </div>
  )
}

export default ViewDetails
