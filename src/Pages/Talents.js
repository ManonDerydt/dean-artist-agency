import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mode from '../assets/talent1.jpg';
import mode6 from '../assets/talent2.jpg';
import mode3 from '../assets/mode.png';
import mode4 from '../assets/talent4.jpg';
import mode5 from '../assets/talent5.jpg';
import Menu from "./Menu";
import Footer from "./Footer";
import {Fade} from "react-reveal";
import PortefolioByTalent from "./PortefoliosByTalent";
import {Link} from "react-router-dom";

const Talents = () => {
    const [shrinkIndex, setShrinkIndex] = useState(null);


    const handleImageClick = (index) => {
        if (shrinkIndex === index) {
            setShrinkIndex(null);
        } else {
            setShrinkIndex(index);
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        slidesToShow: 3,
    };



    return (
        <div>
            <Menu/>
            <div className="content-talents">
                <Slider {...settings}>
                    <div className={`slide-container ${shrinkIndex === 0 ? 'shrink' : ''}`}>
                        <div className="card card-1">
                            {shrinkIndex !== 0 && (
                                <h2 className="name-talent">Dean Wilson</h2>
                            )}
                        </div>
                        <div className="slide-image-container" onClick={() => handleImageClick(0)}>
                            <img
                                src={mode3}
                                className={`slick-slide-image slide ${shrinkIndex === 0 ? 'clicked' : ''}`}
                                alt="Mode"
                            />
                            {shrinkIndex === 0 && (
                                <Fade right duration={2000}>
                                    <div className="slide-text text-talent">
                                        The immersive gallery experience, brought together some of the most
                                        extraordinary
                                        minds
                                        shaping culture today in a groundbreaking exhibition, on display 15-21 April
                                    </div>
                                </Fade>
                            )}

                            {shrinkIndex === 0 && (
                                <Fade right duration={2000}>
                                    <Link to="/talent-image" className="portefolios-link">
                                        Portefolio
                                    </Link>
                                </Fade>
                            )}
                        </div>
                    </div>

                    <div className={`slide-container ${shrinkIndex === 1 ? 'shrink' : ''}`}>
                        <div className="card card-1">
                            {shrinkIndex !== 1 && (
                                <h2 className="name-talent">Dean Wilson</h2>
                            )}
                        </div>
                        <div className="slide-image-container" onClick={() => handleImageClick(1)}>
                            <img
                                src={mode5}
                                className={`slick-slide-image slide ${shrinkIndex === 1 ? 'clicked' : ''}`}
                                alt="Mode"
                            />
                            {shrinkIndex === 1 && (
                                <Fade right duration={2000}>
                                    <div className="slide-text text-talent">
                                        The immersive gallery experience, brought together some of the most
                                        extraordinary
                                        minds
                                        shaping culture today in a groundbreaking exhibition, on display 15-21 April
                                    </div>
                                </Fade>
                            )}

                            {shrinkIndex === 1 && (
                                <Fade right duration={2000}>
                                    <Link to="/talent-image" className="portefolios-link">
                                        Portefolio
                                    </Link>
                                </Fade>
                            )}
                        </div>
                    </div>

                    <div className={`slide-container ${shrinkIndex === 2 ? 'shrink' : ''}`}>
                        <div className="card card-1">
                            {shrinkIndex !== 2 && (
                                <h2 className="name-talent">Dean Wilson</h2>
                            )}
                        </div>
                        <div className="slide-image-container" onClick={() => handleImageClick(2)}>
                            <img
                                src={mode}
                                className={`slick-slide-image slide ${shrinkIndex === 2 ? 'clicked' : ''}`}
                                alt="Mode"
                            />
                            {shrinkIndex === 2 && (
                                <Fade right duration={2000}>
                                    <div className="slide-text text-talent">
                                        The immersive gallery experience, brought together some of the most
                                        extraordinary
                                        minds
                                        shaping culture today in a groundbreaking exhibition, on display 15-21 April
                                    </div>
                                </Fade>
                            )}

                            {shrinkIndex === 2 && (
                                <Fade right duration={2000}>
                                    <Link to="/talent-image" className="portefolios-link">
                                        Portefolio
                                    </Link>
                                </Fade>
                            )}
                        </div>
                    </div>

                    <div className={`slide-container ${shrinkIndex === 4 ? 'shrink' : ''}`}>
                        <div className="card card-1">
                            {shrinkIndex !== 4 && (
                                <h2 className="name-talent">Dean Wilson</h2>
                            )}
                        </div>
                        <div className="slide-image-container" onClick={() => handleImageClick(4)}>
                            <img
                                src={mode4}
                                className={`slick-slide-image slide ${shrinkIndex === 4 ? 'clicked' : ''}`}
                                alt="Mode"
                            />
                            {shrinkIndex === 4 && (
                                <Fade right duration={2000}>
                                    <div className="slide-text text-talent">
                                        The immersive gallery experience, brought together some of the most
                                        extraordinary
                                        minds
                                        shaping culture today in a groundbreaking exhibition, on display 15-21 April
                                    </div>
                                </Fade>
                            )}

                            {shrinkIndex === 4 && (
                                <Fade right duration={2000}>
                                    <Link to="/talent-image" className="portefolios-link">
                                        Portefolio
                                    </Link>
                                </Fade>
                            )}
                        </div>
                    </div>

                    <div className={`slide-container ${shrinkIndex === 5 ? 'shrink' : ''}`}>
                        <div className="card card-1">
                            {shrinkIndex !== 5 && (
                                <h2 className="name-talent">Dean Wilson</h2>
                            )}
                        </div>
                        <div className="slide-image-container" onClick={() => handleImageClick(5)}>
                            <img
                                src={mode5}
                                className={`slick-slide-image slide ${shrinkIndex === 5 ? 'clicked' : ''}`}
                                alt="Mode"
                            />
                            {shrinkIndex === 5 && (
                                <Fade right duration={2000}>
                                    <div className="slide-text text-talent">
                                        The immersive gallery experience, brought together some of the most
                                        extraordinary
                                        minds
                                        shaping culture today in a groundbreaking exhibition, on display 15-21 April
                                    </div>
                                </Fade>
                            )}

                            {shrinkIndex === 5 && (
                                <Fade right duration={2000}>
                                    <Link to="/talent-image" className="portefolios-link">
                                        Portefolio
                                    </Link>
                                </Fade>
                            )}
                        </div>
                    </div>

                    <div className={`slide-container ${shrinkIndex === 6 ? 'shrink' : ''}`}>
                        <div className="card card-1">
                            {shrinkIndex !== 6 && (
                                <h2 className="name-talent">Dean Wilson</h2>
                            )}
                        </div>
                        <div className="slide-image-container" onClick={() => handleImageClick(6)}>
                            <img
                                src={mode6}
                                className={`slick-slide-image slide ${shrinkIndex === 6 ? 'clicked' : ''}`}
                                alt="Mode"
                            />
                            {shrinkIndex === 6 && (
                                <Fade right duration={2000}>
                                    <div className="slide-text text-talent">
                                        The immersive gallery experience, brought together some of the most
                                        extraordinary
                                        minds
                                        shaping culture today in a groundbreaking exhibition, on display 15-21 April
                                    </div>
                                </Fade>
                            )}

                            {shrinkIndex === 6 && (
                                <Fade right duration={2000}>
                                    <Link to="/talent-image" className="portefolios-link">
                                        Portefolio
                                    </Link>
                                </Fade>
                            )}
                        </div>
                    </div>
                </Slider>
            </div>
            <Footer/>
        </div>
    );
};

export default Talents;
