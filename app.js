import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
export const app = express();

config({
  path: "./data/config.env",
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);
//using routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v2/tasks", taskRoutes);

//using error middleware
app.use(errorMiddleware);
