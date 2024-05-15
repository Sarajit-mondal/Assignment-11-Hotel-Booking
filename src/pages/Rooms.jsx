import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { userContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import useRoomsData from '../hooks/useRoomsData';
import Loading from '../components/loding/Loading';
import axios from 'axios';
import { SlEarphones } from 'react-icons/sl';
import { Helmet } from 'react-helmet';

function Rooms() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  const { data: allRooms, isLoading, isError, error } = useRoomsData();
  const [selectedRange, setSelectedRange] = useState('');
  const [displayedRooms, setDisplayedRooms] = useState([]);
console.log(allRooms)
  useEffect(() => {
    setDisplayedRooms(allRooms);
  }, [allRooms]);

  const handleRangeChange = (event) => {
    const range = event.target.value;
    setSelectedRange(range);

    if (range === '') {
      setDisplayedRooms(allRooms); // Show all rooms if range is empty
    } else {
      const rangeArray = range.split("-");
      const rangeOne = rangeArray[0];
      const rangeTwo = rangeArray[1];

      axios.get(`${import.meta.env.VITE_API_URL}/allRoom/sort?rangeOne=${rangeOne}&rangeTwo=${rangeTwo}`)
        .then(res => setDisplayedRooms(res.data))
        .catch(error => console.error("Error fetching filtered rooms:", error));
    }
  };

  const handleReview = (id) => {
    if (!user) {
      Swal.fire({
        text: "Please SignUp or LogIn First",
        showConfirmButton: true,
        confirmButtonText: "Ok",
        showCancelButton: true,
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/logIn');
        }
      });
    } else {
      Swal.fire({
        text: "Please Book This Room First",
        showConfirmButton: true,
        confirmButtonText: "Ok",
        showCancelButton: true,
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/viewDetails/${id}`);
        }
      });
    }
  };


  return (
    <div className="relative border-2 border-sky-400 p-5 my-5 rounded-xl min-h-screen">
       <Helmet>
    <title>Rooms</title>
   </Helmet>
      {isLoading && <Loading />}
      <h2 className="text-4xl font-bold text-sky-400 mb-4 text-center">
        Our All Rooms
      </h2>
      <div className="flex items-center justify-center mb-8">
        <label htmlFor="priceRange" className="mr-2">Select Price Range:</label>
        <select
          id="priceRange"
          value={selectedRange}
          onChange={handleRangeChange}
          className="px-2 py-1 border border-skyBlue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-transparent"
        >
          <option value="">All</option>
          <option value="100-150">$100 - $150</option>
          <option value="150-200">$150 - $200</option>
          <option value="200-250">$200 - $250</option>
          <option value="250-300">$250 - $300</option>
          <option value="300-350">$300 - $350</option>
          <option value="350-400">$350 - $400</option>
          <option value="400-450">$400 - $450</option>
          <option value="450-500">$450 - $500</option>
          <option value="500-50000">$500 - More...</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {displayedRooms && displayedRooms.map(room => (
          <div key={room._id} className="hover:scale-105 ease-linear duration-300 card bg-sky-100 shadow-xl">
            <div className='relative'>
              <figure>
                <img
                  src={room.RoomImages}
                  alt="room"
                  className="w-full h-64 rounded-t-xl"
                />
              </figure>
              <Link to={`/viewDetails/${room._id}`} className="absolute top-2/4 left-2/4 rounded-xl -translate-x-2/4 -translate-y-2/4 w-full h-full bg-[#87CEEB33] flex justify-center items-center [&>*]:hover:block hover:bg-[#87CEEB80] ease-linear duration-300">
                <button className="btn hidden border-sky-500 border-2 bg-transparent hover:bg-sky-300 font-bold text-white text-lg ">
                 See Details
                </button>
              

              </Link>
              <small className='flex justify-center p-1'>Per Night : $ {room.PricePerNight}</small>
            </div>
            <div className="px-5 pt-3 pb-5">
              <div className="min-w-48">
               
                <h2 className="text-2xl text-skyBlue-400 font-bold">Total Review : {room.TotalReviews} </h2>
                <span className="flex items-end"><h3 className="text-[#fc6f03] text-2xl font-bold">{room.AverageRating}</h3> <p className='text-skyBlue-400'>out of 5 Stars</p></span>
                <div className="flex text-lg text-[#fc6f03] ">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                </div>
                <small className='text-skyBlue-400'>({room.TotalReviews} Verifled Reviews)</small>
                <br />
                <Link className="underline font-extrabold text-[#fc6f03]" onClick={()=>handleReview(room._id)}>Post Review</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rooms;
