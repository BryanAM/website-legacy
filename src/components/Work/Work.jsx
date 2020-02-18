import React, { useState } from 'react';
import WorkTile from '../Tiles/WorkTile/WorkTile';
import { useTranslation } from 'react-i18next';
import './work.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faCode, faSchool } from '@fortawesome/free-solid-svg-icons';
import en from '../../i18n/locales/en.json';
const Work = () => {
  const [t] = useTranslation();
  const [job, setJob ] = useState("EY");

  const icons = {
    "faAppleAlt": faAppleAlt,
    "faCode": faCode,
    "faSchool": faSchool
  }
  const handleOnClick = (e) => {
    console.log("before set state: ", job)
    setJob(e);
  };
  return(
    <section id="work-section" className="section">
　　　　<h2 className="section-header">{t('work.header')}</h2>
      {/* iterate through jobs */}
      <div className="current-jobs">
        {Object.keys(en.en.jobs).map((value, index) => (
          <WorkTile key={index + "value"} title={value} clickable={handleOnClick}><FontAwesomeIcon icon={icons[t('jobs.' + value + ".icon")]} /></WorkTile>
        ))}
      </div>
      <hr />
      {/* Display Work Data */}
      <p style={{color: "white"}}>{job}</p>

    </section>
  );
};
export default Work;