import React from 'react';
import { useTranslation } from 'react-i18next';
import './work.scss';

const Work = () => {
  const [t] = useTranslation();
  return(
    <section id="work-section" className="section">
　　　　<h2 className="section-header">{t('work.header')}</h2>
    </section>
  );
};
export default Work;