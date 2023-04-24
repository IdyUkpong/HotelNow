import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "../../public/styles/Signup.css";
import Pagenotfound from "../components/Pagenotfound";
import About from "../components/About";
import Hotelpage from "../components/Hotelpage";
import UserInterface from "../components/UserPage";
import SuperAdminDashboard from "../Dashboard/SuperAdminDashboard";
import AdminDashboard from "../Dashboard/AdminDashboard";
import Adminsignup from "../components/Adminsigup";
import Adminlogin from "../components/Adminlogin";
import SuperSignin from "../components/HotelsGallery/SuperSignin";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/404errorpage" element={<Pagenotfound />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourhotels" element={<Hotelpage />} />
      <Route path="/profile" element={<UserInterface />} />
      <Route path="/superAdmin" element={<SuperAdminDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/adminsignup" element={<Adminsignup />} />
      <Route path="/adminlogin" element={<Adminlogin />} />
      <Route path="/superlogin" element={<SuperSignin />} />
    </Routes>
  );
}

export default AppRoutes;
