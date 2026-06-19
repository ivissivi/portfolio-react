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
              <div className="experience-header">
                <div className="company-info">
                  <h3>{t(`${item.key}.title`)}</h3>
                  <div className="company-row">
                    <div className="company-logo">
                      <img src={item.logo} alt={item.logoAlt} />
                    </div>
                    <p className="company">{t(`${item.key}.company`)}</p>
                  </div>
                  <p className="duration">{t(`${item.key}.duration`)}</p>
                </div>
              </div>
              <p className="description">{t(`${item.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
