import "../../public/styles/Signup.css";

import { useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router";

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    confirm_password: '',
  });
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false); // new state variable

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/users/register', formData);
      console.log(response.data);
      if (response.data) {
        setIsSignUpSuccess(true); // set isSignUpSuccess state to true
      } 
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {isSignUpSuccess ? <Navigate to="/login" /> : null} {/* render Navigate component if isSignUpSuccess is true */}
      <div className="Contain-login">
        <div className="login-box">
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label>Full Name</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <label>Phone Number</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
              />
              <label>Confirm Password</label>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div>
            <span className="login-para">Already have an account?</span>
            <a className="login-a" href="/login">
              Login
            </a>
          </div>
          <div className="mini-section-home">
            <span className="login-para">Back to</span>
            <a className="login-a" href="/">
              Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup

