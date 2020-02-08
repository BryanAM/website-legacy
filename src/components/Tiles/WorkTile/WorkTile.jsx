import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './workTile.scss';

const WorkTile = ({ children }) => {
  const [t] = useTranslation();
  const { title } = this.props;
  return(
    <div className="work-tile">
      <p className="worktile-title">{title}</p>
      {children}
    </div>
  );

};

WorkTile.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default WorkTile;