import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './SectionHeading';
import { experience } from '../data/content';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionHeading icon="fa-solid fa-briefcase" titleKey="experience.title" />

        <div className="experience-grid">
          {experience.map((item) => (
            <div className="experience-card" key={item.key}>
              <div className="entry-meta">
                <span className="entry-duration">{t(`${item.key}.duration`)}</span>
                <div className="entry-org">
                  <span className="company-logo">
                    <img src={item.logo} alt={item.logoAlt} />
                  </span>
                  <span className="company">{t(`${item.key}.company`)}</span>
                </div>
              </div>
              <div className="entry-body">
                <h3>{t(`${item.key}.title`)}</h3>
                <p className="description">{t(`${item.key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
