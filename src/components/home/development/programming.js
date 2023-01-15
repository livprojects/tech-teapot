import * as React from 'react';
import Projects from './projects/projects';
import './programming.css';

const Programming = ({t}) => {

    return (
        <div className="laboratory">
        <Projects t={t}></Projects>
        </div>
    ) 

}

export default Programming;