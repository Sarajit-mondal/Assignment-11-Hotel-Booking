import moment from 'moment';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function ViewDetails() {
  const room = useLoaderData()
  const today = moment().format('DD-MM-YYYY');
  const tomorrow = moment().add(1,'day').format('DD-MM-YYYY');

    const [checkInDate, setCheckInDate] = useState(today);
    const [checkOutDate, setCheckOutDate] = useState(null);


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

  //handle room book 
  //handle room book 
  
  const handRoomBook = (e) =>{
    e.preventDefault()
    const checkOut = moment(checkOutDate).format('DD-MM-YYYY')
    console.log(checkInDate,checkOut)
  }


  console.log(room)
  return (
    <div className="max-w-5xl mx-auto px-4 py-5 min-h-screen ">
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
              setCheckInDate(moment(date).format("DD-MM-YYYY"))
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
               
                <button type="submit" className="bg-skyBlue-400 hover:bg-blue-500 text-white font-semibold btn rounded-md">Book Now</button>
            </form>
        
        {/* Book now and date picker */}

      </div>
    </div>
  </div>
  )
}

export default ViewDetails
