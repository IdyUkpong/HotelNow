import "../../public/styles/Signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Adminlogin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = event.currentTarget
      .elements as typeof event.currentTarget.elements & {
      email: { value: string };
      password: { value: string };
    };

    try {
      const response = await axios.post(
        "http://localhost:3005/admin/adminlogin",
        {
          email: email.value,
          password: password.value,
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/admin");
    } catch (err) {
      console.log(err);
      setError((err as Error).response?.data?.error || "An error occurred");
    }
  };

  return (
    <section className="login">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input type="email" name="email" defaultValue="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" defaultValue="" />
            <label>Password</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>

        <div className="mini-section-home">
          <span className="login-para">Back to</span>
          <a className="login-a" href="/">
            Home
          </a>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
    </section>
  );
}

export default Adminlogin;
