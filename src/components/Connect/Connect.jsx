import React from 'react';
import { useTranslation } from 'react-i18next';
import './connect.scss';
const Connect = () => {
  const [t] =useTranslation();

  return(
    <section id='connect-section'>
      <h2 className='section-header'>{t('connect.header')}</h2>
      <h2 className='connect-title'>{t('connect.me')}</h2>
      <p className='connect-employed'>{t('connect.employed')}</p>
      <button className='connect-hi'>{t('connect.hi')}</button>
    </section>
  );
};
export default Connect;