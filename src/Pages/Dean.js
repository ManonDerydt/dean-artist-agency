import '../App.css';
import React, { useRef, useEffect } from 'react';
import Dean from "../assets/dean.jpeg";
import Menu from "./Menu";
import {Fade} from "react-reveal";
import Footer from "./Footer";
import MenuBlack from "./MenuBlack";

function Slogan() {

    return (
        <div className="page-white">
            <MenuBlack/>
            <div className="section-dean">
                <img src="https://deanartist.com/wp-content/uploads/2021/12/dean-artist-team-accueil-min.jpg"
                     className="img-dean" alt="Dean Artist Team"/>
                <div>
                    <Fade top delay={700} duration={1000}>
                        <h2 className="title-dean">NOTRE EQUIPE</h2>
                    </Fade>
                    <p className="txt-dean">
                        <span className="M">M</span>aquilleuse depuis 2013 et entrepreneuse passionnée, ma vocation est
                        de montrer que les métiers
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