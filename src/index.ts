import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";

import authRoutes from "./routes/authRoutes";
import classroomRoutes from "./routes/classroomRoutes";
import assignmentRoutes from "./routes/assignmentRoutes";
import submissionRoutes from "./routes/submissionRoutes";
import quizRoutes from "./routes/quizRoutes";
import analyticsRoutes from "./routes/analyticsRoutes";
import progressRoutes from "./routes/progressRoutes";
import gamificationRoutes from "./routes/gamificationRoutes";
import leaderboardRoutes from "./routes/leaderboardRoutes";
import calendarRoutes from "./routes/calenderRoutes";
import resourceRoutes from "./routes/resourceRoutes";
import forumRoutes from "./routes/forumRoutes";
import notificationRoutes from "./routes/notificationRoutes";
import lectureRoutes from "./routes/lectureRoutes";
import liveClassRoutes from "./routes/liveClassRoutes";
import aiAssistantRoutes from "./routes/aiRoutes";
import userRoutes from "./routes/userRoutes";

import { errorHandler } from "./middleware/errorMiddleware";

// Config
dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Smart Classroom API 🚀",
    version: "1.0.0",
  });
});

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/classrooms", classroomRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/gamification", gamificationRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/calendar", calendarRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/forum", forumRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/lectures", lectureRoutes);
app.use("/api/live", liveClassRoutes);
app.use("/api/ai", aiAssistantRoutes);
app.use("/api/users", userRoutes);

// Error Middleware
app.use(errorHandler);

// Socket Setup
io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

// console.log(process.env.MONGO_URI);

// DB & Server Start
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI!;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection error:", err));
