import '../App.css';
import Slider from 'react-slick';
import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import mode from '../assets/mode.png';
import mode2 from '../assets/mode2.png';
import video from '../assets/test-video2.mp4';
import Footer from "./Footer";
import { BrowserRouter } from 'react-router-dom';
import Menu from "./Menu";
import Introduction from "./Introduction";
import Portefolios from "./Portefolios";
function Header() {

    const slides = [
        <div key={1} className="slide-container">
            <img src={mode} className="slide" alt="Mode" />
        </div>,
        <div key={2} className="slide-container">
            <div className="video-container slide">
                <ReactPlayer
                    url={video}
                    alt="test"
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="auto"
                />
            </div>
        </div>,
        <div key={3} className="slide-container">
            <img src={mode2} className="slide" alt="Mode 2" />
        </div>
        // Ajoutez plus de diapositives si nécessaire
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false, // Supprimer les flèches de navigation
    };

    return (
        <div className="App">
            <Menu/>
            <div>
                <div>
                {/*<Slider ref={sliderRef} {...settings}>*/}
                    {/*    /!*{slides}*!/*/}

                    {/*</Slider>*/}

                    <div className="video-container slide">
                        <ReactPlayer
                            url={video}
                            alt="test"
                            playing={true}
                            loop={true}
                            muted={true}
                            width="100%"
                            height="100%"
                            className="video"
                        />
                    </div>
                </div>
            </div>
            <Introduction/>
            <Portefolios/>
        </div>
    );
}

export default Header;