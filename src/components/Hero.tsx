import React, { useCallback, useTransition, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { techIcons, heroButtons, HeroAction } from '../data/content';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isPending, startTransition] = useTransition();
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const downloadCV = useCallback(() => {
    setDownloadError(null); // Clear any previous errors
    startTransition(() => {
      try {
        // Use Vite's BASE_URL for proper path resolution in production
        const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
        const cvPath = `${baseUrl}/Ivars_Sloka_CV.pdf`;
        
        // Check if the file exists by making a HEAD request
        fetch(cvPath, { method: 'HEAD' })
          .then(response => {
            if (!response.ok) {
              throw new Error(`CV file not found (${response.status})`);
            }
            
            const link = document.createElement('a');
            link.href = cvPath;
            link.download = 'Ivars_Sloka_CV.pdf';
            link.style.display = 'none';
            link.target = '_blank'; // Fallback for browsers that don't support download
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Add a small delay to ensure download starts before cleanup
            setTimeout(() => {
              if (document.body.contains(link)) {
                document.body.removeChild(link);
              }
            }, 100);
          })
          .catch(error => {
            console.error('Download failed:', error);
            setDownloadError('Failed to download CV. Please try again or check your internet connection.');
            
            // Fallback: try to open in new tab
            window.open(cvPath, '_blank');
          });
      } catch (error) {
        console.error('Download failed:', error);
        setDownloadError('Failed to download CV. Please try again or check your internet connection.');
        
        // Fallback: try to open in new tab
        const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
        const cvPath = `${baseUrl}/Ivars_Sloka_CV.pdf`;
        window.open(cvPath, '_blank');
      }
    });
  }, []);

  const handleAction = useCallback((action: HeroAction) => {
    if (action === 'download') {
      downloadCV();
    } else {
      scrollToSection(action);
    }
  }, [downloadCV, scrollToSection]);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>{t('hero.title')}</h1>
        <h2>{t('hero.subtitle')}</h2>
        <p>{t('hero.description')}</p>
        
        <div className="tech-icons">
          {techIcons.map((icon) => (
            <i key={icon} className={icon}></i>
          ))}
        </div>

        <div className="cta-buttons">
          {heroButtons.map((button) => (
            <button
              key={button.action}
              onClick={() => handleAction(button.action)}
              className={`btn ${button.variant}`}
              disabled={isPending}
            >
              <span className="icon">
                {isPending ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className={button.icon}></i>}
              </span>
              <span>{t(button.labelKey)}</span>
            </button>
          ))}
        </div>
        
        {downloadError && (
          <div className="download-error" style={{ 
            marginTop: '1rem', 
            padding: '0.75rem', 
            backgroundColor: '#ffebee', 
            color: '#c62828', 
            borderRadius: '4px',
            fontSize: '0.9rem',
            textAlign: 'center'
          }}>
            <i className="fa-solid fa-exclamation-triangle" style={{ marginRight: '0.5rem' }}></i>
            {downloadError}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
