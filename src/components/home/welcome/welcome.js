import * as React from 'react';
import './welcome.css';


const Welcome = ({t}) => {

    const profile = {
        age : '31',
        experience: '4'
    }

    return (
        <div className="welcome">{t('home.welcome-text', {profile})}
        </div>
    )

}

export default Welcome;