import "../../public/styles/Signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface LoginFormValues {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const handleLogin = async (data: LoginFormValues) => {
    try {
      const response = await axios.post("http://localhost:3005/users/login", {
        email: data.email,
        password: data.password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError((err as Error).response?.data?.error || "An error occurred");
    }
  };

  return (
    <section className="login">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="user-box">
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              name="email"
              defaultValue=""
            />
            <label>Email</label>
          </div>
          {errors.email && <div className="error">{errors.email.message}</div>}
          <div className="user-box">
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              name="password"
              defaultValue=""
            />
            <label>Password</label>
          </div>
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
          <button type="submit">Submit</button>
        </form>
        <div>
          <span className="login-para">Don't have an account?</span>
          <a className="login-a" href="/signup">
            Signup
          </a>
        </div>
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

export default Login;
