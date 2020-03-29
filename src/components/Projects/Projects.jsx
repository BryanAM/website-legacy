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

  // Axios call to github v4 api
    const getRepoInfo = () => {
    return axiosGitHubGraphQL.post('',{ query: REPO_QUERY });
      //console.log('api results: ', result.data.data.user.repositories.edges)
      //console.log('resulting state', gitHubData[0].node.url)
    

  };

  useEffect(()=> {
    const fetchData = async () => {
      const data = await getRepoInfo();
      return data;
    }
    fetchData().then(result => {setGitHubData(result.data.data.user.repositories.edges)});
  }, []);

  return(
    <section  id='projects-section' className='section'>
      <h2 className='section-header'>{t('projects.header')}</h2>
      {/* { gitHubData && (gitHubData.map((data, keyID) => 
        <ProjectTile key={keyID} link={data.node.url}/>
      ))} */}
    </section>
  );
};

export default Projects;