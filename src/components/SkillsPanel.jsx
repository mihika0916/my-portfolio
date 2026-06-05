import SkillChip from './SkillChip.jsx';

function SkillsPanel({ groups }) {
  return (
    <div className="skills-panel">
      {groups.map((group) => (
        <section className="skill-group" key={group.label} aria-labelledby={`skills-${group.label}`}>
          <h3 id={`skills-${group.label}`}>{group.label}</h3>
          <div className="skill-list">
            {group.skills.map((skill) => (
              <SkillChip key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default SkillsPanel;
