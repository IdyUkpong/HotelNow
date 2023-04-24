
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import HeaderHotel from "../HotelsGallery/HeaderHotel";

function Header() {
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const handleAdultsIncrement = () => {
    setAdults(adults + 1);
  };

  const handleAdultsDecrement = () => {
    if (adults > 1) setAdults(adults - 1);
  };

  const handleKidsIncrement = () => {
    setKids(kids + 1);
  };

  const handleKidsDecrement = () => {
    if (kids > 0) setKids(kids - 1);
  };
  const handleAdultsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) >= 0) {
      setAdults(Number(event.target.value));
    } else {
      setAdults(0);
    }
  };

  const handleKidsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) >= 0) {
      setKids(Number(event.target.value));
    } else {
      setKids(0);
    }
  };
  return (
    <div className="home">
      <HeaderHotel showAbout = {true}
  showSignup = {true}
  showLogin = {true}
  showHome = {true}
  showOurHotels = {false}
  showLogout = {false} home="Home" about="About" signup="Sign up" login="Login" />
      <div className="container">
        <form action="/" className="main-form">
          <p>
            <img className="logo" src="./src/assets/logo1.png" alt="logo" />
          </p>
          <div className="input-field col s12">
            <input type="text" id="autocomplete-input" className="hotel" />
            <label htmlFor="autocomplete-input">Location</label>
          </div>

          <div className="row">
            <div className="input-field col s12 m6">
              <label htmlFor="checkin">Check In</label>
              <DatePicker
                id="checkin"
                className="datepicker"
                selected={checkinDate}
                onChange={(date) => setCheckinDate(date)}
                placeholderText="Check in"
              />
            </div>
            <div className="input-field col s12 m6">
              <label htmlFor="checkout">
                <i className="left material-icons"></i>
                Check Out
              </label>
              <DatePicker
                id="checkout"
                className="datepicker"
                selected={checkoutDate}
                onChange={(date) => setCheckoutDate(date)}
                placeholderText="Check out"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m6">
              <label>Adults</label>
              <input
                className=""
                type="number"
                name="Adults"
                value={adults}
                onChange={handleAdultsChange}
              />
            </div>
            <div className="input-field col s12 m6">
              <label>Kids</label>
              <input
                className=""
                type="number"
                name="Kids"
                value={kids}
                onChange={handleKidsChange}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="my-button" style={{backgroundColor:"#a3b18a"}}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
