import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import menuBurger from '../assets/menu-burger.png'
import logo from '../assets/Logo_DW_noir.png'

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <Fade Bottom delay={1000} duration={1000}>
                <div className="Menu">
                    <div className="menu-wrapper">
                        <div>
                            <img src={logo} className="logo"/>
                        </div>
                        <div className="menu-toggle" onClick={toggleMenu}>
                            <img src={menuBurger} className="menu-burger"/>
                        </div>

                        {isMenuOpen && (
                            <Fade top duration={500} delay={100}>
                                <div className="menu-content">
                                    <ul className="ul-menu">
                                        <li>
                                            <Link to="/" className="li">Accueil</Link>
                                        </li>
                                        <li>
                                            <Link to="/us" className="li">Qui sommes-nous</Link>
                                        </li>
                                        <li>
                                            <Link to="/talents" className="li">Nos artistes</Link>
                                        </li>
                                        {/*<li>*/}
                                        {/*    <Link to="/partners" className="li">Nos clients</Link>*/}
                                        {/*</li>*/}

                                        <li>
                                            <Link to="/portefolios" className="li">Portefolios</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact" className="li">
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Fade>
                        )}
                        {!isMenuOpen && (
                            <Fade bottop duration={500} delay={100}>
                                <div className="menu-content" style={{display: 'none'}}></div>
                            </Fade>
                        )}

                    </div>
                </div>
            </Fade>

        </div>

    );
}

export default Menu;