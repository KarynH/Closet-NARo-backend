import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  size: { type: String },
  sale: { type: String, default: "none" },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});

export default mongoose.model("products", productSchema);
