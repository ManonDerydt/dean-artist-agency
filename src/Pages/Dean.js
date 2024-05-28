import '../App.css';
import React, { useRef, useEffect } from 'react';
import Dean from "../assets/dean.jpeg";
import Menu from "./Menu";
import {Fade} from "react-reveal";
import Footer from "./Footer";

function Slogan() {

    return (
        <div>
            <Menu/>
            <div className="section-dean">
                <img src={Dean} className="img-dean"/>
                <div>
                    <Fade top delay={700} duration={1000}>
                        <h2 className="title-dean">DEAN WILSON</h2>
                    </Fade>
                    <p className="txt-dean">
                        Maquilleuse depuis 2013 et entrepreneuse passionnée, ma vocation est de montrer que les métiers
                        de
                        la beauté peuvent être vecteurs de sens et de créativité.
                        Animée par une passion pour la beauté et convaincue de son pouvoir d'empowerment, j'ai fondé
                        DEAN ARTIST en 2023, une agence de maquillage, coiffure & esthétique. Notre équipe d'artistes
                        met
                        son expertise au service de votre vision pour rendre chacune de vos productions unique. Nous
                        créons
                        des looks qui contribuent à la réalisation de visuels captivants.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default Slogan;