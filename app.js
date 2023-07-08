import express from "express";
const app = express();
app.use(express.json());

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
app.use(cors());

import bodyParser from "body-parser";
app.use(bodyParser.json());

import mongoose from "mongoose";
const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection to mongoDB successful");
  })
  .catch((error) => {
    console.log("error connecting to mongoDB", error);
  });

import guestOrderController from "./controllers/guest-order.js";
app.use("/guestOrder", guestOrderController);

app.get("/", (req, res) => {
  res.send("Hello from closet NARo");
});

app.get("*", (req, res) => {
  res.status(404).send("invalid page");
});

export default app;
