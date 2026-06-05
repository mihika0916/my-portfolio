function SkillChip({ name, icon: Icon }) {
  return (
    <span className="skill-chip">
      {Icon ? <Icon size={15} aria-hidden="true" /> : null}
      {name}
    </span>
  );
}

export default SkillChip;
