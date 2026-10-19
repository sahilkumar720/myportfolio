// A single project card in the "My Work" grid.
import "./ProjectCard.css";

const ProjectCard = ({ project, onClick, index = 0 }) => {
  return (
    <button
      type="button"
      className="project-card"
      onClick={onClick}
      aria-label={`View details for ${project.title}`}
      style={{
        backgroundImage: `url(${project.image})`,
        "--project-delay": `${(index % 8) * 70}ms`,
      }}
    >
      <div className="project-card-footer">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <span className="project-card-icon" aria-hidden="true">↗</span>
      </div>
    </button>
  );
};

export default ProjectCard;
