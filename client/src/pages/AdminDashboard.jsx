// The protected admin area (only reachable after logging in at
// /admin/login). Two tabs:
//   - Projects: add / edit / delete the cards shown in "My Work"
//   - Messages: read the messages people sent through the contact form
//
// This is intentionally simple — no fancy table library, just plain
// state and forms, so it's easy to follow and extend.

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
  fetchMessages,
  deleteMessage,
} from "../api/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import "./Admin.css";

const emptyForm = { title: "", category: "", description: "", image: "", liveLink: "", githubLink: "" };

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState("projects"); // "projects" | "messages"
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const loadProjects = () => fetchProjects().then(setProjects);
  const loadMessages = () => fetchMessages().then(setMessages);

  useEffect(() => {
    loadProjects();
    loadMessages();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateProject(editingId, form);
    } else {
      await createProject(form);
    }
    setForm(emptyForm);
    setEditingId(null);
    loadProjects();
  };

  const startEdit = (project) => {
    setEditingId(project._id);
    setForm({
      title: project.title,
      category: project.category,
      description: project.description || "",
      image: project.image || "",
      liveLink: project.liveLink || "",
      githubLink: project.githubLink || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleDeleteProject = async (id) => {
    if (!confirm("Delete this project?")) return;
    await deleteProject(id);
    loadProjects();
  };

  const handleDeleteMessage = async (id) => {
    if (!confirm("Delete this message?")) return;
    await deleteMessage(id);
    loadMessages();
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-topbar">
        <h1>Admin Dashboard</h1>
        <div>
          <a href="/" className="admin-back-link">View site</a>
          <button className="btn btn-outline" onClick={handleLogout}>Log out</button>
        </div>
      </div>

      <div className="admin-tabs">
        <button className={tab === "projects" ? "active" : ""} onClick={() => setTab("projects")}>
          Projects ({projects.length})
        </button>
        <button className={tab === "messages" ? "active" : ""} onClick={() => setTab("messages")}>
          Messages ({messages.length})
        </button>
      </div>

      {tab === "projects" && (
        <div className="admin-section">
          <form onSubmit={handleSubmit} className="admin-form">
            <h2>{editingId ? "Edit project" : "Add a new project"}</h2>
            <div className="admin-form-grid">
              <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
              <input name="category" placeholder="Category (e.g. Web Design)" value={form.category} onChange={handleChange} required />
              <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
              <input name="liveLink" placeholder="Live URL (optional)" value={form.liveLink} onChange={handleChange} />
              <input name="githubLink" placeholder="GitHub URL (optional)" value={form.githubLink} onChange={handleChange} />
            </div>
            <textarea name="description" placeholder="Short description" value={form.description} onChange={handleChange} />
            <div className="admin-form-actions">
              <button type="submit" className="btn btn-primary">
                {editingId ? "Save changes" : "Add project"}
              </button>
              {editingId && (
                <button type="button" className="btn btn-outline" onClick={cancelEdit}>
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="admin-list">
            {projects.map((p) => (
              <div key={p._id} className="admin-list-row">
                <div>
                  <strong>{p.title}</strong>
                  <span className="admin-list-meta">{p.category}</span>
                </div>
                <div className="admin-list-actions">
                  <button className="btn btn-outline" onClick={() => startEdit(p)}>Edit</button>
                  <button className="btn btn-outline" onClick={() => handleDeleteProject(p._id)}>Delete</button>
                </div>
              </div>
            ))}
            {projects.length === 0 && <p>No projects yet — add your first one above.</p>}
          </div>
        </div>
      )}

      {tab === "messages" && (
        <div className="admin-section">
          <div className="admin-list">
            {messages.map((m) => (
              <div key={m._id} className="admin-list-row">
                <div>
                  <p>{m.message}</p>
                  <span className="admin-list-meta">
                    {new Date(m.createdAt).toLocaleString()}
                  </span>
                </div>
                <div className="admin-list-actions">
                  <button className="btn btn-outline" onClick={() => handleDeleteMessage(m._id)}>Delete</button>
                </div>
              </div>
            ))}
            {messages.length === 0 && <p>No messages yet.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
