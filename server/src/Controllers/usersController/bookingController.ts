import express, { Request, Response, NextFunction, Router } from "express";
import { v4 as UUIDV4 } from "uuid";
import { BookingInstance } from "../../model/usersModel/bookingModel";
import {
  CreateBookingSchema,
  options,
  UpdateBookingSchema,
} from "../../utils/utils";

export const createBooking = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.user;

    if (!req.user) {
      return res.status(400).json({
        Error: "login as a user",
      });
    }

    const bookingId = UUIDV4();

    const { numberOfGuest, checkIn, checkOut, location } = req.body;
    const validationResult = CreateBookingSchema.validate(req.body, options);

    if (validationResult.error) {
      return res
        .status(400)
        .json({ Error: validationResult.error.details[0].message });
    }
    const newBooking = await BookingInstance.create({
      userId,
      bookingId,
      numberOfGuest,
      checkIn,
      checkOut,
      location,
    });

    return res.status(200).json({ msg: "Booking created", newBooking });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookingId = req.params.id;
    const book = await BookingInstance.findOne({ where: { bookingId } });
    if (!book) {
      return res.status(400).json({
        Error: "booking does not exist",
      });
    }
    await book.destroy();
    return res.status(200).json({
      msg: "You have successfully deleted the booking",
      book,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookingId = req.params.id;

    const { numberOfGuest, checkIn, checkOut, location } = req.body;
    const validationResult = UpdateBookingSchema.validate(req.body, options);

    if (validationResult.error) {
      return res
        .status(400)
        .json({ Error: validationResult.error.details[0].message });
    }
    const bookingToUpdate = await BookingInstance.findOne({
      where: { bookingId },
    });
    if (!bookingToUpdate) {
      return res.status(400).json({
        Error: "booking not found",
      });
    }
    const updatedbooking = bookingToUpdate.update({
      numberOfGuest,
      checkIn,
      checkOut,
      location,
    });
    const newbooking = await BookingInstance.findOne({
      where: { bookingId },
    });
    return res.status(200).json({
      msg: "You have successfully updated your booking",
      newbooking,
    });
  } catch (err) {
    console.log(err);
  }
};
