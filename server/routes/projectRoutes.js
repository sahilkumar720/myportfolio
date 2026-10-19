import express from "express";
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import protect from "../middleware/auth.js";

const router = express.Router();
const asyncHandler = (controller) => (req, res, next) =>
  Promise.resolve(controller(req, res, next)).catch(next);

// Public
router.get("/", asyncHandler(getProjects));
router.get("/:id", asyncHandler(getProjectById));

// Admin only
router.post("/", protect, asyncHandler(createProject));
router.put("/:id", protect, asyncHandler(updateProject));
router.delete("/:id", protect, asyncHandler(deleteProject));

export default router;
