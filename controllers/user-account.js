import express from "express";

const userAccount = express.Router();

import userAccountModel from "../models/user-account-schema.js";
userAccount.post("/", async (req, res) => {
  try {
    const newAccountCreated = new userAccountModel(req.body);
    const saveAccountToDataBase = await newAccountCreated.save();

    res.status(200).json(saveAccountToDataBase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default userAccount;