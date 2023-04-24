import Footer from "./home/Footer";
import AllHotels from "./HotelsGallery/AllHotels";
import HeaderHotel from "./HotelsGallery/HeaderHotel";


function Hotelpage () {
    return (
        <div className="Page-Section">
        <HeaderHotel showAbout = {true}
  showSignup = {true}
  showLogin = {true}
  showHome = {true}
  showOurHotels = {false}
  showLogout = {false} home="Home" about="About" signup="Sign up" login="Login" />
        <AllHotels />
        <Footer />
        </div>
    )
}

export default Hotelpage;