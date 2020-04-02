import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/index.js';
import './welcome.scss';

const Welcome = () => {
  const [t] = useTranslation();

  const handleOnClick = () => {
    let switchLang = i18n.language === 'ja' ? 'en' : 'ja';
    i18n.changeLanguage(switchLang, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
    });
  }
  return(
    <section id='welcome-section' className='section'>
      <h1 className='section-header'>{t('welcome.greeting')}</h1>
      <p className='me-name'>{t('welcome.name')}</p>
      <p className='me-short'>{t('welcome.about')}</p>
      <p className='me-long'>{t('welcome.detail')}</p>
      <p className='pick-lang-desc'>{t('welcome.switchDesc')}</p>
      <button className='language-picker' onClick={handleOnClick}>
        {t('welcome.switch')}
      </button>
    </section>
  );

};

export default Welcome;