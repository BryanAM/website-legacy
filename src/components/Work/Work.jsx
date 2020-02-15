import React from 'react';
import WorkTile from '../Tiles/WorkTile/WorkTile';
import { useTranslation } from 'react-i18next';
import './work.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Work = () => {
  const [t] = useTranslation();
  return(
    <section id="work-section" className="section">
　　　　<h2 className="section-header">{t('work.header')}</h2>
      <WorkTile title="Apple" ><FontAwesomeIcon icon={faEnvelope} /></WorkTile>
      <WorkTile title="Apple" ><FontAwesomeIcon icon={faEnvelope} /></WorkTile>
      <WorkTile title="Apple" ><FontAwesomeIcon icon={faEnvelope} /></WorkTile>
      <WorkTile title="Apple" ><FontAwesomeIcon icon={faEnvelope} /></WorkTile>
      
    </section>
  );
};
export default Work;