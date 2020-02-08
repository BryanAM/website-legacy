import React, { useState } from 'react';
import './hamburger.scss';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };
  return(
    <button id="onTheMenu" className="hamburger-menu" type="button" onClick={handleOnClick}>
      <svg viewBox="0 0 102 80" width="40" height="40">
        <rect className="middle-bard" y="15" width="100" height="10" rx="8"></rect>
        <rect className="bottom-bar" y="60" width="100" height="10" rx="8"></rect>
      </svg>
    </button>
  );
};
export default Hamburger;