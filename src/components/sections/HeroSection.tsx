import { Link } from 'react-router-dom';
import './HeroSection.css';

const FEATURE_CARDS = [
  {
    id: 'schemas',
    title: 'Semantic Engine Schemas',
    description:
      'Describe your data in a machine-readable format. No coding, just fill in your information.',
    buttonText: 'Write your own schema',
    buttonHref: 'https://www.semanticengine.org/',
    learnMoreHref: '/solutions/schemas',
    color: 'schemas',
  },
  { 
    id: 'agreements',
    title: 'Semantic Engine Agreements',
    description:
      'Describe in custom terms how you want to make your work available.​',
    buttonText: 'Demo Agreements',
    buttonHref: 'https://drt-test.canadacentral.cloudapp.azure.com/',
    learnMoreHref: '/solutions/agreements',
    color: 'agreements',
  },
  {
    id: 'records',
    title: 'Semantic Engine Records',
    description:
      'Catalogue your data, your project and more in a machine-readable format.',
    buttonText: 'Write your own record',
    buttonHref: 'https://zealous-mud-0d3297f0f.3.azurestaticapps.net/',
    learnMoreHref: '/solutions/records',
    color: 'records',
  },
];

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">The Semantic Engine</h1>
        <p className="hero__subtitle">
          Modular tools that add meaning to data and grow your research Data Space
        </p>

        <div className="hero__cards">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`hero__card hero__card--${card.color}`}
            >
              <h2 className="hero__card-title">{card.title}</h2>
              <p className="hero__card-description">{card.description}</p>
              <Link to={card.buttonHref} target="_blank" rel="noopener noreferrer" className="hero__card-button">
                {card.buttonText}
              </Link>
              <Link to={card.learnMoreHref} className="hero__card-link">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
