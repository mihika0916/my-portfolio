import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import SkillsPanel from './components/SkillsPanel.jsx';
import ProjectExplorer from './components/ProjectExplorer.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import Footer from './components/Footer.jsx';
import {
  about,
  contact,
  experienceItems,
  projects,
  skillGroups,
} from './data/portfolioData.js';

function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const projectSlug = hash.startsWith('#work/') ? hash.replace('#work/', '') : null;
  const activeProject = projectSlug
    ? projects.find((project) => project.slug === projectSlug)
    : null;

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (projectSlug || !hash || !hash.startsWith('#')) return undefined;

    const id = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
    }, 0);

    return () => window.clearTimeout(id);
  }, [hash, projectSlug]);

  if (projectSlug) {
    return (
      <>
        <Navbar />
        <ProjectDetail project={activeProject} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <SectionHeader
            id="about-title"
            eyebrow="About"
            title="About Me"
            description={about.intro}
          />
          <SkillsPanel groups={skillGroups} />
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <SectionHeader
            id="experience-title"
            eyebrow="Experience"
            title="My professional journey."
            description="A timeline of my work experience and key roles."
          />
          <ExperienceTimeline items={experienceItems} />
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <SectionHeader
            id="work-title"
            eyebrow="Selected Work"
            title="Things I’ve built."
            description="A curated archive of shipped tools, research systems, and product-minded builds."
          />
          <ProjectExplorer projects={projects} />
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-card">
            <p className="section-eyebrow">Contact</p>
            <h2 id="contact-title">Let&apos;s build something thoughtful.</h2>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${contact.email}`}>
                Email
              </a>
              <a className="button button-secondary" href={contact.linkedin}>
                LinkedIn
              </a>
              <a className="button button-secondary" href={contact.github}>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
