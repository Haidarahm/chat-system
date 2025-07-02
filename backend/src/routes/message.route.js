import express from "express";
import { protectRout } from "../middleware/auth.middleware.js";
import { getUsersForSidebar,getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users",protectRout,getUsersForSidebar)
router.get("/:id",protectRout,getMessages)
router.post("/send/:id",protectRout,sendMessage)
export default router;