import { ArrowLeft, ExternalLink, FileText, GitBranch } from 'lucide-react';
import { useEffect } from 'react';
import SkillChip from './SkillChip.jsx';

function ProjectDetail({ project }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project?.slug]);

  if (!project) {
    return (
      <main className="project-detail-page">
        <a className="back-link" href="#work">
          <ArrowLeft size={17} aria-hidden="true" />
          Back to all projects
        </a>
        <h1>Project not found.</h1>
      </main>
    );
  }

  const hasMediaOrLinks =
    project.media.length || project.resources.length || project.links?.github || project.links?.live;

  return (
    <main className="project-detail-page page-transition">
      <article className="project-folder-detail">
        <header className="project-detail-header">
          <a className="back-link" href="#work">
            <ArrowLeft size={17} aria-hidden="true" />
            Back to all projects
          </a>
          <div className="project-title-block">
            <div className="detail-tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h1>{project.title}</h1>
            {project.date ? <span className="project-date">{project.date}</span> : null}
            <p>{project.overview}</p>
          </div>
        </header>

        <section className="project-detail-section">
          <p className="detail-label">The Problem</p>
          <p>{project.problem}</p>
        </section>

        {project.challenges ? (
          <section className="project-detail-section">
            <p className="detail-label">Technical Challenges</p>
            <p>{project.challenges}</p>
          </section>
        ) : null}

        <section className="project-detail-section">
          <p className="detail-label">Features</p>
          <ul className="feature-list">
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.featureMedia?.length ? (
            <div className="feature-media-grid">
              {project.featureMedia.map((item) => (
                <figure key={item.title}>
                  <img src={item.preview} alt={`${item.title} diagram`} />
                  <figcaption>
                    <strong>{item.title}</strong>
                    <span>{item.type}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </section>

        <section className="project-detail-section">
          <p className="detail-label">Tech Stack</p>
          <div className="skill-list">
            {project.tools.map((tool) => (
              <SkillChip key={tool.name} name={tool.name} icon={tool.icon} />
            ))}
          </div>
        </section>

        {hasMediaOrLinks ? (
          <section className="project-detail-section">
            <p className="detail-label">Media & Links</p>
            {project.media.length ? (
              <div className="media-gallery">
                {project.media.map((item) => {
                  const MediaIcon = item.icon;
                  return (
                    <figure key={item.title}>
                      {item.video ? (
                        <video className="media-preview-video" controls preload="metadata">
                          <source src={item.video} type={item.videoType || 'video/mp4'} />
                        </video>
                      ) : item.preview ? (
                        item.href ? (
                          <a className="media-preview" href={item.href}>
                            <img src={item.preview} alt={`${item.title} preview`} />
                          </a>
                        ) : (
                          <div className="media-preview">
                            <img src={item.preview} alt={`${item.title} preview`} />
                          </div>
                        )
                      ) : (
                        <div>
                          <MediaIcon size={26} aria-hidden="true" />
                        </div>
                      )}
                      <figcaption>
                        <strong>{item.title}</strong>
                        <span>{item.type}</span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            ) : null}
            <div className="resource-list media-link-list">
              {project.links?.github ? (
                <a
                  aria-label={`${project.title} GitHub repository`}
                  className="github-icon-link"
                  href={project.links.github}
                  title="GitHub repository"
                >
                  <GitBranch size={16} aria-hidden="true" />
                </a>
              ) : null}
              {project.links?.live ? (
                <a className="site-link" href={project.links.live}>
                  <ExternalLink size={16} aria-hidden="true" />
                  {project.links.liveLabel || 'Live Site'}
                </a>
              ) : null}
              {project.resources.map((resource) => (
                <a href={resource.href} key={resource.label}>
                  <FileText size={16} aria-hidden="true" />
                  {resource.label}
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </main>
  );
}

export default ProjectDetail;
