import express from "express";
import { addMessage, getMessages } from "../controllers/messageController.js";
const router = express.Router();

router.post("/addmessage", addMessage);
router.post("/getmessage", getMessages);

export default router;