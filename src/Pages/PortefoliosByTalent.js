import '../App.css';
import React, { useState } from 'react';
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
import { Fade } from "react-reveal";
import { useParams, useLocation } from "react-router-dom";
import MenuBlack from "./MenuBlack";

function PortefolioByTalent() {
    const [currentImageIndex, setCurrentImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        mode1, mode2, mode3, mode4, mode5, mode6,
        mode7, mode8, mode9, mode10, mode11, mode12
    ];

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setCurrentImageIndex(null);
        setIsModalOpen(false);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const { talentName } = useParams();
    const location = useLocation();
    const { talentCategory } = location.state || {};

    return (
        <div>
            <div>
                <MenuBlack />
                <div className="content-photograph">
                    <Fade bottom>
                        <div className="content-mode">
                            <h2 className="title-photo">{talentName}</h2>
                            <hr className="line-talent"/>
                            <h2 className="subtitle-photo">{talentCategory}</h2>
                            <div className="block-mode">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleImageClick(index)}
                                        className={currentImageIndex === index ? "active-image" : ""}
                                    >
                                        <img src={image} className="fake-mode" alt="Mode" />
                                        <p className="name-photo">ALEXA <span className="bold">HERNANDEZ</span></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Fade>
                </div>
                <Footer />
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close-button" onClick={handleModalClose}>&times;</span>
                        <div className="modal-image-container">
                            <button className="prev-button" onClick={handlePrevClick}>Prev</button>
                            <img src={images[currentImageIndex]} className="modal-image" alt="Modal" />
                            <button className="next-button" onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PortefolioByTalent;