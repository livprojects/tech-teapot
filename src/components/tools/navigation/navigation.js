import * as React from 'react';
import './navigation.css';

const Navigation = ({t}) => {

    const upLab = t('Laboratory').toUpperCase();
    const upArchive = t('Archives').toUpperCase();

    let isActive = true;
    let isActiveTest = false;
    return (
        <nav className='gridbox-nav'>
            <div className='gridbox-nav-ul'>
                <div className={`thumbnail ${isActive ? "active" : "inactive"}`}>{upLab}</div>
                <div className={`thumbnail ${isActiveTest ? "active" : "inactive"}`}>{upArchive}</div>
            </div>
        </nav>
    )
}

export default Navigation;