import React, { useState } from 'react';
import './shortcuts.css';

const Shortcuts = ({t}) => {

    const [showPanel, setShowPanel] = useState(false);

    const togglePanel = () => {
        setShowPanel(!showPanel);
    }

    const slidingPanelTitle = t('navigation.more-links').toUpperCase();


return (
    <nav className={`gridbox-shortcuts-nav ${showPanel ? "show" : ""}`} onClick={() => togglePanel()}>
        
        <button className='gridbox-shortcuts-nav-button'>{slidingPanelTitle}</button>
        <div className='gridbox-shortcuts-nav-links'>
            <ul className='gridbox-shortcuts-nav-ul'>
                <li><a href="https://www.linkedin.com/in/liv-audigane/">Linkedin</a></li>
                <li><a href="https://github.com/livprojects">Github</a></li>
                <li>Twitter</li>
            </ul>
        </div>
    </nav>
)
}

export default Shortcuts;