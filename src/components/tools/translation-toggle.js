import * as React from 'react';
import i18n from '../../i18n';
import EiffelTower from '../../images/eiffel-tower.png';
import BigBen from '../../images/big-ben.png';
import './translation-toggle.css';


const TranslationToggle = ({t}) => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
    
return(
    <div className="left-box-toggle">
        <div className="language-toggle">
            <button className="language-toggle-icon" onClick={() => changeLanguage('fr')}>
                <img alt="Eiffel Tower icon by freepik" src={EiffelTower}></img>
                <span>Français</span>
            </button>
            <button className="language-toggle-icon" onClick={() => changeLanguage('en')}>
                <img alt="Big Ben icon by wanicon" id="bigbenpic" src={BigBen}></img>
                <span>English</span>
            </button>
        </div>
    </div>
)

} 

export default TranslationToggle;