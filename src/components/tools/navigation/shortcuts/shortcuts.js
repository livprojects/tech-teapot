import React, { useState } from 'react';
import './shortcuts.css';
import LinkedInPic from '../../../../images/linkedin.png';
import GithubPic from '../../../../images/github.png';



const Shortcuts = ({t}) => {

    const [showPanel, setShowPanel] = useState(false);

    const togglePanel = () => {
        setShowPanel(!showPanel);
    }

    const slidingPanelTitle = t('navigation.more-links').toUpperCase();

    const altTextLinkedin = t('navigation.linkedin');
    const altTextGithub = t('navigation.github');


return (
    <>
    <nav className={`gridbox-shortcuts-nav ${showPanel ? "show" : ""}`} onClick={() => togglePanel()}>
        
        <button className='gridbox-shortcuts-nav-button'>{slidingPanelTitle}</button>
        <div className='gridbox-shortcuts-nav-links'>
            <ul className='gridbox-shortcuts-nav-ul'>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/liv-audigane/">Linkedin</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/livprojects">Github</a></li>
            </ul>
        </div>
    </nav>
    <div className='gridbox-shortcuts-nav-icons'>
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
    </>
)
}

export default Shortcuts;