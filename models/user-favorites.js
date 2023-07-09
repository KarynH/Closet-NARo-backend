import mongoose from "mongoose";

const schema = mongoose.Schema;

const userAccountFavorites = new Schema([
  {
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user-accounts",
    },
    name: { type: String },
    quantity: { type: Number },
    size: { type: String },
    price: { type: String },
    sale: { type: String },
    imageUrl: [{ type: String }],
  },
]);

export default mongoose.model("userAccount-favorites", userAccountFavorites);
