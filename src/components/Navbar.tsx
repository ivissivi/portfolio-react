import React, { useState, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const languages = [
    { code: 'en', flagCode: 'gb', name: 'EN' },
    { code: 'lv', flagCode: 'lv', name: 'LV' },
    { code: 'ru', flagCode: 'ru', name: 'RU' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-content">
        <button className="logo" onClick={() => scrollToSection('hero')}>
          <i className="fa-solid fa-code"></i>
          <span>{t('nav.logo')}</span>
        </button>
        
        <div className={`nav-right ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')}>
              <i className="fa-solid fa-user"></i>
              <span>{t('nav.about')}</span>
            </button>
            <button onClick={() => scrollToSection('experience')}>
              <i className="fa-solid fa-briefcase"></i>
              <span>{t('nav.experience')}</span>
            </button>
            <button onClick={() => scrollToSection('education')}>
              <i className="fa-solid fa-graduation-cap"></i>
              <span>{t('nav.education')}</span>
            </button>
            <button onClick={() => scrollToSection('projects')}>
              <i className="fa-solid fa-code-branch"></i>
              <span>{t('nav.projects')}</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="cta-contact">
              <i className="fa-solid fa-envelope"></i>
              <span>{t('nav.contact')}</span>
            </button>
          </div>
          
          <div className="language-switcher">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                onClick={() => setLanguage(lang.code)}
              >
                <img 
                  src={`https://flagcdn.com/w20/${lang.flagCode}.png`}
                  alt={`${lang.name} flag`}
                  className="flag-icon"
                  loading="lazy"
                />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
