// =============================================================
// YOUR INFO — edit everything in this file to personalize the site.
// Nothing else in the codebase should need to change for basic
// content updates (name, bio, skills, services, socials, education).
// =============================================================

// import { FaKeybase } from "react-icons/fa";

export const profile = {
  name: "Sahil Kumar",
  greeting: "Hi! I'm Sahil Kumar",
  role: "Full-stack web developer based in India.",
  heroDescription:
    "I'm a full-stack developer working with the MERN stack (MongoDB, Express, React, Node.js). B.Tech in Computer Science (2024), currently building and shipping full-stack projects.",
  aboutText:
    "I'm a full-stack web developer with hands-on experience building complete applications end to end — from React interfaces to Node/Express APIs backed by MongoDB. I enjoy turning a design into a working product and I'm always learning new tools to build faster and better.",
  email: "sahilkumar7369@gmail.com",
  resumeLink: "/resume.pdf", // drop your resume PDF in client/public and keep this name, or change the link
  profileImage: "https://placehold.co/300x300/ef4d6b/ffffff?text=Photo", // replace with your own photo URL
  aboutImage: "https://placehold.co/500x600/ef4d6b/ffffff?text=Photo",
};

// `icon` keys map to real logos in Footer.jsx (see the `socialIcons` map there).
export const socials = [
  { icon: "github", label: "GitHub", url: "https://github.com/your-username" },
  { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/your-username" },
  { icon: "twitter", label: "Twitter", url: "https://twitter.com/your-username" },
];

// Cards in the About section. `detail` can be a plain string, or an
// array of lines for something with more than one part (like Education).
export const aboutCards = [
  {
    icon: "code",
    title: "Languages",
    detail: "HTML, CSS, JavaScript, React.js, Node.js",
  },
  {
    icon: "education",
    // Rough placeholder — swap in your real college name, years and
    // grade/CGPA. Keep it as 2-3 short lines.
    title: "Education",
    detail: [
      "B.Tech in Computer Science",
      "Your College Name, 2020 – 2024",
    ],
  },
  {
    icon: "briefcase",
    title: "Projects",
    detail: "Built multiple full-stack MERN projects",
  },
];

// Icon keys map to real logos in About.jsx (see the `toolIcons` map there).
export const tools = [
  // { key: "vscode", label: "VS Code" },
  // { key: "firebase", label: "Firebase" },
  // { key: "mongodb", label: "MongoDB" },
  // { key: "figma", label: "Figma" },
  // { key: "git", label: "Git" },

    { key: "github", label: "GitHub", url: "https://github.com/your-username" },
  { key: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/your-username" },
  { key: "twitter", label: "Twitter", url: "https://twitter.com/your-username" },
   { key: "instagram", label: "Instagram", url: "https://instagram.com/your-username" },

];

export const skills = [
  {
    category: "Frontend",
    items: [
      { label: "HTML5", icon: "html5", color: "#f59277" },
      { label: "CSS3", icon: "css3", color: "#5bb9fc" },
      { label: "JavaScript", icon: "javascript", color: "#fdea5a" },
      { label: "React", icon: "react", color: "#61d4f4" },
      { label: "Vite", icon: "vite", color: "#b467fd" },
      
      { label: "Responsive", icon: "responsive", color: "#48e481" },
    ],
  },
  {
    category: "Backend",
    items: [
      { label: "Node.js", icon: "node", color: "#8ebf8a" },
      { label: "Express", icon: "express", color: "#393838" },
      { label: "MongoDB", icon: "mongodb", color: "#63aa64" },
      { label: "JWT", icon: "jwt", color: "#de63fc" },
      { label: "API", icon: "api", color: "#fcb944" },
      { label: "REST", icon: "rest", color: "#716af8" },
    ],
  },
  {
    category: "Tools",
    items: [
      { label: "Git", icon: "git", color: "#fd745c" },
      { label: "GitHub", icon: "github", color: "#3e3d3d" },
      { label: "VS Code", icon: "vscode", color: "#5faadc" },
      { label: "Figma", icon: "figma", color: "#dd6945" },
      { label: "Firebase", icon: "firebase", color: "#f4cd58" },
      { label: "Postman", icon: "postman", color: "#f47344" },
    ],
  },
];

// Icon keys map to real icons in Services.jsx (see the `serviceIcons` map there).
export const services = [
  {
    icon: "web",
    title: "Web Development",
    detail: "Responsive, accessible websites and interfaces built with React and modern CSS.",
    readMore:
      "I build complete frontends from a design or a rough idea — component-based, responsive down to mobile, and easy to maintain.",
  },
  {
    icon: "fullstack",
    title: "Full-Stack (MERN) Apps",
    detail: "End-to-end apps — React frontend, Express/Node API, MongoDB database.",
    readMore:
      "From database schema to deployed app: REST APIs with Express and MongoDB, connected to a React frontend, with authentication where it's needed.",
  },
  {
    icon: "api",
    title: "API Development",
    detail: "REST APIs built with Node.js and Express, connected to MongoDB.",
    readMore:
      "Clean, documented REST endpoints — CRUD operations, authentication (JWT), and integration with a frontend or third-party service.",
  },
  {
    icon: "design",
    title: "UI Implementation",
    detail: "Turning a Figma design or reference site into pixel-close working code.",
    readMore:
      "I translate a design file or a reference site into working, responsive code — matching spacing, type and color closely, section by section.",
  },
];

// Nav links used by the Navbar. `to` values are hash anchors on the home page.
export const navLinks = [
  { label: "Home", to: "/#top" },
  { label: "About me", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Services", to: "/#services" },
  { label: "My Work", to: "/#work" },
  // { label: "Contact me", to: "/#contact" },
];
