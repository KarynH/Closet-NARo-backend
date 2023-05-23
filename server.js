import app from "./app.js"

//configuration
import dotenv from "dotenv"
dotenv.config()


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`PORT:${PORT}`);
});
