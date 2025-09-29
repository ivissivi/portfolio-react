import React, { useCallback, useTransition } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isPending, startTransition] = useTransition();

  const scrollToSection = useCallback((sectionId: string) => {
    startTransition(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, []);

  const downloadCV = useCallback(() => {
    startTransition(() => {
      try {
        const link = document.createElement('a');
        link.href = '/Ivars_Sloka_CV.pdf';
        link.download = 'Ivars_Sloka_CV.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        window.open('/Ivars_Sloka_CV.pdf', '_blank');
      }
    });
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>{t('hero.title')}</h1>
        <h2>{t('hero.subtitle')}</h2>
        <p>{t('hero.description')}</p>
        
        <div className="tech-icons">
          <i className="fa-brands fa-python"></i>
          <i className="fa-brands fa-java"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-swift"></i>
        </div>
        
        <div className="cta-buttons">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn primary"
            disabled={isPending}
          >
            <span className="icon">
              {isPending ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="fa-solid fa-envelope"></i>}
            </span>
            <span>{t('hero.contact')}</span>
          </button>
          
          <button 
            onClick={downloadCV} 
            className="btn secondary"
            disabled={isPending}
          >
            <span className="icon">
              {isPending ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="fa-solid fa-download"></i>}
            </span>
            <span>{t('hero.download')}</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('projects')} 
            className="btn secondary"
            disabled={isPending}
          >
            <span className="icon">
              {isPending ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="fa-solid fa-code-branch"></i>}
            </span>
            <span>{t('hero.projects')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
