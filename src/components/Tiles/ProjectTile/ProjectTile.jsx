import React, { useEffect } from 'react';
import './projectTile.scss';
import { motion, useViewportScroll } from 'framer-motion';
import gitImage from '../../../resources/assets/github-background.png';

const ProjectTile = (props) => {
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    console.log('this is the scroll progress: ', scrollYProgress);
  }, [scrollYProgress]);
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
