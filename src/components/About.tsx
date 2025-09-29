import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>
          <i className="fa-solid fa-user"></i>
          <span>{t('about.title')}</span>
        </h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img src="/static/images/profile.jpg" alt="Ivars Sloka" className="profile-image" />
            </div>
          </div>
          
          <div className="about-text">
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
            <p>{t('about.description3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
