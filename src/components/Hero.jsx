import { ArrowDownRight, FileText } from 'lucide-react';
import { profile } from '../data/portfolioData.js';

function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker">Purdue CS Graduate</p>
        <h1 id="hero-title">{profile.heroTitle}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-subtitle">{profile.subtitle}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#work">
            View my work
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href={profile.resume}>
            Resume
            <FileText size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-visual portrait-card" aria-label="Portrait of Mihika Sharma">
        <div className="portrait-circle">
          <img src="/mihika-portrait.jpg" alt="Mihika Sharma" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
