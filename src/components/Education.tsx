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
              <div className="education-header">
                <div className="logo-container" style={{width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '8px', overflow: 'hidden'}}>
                  <img src={item.logo} alt={item.logoAlt} style={{width: '60px', height: '60px', objectFit: 'contain'}} />
                </div>
                <div className="education-info">
                  <h3>{t(`${item.key}.title`)}</h3>
                  <p className="institution">{t(`${item.key}.institution`)}</p>
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

export default Education;
