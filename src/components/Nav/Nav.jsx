import React, { useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [open, setOpen] = useState(false);
  
  const handleOnClick = () => {
    console.log('clicked!');
    setOpen(!open);
    console.log(open);
    }

  return (
    <nav id="nav-section" className="nav">
      <button className="hamburger" onClick={handleOnClick}><Hamburger open={open}/></button>
      <a href="mailto:bryaument@gmail.com?subject=I saw your website, let's connect!"><FontAwesomeIcon icon={faEnvelope} /></a>
    </nav>
  );
};

export default Nav; 