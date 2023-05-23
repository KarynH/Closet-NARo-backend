const express = require("express");
const app = express();

app.use(express.json());

app.get("*", (req, res) => {
  res.status(404).send("invalid page");
});
module.exports = app;
