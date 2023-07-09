import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const accountOrderHistory = new Schema({
  date: { type: Date },
  name: { type: String },
  size: { type: String },
  price: { type: String },
  imageUrl: { type: String },
  accountId: {
    type: Schema.Types.ObjectId,
    ref: "user-accounts",
  },
});

export default mongoose.model("account-order-history", accountOrderHistory);
