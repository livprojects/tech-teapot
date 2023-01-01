import * as React from 'react';
import './lifeline.css';
import cv from '../../../data/CV_Janvier_2023.pdf';

const Lifeline = () => {

    return (
        <div className="gridbox-center gridbox-lifeline">
            <div className="cv-wrapper">
                <iframe id="cv" title="cv" src={cv}  width="100%" height="100%"></iframe>
            </div>
        </div>
    ) 

}

export default Lifeline;

