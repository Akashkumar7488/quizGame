import mongoose from "mongoose";

export const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!);  //! is used for that i am using string datatype for conn
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully!!");
        })
        connection.on('error', () => {
            console.log("MongoDB connection not successfully");
            process.exit();
        })
    }
    catch (error) {
    console.log(error);
    }
}