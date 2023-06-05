import mongoose from "mongoose"; //mongoose module

const Schema = mongoose.Schema;
//schema class constructor function that allows you to define
//a data structure and the data type of a MongoDB doc.

const userAccountSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: { type: String },
  passWord: { type: String },
  email: { type: String },
  deliveryMethod: [String],
  firstName: { type: String },
  lastName: { type: String },
  address1: { type: String },
  country: { type: String },
  zipCode: { type: Number },
  city: { type: String },
  state: { type: String },
  phoneNumber: { type: Number },
  cardNumber: { type: Number },
  favoriteProducts: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      name: { type: String },
      quantity: { type: Number },
      size: { type: String },
      price: { type: String },
      sale: { type: String },
      imageUrl: [{ type: String }],
    },
  ],
  OrderHistory: [
    {
      date: { type: Date },
      name: { type: String },
      size: { type: String },
      price: { type: String },
      imageUrl: { type: String },
    },
  ],
});

module.exports = mongoose.model("UserAccount", userAccountSchema);
