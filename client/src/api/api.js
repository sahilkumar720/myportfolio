// Central place that talks to the backend. Every component that needs
// data (projects, messages, login) imports from here instead of calling
// fetch/axios directly — keeps API URLs and auth headers in one spot.

import axios from "axios";

// Point this at your deployed backend URL when you go live
// (e.g. via a .env file: VITE_API_URL=https://your-api.onrender.com/api)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({ baseURL: API_URL });

// Attach the admin token automatically for protected requests, if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ---- Projects ----
export const fetchProjects = () => api.get("/projects").then((res) => res.data);
export const createProject = (data) => api.post("/projects", data).then((res) => res.data);
export const updateProject = (id, data) => api.put(`/projects/${id}`, data).then((res) => res.data);
export const deleteProject = (id) => api.delete(`/projects/${id}`).then((res) => res.data);

// ---- Contact messages ----
export const sendMessage = (data) => api.post("/messages", data).then((res) => res.data);
export const fetchMessages = () => api.get("/messages").then((res) => res.data);
export const deleteMessage = (id) => api.delete(`/messages/${id}`).then((res) => res.data);

// ---- Admin auth ----
export const loginAdmin = (credentials) => api.post("/auth/login", credentials).then((res) => res.data);

export default api;
