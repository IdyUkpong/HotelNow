import MeetOurTeam from "./about/MeetOurTeam";
import Footer from "./home/Footer";
import "../../public/styles/Home.css";
import HeaderHotel from "./HotelsGallery/HeaderHotel";
import Mission from "./about/Mission";
import Vision from "./about/Vision";
import FadeInOut from "./Animation";
import AboutCompany from "./about/AboutCompany";

function About() {
  return (
    <>
      <HeaderHotel
        showAbout={false}
        showSignup={true}
        showLogin={true}
        showHome={true}
        showOurHotels={true}
        showLogout={false}
        home="Home"
        ourHotels="Browse Hotels"
        signup="Sign up"
        login="Login"
      />
      <AboutCompany />
      <FadeInOut delay={500}>
        <Mission />
      </FadeInOut>
      <Vision />
      <FadeInOut delay={500}>
        <MeetOurTeam />
      </FadeInOut>
      <Footer />
    </>
  );
}

export default About;
