import React, { useState } from 'react';
import './hamburger.scss';

const Hamburger = ({ open }) => {

  return(
    <div id='onTheMenu' className='hamburger-menu'>
      <div className={`menu-burger ${open ? 'open' : 'closed'}`}></div>
    </div>
  );
};
export default Hamburger;