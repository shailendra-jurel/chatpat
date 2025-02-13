import express from express
import cors from cors
import mongoose from mongoose
// import authRoutes from "./routes/auth"
// import messageRoutes from "./routes/messages"
// import cloudRoutes from "./routes/cloudinary"
// import socket from "socket.io"
// import Multer from "multer"
// import http from 'http'
// import httpServer from  'http.createServer'
import dotenv from 'dotenv.config'


    
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
  
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/cloud", cloudRoutes);

const PORT = process.env.PORT || 5000
const server = app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
})

// const io = socket(server,{
//   cors :{
//     origin : '*',
//     credentials : true
//   }
// })

// global.onlineUsers = new Map();

// io.on("connection", (socket)=>{
//   console.log('connect to socket', socket.id);
//   global.chatSocket = socket;

//   socket.on("add-user", (userId)=>{
//     onlineUsers.set(userId, socket.id);
//   })

//   socket.on("send-msg", (data)=>{
//     const sendUnderSocket = onlineUsers.get(data.to);
//     if(sendUnderSocket){
//       socket.to(sendUnderSocket).emit("msg-recieve", data.message)
//     }
//   })

//   socket.on("send-notification", (data)=>{
//     const sendUnderSocket = onlineUsers.get(data.to);
//     if(sendUnderSocket){
//       socket.to(sendUnderSocket).emit("notification-recieve",data.message)
//     }
//   })

// })