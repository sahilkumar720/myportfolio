// "My Work" section — fetches the project list from the backend
// (GET /api/projects) so you can add/edit projects later from the
// admin dashboard without touching this code.

import { useEffect, useState } from "react";
import { fetchProjects } from "../api/api.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";
import "./Work.css";

const INITIAL_COUNT = 4; // how many projects to show before "Show more"

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="work" className="section container">
      <Reveal>
        <p className="section-eyebrow">My portfolio</p>
        <h2 className="section-title">My latest work</h2>
        <p className="section-subtitle">
          A collection of projects showcasing my experience with the MERN stack.
        </p>
      </Reveal>

      {loading && <p className="work-status">Loading projects…</p>}

      {error && (
        <p className="work-status">
          Couldn't load projects. Make sure the backend server is running and
          you've run <code>npm run seed</code> in the server folder.
        </p>
      )}

      {!loading && !error && projects.length === 0 && (
        <p className="work-status">
          No projects yet — add some from the admin dashboard at /admin, or
          run <code>npm run seed</code> in the server folder for starter data.
        </p>
      )}

      <div className="work-grid">
        {visibleProjects.map((project, index) => (
          <Reveal key={project._id} delay={(index % 4) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {!showAll && projects.length > INITIAL_COUNT && (
        <div className="work-more">
          <button className="btn btn-outline" onClick={() => setShowAll(true)}>
            Show more
          </button>
        </div>
      )}
    </section>
  );
};

export default Work;
