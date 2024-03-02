import { User } from "@/models/user";
import { connectDB } from "@/utils/features";
const { asyncError, errorHandler } = require("@/middlewares/error");

const handler = asyncError(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return errorHandler(res, 400, "Please enter all fields");

  await connectDB();

  const user = await User.findOne({ email });

  if (user) return errorHandler(res, 400, "User already exists");

  await User.create({
    name,
    email,
    password,
  });
});

export default handler;
