import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { FaBars } from "react-icons/fa";
import axios from "axios";

function DropdownMenu() {
  const [dropdown, setDropDown] = useState(true);
  const today = new Date();
  const tomorrow = moment().add(1,'day').format('DD-MM-YYYY');

    const [checkInDate, setCheckInDate] = useState(today);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [displayedRooms,setDisplayedRooms] =useState([])

//   fetch all Room
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/allRoom/sort?rangeOne=${1}&rangeTwo=${100000}`)
    .then(res => setDisplayedRooms(res.data))
    .catch(error => console.error("Error fetching filtered rooms:", error));
  },[])
 console.log(displayedRooms)
  //handleDropDown
  const handalDropDown = () => {
    setDropDown(!dropdown);
  };

  ///handlebooking
  const handleBooking = (e) =>{
    e.preventDefault()

  }
  return (
    <div>
      <div className="navbar bg-sky-100 p-5 rounded-full">
        <div className="flex-1 gap-5 ">
          <a className="btn btn-ghost text-xl font-bold hidden md:block">
            All Offer Room
          </a>
          {/* Search */}
          <div className="form-control none hidden lg:block">
            <input
              type="text"
              placeholder="Search...."
              className="input border-2 border-skyBlue-400 bg-transparent w-16 md:w-auto rounded-full "
            />
          </div>
          {/* datePicker */}
          {/* <form action="" className="flex">
            <div>
              <label htmlFor="">Check In</label>
              <br />
              <input type="date" />
            </div>
            <div>
              <label htmlFor="">Check Out</label>
              <br />
              <input type="date" />
            </div>
          </form> */}
          {/* Book now and date picker */}
        {/* Book now and date picker */}
       
        <form onChange={handleBooking} className="w-full flex justify-center items-center gap-3 md:gap-5 mx-3">
               
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

           <button type="submit" className="bg-skyBlue-400 hover:bg-blue-500 text-white font-semibold btn rounded-md ">Book Now</button>
                   
               </form>

             
           
           {/* Book now and date picker */}
        </div>

        <div className="flex-none gap-2">
          {/* DropdownMenu */}
          {/* DropdownMenu */}
          {/* DropdownMenu */}
          <div className="dropdown dropdown-end z-50">
            <div
              onClick={() => setDropDown(!dropdown)}
              tabIndex={0}
              role="button"
              className="size-16 lg:mr-5 rounded-full flex items-center justify-center bg-sky-400"
            >
              <div className=" rounded-full">
               <FaBars className="text-xl"/>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-1 z-[1] menu menu-sm dropdown-content bg-transparent rounded-box pl-10 md:pl-28 max-w-[480px] md:min-w-[900px]  lg:min-w-[1200px]"
            >
              {/* dropdown item */}
              {dropdown && (
                <div
                  onClick={handalDropDown}
                  className="shadow-lg p-5 bg-sky-100 rounded-xl "
                >
                  {/* table */}
                  {/* head */}
                  <table className="table">
                    <thead>
                      <tr className="[&>th]:text-black">
                        <th>Image</th>

                        <th className="hidden md:block">Room Size</th>
                        <th>Price Per Night</th>
                        <th>All Offer</th>
                        <th className="hidden md:block">Availability</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {/* mapping  */}
                      {/* mapping  */}
                     {
                        displayedRooms.map(room => <tr className="hover:bg-sky-200 ease-linear duration-300">
                        <td>
                          <div className="avatar">
                            <div className="size-20">
                              <img
                                src={room.RoomImages}
                                className="h-16 w-20 rounded-xl"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="hidden md:flex mt-7">{room._id.slice(-8)}</td>

                        <td>$ {room.PricePerNight}</td>
                        <td>
                          {room?.SpecialOffers[0]} <br />
                          {room?.SpecialOffers[1]} <br />
                          {room?.ExtraOffer} <br />
                        </td>
                        <td className={`hidden text-bold md:block ${room.Availability === "unavailable" ? 'text-red-500' :'text-skyBlue-500'} `}>
                          {room.Availability}
                        </td>
                        <td>
                          <Link to={`/viewDetails/${room._id}`}>
                            <button className="btn bg-sky-400 text-white btn-sm">
                              Book Now
                            </button>
                          </Link>
                        </td>
                      </tr>)
                     }
                    </tbody>
                  </table>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;