import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { notFound, errorHandler } from "../middlewares/errorHandler.js";
import zoomRoute from "../routes/zoomRoute.js";
import path from "path";

//config env
dotenv.config();

//init app
const app = express();

//init view engine
app.set("view engine", "ejs");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//route handler
app.use("/", zoomRoute);

//error handler
app.use(notFound);
app.use(errorHandler);

export default app;
