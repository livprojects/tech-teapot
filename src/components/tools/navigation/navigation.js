import { React } from 'react';
import {
    Link
  } from 'react-router-dom';
    
import './navigation.css';
import Shortcuts from './shortcuts/shortcuts';

const Navigation = ({t, activeComponent}) => {


    const upLab = t('navigation.laboratory-title').toUpperCase();
    const upArchive = t('navigation.archives-title').toUpperCase();
    const upHome = t('navigation.home-title').toUpperCase();
    const upLifeLine = t('navigation.lifeline-title').toUpperCase();



    return (
        <nav className='gridbox-nav'>
            <div className='nav-links'>
                <Link to="/" className={`thumbnail ${activeComponent ==='/' ? "active" : "inactive"}`}>{upHome}</Link>
                <Link to="/programming" className={`thumbnail ${activeComponent ==='/programming' ? "active" : "inactive"}`}>{upLab}</Link>
                <Link to="/journalism" className={`thumbnail ${activeComponent ==='/journalism' ? "active" : "inactive"}`}>{upArchive}</Link>
                <Link to="/lifeline" className={`thumbnail ${activeComponent ==='/lifeline' ? "active" : "inactive"}`}>{upLifeLine}</Link>
            </div>
            <Shortcuts t={t}></Shortcuts>

        </nav>
    )
}

export default Navigation;