import * as React from 'react';
import './welcome.css';


const Welcome = ({t}) => {

    return (
    <div className="gridbox-center gridbox-welcome">{t('home.welcome-text')}
    </div>
    )

}

export default Welcome;