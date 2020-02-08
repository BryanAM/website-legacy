import React from 'react';
import { useTranslation } from 'react-i18next';
import './welcome.scss';

const Welcome = () => {
  const [t] = useTranslation();
  return(
    <section id="welcome-section" className="section">
      <h1 className="section-header">{t('welcome.greeting')}</h1>
      <p className="me-name">{t('welcome.name')}</p>
      <p className="me-short">{t('welcome.about')}</p>
      <p className="me-long">{t('welcome.detail')}</p>
    </section>
  );

};

export default Welcome;