import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/messages.js";
import cloudRoutes from "./routes/cloudinary.js";
import { Server } from "socket.io";
import Multer from "multer";
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Improved MongoDB connection with better error handling
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000 // Reduce timeout for faster error detection
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Connect to MongoDB before starting the server
connectDB().then(() => {
  const PORT = process.env.PORT || 5001;
  const server = http.createServer(app);
  
  server.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
  });
  
  // Setting up socket.io on the server
  const io = new Server(server, {
    cors: {
      origin: process.env.NODE_ENV === 'production' 
        ? 'https://your-frontend-domain.com' 
        : 'http://localhost:5173',
      credentials: true
    }
  });

  // Routes
  app.use("/api/auth", authRoutes);
  app.use("/api/messages", messageRoutes);
  app.use("/api/cloud", cloudRoutes);

  // Global map to store online users
  global.onlineUsers = new Map();

  // Socket.io event handling
  io.on("connection", (socket) => {
    console.log('Connected to socket', socket.id);
    global.chatSocket = socket;

    socket.on("add-user", (userId) => {
      global.onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
      const sendUnderSocket = global.onlineUsers.get(data.to);
      if (sendUnderSocket) {
        socket.to(sendUnderSocket).emit("msg-receive", data.message);
      }
    });

    socket.on("send-notification", (data) => {
      const sendUnderSocket = global.onlineUsers.get(data.to);
      if (sendUnderSocket) {
        socket.to(sendUnderSocket).emit("notification-receive", data.message);
      }
    });
  });
}).catch(error => console.error(`Failed to connect to MongoDB: ${error.message}`));