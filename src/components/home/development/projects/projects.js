
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
                <div className="tech-stack-item" id="first-p">
                    <div className="stack-headline"><span>{t('laboratory.tech-stack-text.everyday')}</span></div>
                    <div className="stack-item-line">
                        {
                            dailyStack.map((tech, index) =>   
                                {
                                    return (
                                    <React.Fragment key={tech}>
                                            <div class="stack-item">
                                                {tech}
                                            </div>
                                    </React.Fragment>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <div className="tech-stack-item" id="second-p">
                    <div className="stack-headline"><span>{t('laboratory.tech-stack-text.training')}</span></div>
                    <div className="stack-item-line">
                        {
                            trainingStack.map((tech, index) =>   
                                {
                                    return (
                                    <React.Fragment key={tech}>
                                            <div class="stack-item">
                                                {tech}
                                            </div>
                                    </React.Fragment>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <div className="tech-stack-item" id="third-p">
                    <div className="stack-headline"><span>{t('laboratory.tech-stack-text.bonus')}</span></div>
                    <div className="stack-item-line">
                        {
                            bonusStack.map((tech, index) =>   
                                {
                                    return (
                                    <React.Fragment key={tech}>
                                            <div class="stack-item">
                                                {tech}
                                            </div>
                                    </React.Fragment>
                                    )
                                }
                            )
                        }
                    </div>

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