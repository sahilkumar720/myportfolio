// A single project card in the "My Work" grid.

import { FiArrowUpRight } from "react-icons/fi";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const link = project.liveLink || project.githubLink || "#";

  return (
    <a
      href={link}
      target={link !== "#" ? "_blank" : undefined}
      rel="noreferrer"
      className="project-card"
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className="project-card-footer">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <span className="project-card-icon">
          <FiArrowUpRight />
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
