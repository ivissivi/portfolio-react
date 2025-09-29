import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i>
          <span>{t('education.title')}</span>
        </h2>
        
        <div className="education-grid">
          <div className="education-card">
            <div className="education-header">
              <div className="logo-container" style={{width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '8px', overflow: 'hidden'}}>
                <img src="/static/images/via_logo.png" alt="Vidzeme University Logo" style={{width: '60px', height: '60px', objectFit: 'contain'}} />
              </div>
              <div className="education-info">
                <h3>{t('education.masters.title')}</h3>
                <p className="institution">{t('education.masters.institution')}</p>
                <p className="duration">{t('education.masters.duration')}</p>
              </div>
            </div>
            <p className="description">{t('education.masters.description')}</p>
          </div>
          
          <div className="education-card">
            <div className="education-header">
              <div className="logo-container" style={{width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '8px', overflow: 'hidden'}}>
                <img src="/static/images/via_logo.png" alt="Vidzeme University Logo" style={{width: '60px', height: '60px', objectFit: 'contain'}} />
              </div>
              <div className="education-info">
                <h3>{t('education.bachelors.title')}</h3>
                <p className="institution">{t('education.bachelors.institution')}</p>
                <p className="duration">{t('education.bachelors.duration')}</p>
              </div>
            </div>
            <p className="description">{t('education.bachelors.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
