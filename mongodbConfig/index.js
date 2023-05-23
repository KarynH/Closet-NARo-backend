import { config } from "dotenv";

config();
console.log(process.env.DB_URI);
// start mongodb:  nodemon mongodbConfig/index.js

/*
 invoke config function to load variables from .env file into proccess.env
 to log connection uri
 * use of "type":"module" in package.json¿
 * --ECMAScript modules
 * ES module scopes use import instead of require
 * all modules have to be used using "import" ex from "ex"
 * ex.config()
 */
