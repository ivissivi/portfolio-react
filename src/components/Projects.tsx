import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './SectionHeading';
import { projects } from '../data/content';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeading icon="fa-solid fa-code-branch" titleKey="projects.title" />

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.key}>
              <div className="project-header">
                <i className={project.icon}></i>
                <h3>{t(`${project.key}.title`)}</h3>
              </div>
              <div className="video-placeholder">
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="video-link">
                  <img src={project.thumbnail} alt={project.thumbnailAlt} className="video-thumbnail" />
                  <div className="video-overlay">
                    <i className="fa-solid fa-play-circle"></i>
                    <span className="video-text">{t('projects.watch_demo')}</span>
                  </div>
                </a>
              </div>
              <p className="description">{t(`${project.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
