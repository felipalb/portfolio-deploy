import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const sections = [
  {
    title: 'Languages',
    className: 'experience__frontend',
    items: ['JavaScript', 'Python', 'C++', 'Swift', 'Dart']
  },
  {
    title: 'Technologies',
    className: 'experience__backend',
    items: ['ReactJS', 'Foundation Models', 'SwiftUI', 'CoreML & CreateML', 'FireBase', 'App Intents']
  }
];

const maxCharCount = Math.max(...sections.map(s =>
  s.items.reduce((acc, item) => acc + item.length, 0)
));

const maxSection = sections.find(s =>
  s.items.reduce((acc, item) => acc + item.length, 0) === maxCharCount
);

const maxRows = Math.ceil(maxSection.items.length / 2);

const Experience = () => {
  return (
    <section id="experience">
      <h2>Hard-Skills</h2>

      <div className='container experience__container'>
        {sections.map(({ title, className, items }) => (
          <div key={className} className={className}>
            <h3>{title}</h3>
            <div
              className='experience__content'
              style={{ gridTemplateRows: `repeat(${maxRows}, auto)` }}
            >
              {items.map((item) => (
                <article key={item} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>{item}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
