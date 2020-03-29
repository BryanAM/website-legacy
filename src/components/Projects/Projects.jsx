import React, { useEffect, useState } from 'react';
import ProjectTile from '../Tiles/ProjectTile/ProjectTile';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { REPO_QUERY } from './query.js';
import './projects.scss';

const Projects = () => {
  const [gitHubData, setGitHubData] = useState([]);
  const [t] = useTranslation();

  const axiosGitHubGraphQL = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: {
      Authorization: `bearer ${
        process.env.REACT_APP_GITHUB_ACCESS_TOKEN
      }`,
    }
  });

  useEffect(()=> {
    const fetchData = async () => {
      const result = await axiosGitHubGraphQL.post('',{ query: REPO_QUERY });
      setGitHubData(prevState => [...result.data.data.user.repositories.edges]);
    }
    fetchData();
    
  }, []);

  // logging that the data was loaded or updated
  useEffect(() => console.log("new data to be loaded", gitHubData), [gitHubData]);

  return(
    <section  id='projects-section' className='section'>
      <h2 className='section-header'>{t('projects.header')}</h2>
      { gitHubData.map((data, keyID) => 
        <ProjectTile key={keyID} link={data.node.url}/>
      )}

    </section>
  );
};

export default Projects;