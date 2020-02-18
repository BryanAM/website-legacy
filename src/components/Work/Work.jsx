import React from 'react';
import WorkTile from '../Tiles/WorkTile/WorkTile';
import { useTranslation } from 'react-i18next';
import './work.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faCode, faSchool } from '@fortawesome/free-solid-svg-icons';
import en from '../../i18n/locales/en.json';
const Work = () => {
  const [t] = useTranslation();

  return(
    <section id="work-section" className="section">
　　　　<h2 className="section-header">{t('work.header')}</h2>
      {/* Map through jobs */}
      <div className="current-jobs">
      {
        console.log(en["en"]["jobs"])
      }
        <WorkTile title="Apple" ><FontAwesomeIcon icon={faAppleAlt} /></WorkTile>
        <WorkTile title="EY" ><FontAwesomeIcon icon={faCode} /></WorkTile>
        <WorkTile title="JET" ><FontAwesomeIcon icon={faSchool} /></WorkTile>
        <WorkTile title="NG" ><FontAwesomeIcon icon={faCode} /></WorkTile>
      </div>
      <hr />
      {/* Display Work Data */}

    </section>
  );
};
export default Work;