import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { createAdmin } from "../Controllers/hotelsController/adminController";

const jwtsecret = process.env.JWT_SECRET as string;

import {
  createBooking,
  deleteBooking,
  updateBooking,
} from "../Controllers/usersController/bookingController";

import {
  getBooksbyUser,
  Login,
  register,
} from "../Controllers/usersController/userController";
import { auth } from "../middleware/auth";

const Router = express.Router();

Router.post("/login", Login);
Router.post("/register", register);
Router.post("/booking", auth, createBooking);
Router.get("/getMyBooking", auth, getBooksbyUser);
Router.delete("/delete/:id", auth, deleteBooking);
Router.patch("/update/:id", auth, updateBooking);

export default Router;
