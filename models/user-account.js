import mongoose from "mongoose"; //mongoose module

const Schema = mongoose.Schema;
//schema class constructor function that allows you to define
//a data structure and the data type of a MongoDB doc.

const userAccountSchema = new Schema({
  userName: { type: String, required: true },
  passWord: { type: String, required: true },
  profileImg: [{ type: String }],
  email: { type: String, required: true },
  deliveryMethod: [String],
  firstName: { type: String },
  lastName: { type: String },
  address1: { type: String },
  country: { type: String },
  zipCode: { type: Number },
  city: { type: String },
  state: { type: String },
  phoneNumber: { type: Number, required: true },
  cardNumber: { type: Number },
});

export default mongoose.model("user-accounts", userAccountSchema);
