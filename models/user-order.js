import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userOrderSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    ref: "user-accounts",
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
        ref: "products",
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

export default mongoose.model("user-orders", userOrderSchema);
