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

const emptyForm = {
  title: "",
  category: "",
  description: "",
  image: "",
  liveLink: "",
  githubLink: "",
  videoUrl: "",
  techStack: "",
};

const getRequestError = (error, fallback) =>
  error.response?.data?.message ||
  (error.request
    ? "Could not reach the API. Check that the server is running and the API URL is correct."
    : error.message) ||
  fallback;
const isUnauthorized = (error) => error.response?.status === 401;

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState("projects"); // "projects" | "messages"
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [projectLoadError, setProjectLoadError] = useState("");
  const [messageLoadError, setMessageLoadError] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [notice, setNotice] = useState(null);

  const loadProjects = async () => {
    setLoadingProjects(true);
    setProjectLoadError("");
    try {
      setProjects(await fetchProjects());
    } catch (error) {
      if (!isUnauthorized(error)) {
        console.error("Failed to load admin projects:", error);
        setProjectLoadError(getRequestError(error, "Projects could not be loaded."));
      }
    } finally {
      setLoadingProjects(false);
    }
  };

  const loadMessages = async () => {
    setLoadingMessages(true);
    setMessageLoadError("");
    try {
      setMessages(await fetchMessages());
    } catch (error) {
      if (!isUnauthorized(error)) {
        console.error("Failed to load admin messages:", error);
        setMessageLoadError(getRequestError(error, "Messages could not be loaded."));
      }
    } finally {
      setLoadingMessages(false);
    }
  };

  useEffect(() => {
    loadProjects();
    loadMessages();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const handleChange = (e) => {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setNotice(null);
    const projectData = {
      ...form,
      techStack: form.techStack
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
    };
    try {
      const savedProject = editingId
        ? await updateProject(editingId, projectData)
        : await createProject(projectData);
      setProjects((current) =>
        editingId
          ? current.map((project) =>
              project._id === editingId ? savedProject : project
            )
          : [savedProject, ...current]
      );
      setForm(emptyForm);
      setEditingId(null);
      setNotice({
        type: "success",
        message: editingId ? "Project updated successfully." : "Project added successfully.",
      });
    } catch (error) {
      console.error("Failed to save project:", error);
      setNotice({
        type: "error",
        message: getRequestError(error, "The project could not be saved."),
      });
    } finally {
      setIsSaving(false);
    }
  };

  const startEdit = (project) => {
    setNotice(null);
    setEditingId(project._id);
    setForm({
      title: project.title,
      category: project.category,
      description: project.description || "",
      image: project.image || "",
      liveLink: project.liveLink || "",
      githubLink: project.githubLink || "",
      videoUrl: project.videoUrl || "",
      techStack: Array.isArray(project.techStack)
        ? project.techStack.join(", ")
        : project.techStack || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
    setNotice(null);
  };

  const handleDeleteProject = async (id) => {
    if (!confirm("Delete this project?")) return;
    setNotice(null);
    try {
      await deleteProject(id);
      setProjects((current) => current.filter((project) => project._id !== id));
      setNotice({ type: "success", message: "Project deleted successfully." });
    } catch (error) {
      console.error("Failed to delete project:", error);
      setNotice({
        type: "error",
        message: getRequestError(error, "The project could not be deleted."),
      });
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!confirm("Delete this message?")) return;
    setNotice(null);
    try {
      await deleteMessage(id);
      setMessages((current) => current.filter((message) => message._id !== id));
      setNotice({ type: "success", message: "Message deleted successfully." });
    } catch (error) {
      console.error("Failed to delete message:", error);
      setNotice({
        type: "error",
        message: getRequestError(error, "The message could not be deleted."),
      });
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-topbar">
        <div className="admin-brand">
          <span className="admin-eyebrow">Portfolio management</span>
          <h1>Admin dashboard</h1>
          <p>Manage your projects and review messages in one place.</p>
        </div>
        <div className="admin-topbar-actions">
          <a href="/" className="admin-back-link">View Portfolio</a>
          <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <main className="admin-panel">
      <div className="admin-tabs" role="group" aria-label="Admin sections">
        <button
          className={tab === "projects" ? "active" : ""}
          aria-pressed={tab === "projects"}
          onClick={() => setTab("projects")}
        >
          Projects ({projects.length})
        </button>
        <button
          className={tab === "messages" ? "active" : ""}
          aria-pressed={tab === "messages"}
          onClick={() => setTab("messages")}
        >
          Messages ({messages.length})
        </button>
      </div>

      {tab === "projects" && (
        <div className="admin-section">
          <div className="admin-section-heading">
            <div>
              <h2>Projects</h2>
              <p>Add, update, and organize the work shown on your portfolio.</p>
            </div>
          </div>
          {notice && (
            <p className={`admin-notice admin-notice--${notice.type}`} role={notice.type === "error" ? "alert" : "status"}>
              {notice.message}
            </p>
          )}
          <div className="admin-project-layout">
          <form onSubmit={handleSubmit} className="admin-form">
            <h3>{editingId ? "Edit project" : "Add a project"}</h3>
            <p className="admin-form-intro">Title and category are required. Add the other details to enrich your project popup.</p>
            <div className="admin-form-grid">
              <input name="title" aria-label="Project title" placeholder="Title *" value={form.title} onChange={handleChange} required />
              <input name="category" aria-label="Project category" placeholder="Category * (e.g. Web Design)" value={form.category} onChange={handleChange} required />
              <input name="image" aria-label="Project image URL" placeholder="Image URL" value={form.image} onChange={handleChange} />
              <input name="liveLink" aria-label="Live demo URL" placeholder="Live URL (optional)" value={form.liveLink} onChange={handleChange} />
              <input name="githubLink" aria-label="GitHub repository URL" placeholder="GitHub URL (optional)" value={form.githubLink} onChange={handleChange} />
              <input name="videoUrl" aria-label="Video demo URL" placeholder="Video demo URL (optional)" value={form.videoUrl} onChange={handleChange} />
            </div>
            <textarea name="description" aria-label="Project description" placeholder="Short project description" value={form.description} onChange={handleChange} />
            <input className="admin-tech-stack" name="techStack" aria-label="Technologies used" placeholder="Technologies, comma-separated (e.g. React, Node.js, MongoDB)" value={form.techStack} onChange={handleChange} />
            <div className="admin-form-actions">
              <button type="submit" className="btn btn-primary" disabled={isSaving}>
                {isSaving ? "Saving..." : editingId ? "Save changes" : "Save Project"}
              </button>
              {editingId && (
                <button type="button" className="btn btn-outline" onClick={cancelEdit}>
                  Cancel
                </button>
              )}
            </div>
          </form>

          <section className="admin-list-section" aria-labelledby="admin-saved-projects-heading">
            <div className="admin-list-heading">
              <h3 id="admin-saved-projects-heading">Saved projects</h3>
              <span>{projects.length} total</span>
            </div>
            {projectLoadError && <p className="admin-notice admin-notice--error" role="alert">{projectLoadError}</p>}
            {loadingProjects ? (
              <p className="admin-empty-state">Loading projects...</p>
            ) : (
              <div className="admin-list">
                {projects.map((p) => (
                  <div key={p._id} className="admin-list-row">
                    <div className="admin-list-project">
                      <strong>{p.title}</strong>
                      <span className="admin-list-meta">{p.category}</span>
                    </div>
                    <div className="admin-list-actions">
                      <button className="btn btn-outline" onClick={() => startEdit(p)}>Edit</button>
                      <button className="btn btn-outline" onClick={() => handleDeleteProject(p._id)}>Delete</button>
                    </div>
                  </div>
                ))}
                {projects.length === 0 && !projectLoadError && (
                  <p className="admin-empty-state">No projects yet. Add your first project using the form above.</p>
                )}
              </div>
            )}
          </section>
          </div>
        </div>
      )}

      {tab === "messages" && (
        <div className="admin-section">
          <div className="admin-section-heading">
            <div>
              <h2>Messages</h2>
              <p>Messages received from visitors through your portfolio.</p>
            </div>
          </div>
          {notice && (
            <p className={`admin-notice admin-notice--${notice.type}`} role={notice.type === "error" ? "alert" : "status"}>
              {notice.message}
            </p>
          )}
          <div className="admin-list">
            {messageLoadError && <p className="admin-notice admin-notice--error" role="alert">{messageLoadError}</p>}
            {loadingMessages ? (
              <p className="admin-empty-state">Loading messages...</p>
            ) : (
              <>
                {messages.map((m) => (
                  <div key={m._id} className="admin-list-row">
                    <div className="admin-list-project">
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
                {messages.length === 0 && !messageLoadError && (
                  <p className="admin-empty-state">No messages to show yet.</p>
                )}
              </>
            )}
          </div>
        </div>
      )}
      </main>
    </div>
  );
};

export default AdminDashboard;




