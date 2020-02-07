import React from 'react';
import { useTranslation } from 'react-i18next';
import './about.scss';
import me from '../../resources/assets/me.jpeg';

const About = () => {
  const [t] = useTranslation();
  return (
    <section className="about">
    <h2 className="about-header">{t('about.header')}</h2>
    <img src={me} alt="bryan" />
    <p className="about-school">{t('about.school')}</p>
    <p className="about-tech">{t('about.tech')}</p>
    </section>
  );
};
export default About;