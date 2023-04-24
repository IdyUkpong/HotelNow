import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

import {
  RegisterUserSchema,
  options,
  adminSchema,
  AdminLoginSchema,
} from "../../utils/utils";
import { AdminInstance } from "../../model/hotelModel/adminModel";
import { HotelInstance } from "../../model/hotelModel/hotelModels";

const jwtsecret = process.env.JWT_SECRET as string;
console.log("here");
export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { name, password, email, confirm_password } = req.body;

    const validation = adminSchema.validate(req.body, options);

    if (validation.error) {
      return res
        .status(400)
        .json({ error: validation.error.details[0].message });
    }

    const existingUser = await AdminInstance.findOne({
      where: { email: email },
    });
    if (existingUser) {
      res.status(400).json({ error: "You are already a registered user" });
    }
    const encryptedPassword = await bcrypt.hash(password, 8);

    const newAdmin = await AdminInstance.create({
      adminId: uuidv4(),
      name,
      email,
      password: encryptedPassword,
    });
    return res
      .status(201)
      .json({ message: "Admin has been created successfully", newAdmin });
  } catch (err) {
    console.log(err);
  }
};

export const adminLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const validation = AdminLoginSchema.validate(req.body, options);
    if (validation.error) {
      res.status(400).json({ error: validation.error.details[0].message });
    }

    const user = (await AdminInstance.findOne({
      where: { email },
    })) as unknown as { [key: string]: string };

    if (!user) {
      res.status(400).json({ error: "Kindly register as a user" });
      return;
    }
    const { adminId } = user;
    const token = jwt.sign({ adminId }, jwtsecret, { expiresIn: "30d" });
    console.log(token);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    let validUser = await bcrypt.compare(password, user.password);

    if (validUser) {
      res.status(200).json({ msg: "Welcome to dashboard", user, token });
      return;
    }
    res.status(400).json({ error: "invalid password or email" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMyHotel = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { adminId } = req.user;
    if (!adminId) {
      return res.status(400).json({ msg: "Kindly signin as admin" });
    }
    const hotels = await HotelInstance.findAndCountAll({
      where: { adminId },
    });
    if (!hotels) {
      return res.status(400).json({ msg: "No hotel" });
    }
    return res.status(200).json({ msg: "Myhotels(s)", hotels });
  } catch (error) {
    console.log(error);
  }
};
