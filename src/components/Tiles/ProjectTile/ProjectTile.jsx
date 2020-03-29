import React from 'react';
import './projectTile.scss';

const ProjectTile = (props) => {
  return(
    <a href={props.link} target='_blank' rel='noopener noreferrer' className='project-tile'>
      <div className='projects-content-container'></div>
    </a>
  ); 
};
export default ProjectTile;
