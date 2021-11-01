
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
                            <div><span>{t('laboratory.project.title')}</span><span>{project.title}</span></div>
                            <div><span>{t('laboratory.project.description')}</span><span>{project.frDescription}</span></div>
                            <div><span>{t('laboratory.project.description')}</span><span>{project.enDescription}</span></div>
                            <div><span>{t('laboratory.project.techstack')}</span><span>{stack}</span></div>
                            <div><span>{t('laboratory.project.github')}</span><a href={project.githubLink}>Lien</a></div>
                            <div><span>{t('laboratory.project.deployed')}</span>< a href={project.deployedLink}>Lien</a></div>
                            <div><span>{t('laboratory.project.status')}</span><span>{project.status}</span></div>
                        </div>
                        )
                    })
                    
                }
            </div>
        </div>
    
    ) 

}

export default Projects;