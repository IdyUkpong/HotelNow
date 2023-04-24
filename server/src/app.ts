import createError from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import db from "./config/db.config";
import cors from "cors";

import usersRouter from "./routes/users";
import homePage from "./routes/page";
import adminRouter from "./routes/admin";

import superAdminRouter from "./routes/superadmin";

db.sync()
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/superAdmin", superAdminRouter);
app.use("/", homePage);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: createError.HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
