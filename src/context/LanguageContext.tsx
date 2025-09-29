import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  const t = (key: string): string => {
    try {
      // Direct key lookup first (for keys like 'nav.logo')
      if (key in translations) {
        const translationObj = translations[key as keyof typeof translations];
        if (typeof translationObj === 'object' && translationObj && language in translationObj) {
          return translationObj[language as keyof typeof translationObj];
        }
      }
      
      // Fallback: nested key navigation for complex keys
      const keys = key.split('.');
      let value: any = translations;
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key} (missing: ${k})`);
          return key;
        }
      }
      
      if (typeof value === 'object' && value && language in value) {
        return value[language];
      }
      
      console.warn(`Language not found: ${language} for key: ${key}`);
      return key;
    } catch (error) {
      console.error('Translation error:', error, 'for key:', key);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
