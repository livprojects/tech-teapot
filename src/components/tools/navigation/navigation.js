import { React } from 'react';
import {
    Link
  } from 'react-router-dom';
    
import './navigation.css';

const Navigation = ({t, activeComponent}) => {


    const upLab = t('home.laboratory-title').toUpperCase();
    const upArchive = t('home.archives-title').toUpperCase();
    const upHome = t('home.home-title').toUpperCase();

    return (
        <nav className='gridbox-nav'>
            <div className='gridbox-nav-ul'>
                <Link to="/home" className={`thumbnail ${activeComponent ==='/home' ? "active" : "inactive"}`}>{upHome}</Link>
                <Link to="/laboratory" className={`thumbnail ${activeComponent ==='/laboratory' ? "active" : "inactive"}`}>{upLab}</Link>
                <Link to="/archives" className={`thumbnail ${activeComponent ==='/archives' ? "active" : "inactive"}`}>{upArchive}</Link>
            </div>
        </nav>
    )
}

export default Navigation;