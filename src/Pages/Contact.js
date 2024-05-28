import '../App.css';
import React, { useRef, useEffect } from 'react';
import poudre from "../assets/Maquillage.png";
// eslint-disable-next-line no-unused-vars
import {Fade} from "react-reveal";
import Menu from "./Menu";
import Footer from "./Footer";
import marque from "../assets/marque1.webp";

function Contact() {

    return (
        <div className="App">
            <Menu/>
            <div className="content-customers">
                <div>
                    <img src={poudre} className="poudre"/>
                    <Fade top delay={700}>
                        <h2 className="title-customers">CONTACT</h2>
                    </Fade>

                    <div className="content-info">
                        <h2>PARIS</h2>
                        <p>20 rue de la Baume ,7th floor 75008 Paris, France</p>
                        <p>Main +33 1 7305 9696</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
)
    ;
}

export default Contact;