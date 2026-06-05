import { ArrowLeft } from 'lucide-react';
import { skillGroups } from '../data/portfolioData.js';
import SkillChip from './SkillChip.jsx';

const formatLongDate = (dateString) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${dateString}T00:00:00`));

const skillIconMap = new Map(
  skillGroups.flatMap((group) => group.skills.map((skill) => [skill.name, skill.icon]))
);

function ExperienceDetail({ item }) {
  if (!item) {
    return (
      <main className="detail-page">
        <a className="back-link" href="/#experience">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to experience
        </a>
        <h1>Experience not found.</h1>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <a className="back-link" href="/#experience">
        <ArrowLeft size={18} aria-hidden="true" />
        Back to timeline
      </a>
      <article className="detail-card">
        <div className="detail-hero">
          <span className="detail-logo" aria-hidden="true">
            {item.logo}
          </span>
          <div>
            <p className="section-eyebrow">
              {formatLongDate(item.start)} - {formatLongDate(item.end)}
            </p>
            <h1>{item.company}</h1>
            <h2>{item.role}</h2>
            {item.location ? <p>{item.location}</p> : null}
          </div>
        </div>

        <section className="detail-section">
          <h3>What I Solved For</h3>
          <p>{item.solvedFor}</p>
        </section>

        <section className="detail-section">
          <h3>Work Highlights</h3>
          <ul>
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h3>Skills Learned & Used</h3>
          <div className="skill-list">
            {item.skills.map((skill) => (
              <SkillChip key={skill} name={skill} icon={skillIconMap.get(skill)} />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}

export default ExperienceDetail;
