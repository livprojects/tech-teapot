import * as React from 'react';
import './welcome.css';


const Welcome = ({t}) => {

    const profile = {
        age : '28',
        experience: '2'
    }

    return (
    <div className="gridbox-center gridbox-welcome">{t('home.welcome-text', {profile})}
    </div>
    )

}

export default Welcome;