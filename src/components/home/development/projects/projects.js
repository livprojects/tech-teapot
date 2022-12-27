
import * as React from 'react';
import data from '../../../../data/projects.json';
import stack from '../../../../data/techstack.json';
import i18n from '../../../../i18n.js';

import './projects.css';

const Projects = ({t}) => {

    const projects = data.projects;
    const dailyStack = stack['tech-stack'].everyday;
    const trainingStack = stack['tech-stack'].training;
    const bonusStack = stack['tech-stack'].bonus;
    const getCurrentLng = i18n.language || window.localStorage.i18nextLng || '';

    return (
        <div className= "laboratory">

            <h2 className="tech-stack-title">{t('laboratory.tech-stack-text.title')}</h2>

            <div className="tech-stack-list">
                <div className="tech-stack-item">
                    <p>{t('laboratory.tech-stack-text.everyday')}</p>
                    {
                        dailyStack.map((tech, index) =>   
                            {
                                const comma = index >= dailyStack.length-1 ? null : <span>, </span>;
                                return (
                                <React.Fragment key={tech}>
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
                                const comma = index >= trainingStack.length-1 ? null : <span>, </span>;
                                return (
                                <React.Fragment key={tech}>
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
                                const comma =  index >= bonusStack.length-1 ? null : <span>, </span>;
                                return (
                                <React.Fragment key={tech}>
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

            <div className="projects">
                {
                    projects.map((project, index) => {

                    const stack = project.techStack.join(', ');
                    return (
                        <div className="project-details" key={project.enTitle}>
                            <div><span className="title">{t('laboratory.project.title')}</span>                                
                                {getCurrentLng === 'fr' && <span>{project.frTitle}</span>}
                                {getCurrentLng === 'en' && <span>{project.enTitle}</span>}</div>
                            <div>
                                <span className="title">{t('laboratory.project.description')}</span>
                                {getCurrentLng === 'fr' && <span>{project.frDescription}</span>}
                                {getCurrentLng === 'en' && <span>{project.enDescription}</span>}
                            </div>
                            <div><span className="title">{t('laboratory.project.techstack')}</span><span>{stack}</span></div>
                            <div><span className="title">{t('laboratory.project.github')}</span><a href={project.githubLink}>Lien</a></div>
                            {project.deployedLink &&
                                <div>
                                    <span className="title">{t('laboratory.project.deployed')}</span>
                                    <a href={project.deployedLink}>Lien</a>
                                </div>}
                            <div><span className="title">{t('laboratory.project.status')}</span><span>{project.status}</span></div>
                        </div>
                        )
                    })
                    
                }
            </div>
        </div>
    
    ) 

}

export default Projects;