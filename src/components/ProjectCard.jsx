import { ArrowUpRight } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card-${project.theme}`}>
      <div>
        <div className="tag-row" aria-label={`${project.title} tags`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <a href="#contact" aria-label={`View case study for ${project.title}`}>
        View case study
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </article>
  );
}

export default ProjectCard;
