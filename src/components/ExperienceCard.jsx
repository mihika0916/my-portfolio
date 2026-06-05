function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div className="experience-meta">
        <span>{experience.date}</span>
        <span>{experience.company}</span>
      </div>
      <div>
        <h3>{experience.role}</h3>
        <p>{experience.description}</p>
      </div>
    </article>
  );
}

export default ExperienceCard;
