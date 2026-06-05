import { ArrowRight, ExternalLink, GitBranch } from 'lucide-react';

const filters = ['All', 'VR', 'Full Stack', 'Forecasting', 'Campus Tools'];

function ProjectExplorer({ projects }) {
  return (
    <div className="work-archive">
      <div className="work-filters" aria-label="Project categories">
        {filters.map((filter) => (
          <span key={filter}>{filter}</span>
        ))}
      </div>

      <div className="folder-grid">
        {projects.map((project) => {
          const FolderIcon = project.folderIcon;
          return (
            <a className="folder-card" href={`#work/${project.slug}`} key={project.slug}>
              <span className="folder-tab" aria-hidden="true" />
              <div className="folder-icon" aria-hidden="true">
                <FolderIcon size={25} />
              </div>
              <h3>{project.title}</h3>
              {project.date ? <span className="folder-date">{project.date}</span> : null}
              <p>{project.description}</p>
              <div className="folder-tools" aria-label={`${project.title} technologies`}>
                {project.tools.slice(0, 4).map((tool) => {
                  const ToolIcon = tool.icon;
                  return (
                    <span key={tool.name} title={tool.name}>
                      <ToolIcon size={14} aria-hidden="true" />
                    </span>
                  );
                })}
              </div>
              <div className="folder-actions" aria-hidden="true">
                {project.links?.github ? <GitBranch size={15} /> : null}
                {project.links?.live ? <ExternalLink size={15} /> : null}
                <ArrowRight size={16} />
              </div>
            </a>
          );
        })}
      </div>

      <div className="archive-count">
        <span />
        <p>{projects.length} projects</p>
        <span />
      </div>
    </div>
  );
}

export default ProjectExplorer;
