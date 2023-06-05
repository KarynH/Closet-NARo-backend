import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from closet NARo");
});

app.get("*", (req, res) => {
  res.status(404).send("invalid page");
});
export default app;
