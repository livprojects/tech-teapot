import * as React from 'react';
import Projects from './dev/projects';
import './laboratory.css';

const Laboratory = ({t}) => {

    return (
        <div className="gridbox-center gridbox-lab">
        <Projects t={t}></Projects>
        </div>
        
    ) 

}

export default Laboratory;