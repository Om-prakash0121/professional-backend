// require("dotenv").config({path: "./.env"});
import dotenv from "dotenv";
import dbConnects from "./db/dbConnects.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

// Connect to the database and start the server
dbConnects()
  .then(() => {
    
    //if some error occurs in the server, it will be logged to the console
    app.on("error", (err) => {
      console.error("Server error:", err);
    });
    
    // Start the server after successful database connection
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });

  })
  .catch((error) => {
    console.error("MONGODB CONNECTION FAILED :", error);
  });

// ;(async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGO_URI}/${DB_NAME}`
//     );
//     console.log(
//       `\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host} \n`
//     );
//   } catch (error) {
//     console.log("MONGODB CONNECTION ERROR : ", error);
//     process.exit(1);
//   }
// })();
