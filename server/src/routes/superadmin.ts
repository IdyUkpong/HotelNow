import express, { Request, Response, NextFunction } from "express";
import {
  deleteAdmin,
  deleteUser,
  getAllAdmin,
  getallUsers,
  superAdminLogin,
} from "../Controllers/usersController/superAdmin";

import { superAdminAuth } from "../middleware/auth";
import { getAllHotel } from "../Controllers/hotelsController/hotelController";

const Router = express.Router();

Router.post("/superlogin", superAdminLogin);

Router.get("/getUsers", superAdminAuth, getallUsers);
Router.delete("/deleteUser/:id", superAdminAuth, deleteUser);
Router.get("/allHotels", superAdminAuth, getAllHotel);
Router.get("/allAdmin", superAdminAuth,getAllAdmin)
Router.delete("/deleteAdmin/:id",superAdminAuth, deleteAdmin)

export default Router;
