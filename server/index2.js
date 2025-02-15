import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/messages.js";
import cloudRoutes from "./routes/cloudinary.js";
import { Server } from "socket.io";  // Correct import for socket.io
import Multer from "multer";
import http from 'http';  // Correct import for http module
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/cloud", cloudRoutes);

// Server setup
const PORT = process.env.PORT || 5001;

// Use the http module's createServer method to create the server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

// Setting up socket.io on the server
const io = new Server(server, {
  cors: {
    origin: '*',
    credentials: true
  }
});

// Global map to store online users
global.onlineUsers = new Map();

// Socket.io event handling
io.on("connection", (socket) => {
  console.log('Connected to socket', socket.id);
  global.chatSocket = socket;

  // Handle adding user to the online users list
  socket.on("add-user", (userId) => {
    global.onlineUsers.set(userId, socket.id);
  });

  // Handle receiving a message
  socket.on("send-msg", (data) => {
    const sendUnderSocket = global.onlineUsers.get(data.to);
    if (sendUnderSocket) {
      socket.to(sendUnderSocket).emit("msg-receive", data.message);
    }
  });

  // Handle receiving a notification
  socket.on("send-notification", (data) => {
    const sendUnderSocket = global.onlineUsers.get(data.to);
    if (sendUnderSocket) {
      socket.to(sendUnderSocket).emit("notification-receive", data.message);
    }
  });
});
