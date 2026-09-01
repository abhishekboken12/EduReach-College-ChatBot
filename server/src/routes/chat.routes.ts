import { Router } from "express";
import { sendMessage } from "../controllers/chat.controller.ts";

const router = Router();
router.post("/message", sendMessage);

export default router;