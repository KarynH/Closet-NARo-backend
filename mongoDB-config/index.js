/**
 *  import the dotenv package. enables the ECMAScript modules, we should
 *  use the import/export syntax instead of the CommonJS require() function.**/
import { config } from "dotenv";

config();
console.log(process.env.DB_URI);
/**
 * invoke config function to load variables from .env file into proccess.env
 * to log connection uri
 */

/**
 * 
 * use of "type":"module" in package.json¿
 * --ECMAScript modules
 * ES module scopes use import instead of require
 * all modules have to be used using "import" ex from "ex"
 * ex.config()
 * 
 */
