import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import MenuBlack from './MenuBlack';
import Footer from './Footer';
import solene from '../assets/The artists/Solène.jpg';
import Wesley from '../assets/The artists/Wesley.jpg';
import moirai from '../assets/The artists/moirai.jpg';
import monia from '../assets/The artists/monia.jpg';
import naidi from '../assets/mode.png';
import justine from '../assets/The artists/Jusine.jpg';
import pauline from '../assets/The artists/Pauline.jpg';
import nasma from '../assets/The artists/Nasma.jpg';
import eloise from '../assets/The artists/eloise.jpg';
import Menu from "./Menu";

const Talents = () => {
    const [shrinkIndex, setShrinkIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    const talentData = [
        {
            id: 0,
            name: 'Solène R.',
            category: 'Makeup Artist',
            image: solene,
            description: 'The immersive gallery experience, brought together some of the most extraordinary minds shaping culture today in a groundbreaking exhibition, on display 15-21 April',
        },
        {
            id: 1,
            name: 'Wesley H.',
            category: 'Makeup Artist',
            image: Wesley,
            description: "Wesley est maquilleuse depuis 2015. Elle s'est spécialisée dans le glam ainsi le maquillage commercial et plateau. Forte d'une expérience en studio et TV, elle saura magnifier votre personnalité.",
        },
        {
            id: 2,
            name: 'Moïrai D.',
            category: 'Hair Artist',
            image: moirai,
            description: 'The immersive gallery experience, brought together some of the most extraordinary minds shaping culture today in a groundbreaking exhibition, on display 15-21 April',
        },
        {
            id: 3,
            name: 'Monia B.',
            category: 'Estheticienne Artist',
            image: monia,
            description: 'The immersive gallery experience, brought together some of the most extraordinary minds shaping culture today in a groundbreaking exhibition, on display 15-21 April',
        },
        {
            id: 4,
            name: 'Justine S.',
            category: 'Makeup Artist',
            image: justine,
            description: 'The immersive gallery experience, brought together some of the most extraordinary minds shaping culture today in a groundbreaking exhibition, on display 15-21 April',
        },
        {
            id: 5,
            name: 'Pauline B.',
            category: 'Hair Artist',
            image: pauline,
            description: 'The immersive gallery experience, brought together some of the most extraordinary minds shaping culture today in a groundbreaking exhibition, on display 15-21 April',
        },
        {
            id: 6,
            name: 'Naidy L.',
            category: 'Hair Artist',
            image: naidi,
            description: 'The immersive gallery experience, brought together some of the most extraordinary minds shaping culture today in a groundbreaking exhibition, on display 15-21 April',
        },
        {
            id: 7,
            name: 'Nasma Y.',
            category: 'Hair Artist',
            image: nasma,
            description: 'The immersive gallery experience, brought together some of the most extraordinary minds shaping culture today in a groundbreaking exhibition, on display 15-21 April',
        },
        {
            id: 8,
            name: 'Eloïse C.',
            category: 'Estheticienne Artist',
            image: eloise,
            description: 'The immersive gallery experience, brought together some of the most extraordinary minds shaping culture today in a groundbreaking exhibition, on display 15-21 April',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        slidesToShow: 3,
    };

    const handleImageClick = (index) => {
        setShrinkIndex(index);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setShrinkIndex(null);
        setIsModalOpen(false);
    };

    return (
        <div>
            <Menu/>
            <div className="content-talents">
                <Slider {...settings}>
                    {talentData.map((talent, index) => (
                        <div
                            key={talent.id}
                            className={`slide-container ${shrinkIndex === index ? 'shrink' : ''}`}
                        >
                            <div className="card card-1">
                                {shrinkIndex !== index && (
                                    <div>
                                        <h2 className="name-talent">{talent.name}</h2>
                                    </div>
                                )}
                            </div>
                            <div className="slide-image-container" onClick={() => handleImageClick(index)}>
                                <img
                                    src={talent.image}
                                    className={`slick-slide-image slide ${shrinkIndex === index ? 'clicked' : ''}`}
                                    alt={talent.name}
                                />
                                {shrinkIndex === index && (
                                    <Fade right duration={2000}>
                                        <div className="slide-text text-talent">{talent.description}</div>
                                    </Fade>
                                )}
                                {shrinkIndex === index && (
                                    <Fade right duration={2000}>
                                        <Link
                                            to={`/portefolio/${talent.name.toLowerCase().replace(' ', '-')}`}
                                            state={{ talentName: talent.name, talentCategory: talent.category }}
                                            className="portefolios-link"
                                        >
                                            Portefolio
                                        </Link>
                                    </Fade>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <Footer />
        </div>
    );
};

export default Talents;