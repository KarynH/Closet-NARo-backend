import { MongoClient } from "mongodb";
/**
 * Start by importing the MongoClient object from the mongodb npm package. MongoClient is an object used to initiate the connection with the database.
 */

// wait for the connection to be established
export async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB Atlas cluster...");

    await mongoClient.connect(); //Connect to MongoDB using a url
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit(); //The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code.
  }
}

export async function executeGuestCrudOperation() {
    
}