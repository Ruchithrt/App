import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
const { asyncError, errorHandler } = require("@/middlewares/error");
import bcrypt from "bcrypt";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");

  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return errorHandler(res, 400, "Please enter all fields");

  await connectDB();

  let user = await User.findOne({ email });

  if (user) return errorHandler(res, 400, "User already exists");

  const hashpassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashpassword,
  });

  const token = generateToken(user._id);

  cookieSetter(res, token, true);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user,
  });
});

export default handler;
