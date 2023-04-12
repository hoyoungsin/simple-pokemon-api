import mongoose from "mongoose";

const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost/simple-pokemon-api";

mongoose
    .connect(mongoURL)
    .catch((error) =>
        console.log("Error connecting to MongoDB: ", error.message)
    );
    
mongoose.connection.on("disconnected", () =>
    console.log("Disconnected from Mongo DB!")
);

mongoose.connection.on("error", (error) =>
    console.log(`MongooseDB connection error: ${error}`)
);

export default mongoose.connection;