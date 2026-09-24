// Handles the connection to MongoDB using Mongoose.
// Called once from server.js when the app starts.

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    // Stop the server if we can't reach the database — nothing else will work anyway.
    process.exit(1);
  }
};

export default connectDB;
