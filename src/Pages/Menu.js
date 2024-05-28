import '../App.css';
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Fade} from "react-reveal";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import menuBurger from '../assets/menu-burger.png'
function Menu() {
    const location = useLocation();

    return (
        <div>
            <div className="Menu">
                <TransitionGroup>
                    <CSSTransition
                        classNames="menu-fade"
                        timeout={1000}
                        key={location.key}
                    >
                        <Fade top duration={1000} delay={300}>
                            <img src={menuBurger} className="menu-burger"/>
                            {/*<ul className="ul-menu">*/}
                            {/*    <li>*/}
                            {/*        <Link to="/" className="li">Accueil</Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to="/talents" className="li">Nos artistes</Link></li>*/}
                            {/*    <li className="li">*/}
                            {/*        <Link to="/partners" className="li">Nos clients</Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to="/us" className="li">Qui sommes-nous</Link>*/}
                            {/*    </li>*/}

                            {/*    <li>*/}
                            {/*        <Link to="/portefolios" className="li">Portefolios</Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to="/contact" className="li">*/}
                            {/*            Contact*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </Fade>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    );
}

export default Menu;