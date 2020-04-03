import React, { useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import en from '../../i18n/locales/en.json';

const Nav = () => {
  const [open, setOpen] = useState(false);
  
  const handleOnClick = () => {
    console.log('clicked!');
    setOpen(!open);
    console.log(open);
    }

  return (
    <nav id='nav-section' className='nav'>
      <button className='hamburger' onClick={handleOnClick}><Hamburger open={open}/></button>
      <a href="mailto:bryaument@gmail.com?subject=I saw your website, let's connect!"><FontAwesomeIcon icon={faEnvelope} /></a>
      <div className={`menu ${open ? 'open' : 'closed'}`}>
        <ul>
         {Object.keys(en.en.nav).map((value, index) => (
         <li key={index + 1} className='nav-list-item'> <a href='/' className='nav-item'>{value}</a><hr align='left'/></li>
        ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav; 