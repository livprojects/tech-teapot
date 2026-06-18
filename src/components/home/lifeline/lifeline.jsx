import { useTranslation } from 'react-i18next';
import './lifeline.css';

const Lifeline = () => {
    const { t } = useTranslation();
    const cvPath = t('navigation.cv-path');

    return (
        <div className="lifeline">
            <div className="cv-wrapper">
                <iframe id="cv" title="cv" src={cvPath} width="100%" height="100%"></iframe>
            </div>
        </div>
    );
}

export default Lifeline;
