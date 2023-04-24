import express, { Request, Response, NextFunction, Router } from "express";
import { UserInstance } from "../../model/usersModel/userModel";
import {
  userLoginSchema,
  RegisterUserSchema,
  options,
} from "../../utils/utils";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 as UUIDV4 } from "uuid";
import { BookingInstance } from "../../model/usersModel/bookingModel";

const jwtsecret = process.env.JWT_SECRET as string;

export const Login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const validation = userLoginSchema.validate(req.body, options);
    if (validation.error) {
      res.status(400).json({ error: validation.error.details[0].message });
    }

    const user = (await UserInstance.findOne({
      where: { email },
    })) as unknown as { [key: string]: string };

    if (!user) {
      res.status(400).json({ error: "Kindly register as a user" });
    }
    const { userId } = user;
    const token = jwt.sign({ userId }, jwtsecret, { expiresIn: "30d" });
    console.log(token);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    let validUser = await bcrypt.compare(password, user.password);

    if (validUser) {
     return res.status(200).json({ msg: "Welcome to dashboard", user, token });
    }
    res.status(400).json({ error: "invalid password or email" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, phoneNumber, confirm_password } = req.body;
    const id = UUIDV4();

    const validation = RegisterUserSchema.validate(req.body, options);
    if (validation.error) {
      return res
        .status(400)
        .json({ error: validation.error.details[0].message });
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await UserInstance.findOne({
      where: { email: email },
    });
    if (!user) {
      let newUser = await UserInstance.create({
        userId: id,
        name,
        email,
        password: passwordHash,
        phoneNumber,
      });

      const User = (await UserInstance.findOne({
        where: { email },
      })) as unknown as { [key: string]: string };

      const { userId } = User;

      const token = jwt.sign({ userId }, jwtsecret, { expiresIn: "30mins" });

      res.cookie("token", token, { httpOnly: true, maxAge: 30 * 60 * 100 });

      return res
        .status(201)
        .json({ msg: "You are successfully registered", newUser, token });
    }
    return res.status(409).json({ msg: "email | phoneNumber already exist" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getBooksbyUser = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.user;

    const books = await BookingInstance.findAndCountAll({
      where: { userId },
    });
    if (!books) {
      return res.status(400).json({ msg: "No booking" });
    }
    return res.status(200).json({ msg: "Mybooking(s)", books });
  } catch (error) {
    console.log(error);
  }
};
