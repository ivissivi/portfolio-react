import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>
          <i className="fa-solid fa-briefcase"></i>
          <span>{t('experience.title')}</span>
        </h2>
        
        <div className="experience-grid">
          <div className="experience-card">
            <div className="experience-header">
              <div className="company-info">
                <h3>{t('experience.gocardless.title')}</h3>
                <div className="company-row">
                  <div className="company-logo">
                    <img src="/static/images/companies/gocardless.png" alt="GoCardless Logo" />
                  </div>
                  <p className="company">{t('experience.gocardless.company')}</p>
                </div>
                <p className="duration">{t('experience.gocardless.duration')}</p>
              </div>
            </div>
            <p className="description">{t('experience.gocardless.description')}</p>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div className="company-info">
                <h3>{t('experience.qa.title')}</h3>
                <div className="company-row">
                  <div className="company-logo">
                    <img src="/static/images/companies/testdevlab.png" alt="TestDevLab Logo" />
                  </div>
                  <p className="company">{t('experience.qa.company')}</p>
                </div>
                <p className="duration">{t('experience.qa.duration')}</p>
              </div>
            </div>
            <p className="description">{t('experience.qa.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
