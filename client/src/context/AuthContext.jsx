// Very small auth context for the /admin area.
// Holds the JWT token returned by POST /api/auth/login and keeps it
// in localStorage so a refresh doesn't log the admin out.

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("adminToken"));
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    const handleSessionExpired = () => {
      setToken(null);
      setAuthError("Your admin session expired. Please log in again.");
    };

    window.addEventListener("admin-auth-expired", handleSessionExpired);
    return () => window.removeEventListener("admin-auth-expired", handleSessionExpired);
  }, []);

  const login = (newToken) => {
    localStorage.setItem("adminToken", newToken);
    setToken(newToken);
    setAuthError("");
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
    setAuthError("");
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn: !!token, authError, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
