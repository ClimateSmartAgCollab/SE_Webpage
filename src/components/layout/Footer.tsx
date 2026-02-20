import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__divider" aria-hidden />
      <div className="footer__inner">
      <a
            href="/"
            className="footer__partner"
            aria-label="Semantic Engine"
          >
            <img
              src={encodeURI("/images/SemanticEngineLogo-800 (2).png")}
              alt="Semantic Engine"
              className="footer__logo-img"
            />
          </a>
      </div>
      
    </footer>
  );
}
