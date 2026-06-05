function SectionHeader({ id, eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionHeader;
