// CRUD logic for portfolio projects.
// GET routes 
.

import Project from "../models/Project.js";

// GET /api/projects
export const getProjects = async (req, res) => {
  const projects = await Project.find().sort({ order: 1, createdAt: -1 });
  res.json(projects);
};

// GET /api/projects/:id
export const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json(project);
};

// POST /api/projects  (admin only)
export const createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
};

// PUT /api/projects/:id  (admin only)
export const updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // return the updated document
    runValidators: true,
  });
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json(project);
};

// DELETE /api/projects/:id  (admin only)
export const deleteProject = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json({ message: "Project deleted" });
};
