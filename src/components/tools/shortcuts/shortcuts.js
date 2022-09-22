import React, { useState } from 'react';
import './shortcuts.css';

const Shortcuts = () => {

    const [showPanel, setShowPanel] = useState(false);

    const togglePanel = () => {
        setShowPanel(!showPanel);
    }

return (
    <nav className={`gridbox-shortcuts-nav ${showPanel ? "show" : ""}`} onClick={() => togglePanel()}>
        
        <button className='gridbox-shortcuts-nav-button'>More links</button>
        <div className='gridbox-shortcuts-nav-links'>
            <ul className='gridbox-shortcuts-nav-ul'>
                <li>CV</li>
                <li>Contact</li>
                <li>Github</li>
            </ul>
        </div>
    </nav>
)
}

export default Shortcuts;