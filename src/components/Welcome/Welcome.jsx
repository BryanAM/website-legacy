import React from 'react';
import './welcome.scss';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const [t] = useTranslation();
  return(
    <section className="about-container">
      <h1>{t('welcome.greeting')}</h1>
      <p className="me-name">{t('welcome.name')}</p>
      <p className="me-short">{t('welcome.about')}</p>
      <p className="me-long">{t('welcome.detail')}</p>
    </section>
  );

};

export default Welcome;