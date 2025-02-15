import express from "express";
import Multer from "multer";
import { uploadController } from "../controllers/cloudinaryController.js";
const router = express.Router();

const storage = new Multer.memoryStorage();
const upload = Multer({ storage });

router.post("/upload", upload.single('image'), uploadController);

export default router;