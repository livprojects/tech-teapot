import * as React from 'react';
import './navigation.css';

const Navigation = ({t, isLabActive, isArchivesActive, changeActiveElement}) => {

    const upLab = t('home.laboratory-title').toUpperCase();
    const upArchive = t('home.archives-title').toUpperCase();
    

    return (
        <nav className='gridbox-nav'>
            <div className='gridbox-nav-ul'>
                <div onClick={changeActiveElement} className={`thumbnail ${isLabActive ? "active" : "inactive"}`}>{upLab}</div>
                <div onClick={changeActiveElement} className={`thumbnail ${isArchivesActive ? "active" : "inactive"}`}>{upArchive}</div>
            </div>
        </nav>
    )
}

export default Navigation;