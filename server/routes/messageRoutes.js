import express from "express";
import {
  createMessage,
  getMessages,
  deleteMessage,
} from "../controllers/messageController.js";
import protect from "../middleware/auth.js";

const router = express.Router();

// Public — the contact form on the site posts here
router.post("/", createMessage);

// Admin only
router.get("/", protect, getMessages);
router.delete("/:id", protect, deleteMessage);

export default router;
