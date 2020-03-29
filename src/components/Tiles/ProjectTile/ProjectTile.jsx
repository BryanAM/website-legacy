import React from 'react';
import './projectTile.scss';

const ProjectTile = (props) => {
  return(
    <a href={props.link} target="_blank" rel="noopener noreferrer" className='project-tile'>
    </a>
  ); 
};
export default ProjectTile;
