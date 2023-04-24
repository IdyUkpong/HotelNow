import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { HotelInstance } from "../../model/hotelModel/hotelModels";
import { upload } from "../../utils/image-upload";
import { hotelSchema, options, UpdateHotelSchema } from "../../utils/utils";
import fs from "fs";

import multer from "multer";

const storage = multer.diskStorage({
  destination:(req:Request,file,cb)=>{
    cb(null,"../upload")
  },
  filename:(req:Request,file,cb)=>{
    cb(null,file.filename + "" + Date.now()+ ""+ file.originalname);
  }
});

export const uploaded= multer({
  storage:storage,
}).single("image")

export  const includeHotel =async ( req: Request  |any, 
  res: Response)=> {
    try {
      const { adminId } = req.user;
      const hotelId = uuidv4();
      const { name, location, description, price } = req.body;
      const image=req.file?.filename
      const newHotel = await HotelInstance.create({
        hotelId,
        name,
        location,
        description,
        price,
        image,
        adminId,
      })
    res.send("sucessful")
    } catch (error) {
      console.log(error)
    }
   
}

export const getAllHotel = async (
  req: Request, 
  res: Response) => {
  try {
    const hotels = await HotelInstance.findAndCountAll();
    return res.status(200).json({
      data: hotels,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: "Server Error",
    });
  }
};

export const createHotel = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("abeg work")
    const { adminId } = req.user;

    if (!req.user) {
      return res.status(400).json({
        Error: "login as a user",
      });
    }
    const hotelId = uuidv4();

    const { name, location, description, price, image } = req.body;
    const validationResult = hotelSchema.validate(req.body, options);

    if (validationResult.error) {
      return res
        .status(400)
        .json({ Error: validationResult.error.details[0].message });
    }
    const newHotel = await HotelInstance.create({
      hotelId,
      name,
      location,
      description,
      price,
      image,
      adminId,
    });
    return res.status(201).json({
      message: "Hotel has been created",
      newHotel,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: "Server Error",
    });
  }
};

export const deleteHotel = async (req: Request | any, res: Response) => {
  try {
    const hotelId = req.params.id;
    const hotel = await HotelInstance.findOne({ where: { hotelId } });
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    await hotel.destroy();
    return res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: "Server Error",
    });
  }
};

export const updateHotel = async (req: Request | any, res: Response) => {
  try {
    const hotelId = req.params.id;
    const { name, location, description, price } = req.body;
    const validationResult = UpdateHotelSchema.validate(req.body, options);

    if (validationResult.error) {
      return res
        .status(400)
        .json({ Error: validationResult.error.details[0].message });
    }

    const hotel = await HotelInstance.findOne({ where: { hotelId } });
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    const newHotel = await hotel.update({
      name,
      location,
      description,
      price,
    });
    return res.status(200).json({
      message: `Hotel has been updated successfully`,
      newHotel,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: `Internal server error`,
    });
  }
};

//create an hotel with upload image

export const addHotel = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { adminId } = req.user;

    if (!req.user) {
      return res.status(400).json({
        Error: "login as a user",
      });
    }

    const validationResult = hotelSchema.validate(req.body, options);

    if (validationResult.error) {
      return res
        .status(400)
        .json({ Error: validationResult.error.details[0].message });
    }

    upload.single("image")(req, res, async (err: any) => {
      if (err) {
        return res.status(400).json({ Error: err.message });
      }
      const image = req.file ? `/images/${req.file.filename}` : null;
      // Check if a file was uploaded
      if (!req.file) {
        return res.status(400).json({
          Error: "No image uploaded",
        });
      }

      const { name, location, description, price } = req.body;

      const hotelId = uuidv4();

      const newHotel = await HotelInstance.create({
        hotelId,
        name,
        location,
        description,
        price,
        image,
        adminId,
      });

      return res.status(201).json({
        message: "Hotel has been created",
        newHotel,
      });

      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: "Server Error",
    });
  }
};
