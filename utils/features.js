import mongoose from "mongoose";
// import { serialize } from "cookie";
// import jwt from "jsonwebtoken";
// import { User } from "../models/user";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Database Connected on ${connection.host}`);
};
