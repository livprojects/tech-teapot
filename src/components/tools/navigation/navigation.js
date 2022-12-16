import { React } from 'react';
import {
    Link
  } from 'react-router-dom';
    
import './navigation.css';

const Navigation = ({t, activeComponent}) => {


    const upLab = t('navigation.laboratory-title').toUpperCase();
    const upArchive = t('navigation.archives-title').toUpperCase();
    const upHome = t('navigation.home-title').toUpperCase();


    return (
        <nav className='gridbox-nav'>
            <div className='gridbox-nav-ul'>
                <Link to="/" className={`thumbnail ${activeComponent ==='/' ? "active" : "inactive"}`}>{upHome}</Link>
                <Link to="/laboratory" className={`thumbnail ${activeComponent ==='/laboratory' ? "active" : "inactive"}`}>{upLab}</Link>
                <Link to="/archives" className={`thumbnail ${activeComponent ==='/archives' ? "active" : "inactive"}`}>{upArchive}</Link>
            </div>
        </nav>
    )
}

export default Navigation;