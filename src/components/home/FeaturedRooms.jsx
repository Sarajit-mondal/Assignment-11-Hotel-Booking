import { Link } from "react-router-dom";
import useRoomsData from "../../hooks/useRoomsData";

function FeaturedRooms() {
  const {data : allRoom = [],isloading} = useRoomsData()
  return (
    <div className=" border-2 border-sky-400 p-5 my-5 rounded-xl">
      <h2 className="text-4xl font-bold text-sky-400 mb-10 text-center">
        Our Featured Rooms
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10">
      {
        allRoom && allRoom.map((room,inx) =>  
       {
        if(inx % 3 === 0){
          if(inx < 22){
            return  <div key={inx} className="relative card bg-sky-300 shadow-xl">
            <figure>
              <img
                src={room.RoomImages}
                alt="room"
                className="w-full h-52 lg:h-40"
              />
            </figure>
            <div className="p-3">
              <p className="text-white">
               {
                room.RoomDescription
               }
              </p>
            </div>
            <Link to={`/viewDetails/${room._id}`} className="absolute top-2/4 left-2/4 rounded-xl -translate-x-2/4 -translate-y-2/4 w-full h-full bg-[#87CEEB33] flex justify-center items-center [&>*]:hover:block hover:bg-[#87CEEB80] ease-linear duration-300">
              <button className="btn hidden border-sky-500 border-2 bg-transparent hover:bg-sky-300 font-bold text-white text-lg">
                Book Now
              </button>
            </Link>
          </div>
          }
         
        }
       }
      )
      }
      
      </div>
    </div>
  );
}

export default FeaturedRooms;