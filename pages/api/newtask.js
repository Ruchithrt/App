import { connectDB } from "../../utils/features";
import { Task } from "../../models/task";
import { asyncError, errorHandler } from "@/middlewares/error";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST method allowed");

  await connectDB();

  const { title, description } = req.body;

  if (!title || !description)
    return errorHandler(res, 400, "Please Enter All fields");

  await Task.create({
    title,
    description,
    user: "507f1f77bcf86cd799439011",
  });

  res.json({
    success: true,
    message: "Task created",
  });
});

export default handler;
