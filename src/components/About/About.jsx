import React from 'react';
import { useTranslation } from 'react-i18next';
import me from '../../resources/assets/me.jpeg';
import './about.scss';

const About = () => {
  const [t] = useTranslation();

  return (
    <section id='about-section' className='section'>
      <h2 className='about-header section-header'>{t('about.header')}</h2>
      <div className='about-top'>
        <img className='person-picture' src={me} alt='bryan' />
        <div className='about-me-description'>
          <p className='about-school'>{t('about.school')}</p>
          <p className='about-school'>{t('about.tech')}</p>
        </div>
      </div>
      <hr />
      <p className='about-tech'>{t('about.current')}</p>
      <ul className='skills'>
      {
          t('interests.skills' , { returnObjects: true }).map((skill)=>(
            <li className='skill' key={ skill }>{skill}</li>
          ))
        }
      </ul>
    </section>
  );
};
export default About;