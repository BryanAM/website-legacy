import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/index.js';
import './welcome.scss';

const Welcome = () => {
  const [t] = useTranslation();
  //TODO need to add some fancy logic for choosing the opposite language
  const handleOnClick = () => {
    i18n.changeLanguage('ja', (err, t) => {
  if (err) return console.log('something went wrong loading', err);
  t('key'); // -> same as i18next.t
});
  }
  return(
    <section id="welcome-section" className="section">
      <h1 className="section-header">{t('welcome.greeting')}</h1>
      <p className="me-name">{t('welcome.name')}</p>
      <p className="me-short">{t('welcome.about')}</p>
      <p className="me-long">{t('welcome.detail')}</p>
      <button onClick={handleOnClick}></button>
    </section>
  );

};

export default Welcome;