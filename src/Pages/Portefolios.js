import '../App.css';
import React from 'react';
import mode1 from '../assets/portefolio/test1.jpg';
import mode2 from '../assets/mode2.png';
import mode3 from '../assets/portefolio/test2.jpg';
import mode4 from '../assets/portefolio/test3.jpg';
import mode5 from '../assets/portefolio/test4.jpg';
import mode6 from '../assets/portefolio/test5.jpg';
import mode7 from '../assets/portefolio/test6.jpg';
import mode8 from '../assets/portefolio/test7.jpg';
import mode9 from '../assets/portefolio/test9.jpg';
import mode10 from '../assets/portefolio/9R7A9119.jpg';
import mode11 from '../assets/portefolio/9R7A9196.jpg';
import mode12 from '../assets/portefolio/9R7A9176.jpg';
import mode13 from '../assets/portefolio/IMG_0007.jpg';
import mode14 from '../assets/portefolio/IMG_0003.jpg';
import mode15 from '../assets/portefolio/IMG_0009.jpg';
import mode16 from '../assets/portefolio/IMG_0057.jpg';
import mode17 from '../assets/portefolio/IMG_0028.jpg';
import mode18 from '../assets/portefolio/IMG_0033.jpg';

import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import Footer from "./Footer";
import Menu from "./Menu";



function Portefolios() {
    const imagesLeft = [
        <img src={mode1} alt="Image 1" style={{ transform: 'rotateY(180deg)' }} />,
        <img src={mode2} alt="Image 2" style={{ transform: 'rotateY(180deg)' }} />,
        <img src={mode3} alt="Image 3" style={{ transform: 'rotateY(180deg)' }} />,
        <img src={mode11} alt="Image 9" style={{ transform: 'rotateY(180deg)' }} />,
        <img src={mode13} alt="Image 3" style={{ transform: 'rotateY(180deg)' }}/>,
        <img src={mode17} alt="Image 3" style={{ transform: 'rotateY(180deg)' }}/>,


    ];

    const imagesMiddle = [
        <img src={mode4} alt="Image 7" />,
        <img src={mode5} alt="Image 8" />,
        <img src={mode6} alt="Image 9" />,
        <img src={mode10} alt="Image 9" />,
        <img src={mode15} alt="Image 9" />,
        <img src={mode16} alt="Image 9" />,


    ];

    const imagesRight = [
        <img src={mode7} alt="Image 7" />,
        <img src={mode8} alt="Image 8" />,
        <img src={mode9} alt="Image 9" />,
        <img src={mode12} alt="Image 9" />,
        <img src={mode14} alt="Image 9" />,
        <img src={mode18} alt="Image 9" />,



    ];

    return (
        <div>
            <Menu />
            <ScrollSync>
            <div className="content-portefolios">
                <div className="columns-wrapper">
                    <ScrollSyncPane>
                        <div className="image-column" style={{ transform: 'rotateX(180deg)' }}>
                            {imagesLeft.map((image, index) => (
                                <div key={index} className="image-wrapper colonne1">
                                    {image}
                                </div>
                            ))}
                        </div>
                    </ScrollSyncPane>
                    <ScrollSyncPane>
                        <div className="image-column">
                            {imagesMiddle.map((image, index) => (
                                <div key={index} className="image-wrapper">
                                    {image}
                                </div>
                            ))}
                        </div>
                    </ScrollSyncPane>
                    <ScrollSyncPane>
                        <div className="image-column" style={{ transform: 'rotateX(180deg)' }}>
                            {imagesRight.map((image, index) => (
                                <div key={index} className="image-wrapper colonne1">
                                    {image}
                                </div>
                            ))}
                        </div>
                    </ScrollSyncPane>
                </div>
            </div>
            </ScrollSync>
            <Footer/>
        </div>
    );
}

export default Portefolios;