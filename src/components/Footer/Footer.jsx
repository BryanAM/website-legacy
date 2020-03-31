import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './footer.scss';

const Footer = () => {
  return(
    <footer id='footer'>
      <p></p>
      <a className='footer-link-icon' href='https://github.com/BryanAM' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      <a className='footer-link-icon' href='https://www.linkedin.com/in/bryanaument/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
    </footer>
  );
};
export default Footer;