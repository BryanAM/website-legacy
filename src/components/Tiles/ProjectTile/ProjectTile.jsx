import React from 'react';
import './projectTile.scss';
import gitImage from '../../../resources/assets/github-background.png';

const ProjectTile = (props) => {
  return(
    <div className='project-tile'>
        <h2 className='repo-name'>{props.repoName}</h2>
        <p className='project-description'>{props.projectDescription}</p>
        <img className='background-image' src={gitImage} alt='' />
        <a className='project-link' href={props.link} target='_blank' rel='noopener noreferrer'/>
    </div>
  ); 
};
export default ProjectTile;
