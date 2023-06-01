import mongoose from "mongoose";
const Schema = mongoose.Schema;

const guestSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  orderNumber: { type: String, required: true, unique: true },
  email: { type: String },
  deliveryMethod: [String],
  firstName: { type: String },
  lastName: { type: String },
  address1: { type: String },
  address2: { type: String },
  country: { type: String },
  zipCode: { type: Number, required: true },
  city: { type: String },
  state: { type: String },
  phoneNumber: { type: Number, required: true },
  cardNumber: { type: Number, required: true },
  giftOrDiscountCode: { type: String },
  useShippingAddress: { type: Boolean },
  billFirst: { type: String },
  billLast: { type: String },
  billCardNumber: { type: Number },
  billAddress1: { type: String },
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

module.exports = mongoose.model("GuestOrder", guestSchema);
