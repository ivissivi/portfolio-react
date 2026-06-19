import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SectionHeadingProps {
  icon: string;
  titleKey: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ icon, titleKey }) => {
  const { t } = useLanguage();
  return (
    <div className="section-head">
      <h2>
        <i className={icon}></i>
        <span>{t(titleKey)}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
