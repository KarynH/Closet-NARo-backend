import mongoose from "mongoose";
import { Router } from "express";
import { Express } from "express";
const guestOrder = express.Router();

import guestOrderSchema from "../models/guest-order-schema.js";
// import guestOrderValidation from "../middleware/guest-order.js"

guestOrder.get('/guest-order', (req, res) =>{
  res.status(200).send('checkout order for guest')
})


module.exports = guestOrder;
