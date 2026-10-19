// Login form for the /admin area. Credentials are checked against
// ADMIN_USERNAME / ADMIN_PASSWORD in the server's .env file.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../api/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import "./Admin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, authError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await loginAdmin({ username, password });
      login(data.token);
      navigate("/admin");
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="admin-auth-wrap">
      <form onSubmit={handleSubmit} className="admin-auth-form">
        <h1>Admin Login</h1>
        {authError && <p className="admin-session-notice" role="status">{authError}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="admin-error">{error}</p>}
        <button type="submit" className="btn btn-primary">Log in</button>
        <a href="/" className="admin-back-link">← Back to site</a>
      </form>
    </div>
  );
};

export default AdminLogin;
