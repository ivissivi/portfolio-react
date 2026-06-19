import React, { useState, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { navItems, languages } from '../data/content';

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

  return (
    <nav className="navbar">
      <div className="nav-content">
        <button className="logo" onClick={() => scrollToSection('hero')}>
          <i className="fa-solid fa-code"></i>
          <span>{t('nav.logo')}</span>
        </button>

        <div className={`nav-right ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={item.cta ? 'cta-contact' : undefined}
              >
                <i className={item.icon}></i>
                <span>{t(item.labelKey)}</span>
              </button>
            ))}
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
