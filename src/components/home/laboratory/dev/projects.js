
import * as React from 'react';
import data from './projects.json';

import './projects.css';

const Projects = () => {

    const projects = data.projects;

    return (
        <div>
        {
            projects.map(project => <div key={project.title}>
                <p>{project.title}</p>
            </div>)
        }
        </div>
    
    ) 

}

export default Projects;