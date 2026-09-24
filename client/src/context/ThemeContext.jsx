// Controls light/dark mode for the whole site.
// The chosen theme is saved to localStorage so it's remembered on the
// next visit, and applied by setting data-theme="dark" on <html>
// (index.css reacts to that attribute — see the theme variables there).

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    // fall back to the visitor's OS preference if they've never toggled it
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook so components just do: const { theme, toggleTheme } = useTheme();
export const useTheme = () => useContext(ThemeContext);
