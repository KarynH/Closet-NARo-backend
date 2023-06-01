import mongoose from "mongoose";
import { Router } from "express";
import { Express } from "express";
const guestOrder = express.Router();

import guestOrderSchema from "../models/guest-order-schema.js";
// import guestOrderValidation from "../middleware/guest-order.js"

guestOrder.route("/guest-checkout").post((req, res) => {
  guestOrderSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = guestOrder;
