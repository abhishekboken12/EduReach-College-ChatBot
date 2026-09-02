import { Router } from "express";
import { startCall } from "../controllers/vapi.controller.ts";
import authMiddleware from "../middleware/auth.middleware.ts";

const router = Router();

router.post("/call", authMiddleware, startCall);

export default router;