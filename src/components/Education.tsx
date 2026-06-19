import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './SectionHeading';
import { education } from '../data/content';

const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="education">
      <div className="container">
        <SectionHeading icon="fa-solid fa-graduation-cap" titleKey="education.title" />

        <div className="education-grid">
          {education.map((item) => (
            <div className="education-card" key={item.key}>
              <div className="entry-meta">
                <span className="entry-duration">{t(`${item.key}.duration`)}</span>
                <div className="entry-org">
                  <span className="logo-container">
                    <img src={item.logo} alt={item.logoAlt} />
                  </span>
                  <span className="company">{t(`${item.key}.institution`)}</span>
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

export default Education;
