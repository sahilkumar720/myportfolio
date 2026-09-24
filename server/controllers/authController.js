// Handles admin login. There is only ever one admin, whose username/password
// live in your .env file (see ADMIN_USERNAME / ADMIN_PASSWORD).
//
// This keeps things simple for a personal portfolio project. If you ever
// wanted this to be more production-grade, you'd store a hashed password
// in the database instead of plain text in .env.

import jwt from "jsonwebtoken";

export const loginAdmin = (req, res) => {
  const { username, password } = req.body;

  const validUsername = username === process.env.ADMIN_USERNAME;
  const validPassword = password === process.env.ADMIN_PASSWORD;

  if (!validUsername || !validPassword) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign(
    { username },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token, username });
};
