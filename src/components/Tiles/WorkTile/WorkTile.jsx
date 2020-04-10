import React from 'react';
import PropTypes from 'prop-types';
import './workTile.scss';

const WorkTile = ({children, clickable, title}) => {
  const handleOnClick = () => {
    clickable(title);
  }

  return(
    <button className="work-tile" onClick={handleOnClick}>
      <p className="worktile-title">{title}</p>
      <hr />
      {children}
    </button>
  );

};

WorkTile.propTypes = {
  title: PropTypes.string.isRequired
};

export default WorkTile;