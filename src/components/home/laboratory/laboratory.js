import * as React from 'react';
import Projects from './dev/projects';
import './laboratory.css';

const Laboratory = ({t}) => {

    return (
        <div className="gridbox-lab">{t('Welcome-text')}

        <Projects></Projects>
        </div>

        
    ) 

}

export default Laboratory;