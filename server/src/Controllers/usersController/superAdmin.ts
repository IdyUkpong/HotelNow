import { Response, Request, NextFunction } from "express";
import { JsonWebTokenError } from "jsonwebtoken";
import { UserInstance } from "../../model/usersModel/userModel";
import jwt from "jsonwebtoken";
import { AdminInstance } from "../../model/hotelModel/adminModel";
import { HotelInstance } from "../../model/hotelModel/hotelModels";


const jwtsecret = process.env.JWT_SECRET as string;

export const superAdminLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    // Check if the email and password match the hardcoded admin credentials
    if (email === "super@admin.com" && password === "superadmin") {
      // Generate a token for the admin
      const token = jwt.sign({ email }, jwtsecret, { expiresIn: "30d" });

      // Set the token in a cookie
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      // Return a success message and the token to the client
      res.status(200).json({ msg: "Welcome to dashboard", token });
    } else {
      // Return an error message if the email or password is incorrect
      res.status(400).json({ error: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getallUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allUsers = await UserInstance.findAndCountAll();
    if (!allUsers) {
      res.status(400).json({ msg: "No user found" });
    }
    res.status(200).json({ msg: "all Users", allUsers });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const user = await UserInstance.findOne({ where: { userId } });
    if (!user) {
      return res.status(400).json({
        Error: "User does not exist",
      });
    }

    await user.destroy();

    return res.status(400).json({
      msg: "User deleted Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllAdmin =async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
      
    const allAdmin = await AdminInstance.findAndCountAll();
    if (!allAdmin) {
      res.status(400).json({ msg: "No user found" });
    }
    res.status(200).json({ msg: "all Users", allAdmin });
    
  } catch (error) {
    console.log(error);
    
  }
  
}

export const deleteAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("hey");
    
    const adminId = req.params.id;
    console.log(adminId);
    const admin = await AdminInstance.findOne({ where: { adminId } });
    if (!admin) {
      return res.status(400).json({
        Error: "admin does not exist",
      });
    }

    await admin.destroy();

    return res.status(200).json({
      msg: "admin deleted Successfully",
      admin,
    });

  } catch (err) {
    console.log(err);
  }
};


export const getAllHotel =async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
      
    const Hotels= await HotelInstance.findAndCountAll();
    if (!Hotels) {
      res.status(400).json({ msg: "No user found" });
    }
    res.status(200).json({ msg: "all Users", Hotels });
    
  } catch (error) {
    console.log(error);
    
  }
  
}
