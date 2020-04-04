import React, { useState } from 'react';
import i18n from '../../i18n/index.js';
import Hamburger from '../Hamburger/Hamburger';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import en from '../../i18n/locales/en.json';
import jp from '../../i18n/locales/jp.json';
import { motion } from "framer-motion";
import { ulVariants, liVariants, navVariant } from './variants.js';

const Nav = () => {
  const [open, setOpen] = useState(false);
  
  const handleOnClick = () => {
    setOpen(!open);
    }

  return (
    <motion.nav 
      id='nav-section'
      className='nav'
      initial={false}
      animate={open ? 'open' : 'closed'}
    >
        <button className='hamburger' onClick={handleOnClick}>
          <Hamburger open={open}/>
        </button>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="mailto:bryaument@gmail.com?subject=I saw your website, let's connect!" >
          <FontAwesomeIcon icon={faEnvelope} />
        </motion.a>
        <motion.div  variants={navVariant} className={`menu ${open ? 'open' : 'closed'}`}>
          <motion.ul variants={ulVariants}>
            {Object.keys(en.en.nav).map((value, index) => (
              <motion.li
                variants={ liVariants }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={index + 1}
                className='nav-list-item'
              > 
                <a href={`#${en.en.nav[value].id}`} className='nav-item'>
                  {(i18n.language === 'en' ? en.en.nav : jp.jp.nav)[value].desc}
                </a>
                <hr  align='left'/>
            </motion.li>
          ))}
          </motion.ul>
        </motion.div>
    </motion.nav>
  );
};

export default Nav; 