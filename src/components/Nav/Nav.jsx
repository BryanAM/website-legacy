import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

  return (
    <nav id="nav-section" className="nav">
      <div className="hamburger"><Hamburger /></div>
      <a href="mailto:bryaument@gmail.com?subject=I saw your website, let's connect!"><FontAwesomeIcon icon={faEnvelope} /></a>
    </nav>
  );
};

export default Nav; 