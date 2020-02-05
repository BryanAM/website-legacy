import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import '../../resources/styles/nav.scss';

const Nav = () => {
  const handleOnClick = () => {
    console.log("clicked");
  };

  return (
    <nav className="nav">
      <div className="hamburger"><Hamburger /></div>
    </nav>
  );
};

export default Nav; 