import {
  adminLogin,
  createAdmin,
  getMyHotel,
} from "../Controllers/hotelsController/adminController";
import express, { Request, Response, NextFunction } from "express";
import {
  createHotel,
  deleteHotel,
  updateHotel,
} from "../Controllers/hotelsController/hotelController";

import { adminAuth } from "../middleware/auth";

const Router = express.Router();

Router.post("/adminLogin", adminLogin);
Router.post("/adminRegister", createAdmin);

Router.post("/createHotel", adminAuth, createHotel);
Router.delete("/delete/:id", adminAuth, deleteHotel);
Router.patch("/update/:id", adminAuth, updateHotel);
Router.get("/getMyHotel", adminAuth, getMyHotel);
export default Router;
