import express from "express";
const guestOrder = express.Router();


import GuestOrderModel from "../models/guest-order-schema.js";

guestOrder.post("/", async (req, res) => {
  try {
    const newGuestOrder = new GuestOrderModel(req.body);
    const OrdersavedToDatabase = await newGuestOrder.save();
    // const guestOrderData = await GuestOrderModel.create(req.body);
    res.status(200).json(OrdersavedToDatabase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default guestOrder;
