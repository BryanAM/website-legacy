import React from 'react';
import ProjectTile from '../Tiles/ProjectTile/ProjectTile';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Projects = () => {
  const [t] = useTranslation();
  const axiosGitHubGraphQL = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: {
      Authorization: 'bearer ....'
    }
  });

  return(
    <section  id='projects-section' className='section'>
      <h2 className='section-header'>{t('projects.header')}</h2>
      <ProjectTile />
    </section>
  );
};

export default Projects;