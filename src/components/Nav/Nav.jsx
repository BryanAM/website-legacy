import React, { useState } from 'react';
import i18n from '../../i18n/index.js';
import Hamburger from '../Hamburger/Hamburger';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import en from '../../i18n/locales/en.json';
import jp from '../../i18n/locales/jp.json';
import { motion } from "framer-motion"

const Nav = () => {
  const [open, setOpen] = useState(false);
  
  const handleOnClick = () => {
    setOpen(!open);
    }

  return (
    <nav id='nav-section' className='nav'>
      <button className='hamburger' onClick={handleOnClick}><Hamburger open={open}/></button>
      <a href="mailto:bryaument@gmail.com?subject=I saw your website, let's connect!" ><FontAwesomeIcon icon={faEnvelope} /></a>
      <div className={`menu ${open ? 'open' : 'closed'}`}>
        <ul>
         {Object.keys(en.en.nav).map((value, index) => (
          <li key={index + 1} className='nav-list-item'> 
            <a href={`#${en.en.nav[value].id}`} className='nav-item'>{(i18n.language === 'en' ? en.en.nav : jp.jp.nav)[value].desc}</a>
            <hr align='left'/>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav; 