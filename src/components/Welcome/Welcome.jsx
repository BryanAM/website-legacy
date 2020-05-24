import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/index.js';
import { motion } from "framer-motion";
import { parent, variant } from './variants.js';
import './welcome.scss';

const Welcome = () => {
  const [t] = useTranslation();
  const handleOnClick = () => {
    let switchLang = i18n.language === 'ja' | 'kr' ? 'en' : 'ja';
    i18n.changeLanguage(switchLang, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
    });
  }
  return(
    <motion.section  animate='fadeIn' variants={parent} id='welcome-section' className='section'>
      <motion.h1 initial={{ opacity: 0 }} variants={variant} className='section-header'>{t('welcome.greeting')}</motion.h1>
      <motion.p initial={{ opacity: 0 }} variants={variant} className='me-name'>{t('welcome.name')}</motion.p>
      <motion.p initial={{ opacity: 0 }} variants={variant} className='me-short'>{t('welcome.about')}</motion.p>
      <motion.p initial={{ opacity: 0 }} variants={variant} className='me-long'>{t('welcome.detail')}</motion.p>
      <motion.p initial={{ opacity: 0 }} variants={variant} className='pick-lang-desc'>{t('welcome.switchDesc')}</motion.p>
      <motion.button initial={{ opacity: 0 }} variants={variant} className='language-picker' onClick={handleOnClick}>
        {t('welcome.switch')}
      </motion.button>
    </motion.section>
  );
};

export default Welcome;