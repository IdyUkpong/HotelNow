import React from 'react';
import "../../public/styles/Userpage.css"
import Footer from './home/Footer';
import HeaderHotel from './HotelsGallery/HeaderHotel';

const UserPage: React.FC = () => {

  return (
    <div className='container'>
      <div className='container py-4'>
        <h1 className='text-4xl py-4'>Welcome <span style={{color:"#495057"}}>User</span></h1>
      </div>
      <div className='pt-8'>
        <h3 className='text-2xl text-center'>My Bookings</h3>
      </div>
      <form method="POST">
    <div className='parentElement'>
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="card-front">
          <figure className='image-user'>
            <div className="img-bg"></div>
            <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
            <figcaption>Prime Suite Hotel</figcaption>
          </figure>

          <ul className='user-desc'>
            <li className='user-desc-li'>2 Bedroom Balcony Suite</li>
          </ul>
        </div>

        <div className="card-back">
          <figure>
            <div className="img-bg"></div>
            <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
          </figure>

          <button className='unbook text-white'>Unbook</button>
          

          <div className="design-container">
            <span className="design design--1"></span>
            <span className="design design--2"></span>
            <span className="design design--3"></span>
            <span className="design design--4"></span>
            <span className="design design--5"></span>
            <span className="design design--6"></span>
            <span className="design design--7"></span>
            <span className="design design--8"></span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </form>
    </div>
  );
};

const UserInterface: React.FC = () => {
  return (
    <>
    <HeaderHotel home="Home" showAbout = {false}
  showSignup = {false}
  showLogin = {false}
  showHome = {true}
  showOurHotels = {true}
  showLogout = {true} logout="Logout" ourHotels='Browse Hotel' />

      <UserPage />
      <Footer />
    </>
  );
};

export default UserInterface;
