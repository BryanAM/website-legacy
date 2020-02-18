import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './workTile.scss';

const WorkTile = ({children, title}) => {
  const [t] = useTranslation();
  
  return(
    <button className="work-tile">
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