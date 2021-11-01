import * as React from 'react';

const Welcome = ({t}) => {

    return (
    <div className="gridbox-center">{t('home.welcome-text')}
    </div>
    )

}

export default Welcome;