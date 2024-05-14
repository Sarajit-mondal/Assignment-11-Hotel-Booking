import React, { useContext, useState } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { userContext } from '../providers/AuthProvider';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import useBookingData from '../hooks/useBookingData';
import Loading from '../components/loding/Loading';
import axios from 'axios';
import { update } from 'firebase/database';
import { toast } from 'react-toastify';

const MyBooking = () => {
  const {user} = useContext(userContext)
  const {data : bookingData =[],isLoading,refetch} = useBookingData()
  console.log(bookingData )
  // date picker
  const today = new Date();
  const tomorrow = moment().add(1,'day').format('DD-MM-YYYY');
    const [checkInDate, setCheckInDate] = useState(today);
    const [checkOutDate, setCheckOutDate] = useState(null);
  // date picker
  const [username, setUsername] = useState(user?.displayName || "userName");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [totalReviews,setTotalReviews] = useState()
  const [idAllRoom,setIdAllRoom] = useState()
  const [bookingId,setBookingId] = useState()

// handle room update
// handle room update
// handle room update
// handle room update
// handle room update
// handle room book
const handleUpdate =(e) =>{
e.preventDefault()
const checkIn = moment(checkInDate).format('DD-MM-YYYY')
const checkOut = moment(checkOutDate).format('DD-MM-YYYY')
 console.log(checkIn,checkOut)
const update ={
  "checkIn" :checkIn,
  "checkOut":checkOut
}
 axios.patch(`${import.meta.env.VITE_API_URL}/bookingUpdate/${bookingId}`,update)
 .then(res => {
  Swal.fire({
    text: "Booking Update complete",
    showConfirmButton: true,
    confirmButtonText: "ok",
    icon: "success"
   
  })
  refetch()
 })
 .catch(error =>{
  Swal.fire({
    text: `"Error!     ",${error.message ||error.code}`,
    showConfirmButton: true,
    confirmButtonText: "ok",
    icon: "error"
  })
 })

 document.getElementById("my_modal_5").close()
}

// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking
// cancle room MyBooking

const cancelBooking = (id,checkIn) =>{
  
  const newDateFormat = moment(checkIn,'DD-MM-YYYY').format('MM-DD-YYYY')

  const bookingStarDate = new Date(newDateFormat)
  const distanceDate = bookingStarDate - today;
  const oneDay = 1000 * 60 * 60 * 24;

  const update ={
    "update" : 'available'
  }
  // condition cancel roombooking
  if( distanceDate  < oneDay){
    Swal.fire({
      text: "You can't Cancel booking. cancel time over! ",
      showConfirmButton: true,
      confirmButtonText: "Ok",
      icon:"warning"
    })
  }else{
    Swal.fire({
      text: "Do You Want to Cancel Booking",
      showConfirmButton: true,
      confirmButtonText: "Yes",
      showCancelButton: true,
      cancelButtonText: "No",
    })
    .then((result) => {
      if (result.isConfirmed) {

        axios.delete(`${import.meta.env.VITE_API_URL}/bookingDelete/${id}`)
        .then(res =>{
          console.log(res.data)
          // Update all room Availability
          refetch()
          axios.patch(`${import.meta.env.VITE_API_URL}/allRoomUpdateAvailability/${idAllRoom}`,update)

          Swal.fire({
            text: "Booking cancel successfull",
            showConfirmButton: true,
            confirmButtonText: "ok",
            icon: "success"
           
          })

        
        })
        .catch(error=>{
          Swal.fire({
            text: `"error!"${error.code || error.message}`,
            showConfirmButton: true,
            confirmButtonText: "ok",
            icon: "error"
           
          })
        })
        refetch()
      }
    });
  }
}

  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  // handlepostRaing
  const handlePostRating = (e) =>{
   e.preventDefault()
   const todayDate = moment(today).format('DD-MM-YYYY')
   const timeStamp = moment(today).unix();
  //  console.log(username,rating,todayDate,timeStamp, comment|| "This was awsome room")
  

   const newRating = {
   "username" : username,
   "rating" : rating,
   "todayDate":todayDate,
   "comment":comment|| "This was awsome room"
   }

   const update ={
     "update" : totalReviews
   }
  //  set the database
  axios.post(`${import.meta.env.VITE_API_URL}/rating`,newRating)
  .then(res => {
    axios.patch(`${import.meta.env.VITE_API_URL}/allRoomUpdateRewiew/${idAllRoom}`,update)
     
    // queryClient.invalidateQueries({queryKey:['allRoom']})
    Swal.fire({
      text: "Review Post Successful",
      showConfirmButton: true,
      confirmButtonText: "Ok",
    })
    .then(res => {
      if(res.isConfirmed){
       
      }
    })
    
  })
  .catch(error => {
    toast("some this is worng",error.code)
  })

  console.log(totalReviews)
   document.getElementById("my_modal_4").close()
  }

  return (
   <div className='relative' >
     {
      isLoading && <Loading></Loading>
     }
       <table className='w-full md:w-3/4 mx-auto'>
       <tbody className='space-y-5'>
        {/* table row */}
        {
          bookingData && bookingData.map(booking => <tr key={booking._id} className='border-2 shadow-xl my-5'>
          <td className='p-3'>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className=" rounded-xl size-20">
                  <img src={booking.roomImage} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold text-lg">Room No :  <span className='text-skyBlue-500'>{booking.RoomNo}</span></div>
                <div className="text-sm opacity-80">{booking.roomSize}</div>
              </div>
            </div>
          </td>
          <td className='font-bold '>
          <p className='mb-3'>PaymentStatus <span className='text-skyBlue-400'>Paid</span></p>
          <p>Total Cost $: <span className='text-skyBlue-400'>{booking?.totalCost}</span></p>
          </td>
          <td>
           <div className='flex gap-2 items-center mb-3'><span className='bg-skyBlue-500 block size-3 rounded-full'></span> <p>{booking.checkIn}</p></div>
           <div className='flex gap-2 items-center'><span className='bg-red-500 block size-3 rounded-full'></span> <p>{booking.checkOut}</p></div>
           
          </td>
          {/* ratting */}
          <td> 
          <div className="flex text-lg text-[#fc6f03] ">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
            </div>
            <button onClick={()=> {
              setTotalReviews(booking.TotalReviews +1)
              setIdAllRoom(booking.allRoomId)
              document.getElementById("my_modal_4").showModal()}
              } className=" text-orange-600 font-extrabold mt-3  underline">Post Review</button>
          </td>
          <th>
        <button onClick={()=> {
          setBookingId(booking._id)
          document.getElementById("my_modal_5").showModal()
        }} className="btn bg-skyBlue-500 btn-sm">Update</button>
          <br />
        <button onClick={()=>{
          cancelBooking(booking._id,booking.checkIn)
          setIdAllRoom(booking.allRoomId)
        }} className="btn mt-2 btn-error btn-sm">Cancel</button>
          </th>
        </tr>)
        }
        </tbody>
       </table>

         {/* show modal rating */}
         {/* show modal rating */}
         {/* show modal rating */}
         {/* show modal rating */}
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 md:w-1/4 max-w-xl bg-light">
          {/* content  */}
          {/* content  */}
          {/* content  */}
          <form action="">
          <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 border bg-transparent border-skyBlue-400 rounded-md w-full"
            value={username}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
          <select
            id="rating"
            className="mt-1 p-2 border bg-transparent border-skyBlue-400 rounded-md w-full"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            id="comment"
            className="mt-1 p-2 border bg-transparent border-skyBlue-400 rounded-md w-full"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Timestamp</label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 border bg-transparent border-skyBlue-400 rounded-md w-full"
            value={moment(today).format('DD-MM-YYYY')}
         
          />
        </div>

          </form>

          <div className="modal-action">
            <form method="dialog gap-5">
              
              {/* Close button */}
              <button
                className="btn mr-5 text-white bg-red-400"
                onClick={(e) => {
                 e.preventDefault()
                  document.getElementById("my_modal_4").close()}
                }>
                Close
              </button>
              {/* Confirm button */}
              <button onClick={handlePostRating} className="btn  text-white bg-skyBlue-400">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
    {/* show modal rating */}
         {/* show modal update date */}
         {/* show modal update date*/}
        {/* show modal update date */}
        <div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 md:w-1/4 max-w-xl bg-light">
          {/* content  */}
          {/* content  */}
          {/* content  */}
          

          <div className="modal-action">
            <div method="dialog gap-5">
               {/* Book now and date picker */}
       
            <form onSubmit={handleUpdate} className="w-full ">
               
               <div className="mb-2">
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
                  {/* confirm button */}
              <div className='flex'>
              <button type="submit" className="bg-skyBlue-400 hover:bg-blue-500 text-white font-semibold btn rounded-md">Confirm</button>
                   
                  
                   {/* Close button */}
              <button
                className="btn ml-5 bg-red-400"
                onClick={(e) => {
                 e.preventDefault()
                  document.getElementById("my_modal_5").close()}
                }>
                Close
              </button>
                </div>     
                  
               </form>
           
           {/* Book now and date picker */}
              
            </div>
          </div>
        </div>
      </dialog>
    </div>
   </div>
  );
};


export default MyBooking
