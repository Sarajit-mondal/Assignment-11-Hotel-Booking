import Banner from "../components/home/Banner"
import FeaturedRooms from "../components/home/FeaturedRooms"
import MyMap from "../components/home/MyMap"
import NewsLetterSIgnUp from "../components/home/NewsLetterSIgnUp"
import UserReviews from "../components/home/UserReviews"



function Home() {
  return (
    <div className="space-y-16">
      <Banner></Banner>
      <MyMap></MyMap>
      <NewsLetterSIgnUp></NewsLetterSIgnUp>
      <FeaturedRooms></FeaturedRooms>
      <UserReviews></UserReviews>
    </div>
  )
}

export default Home
