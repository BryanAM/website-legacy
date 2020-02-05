import React, { useState } from 'react';
import '../../resources/styles/hamburger.scss';

const Hamburger = () => {

  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };
  return(
    <button id="onTheMenu" className="hamburger-menu" type="button" onClick={handleOnClick}>
      <svg viewBox="0 0 102 80" width="40" height="40" fill="#ffffc4">
        <rect className={ open? "top-bar" : null } width="80" height="10" rx="10"></rect>
        <rect className="middle-bard" y="30" width="90" height="10" rx="8"></rect>
        <rect className={ open? "bottom-bar": null} y="60" width="100" height="10" rx="8"></rect>
      </svg>
    </button>
  );
};
export default Hamburger;