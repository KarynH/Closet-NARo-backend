
import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());

import bodyParser from "body-parser";
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Hello from closet NARo");
});

app.get("*", (req, res) => {
  res.status(404).send("invalid page");
});






export default app;
