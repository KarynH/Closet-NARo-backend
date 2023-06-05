import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userOrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "UserAccount",
  },
  orderNumber: {
    type: String,
    required: true,
  },
  email: { type: String },
  deliveryMethod: [String],
  giftOrDiscountCode: { type: String },
  useShippingAddress: { type: Boolean },
  cardNumber: { type: Number, required: true },
  giftOrDiscountCode: { type: String },
  useShippingAddress: { type: Boolean },
  billFirst: { type: String },
  billLast: { type: String },
  billCardNumber: { type: Number },
  billAddress: { type: String },
  billCountry: { type: String },
  billZipCode: { type: Number },
  billCity: { type: String },
  billState: { type: String },
  billPhoneNumber: { type: Number },
  reviewAndPurchase: { type: Boolean },
  products: [
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
  total: { type: String },
});

module.exports = mongoose.model("UserOrder", userOrderSchema);
