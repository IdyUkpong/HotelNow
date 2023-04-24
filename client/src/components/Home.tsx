import "../../public/styles/Home.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./home/Header";
import Footer from "./home/Footer";
import Testimonial from "./home/Testimonial";
import CustomerTestimonial from "./home/CustomerTestimonial";
import Hotel from "./home/Hotel";

function Home() {
  return(
<>
<Header/>
<Hotel />
<Testimonial/>
<CustomerTestimonial/>
<Footer/>
  </>
  )
  
}

export default Home;
