// const mongoose = require("mongoose");
import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    // users: Array,
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

 export default mongoose.model("Messages", MessageSchema);