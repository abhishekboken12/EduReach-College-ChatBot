
import type { Request, Response, NextFunction } from "express";
import User from "../models/user.model.ts";
import { initiateOutboundCall } from "../services/vapi.service.ts";

// POST /api/vapi/call
export const startCall = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { phoneNumber, preferredCourse } = req.body;

    if (!phoneNumber || phoneNumber.trim().length < 10) {
      res.status(400).json({ success: false, message: "Valid phone number is required." });
      return;
    }

    const currentUser = (req as any).user;
    const user = await User.findById(currentUser.userId).select("name email");

    if (!user) {
      res.status(404).json({ success: false, message: "User not found." });
      return;
    }

    const result = await initiateOutboundCall({
        phoneNumber: phoneNumber.trim(),
        userName: user.name,
        preferredCourse,
        userEmail: ""
    });

    res.status(200).json({
      success: true,
      message: "Call initiated. You will receive a call shortly.",
      data: { callId: result.id, status: result.status },
    });
  } catch (error) {
    next(error);
  }
};