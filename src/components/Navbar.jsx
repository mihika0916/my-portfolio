import { Mail } from 'lucide-react';
import { navItems, profile } from '../data/portfolioData.js';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Mihika Sharma home">
          MS
        </a>
        <div className="nav-links" aria-label="Section links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="social-links" aria-label="Social links">
          <a href={profile.linkedin} aria-label="LinkedIn">
            <span aria-hidden="true">in</span>
          </a>
          <a href={profile.github} aria-label="GitHub">
            <span aria-hidden="true">gh</span>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} strokeWidth={2} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
