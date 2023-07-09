import express from "express";

const userAccount = express.Router();

import userAccountModel from "../models/user-account.js";
userAccount.post("/", async (req, res) => {
  try {
    const newAccountCreated = new userAccountModel(req.body);
    const saveAccountToDataBase = await newAccountCreated.save();

    res.status(200).json(saveAccountToDataBase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

import userOrderHistoryModel from "../models/user-order-history.js"
userAccount.post("/:id", async (req, res) => {
  try{
    const orderHistory = new userOrderHistoryModel(req.body);
    // const addOrderToProfileHistory = 
  }
})
//check if with validation of dupe accounts are being cretaed
//!phone, !email

//make history local storage feature for guest and users ???
export default userAccount;
