import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";

function HomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  );
}

export default HomeRoutes;
