import { MongoClient } from "mongodb";
import guestDocument from "../models/guestDocument.js";
import { ObjectId } from "mongodb";

/**
 * Start by importing the MongoClient object from the mongodb npm package. MongoClient is an object used to initiate the connection with the database.
 */



//establish a conncetion to the mongoDB cluster using the specified uri
export async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri); //new instance of a connection to the cluster
    console.log("Connecting to MongoDB Atlas cluster...");

    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit(); //The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code.
  }
}

//db() , select database
export async function executeGuestCrudOperations() {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);

    const db = mongoClient.db("ClosetNARo");
    const collection = db.collection("guests");

    console.log("CREATE GUEST");
    await createGuestDocument(collection);
  } finally {
    await mongoClient.close();
  }
}

//create a new document using insertOne()
export async function createGuestDocument(collection) {
    guestDocument._id = new ObjectId();
  await collection.insertOne(guestDocument);
}
