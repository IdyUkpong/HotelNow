import "../../public/styles/Signup.css";

import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router";

function Adminsignup() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    confirm_password: "",
  });
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false); // new state variable

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3005/admin/adminRegister",
        formData
      );
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
      {isSignUpSuccess ? <Navigate to="/adminLogin" /> : null}{" "}
      {/* render Navigate component if isSignUpSuccess is true */}
      <div className="Contain-login">
        <div className="login-box">
          <h2>Admin Sign up</h2>
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

            <div className="user-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label>Email</label>
            </div>

           
            <button type="submit">Submit</button>
          </form>
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

export default Adminsignup;