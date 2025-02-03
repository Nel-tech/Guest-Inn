import HeroSection from "./HeroSection/HeroSection"
import HomeAbout from "./AboutUs/HomeAbout"
import ExploreRooms from './ExploreRooms/Explore'
import Faq from "./FAQ/Faq"
import Footer from "../Components/footer"
function Home() {
  return (
    <div>
      <HeroSection/>
      <HomeAbout/>
      <ExploreRooms/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home