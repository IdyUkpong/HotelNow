import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AdminInstance } from "../model/hotelModel/adminModel";
import { UserInstance } from "../model/usersModel/userModel";

const jwtsecret = process.env.JWT_SECRET as string;

export const auth = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const auth = req.cookies.token;

    if (!auth) {
      res.status(401).json({ error: "Sign in as User" });
    }

    let verified = jwt.verify(auth, jwtsecret);
    if (!verified) {
      res.status(401).json({ error: "you can access this route" });
    }
    const { userId } = verified as { [key: string]: string };

    const user = await UserInstance.findOne({ where: { userId } });

    if (!user) {
      res.status(401).json({ error: "Register as a user" });
    }

    req.user = verified;

    next();
  } catch (error) {}
};

export const superAdminAuth = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {

    const auth = req.cookies.token;

    if (!auth) {
      res.status(401).json({ error: "Sign in as User" });
    }

    let verified = jwt.verify(auth, jwtsecret);
    console.log(verified);
    if (!verified) {
      res.status(401).json({ error: "you can access this route" });
    }

    req.user = verified;

    next();
  } catch (error) {}
};

export const adminAuth = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('How far')
    const auth = req.cookies.token;

    if (!auth) {
      res.status(401).json({ error: "Sign in as Admin" });
    }

    let verified = jwt.verify(auth, jwtsecret);

    if (!verified) {
      res.status(401).json({ error: "you can access this route" });
    }
    const { adminId } = verified as { [key: string]: string };

    const user = await AdminInstance.findOne({ where: { adminId } });

    if (!user) {
      res.status(401).json({ error: "Register as a user" });
    }

    req.user = verified;

    next();
  } catch (error) {}
};