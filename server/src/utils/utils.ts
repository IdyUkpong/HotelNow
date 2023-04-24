import Joi from "joi";
export const userLoginSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{6,10}$/)
    .required(),
});

export const options = {
  //to structure the error message
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
export const RegisterUserSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().required(),
  name: Joi.string().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{6,10}$/)
    .required(),
  confirm_password: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirm password")
    .messages({ "any.only": "{{#label}} does not match" }),
  phoneNumber: Joi.string().required(),
});

export const CreateBookingSchema = Joi.object().keys({
  numberOfGuest: Joi.number().required(),
  checkIn: Joi.string().required(),
  checkOut: Joi.string().required(),
  location: Joi.string().required(),
});

export const UpdateBookingSchema = Joi.object().keys({
  numberOfGuest: Joi.number(),
  checkIn: Joi.string(),
  checkOut: Joi.string(),
  location: Joi.string(),
});

export const adminSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  confirm_password: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirm password")
    .messages({ "any.only": "{{#label}} does not match" }),
});

export const hotelSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required(),
  image: Joi.string().required(),
});

export const UpdateHotelSchema = Joi.object({
  name: Joi.string(),
  location: Joi.string(),
  description: Joi.string(),
  price: Joi.string(),
  image: Joi.string(),
});

export const AdminLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
