import React, { useState } from 'react';
import './hamburger.scss';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    console.log('clicked!');
    setOpen(!open);
    console.log(open);
    }

  return(
    <button id='onTheMenu' className='hamburger-menu' type='button' onClick={handleOnClick}>
      <div className={`menu-burger ${open ? 'open' : 'closed'}`}></div>
    </button>
  );
};
export default Hamburger;