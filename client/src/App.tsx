import { Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import HomeRoutes from "./routes/HomeRoute";
import './index.css'

function App() {
  return (
    <div>
      <AppRoutes />
      <HomeRoutes />
    </div>
  );
}

export default App;
