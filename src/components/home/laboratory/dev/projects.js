
import * as React from 'react';
import data from '../../../../data/projects.json';
import stack from '../../../../data/techstack.json';

import './projects.css';

const Projects = ({t}) => {

    const projects = data.projects;

    const dailyStack = stack['tech-stack'].everyday;
    const trainingStack = stack['tech-stack'].training;
    const bonusStack = stack['tech-stack'].bonus;

    return (
        <div>

            <h2>{t('laboratory.tech-stack-text.title')}</h2>

            <div className="tech-stack-list">
                <div className="tech-stack-item">
                    <p>{t('laboratory.tech-stack-text.everyday')}</p>
                    {
                        dailyStack.map((tech, index) =>   
                            {
                                const comma =  index >= dailyStack.length-1 ? null : <span>, </span>;
                                return (
                                <React.Fragment key={tech + index}>
                                    <span>
                                        {tech}
                                    </span>
                                    {comma}
                                </React.Fragment>
                                )
                            }
                        )
                    }
                </div>
                <div className="tech-stack-item">
                    <p>{t('laboratory.tech-stack-text.training')}</p>
                    {
                        trainingStack.map((tech, index) =>   
                            {
                                const comma =  index >= dailyStack.length-1 ? null : <span>, </span>;
                                return (
                                <React.Fragment key={tech + index}>
                                    <span>
                                        {tech}
                                    </span>
                                    {comma}
                                </React.Fragment>
                                )
                            }
                        )
                    }
                </div>
                <div className="tech-stack-item">
                    <p>{t('laboratory.tech-stack-text.bonus')}</p>
                    {
                        bonusStack.map((tech, index) =>   
                            {
                                const comma =  index >= dailyStack.length-1 ? null : <span>, </span>;
                                return (
                                <React.Fragment key={tech + index}>
                                    <span>
                                        {tech}
                                    </span>
                                    {comma}
                                </React.Fragment>
                                )
                            }
                        )
                    }
                </div>
            </div>

            <p>This portfolio is made with React and powered by xx.</p> 


            <div className="projects">
                {
                    projects.map((project, index) => {

                    const stack = project.techStack.join(', ');
                    return (
                        <div className="project-details" key={project.title + index}>
                            <span>{project.title}</span>
                            <span>{project.frDescription}</span>
                            <span>{project.enDescription}</span>
                            <span>{stack}</span>
                            <span>{project.githubLink}</span>
                        </div>
                        )
                    })
                    
                }
            </div>
        </div>
    
    ) 

}

export default Projects;