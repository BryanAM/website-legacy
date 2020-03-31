import React from 'react';
import { useTranslation } from 'react-i18next';
import './connect.scss';
const Connect = () => {
  const [t] =useTranslation();
  const handleOnClick = () => {
    window.location = "mailto:bryaument@gmail.com?subject=I saw your website! I'm saying hi! ";
  }
  return(
    <section id='connect-section'>
      <h2 className='section-header'>{t('connect.header')}</h2>
      <h2 className='connect-title'>{t('connect.me')}</h2>
      <p className='connect-employed'>{t('connect.employed')}</p>
      <button className='connect-hi' onClick={handleOnClick}>{t('connect.hi')}</button>
    </section>
  );
};
export default Connect;