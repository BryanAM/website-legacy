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
    return ;
      //console.log('api results: ', result.data.data.user.repositories.edges)
      //console.log('resulting state', gitHubData[0].node.url)
  };

  useEffect(()=> {
    const fetchData = async () => {
      const result = await axiosGitHubGraphQL.post('',{ query: REPO_QUERY });
      setGitHubData(prevState => [...result.data.data.user.repositories.edges]);
      //setGitHubData(prevState => [prevState, "Banana"]);
      //console.log("this is data", result.data.data.user.repositories.edges);
    }
    fetchData();
    
  }, []);

  // logging that the data was loaded or updated
  useEffect(() => console.log("new data to be loaded", gitHubData), [gitHubData]);


  return(
    <section  id='projects-section' className='section'>
      <h2 className='section-header'>{t('projects.header')}</h2>
      { gitHubData.map((data, keyID) => 
        console.log(data.node.url)
      )}

    </section>
  );
};

export default Projects;