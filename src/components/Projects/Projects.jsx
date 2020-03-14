import React, { useEffect, useState } from 'react';
import ProjectTile from '../Tiles/ProjectTile/ProjectTile';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Projects = () => {
  const [gitHubData, setGitHubData] = useState({});
  const [t] = useTranslation();
  const axiosGitHubGraphQL = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: {
      Authorization: `bearer ${
        process.env.REACT_APP_GITHUB_ACCESS_TOKEN
      }`,
    }
  });

  // API Call to get current repo info
  useEffect(() => {
    
  });

  return(
    <section  id='projects-section' className='section'>
      <h2 className='section-header'>{t('projects.header')}</h2>
      <ProjectTile />
    </section>
  );
};

export default Projects;