import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy; {currentYear} {t('footer.name')}. {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;
