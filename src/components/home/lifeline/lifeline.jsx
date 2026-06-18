import './lifeline.css';
import cv from '../../../data/CV_Novembre_2025.pdf';

const Lifeline = () => {

    return (
        <div className="lifeline">
            <div className="cv-wrapper">
                <iframe id="cv" title="cv" src={cv}  width="100%" height="100%"></iframe>
            </div>
        </div>
    ) 

}

export default Lifeline;

