import * as React from 'react';
import {
    Link
  } from "react-router-dom";
    
import './navigation.css';

const Navigation = ({t, isLabActive, isArchivesActive, changeActiveElement}) => {

    const upLab = t('home.laboratory-title').toUpperCase();
    const upArchive = t('home.archives-title').toUpperCase();
    const upHome = t('home.home-title').toUpperCase();


    return (
        <nav className='gridbox-nav'>
            <div className='gridbox-nav-ul'>
                <Link to="/" onClick={changeActiveElement} className={`thumbnail ${isLabActive ? "active" : "inactive"}`}>{upHome}</Link>
                <Link to="/laboratory" onClick={changeActiveElement} className={`thumbnail ${isLabActive ? "active" : "inactive"}`}>{upLab}</Link>
                <Link to="/archives" onClick={changeActiveElement} className={`thumbnail ${isArchivesActive ? "active" : "inactive"}`}>{upArchive}</Link>
            </div>
        </nav>
    )
}

export default Navigation;