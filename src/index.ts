import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";



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


// Error Middleware


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
