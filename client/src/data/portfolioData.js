// =============================================================
// YOUR INFO — edit everything in this file to personalize the site.
// Nothing else in the codebase should need to change for basic
// content updates (name, bio, skills, services, socials, education).
// =============================================================

// import { FaKeybase } from "react-icons/fa";

export const profile = {
  name: "Sahil Kumar",
  greeting: "Hi! I'm Sahil Kumar",
  role: "AI Full-stack web developer based in India.",
  heroDescription:
    "I'm a AI full-stack developer working with the MERN stack (MongoDB, Express, React, Node.js). B.Tech in Computer Science (2024), currently building and shipping full-stack projects.",
  aboutText:
    "I'm a AI full-stack web developer with hands-on experience building complete applications end to end — from React interfaces to Node/Express APIs backed by MongoDB. I enjoy turning a design into a working product and I'm always learning new tools to build faster and better.",
  email: "sahilkumar7369@gmail.com",
  resumeLink: "/resume.pdf", // drop your resume PDF in client/public and keep this name, or change the link
  profileImage: "https://placehold.co/300x300/ef4d6b/ffffff?text=Photo", // replace with your own photo URL
  aboutImage: "https://placehold.co/500x600/ef4d6b/ffffff?text=Photo",
};

// `icon` keys map to real logos in Footer.jsx (see the `socialIcons` map there).
export const socials = [
  { icon: "github", label: "GitHub", url: "https://github.com/sahilkumar720" },
  { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/sahilkumar789" },
  { icon: "X", label: "X.com", url: "https://x.com/SahilkumarK1" },
];

// Cards in the About section. `detail` can be a plain string, or an
// array of lines for something with more than one part (like Education).
export const aboutCards = [
  {
    icon: "code",
    title: "Languages",
    detail: "HTML, CSS, JavaScript",
  },
  {
    icon: "education",
    // Rough placeholder — swap in your real college name, years and
    // grade/CGPA. Keep it as 2-3 short lines.
    title: "Education",
    detail: [
      "B.Tech in Computer Science",
      "IIIT UNA, H.P, 2020 – 2024",
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

    { key: "github", label: "GitHub", url: "https://github.com/sahilkumar720" },
  { key: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/sahilkumar789" },
  { key: "twitter", label: "Twitter", url: "https://twitter.com/SahilkumarK1" },
   { key: "instagram", label: "Instagram", url: "https://instagram.com/sahilkumar720" },

];

export const skills = [
  {
    category: "Languages",
    items: [
      { label: "JavaScript (ES6+)", icon: "javascript", color: "#f7df1e" },
      { label: "TypeScript", icon: "typescript", color: "#3178c6" },
      { label: "Java", icon: "java", color: "#e76f00" },
      { label: "SQL", icon: "sql", color: "#4479a1" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { label: "React.js", icon: "react", color: "#61dafb" },
      { label: "Next.js", icon: "nextjs", color: "#111827" },
      { label: "Redux", icon: "redux", color: "#764abc" },
      { label: "HTML5", icon: "html5", color: "#e34f26" },
      { label: "CSS3", icon: "css3", color: "#1572b6" },
      { label: "Tailwind CSS", icon: "tailwind", color: "#06b6d4" },
      { label: "Bootstrap", icon: "bootstrap", color: "#7952b3" },
    ],
  },
  {
    category: "Backend",
    items: [
      { label: "Node.js", icon: "node", color: "#5fa04e" },
      { label: "Express.js", icon: "express", color: "#555555" },
      { label: "RESTful APIs", icon: "api", color: "#3973b7" },
      { label: "JWT Authentication", icon: "jwt", color: "#d63aff" },
      { label: "Firebase Authentication", icon: "firebase", color: "#ffca28" },
    ],
  },
  {
    category: "Databases",
    items: [
      { label: "MongoDB", icon: "mongodb", color: "#47a248" },
      { label: "Mongoose", icon: "mongoose", color: "#880000" },
      { label: "MySQL", icon: "mysql", color: "#4479a1" },
      { label: "Redis", icon: "redis", color: "#d82c20" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { label: "AWS", icon: "aws", color: "#ff9900" },
      { label: "Docker", icon: "docker", color: "#2496ed" },
      { label: "Render", icon: "render", color: "#46e3b7" },
      { label: "Vercel", icon: "vercel", color: "#111827" },
      { label: "Cloudinary", icon: "cloudinary", color: "#3448c5" },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { label: "Git", icon: "git", color: "#f05032" },
      { label: "GitHub", icon: "github", color: "#24292f" },
      { label: "Postman", icon: "postman", color: "#ff6c37" },
      { label: "VS Code", icon: "vscode", color: "#007acc" },
      { label: "Figma", icon: "figma", color: "#f24e1e" },
      { label: "Razorpay", icon: "razorpay", color: "#0c2451" },
    ],
  },
  {
    category: "AI & GenAI",
    items: [
      { label: "Gemini API", icon: "gemini", color: "#4285f4" },
      { label: "LLM Integration", icon: "llm", color: "#8b5cf6" },
      { label: "Prompt Engineering", icon: "prompt", color: "#ec4899" },
      { label: "RAG", icon: "rag", color: "#14b8a6" },
      { label: "Vector Embeddings", icon: "embeddings", color: "#6366f1" },
      { label: "LangChain", icon: "langchain", color: "#1c3c3c" },
      { label: "LangGraph", icon: "langgraph", color: "#1c3c3c" },
      { label: "MCP", icon: "mcp", color: "#64748b" },
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
