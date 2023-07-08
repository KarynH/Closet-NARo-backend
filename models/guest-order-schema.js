import mongoose from "mongoose";
const Schema = mongoose.Schema; //declare schema object to define data structure
//mongoose.schema is a constructor method given by the mongoose package that returns a new schema obj.

const guestSchema = new Schema({
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
        type: mongoose.Schema.Types.ObjectId,
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

export default mongoose.model("guestOrders", guestSchema);
//exporting the guestSchema model to the mongoose package
//"guestOrders" is the collection name that is assigned to the mongoose model constructor and is used to reference this model in the application's  code.
//the mongoose model constructor is a constructor method that extends the mongoose package and creates the model using the new schema provided.
//this allows us to interact with this data structure and modfiy it's behavior.

//object id must be assgined excplicitly if it's being used in schema, otherwise mongoDB will assign it auto
