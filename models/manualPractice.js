// import { MongoClient } from "mongodb";
/**
 * Start by importing the MongoClient object from the mongodb npm package. MongoClient is an object used to initiate the connection with the database.
 */

//establish a conncetion to the mongoDB cluster using the specified uri
// export async function connectToCluster(uri) {
//   let mongoClient;

//   try {
//     mongoClient = new MongoClient(uri); //new instance of a connection to the cluster
//     console.log("Connecting to MongoDB Atlas cluster...");

//     await mongoClient.connect();
//     console.log("Successfully connected to MongoDB Atlas!");

//     return mongoClient;
//   } catch (error) {
//     console.error("Connection to MongoDB Atlas failed!", error);
//     process.exit(); //The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code.
//   }
// }

// export async function executeGuestCrudOperations() {
//   const uri = process.env.DB_URI;
//   let mongoClient;

//   try {
//     mongoClient = await connectToCluster(uri);

//     const db = mongoClient.db("ClosetNARo");
//     const collection = db.collection("guests");

//     console.log("CREATE GUEST");
//     // await createGuestDocument(collection);
//     const result = await collection.insertOne({
//         email: "karynkhuston@gmail.com",
//         delivery_method: ["USPS first class", "4.20"],
//         first_name: "dev",
//         last_name: "devhuston",
//         address_1: "1 WEST 58th Street",
//         address_2: "",
//         country: "United States",
//         zip_code: "10019",
//         city: "New York",
//         state: "NY",
//         phone_number: "3479128007",
//         card_number: "1234-4563-5653-6543",
//         gift_or_discount_code: "eB66RtY",
//         use_shipping_address: "true",
//         bill_first: "",
//         bill_last: "",
//         bill_address_1: "",
//         bill_address_2: "",
//         bill_country: "",
//         bill_zip_code: "",
//         bill_city: "",
//         bill_state: "",
//         bill_phone_number: "",
//         review_and_purchase: "true",
//         products: [
//           {
//             name: "Product 1",
//             quantity: "2",
//             size: "M",
//             price: "20.00",
//           },
//           {
//             name: "Product 2",
//             quantity: "1",
//             size: "L",
//             price: "15.00",
//           },
//         ],
//         total: "35.00",
//       });
//       console.log(result.insertedId)
//   } finally {
//     await mongoClient.close();
//   }
// }

//create a new document using insertOne()
// export async function createGuestDocument(collection) {
//     guestDocument._id = new ObjectId();
//   await collection.insertOne(guestDocument);
// }
