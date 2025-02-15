import express from "express";
import { getAllUsers, login, logOut, register, setAvatar } from "../controllers/userController.js";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

export default router;