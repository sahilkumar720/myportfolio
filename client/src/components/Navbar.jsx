// Top navigation bar.
//  - The nav-link group sits in a "pill" that fades/slides in on load.
//  - A highlight slides between links as you move your cursor over them.
//  - Below 900px width, the links collapse into a hamburger menu.
//
// If you pictured the load/hover states differently than this, the
// easiest thing to tweak is the `.navbar-links` and `.nav-highlight`
// rules in Navbar.css — this file just tracks *which* link is hovered.

import { useRef, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext.jsx";
import { navLinks } from "../data/portfolioData.js";
import "./Navbar.css";
import { GrContact } from "react-icons/gr";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [highlight, setHighlight] = useState({ opacity: 0, left: 0, width: 0 });
  const linksRef = useRef(null);

  const handleLinkHover = (e) => {
    const linkRect = e.currentTarget.getBoundingClientRect();
    const containerRect = linksRef.current.getBoundingClientRect();
    setHighlight({
      opacity: 1,
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
    });
  };

  const clearHighlight = () => setHighlight((h) => ({ ...h, opacity: 0 }));

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/#top" className="navbar-logo">
          {/* Change "Sahil" to your own brand/name, or swap for a logo image */}
          Sahil<span className="dot">.</span>
        </a>

        <nav className="navbar-links fade-in-up" ref={linksRef} onMouseLeave={clearHighlight}>
          <span
            className="nav-highlight"
            style={{
              opacity: highlight.opacity,
              transform: `translateX(${highlight.left}px)`,
              width: highlight.width,
            }}
          />
          {navLinks.map((link) => (
            <a key={link.label} href={link.to} onMouseEnter={handleLinkHover}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href="/#contact" className="btn btn-outline navbar-contact">
            <GrContact /> Contact
          </a>
          <button
            className="navbar-burger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="navbar-mobile">
          {navLinks.map((link) => (
            <a key={link.label} href={link.to} onClick={closeMobile}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
