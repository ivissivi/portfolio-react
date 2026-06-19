import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SectionHeadingProps {
  icon: string;
  titleKey: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ icon, titleKey }) => {
  const { t } = useLanguage();
  return (
    <h2>
      <i className={icon}></i>
      <span>{t(titleKey)}</span>
    </h2>
  );
};

export default SectionHeading;
