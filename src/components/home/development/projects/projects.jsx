
import * as React from 'react';
import data from '../../../../data/projects.json';
import stack from '../../../../data/techstack.json';
import i18n from '../../../../i18n.js';

import './projects.css';

const STATUS_CLASS = {
    'Complete':     'badge--complete',
    'Confidential': 'badge--confidential',
    'In progress':  'badge--in-progress',
    'On hold':      'badge--on-hold',
    'Idea':         'badge--idea',
};

const Projects = ({t}) => {

    const projects = data.projects;
    const dailyStack = stack['tech-stack'].everyday;
    const usedStack = stack['tech-stack'].used;
    const bonusStack = stack['tech-stack'].bonus;
    const lng = i18n.language || window.localStorage.i18nextLng || 'en';

    return (
        <>
            <h2 className="tech-stack-title">{t('laboratory.tech-stack-text.title')}</h2>

            <div className="tech-stack-list">
                <div className="tech-stack-item">
                    <div className="stack-headline"><span>{t('laboratory.tech-stack-text.everyday')}</span></div>
                    <div className="stack-item-row">
                        {dailyStack.map((tech) => (
                            <div className="stack-item" key={tech}>{tech}</div>
                        ))}
                    </div>
                </div>
                <div className="tech-stack-item">
                    <div className="stack-headline"><span>{t('laboratory.tech-stack-text.training')}</span></div>
                    <div className="stack-item-row">
                        {usedStack.map((tech) => (
                            <div className="stack-item" key={tech}>{tech}</div>
                        ))}
                    </div>
                </div>
                <div className="tech-stack-item">
                    <div className="stack-headline"><span>{t('laboratory.tech-stack-text.bonus')}</span></div>
                    <div className="stack-item-row">
                        {bonusStack.map((tech) => (
                            <div className="stack-item" key={tech}>{tech}</div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="projects-key">
                <span className="key-fulltime-dot"></span>
                <span className="key-fulltime-label">{t('laboratory.project.fulltime-label')}</span>
            </div>

            <div className="projects">
                {projects.map((project) => {
                    const techStack = project.techStack.join(', ');
                    const title = lng === 'fr' ? project.frTitle : project.enTitle;
                    const description = lng === 'fr' ? project.frDescription : project.enDescription;
                    const statusLabel = t(`laboratory.project.status.${project.status}`);
                    const badgeClass = STATUS_CLASS[project.status] || '';

                    return (
                        <div className={`project-details${project.fulltime ? ' project-details--fulltime' : ''}`} key={project.enTitle}>
                            <div className="project-header">
                                <span className="project-name">{title}</span>
                                <div className="project-header-badges">
                                    {project.fulltime && (
                                        <span className="badge badge--fulltime">{t('laboratory.project.fulltime-label')}</span>
                                    )}
                                    <span className={`badge ${badgeClass}`}>{statusLabel}</span>
                                </div>
                            </div>
                            <p className="project-description">{description}</p>
                            <div className="project-stack">
                                <span className="title">{t('laboratory.project.stack')}</span>
                                <span>{techStack}</span>
                            </div>
                            <div className="project-links">
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{t('laboratory.project.github')}</a>
                                )}
                                {project.deployedLink && (
                                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">{t('laboratory.project.live')}</a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Projects;
