import * as React from 'react';
import './portfolio-articles.css';

const Archives = ({t}) => {

    return (
    <div className="gridbox-archives gridbox-center">{t('archives.welcome')}
        <span>A venir ! En attendant, plus d'informations sur mon Linkedin</span>
    </div>
    ) 

}

export default Archives;