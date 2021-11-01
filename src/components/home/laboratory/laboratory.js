import * as React from 'react';
import Projects from './dev/projects';
import './laboratory.css';

const Laboratory = ({t}) => {

    return (
        <div className="gridbox-center gridbox-lab">{t('home.welcome-text')}
        <Projects t={t}></Projects>
        </div>
        
    ) 

}

export default Laboratory;