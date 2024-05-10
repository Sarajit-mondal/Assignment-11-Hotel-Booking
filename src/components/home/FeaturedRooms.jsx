import { Link } from "react-router-dom";

function FeaturedRooms() {
  return (
    <div className=" border-2 border-sky-400 p-5 my-5 rounded-xl">
      <h2 className="text-4xl font-bold text-sky-400 mb-10 text-center">
        Our Featured Rooms
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="relative card bg-sky-300 shadow-xl">
          <figure>
            <img
              src="https://i.postimg.cc/0QH4p3dM/logo-make-11-06-2023-62.jpg"
              alt="room"
              className="w-full h-64"
            />
          </figure>
          <div className="p-5">
            <p className="text-white">
              A luxurious suite with panoramic city views and a private terrace
            </p>
          </div>
          <Link className="absolute top-2/4 left-2/4 rounded-xl -translate-x-2/4 -translate-y-2/4 w-full h-full bg-[#87CEEB33] flex justify-center items-center [&>*]:hover:block hover:bg-[#87CEEB80] ease-linear duration-300">
            <button className="btn hidden border-sky-500 border-2 bg-transparent hover:bg-sky-300 font-bold text-white text-lg">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedRooms;