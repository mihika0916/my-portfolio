function BentoCard({ children, className = '' }) {
  return <div className={`bento-card ${className}`}>{children}</div>;
}

export default BentoCard;
