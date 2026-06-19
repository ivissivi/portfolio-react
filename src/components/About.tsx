import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './SectionHeading';
import { aboutParagraphs } from '../data/content';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeading icon="fa-solid fa-user" titleKey="about.title" />

        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img src="/static/images/profile.jpg" alt="Ivars Sloka" className="profile-image" />
            </div>
          </div>

          <div className="about-text">
            {aboutParagraphs.map((key) => (
              <p key={key}>{t(key)}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
