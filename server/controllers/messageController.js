// Handles the "Contact me" form submissions.

import Message from "../models/Message.js";

// POST /api/messages  (public — anyone can submit the contact form)
export const createMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ message: "Message cannot be empty" });
  }

  const saved = await Message.create({ name, email, message });

  // OPTIONAL: send yourself an email notification here using a service
  // like Nodemailer + Gmail App Passwords, or Resend/SendGrid. Left out
  // by default so the project runs with zero extra setup — the message
  // is safely stored in MongoDB and visible in the admin dashboard.

  res.status(201).json({ message: "Message sent successfully", data: saved });
};

// GET /api/messages  (admin only — view submissions in the dashboard)
export const getMessages = async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
};

// DELETE /api/messages/:id  (admin only)
export const deleteMessage = async (req, res) => {
  const msg = await Message.findByIdAndDelete(req.params.id);
  if (!msg) return res.status(404).json({ message: "Message not found" });
  res.json({ message: "Message deleted" });
};
