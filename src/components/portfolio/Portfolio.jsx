import React, { useState } from 'react';
import './Portfolio.css';
import CarelyProject from '../../assets/CarelyProject.png';
import PieralisiProject from '../../assets/PieralisiProject.png';
import WordLensProject from '../../assets/WordLensProject.png';

const data = [
  {
    id: 1,
    title: "Carely - iOS app",
    description: `
    Developed for iOS 26 or later, Carely uses advanced system features to connect volunteers to Long-Term Care Facilities for the Elderly (ILPIs) and facilitate charitable actions that transform lives. Caring for those who cared for us is an act of love, and now it's easier to make it happen by connecting volunteers to Long-Term Care Facilities for the Elderly (ILPIs), facilitating charitable actions, and bringing those who want to help closer to those who came before us and built our present.
    `,
    cta: { label: "App Store", href: "https://apps.apple.com/br/app/carely/id6755479596" },
    image: CarelyProject
  },
  {
    id: 2,
    title: "Marketplace seleção de Azeites",
    description: `Creation of a marketplace called "Pieralisi seleção de azeites" for the company Pieralisi do Brasil, created using HTML, CSS, JS, and ReactJS technologies. With the platform launching on August 8th, 2024, I was assigned by my manager and the company's CEO to create a marketplace for the company, with the aim of creating a platform to achieve greater reach among Pieralisi do Brasil's olive oil producers and their respective end customers (consumers).`,
    cta: { label: "GitHub", href: "https://github.com/felipalb/clubedoazeitepieralisi" },
    image: PieralisiProject
  },
  {
    id: 3,
    title: "WordLens - iOS app",
    description: `WordLens is my project submitted to the Swift Student Challenge 2026. The project combines crossword puzzles with current technologies such as augmented reality and artificial intelligence. My goal was to have the user look around to find, in the real world, the object corresponding to the word in the puzzle. Thus, the experience becomes interactive, seeking to recapture sensations that many believed had been left behind in the past.`,
    cta: { label: "TestFlight", href: "https://testflight.apple.com/join/NdJzhGee" },
    image: WordLensProject
  }
];

const Portfolio = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="portfolio">
      <h5>Some of my</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, title, description, cta, image }) => (
          <div
            className={`portfolio__card${flipped[id] ? ' flipped' : ''}`}
            key={id}
            onClick={() => toggleFlip(id)}
          >
            <div className='portfolio__card-inner'>
              {/* Front */}
              <article className='portfolio__item portfolio__face portfolio__front'>
                <h3>{title}</h3>
                <p className='portfolio__description'>{description}</p>
                <div className='portfolio__item-cta'>
                  <a
                    href={cta.href}
                    className='btn'
                    target='blank'
                    onClick={e => e.stopPropagation()}
                  >
                    {cta.label}
                  </a>
                </div>
              </article>

              {/* Back */}
              <article className='portfolio__item portfolio__face portfolio__back'>
                <img src={image} alt={title} className='portfolio__back-image' />
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
