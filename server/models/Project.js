// A single portfolio project shown on the "My Work" section.
// Edit the fields here if you want to track more info about each project
// (e.g. a "featured" flag, tech stack tags, a video link, etc).

import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    category: {
      type: String, // e.g. "Web Design", "Full Stack", "Mobile App"
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String, // URL to a thumbnail image
      default: "",
    },
    liveLink: {
      type: String, // link to the deployed project
      default: "",
    },
    githubLink: {
      type: String, // link to the source code
      default: "",
    },
    videoUrl: {
      type: String, // link to a project walkthrough
      default: "",
    },
    techStack: {
      type: [String],
      default: [],
    },
    order: {
      type: Number, // controls display order on the site (lower = first)
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
