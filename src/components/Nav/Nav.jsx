import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Hamburger from '../Hamburger/Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { ulVariants, liVariants, navVariant, svgVariants } from './variants.js';
import './nav.scss';
import  Seal  from '../../resources/assets/Seal.svg';
import i18n from '../../i18n/index.js';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(true);
  const [t] = useTranslation();
  // 0 = mobile, 1 = desktop
  const [screenBreak, setScreenBreak] = useState(0);
  const BREAK_POINT = 1024;
  const handleOnClick = () => {
    setOpen(!open);
  }

  // only update on mobile / desktop screen break
  useEffect(() => {
    const handleResize = () => {
      let updatedWidth = window.innerWidth;
      // update to desktop
      if(screenBreak === 0  && updatedWidth >= BREAK_POINT) {
        setOpen(false);
        setScreenBreak(1);
        setMobile(false);
      
      // update to mobile
      } else if (screenBreak === 1 && updatedWidth < BREAK_POINT) {
        setScreenBreak(0);
        setMobile(true);
      }
     
    }
    window.onresize = handleResize;
  },[screenBreak]);

  useEffect(() => {
    let screenWidth = window.innerWidth;
    setScreenBreak(screenWidth < BREAK_POINT ? 0 : 1);
    setMobile( screenBreak ? false : true);
  }, [screenBreak]);

  const handleEnglish = () => {
    i18n.changeLanguage('en', (err, t) => {
      document.documentElement.lang = 'en';
      if (err) return console.log('something went wrong loading', err);
    });
  }
  
  const handleJapanese = () => {
    i18n.changeLanguage('ja', (err, t) => {
      document.documentElement.lang = 'ja';
      if (err) return console.log('something went wrong loading', err);
    });
  }
  
  const handleKorean = () => {
    i18n.changeLanguage('kr', (err, t) => {
      document.documentElement.lang = 'kr';
      if (err) return console.log('something went wrong loading', err);
    });
  }

  return (
    <>
    <motion.nav 
      id='nav-section'
      className='nav'
      initial={false}
      animate={mobile ? (open ? 'open' : 'closed') : 'desktop'}
    >
        <button className='hamburger' onClick={handleOnClick}>
          <Hamburger open={open}/>
        </button>
        <motion.a className='mail-icon' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="mailto:bryaument@gmail.com?subject=I saw your website, let's connect!" >
          <FontAwesomeIcon icon={faEnvelope} />
        </motion.a>
        <motion.div  variants={navVariant} className={`menu ${mobile ? (open ? 'open': 'closed') : 'desktop'}`}>
        <img className='seal' src={Seal} alt='seal'/>
        <motion.svg  className={mobile ? '': 'ul-display-line'} variants={svgVariants} width="90" height="110">
          <rect className='rect-nav' x="87" y="0" width="10" height="150"/>
        </motion.svg>
          <motion.ul className='nav-menu-ul' variants={ulVariants}>
            {
              // return objects allow i18n items to be iterated
              t('nav.items' , { returnObjects: true }).map((key, index) => {
                for(var k in key) {
                  return(
                    <motion.li
                      variants={ liVariants }
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.99 }}
                      key={index + 1}
                      className='nav-list-item'
                    > 
                      <a href={`#${key[k].id}`} className='nav-item' onClick={handleOnClick}>
                        {t(`${key[k].desc}`)}
                      </a>
                    </motion.li>
                  )
                }
                return null
              })
            }
          </motion.ul>
          <div className='lang-buttons'>
          <motion.ul className='nav-menu-ul' variants={ulVariants}>
            <motion.li className='nav-buttom-item' variants={ liVariants }><motion.button className='lang-button' onClick={handleEnglish}>EN</motion.button></motion.li>
            <motion.li className='nav-buttom-item' variants={ liVariants }><motion.button className='lang-button' onClick={handleJapanese}>JP</motion.button></motion.li>
            <motion.li className='nav-buttom-item' variants={ liVariants }><motion.button className='lang-button' onClick={handleKorean}>KR</motion.button></motion.li>
          </motion.ul>
          </div>
        </motion.div>
    </motion.nav>
    </>
  );
};

export default Nav; 