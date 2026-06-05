import { profile } from '../data/portfolioData.js';

function Footer() {
  return (
    <footer className="footer">
      <p>{profile.name}</p>
      <a href="#top">Back to top</a>
    </footer>
  );
}

export default Footer;
