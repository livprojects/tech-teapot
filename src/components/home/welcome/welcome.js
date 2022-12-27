import * as React from 'react';
import './welcome.css';


const Welcome = ({t}) => {

    return (
    <div className="gridbox-center gridbox-welcome">{t('home.welcome-text', {years : "2"})}
    </div>
    )

}

export default Welcome;