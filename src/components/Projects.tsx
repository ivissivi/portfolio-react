import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>
          <i className="fa-solid fa-code-branch"></i>
          <span>{t('projects.title')}</span>
        </h2>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <i className="fa-solid fa-university"></i>
              <h3>{t('projects.ai.title')}</h3>
            </div>
            <div className="video-placeholder">
              <a href="https://youtu.be/EmqhcdBvW1s" target="_blank" rel="noopener noreferrer" className="video-link">
                <img src="https://img.youtube.com/vi/EmqhcdBvW1s/maxresdefault.jpg" alt="Open Banking Solution Demo" className="video-thumbnail" />
                <div className="video-overlay">
                  <i className="fa-solid fa-play-circle"></i>
                  <span className="video-text">{t('projects.watch_demo')}</span>
                </div>
              </a>
            </div>
            <p className="description">{t('projects.ai.description')}</p>
          </div>

          <div className="project-card">
            <div className="project-header">
              <i className="fa-solid fa-music"></i>
              <h3>{t('projects.security.title')}</h3>
            </div>
            <div className="video-placeholder">
              <a href="https://youtu.be/KBo5BJZzCt4" target="_blank" rel="noopener noreferrer" className="video-link">
                <img src="https://img.youtube.com/vi/KBo5BJZzCt4/maxresdefault.jpg" alt="Piano Learning Solution Demo" className="video-thumbnail" />
                <div className="video-overlay">
                  <i className="fa-solid fa-play-circle"></i>
                  <span className="video-text">{t('projects.watch_demo')}</span>
                </div>
              </a>
            </div>
            <p className="description">{t('projects.security.description')}</p>
          </div>

          <div className="project-card">
            <div className="project-header">
              <i className="fa-solid fa-city"></i>
              <h3>{t('projects.smartcity.title')}</h3>
            </div>
            <div className="video-placeholder">
              <i className="fa-solid fa-play-circle"></i>
            </div>
            <p className="description">{t('projects.smartcity.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
