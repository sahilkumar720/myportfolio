// Optional helper script: fills your database with a few starter projects
// so the "My Work" section isn't empty the first time you run the site.
//
// Run it with:  npm run seed
// (Only needs to be run once — running it again will add duplicates.)

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Project from "./models/Project.js";

dotenv.config();
await connectDB();

const starterProjects = [
  {
    title: "Study Now",
    category: "Full Stack (MERN)",
    description: "An online study/e-learning platform built with the MERN stack.",
    image: "https://placehold.co/600x400/1e1730/f5f5f5?text=Study+Now",
    order: 1,
  },
  {
    title: "Virtual Assistant",
    category: "Full Stack (MERN)",
    description: "A self-taught full-stack project exploring voice/task assistant features.",
    image: "https://placehold.co/600x400/1e1730/f5f5f5?text=Virtual+Assistant",
    order: 2,
  },
  {
    title: "Hotelmony",
    category: "Full Stack (MERN)",
    description: "A hotel booking web app with a React frontend and Node/Express backend.",
    image: "https://placehold.co/600x400/1e1730/f5f5f5?text=Hotelmony",
    order: 3,
  },
];

await Project.deleteMany({});
await Project.insertMany(starterProjects);

console.log("Seeded starter projects. Edit or replace these from /admin once logged in.");
process.exit();
