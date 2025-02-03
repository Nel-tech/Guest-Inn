import Intro from "./DetailsIntro/Intro"
import GuestReviews from "./GuestReviews/GuestReviews"
import NavBar from "../Pages/Components/Navbar"
import Footer from "../Pages/Components/footer"
function RoomDetails() {
  return (
    <div>
        <NavBar/>
        <Intro/>
        <GuestReviews/>
        <Footer/>
    </div>
  )
}

export default RoomDetails