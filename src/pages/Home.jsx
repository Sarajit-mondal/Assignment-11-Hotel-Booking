import { Helmet } from "react-helmet"
import Banner from "../components/home/Banner"
import FeaturedRooms from "../components/home/FeaturedRooms"
import MyMap from "../components/home/MyMap"
import NewsLetterSIgnUp from "../components/home/NewsLetterSIgnUp"
import UserReviews from "../components/home/UserReviews"
import DropdownMenu from "../components/home/DropdownMenu"
import BestMoment from "../components/home/BestMoment."
import { useEffect, useState } from "react"



function Home() {
  const [showModal, setShowModal] = useState(false);

  const image = [
    "https://i.postimg.cc/W13RVkcH/happy-young-woman-eating-italian-pasta-restaurant-female-with-food-cafe-130458-1052.jpg",
    "https://img.freepik.com/premium-photo/travel-woman-with-fastfood-burgers-coffee-juice-drinks-outdoor-cafe_130458-881.jpg?w=900",
    "https://img.freepik.com/premium-photo/friends-drinking-wine-summer-terrace_109285-3705.jpg?w=900",
    "https://img.freepik.com/premium-photo/young-female-photographer-make-photoshoot-fresh-breakfast-hotel_130458-1012.jpg?w=900"
  ]
  useEffect(() => {
     const timeout = setTimeout(() => {
    
      document.getElementById('my_modal_3').showModal()
     }, 5000);

    // return () => clearTimeout(timeout);
  }, []);

  return (
   <div className="relative">
   <Helmet>
    <title>Home Page</title>
   </Helmet>
    <div className="space-y-28">
     
      <div className="mt-8 relative">
      <Banner></Banner>
      <div className="absolute  -bottom-14 mx-auto w-full z-30">
      <DropdownMenu ></DropdownMenu>
      </div>
      </div>
      <MyMap></MyMap>
      <NewsLetterSIgnUp></NewsLetterSIgnUp>
      <FeaturedRooms></FeaturedRooms>
      <UserReviews></UserReviews>
      <div>
        <BestMoment></BestMoment>
      </div>
    </div>


    {/* pop pup image  */}
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
     

       {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box w-96 h-64  bg-white p-0">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 font-e">✕</button>
    </form>
    <img src={image[Math.floor(Math.random()*4)]} alt=""  className="w-full h-full"/>
  </div>
</dialog>
    </div>
  )
}

export default Home
