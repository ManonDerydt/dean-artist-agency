import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import menuBurger from '../assets/menu-black.png';
import menuBurgerblanc from '../assets/menu-burger-blanc.png';
import logo from '../assets/Logo_DW_noir.png';

function Menu({ isWhitePage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Fade Bottom delay={1000} duration={1000}>
                <div className={`Menu MenuWhitemode ${isScrolled ? 'scrolled' : ''}`}>
                    <div className="menu-wrapper">
                        <div
                            className="menu-toggle"
                            onClick={toggleMenu}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={menuBurgerblanc}
                                className="menu-burgerblanc"
                                alt="Menu"
                            />
                            <img
                                src={menuBurger}
                                className="menu-burger"
                                alt="Menu"
                            />
                        </div>
                        <div>
                            <h1 className="main-title-black">
                                DEAN ARTIST AGENCY
                            </h1>

                            <h1 className="main-title-white">
                                DEAN ARTIST AGENCY
                            </h1>
                        </div>

                        {isMenuOpen && (
                            <Fade top duration={500} delay={100}>
                                <div className={`menu-content ${isWhitePage ? 'white-mode' : ''}`}>
                                    <ul className={`ul-menu ${isWhitePage ? 'white-mode' : ''}`}>
                                        <li>
                                            <Link to="/" className={`li ${isWhitePage ? 'white-mode' : ''}`}>
                                                Accueil
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/us" className={`li ${isWhitePage ? 'white-mode' : ''}`}>
                                                Qui sommes-nous
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/talents" className={`li ${isWhitePage ? 'white-mode' : ''}`}>
                                                Nos artistes
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/portefolios" className={`li ${isWhitePage ? 'white-mode' : ''}`}>
                                                Portefolios
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact" className={`li ${isWhitePage ? 'white-mode' : ''}`}>
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Fade>
                        )}
                        {!isMenuOpen && (
                            <Fade bottop duration={500} delay={100}>
                                <div className="menu-content" style={{ display: 'none' }}></div>
                            </Fade>
                        )}
                        <div className="menu-toggle none" onClick={toggleMenu}>
                            <img
                                src={isWhitePage ? menuBurgerblanc : menuBurger}
                                className="menu-burger"
                            />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Menu;