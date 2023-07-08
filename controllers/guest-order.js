import express from "express";

const guestOrder = express.Router();

import GuestOrderModel from "../models/guest-order-schema.js";
guestOrder.post("/", async (req, res) => {
  try {
    const newGuestOrder = new GuestOrderModel(req.body);
    const OrdersavedToDatabase = await newGuestOrder.save();

    res.status(200).json(OrdersavedToDatabase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

guestOrder.get("/:id", async (req, res) => {
  try {
    const orderIdRequested = req.params.id;
    const retreiveOrderWithId = await GuestOrderModel.findById(
      orderIdRequested
    );

    if (!orderIdRequested) {
      return res.status(404).json({ message: "Guest order not found" });
    }

    const respondWithOrderDetails = [retreiveOrderWithId, guestOrder.email];
    res.status(200).json({ orderDetails: respondWithOrderDetails });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default guestOrder;
