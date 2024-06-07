import '../App.css';
import React from 'react';
import mode1 from '../assets/fakemode/2.jpg';
import mode2 from '../assets/fakemode/4.jpg';
import mode3 from '../assets/fakemode/6.jpg';
import mode4 from '../assets/fakemode/7.jpg';
import mode5 from '../assets/fakemode/8.jpg';
import mode6 from '../assets/fakemode/9.jpg';
import mode7 from '../assets/fakemode/10.jpeg';
import mode8 from '../assets/fakemode/11.jpg';
import mode9 from '../assets/fakemode/12.jpg';
import mode10 from '../assets/fakemode/1.jpg';
import mode11 from '../assets/fakemode/3.jpg';
import mode12 from '../assets/fakemode/5.jpg';

import Footer from "./Footer";
import Menu from "./Menu";
import {Fade} from "react-reveal";

function PortefolioByTalent() {
    const imagesLeft = [
        <img src={mode1} alt="Image 1" style={{ transform: 'rotateY(180deg)' }} />,
        <img src={mode2} alt="Image 2" style={{ transform: 'rotateY(180deg)' }} />,
        <img src={mode3} alt="Image 3" style={{ transform: 'rotateY(180deg)' }} />,

    ];

    const imagesMiddle = [
        <img src={mode4} alt="Image 7" />,
        <img src={mode5} alt="Image 8" />,
        <img src={mode6} alt="Image 9" />,

    ];

    const imagesRight = [
        <img src={mode7} alt="Image 7" />,
        <img src={mode8} alt="Image 8" />,
        <img src={mode9} alt="Image 9" />,

    ];

    return (
        <div>
            <div>
                <Menu/>
                <div className="content-photograph">
                    <Fade bottom>
                        <div className="content-mode">
                            <h2 className="title-photo">THE ARTIST</h2>
                            <div className="block-mode">
                                <div>
                                    <img src={mode1} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>

                                <div>
                                    <img src={mode2} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                                <div>
                                    <img src={mode3} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                                <div>
                                    <img src={mode4} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                            </div>
                            <div className="block-mode">
                                <div>
                                    <img src={mode5} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                                <div>
                                    <img src={mode6} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                                <div>
                                    <img src={mode7} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                                <div>
                                    <img src={mode8} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                            </div>
                            <div className="block-mode">
                                <div>
                                    <img src={mode9} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                                <div>
                                    <img src={mode10} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                                <div>
                                    <img src={mode11} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                                <div>
                                    <img src={mode12} className="fake-mode"/>
                                    <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <Footer/>
            </div>


        </div>
    );
}

export default PortefolioByTalent;