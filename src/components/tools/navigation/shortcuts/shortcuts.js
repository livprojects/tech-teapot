import React from 'react';
import './shortcuts.css';
import LinkedInPic from '../../../../images/linkedin.png';
import GithubPic from '../../../../images/github.png';


const Shortcuts = ({t}) => {

    const altTextLinkedin = t('navigation.linkedin');
    const altTextGithub = t('navigation.github');


    return (
        <div className='icons'>
            <div className="img-wrapper">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/liv-audigane/">
                    <img className="social-icons" alt={altTextLinkedin} src={LinkedInPic}></img>
                </a>
            </div>

            <div className="img-wrapper">
                <a target="_blank" rel="noreferrer" href="https://github.com/livprojects">
                    <img className="social-icons" alt={altTextGithub} src={GithubPic}></img>
                </a>
            </div>
        </div>

    )
}

export default Shortcuts;