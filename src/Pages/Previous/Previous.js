import React from 'react';
import "./Previous.css";
import niladri from '../../../src/Images/niladri.jpg';
import tang from '../../../src/Images/tang.jpg';
import jaflong from '../../../src/Images/Jaflong.jpg';


const Previous = () => {
    return (
        <div>
            <h2 className="text-primary my-3">Previous Trip Photo Gallery</h2>
            <div className="previous mb-5">
                <div>
                    <h4>Niladri Lake</h4>
                    <img src={niladri} alt="" />
                </div>
                <div>
                    <h4>Tanguar Haour</h4>
                    <img src={tang} alt="" />
                </div>
                <div>
                    <h4>Jaflong</h4>
                    <img src={jaflong} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Previous;