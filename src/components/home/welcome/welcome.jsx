import * as React from 'react';
import './welcome.css';


const Welcome = ({t}) => {

    const profile = {
        experience: '5'
    }

    return (
        <div className="welcome">{t('home.welcome-text', {profile})}
        </div>
    )

}

export default Welcome;