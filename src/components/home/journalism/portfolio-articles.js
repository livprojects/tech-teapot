import * as React from 'react';
import './portfolio-articles.css';

const Archives = ({t}) => {

    return (
    <div className="gridbox-archives gridbox-center">{t('archives.welcome')}
        <a href="https://www.linkedin.com/in/liv-audigane/">Linkedin</a>
    </div>
    ) 

}

export default Archives;