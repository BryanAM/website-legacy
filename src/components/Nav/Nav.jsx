import React, { useState, useEffect } from 'react';
import i18n from '../../i18n/index.js';
import Hamburger from '../Hamburger/Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import en from '../../i18n/locales/en.json';
import jp from '../../i18n/locales/jp.json';
import { motion } from "framer-motion";
import { ulVariants, liVariants, navVariant, svgVariants } from './variants.js';
import './nav.scss';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(true);
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
        <motion.svg variants={svgVariants} width="90" height="110">
          <rect className='rect-nav' x="87" y="0" width="10" height="150"/>
        </motion.svg>
          <motion.ul className='nav-menu-ul' variants={ulVariants}>
            {Object.keys(en.en.nav).map((value, index) => (
              
                <motion.li
                  variants={ liVariants }
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.99 }}
                  key={index + 1}
                  className='nav-list-item'
                > 
                  <a href={`#${en.en.nav[value].id}`} className='nav-item'>
                    {(i18n.language === 'en' ? en.en.nav : jp.jp.nav)[value].desc}
                  </a>
              </motion.li>
           
          ))}
          </motion.ul>
        </motion.div>
    </motion.nav>
    </>
  );
};

export default Nav; 