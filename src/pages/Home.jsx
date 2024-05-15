import { Helmet } from "react-helmet"
import Banner from "../components/home/Banner"
import FeaturedRooms from "../components/home/FeaturedRooms"
import MyMap from "../components/home/MyMap"
import NewsLetterSIgnUp from "../components/home/NewsLetterSIgnUp"
import UserReviews from "../components/home/UserReviews"
import DropdownMenu from "../components/home/DropdownMenu"



function Home() {
  return (
   <>
   <Helmet>
    <title>Home Page</title>
   </Helmet>
    <div className="space-y-16">
     
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
    </div>
    </>
  )
}

export default Home
