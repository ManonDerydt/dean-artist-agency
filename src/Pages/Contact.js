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
                    <Fade top delay={700}>
                        <h2 className="title-customers">CONTACT</h2>
                    </Fade>

                    <Fade bottom delay={800}>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text" id="nom" name="nom" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="prenom">Prénom</label>
                                <input type="text" id="prenom" name="prenom" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telephone">Numéro de téléphone</label>
                                <input type="tel" id="telephone" name="telephone" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Adresse email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="entreprise">Raison sociale</label>
                                <input type="text" id="entreprise" name="entreprise" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="objet">Objet</label>
                                <textarea id="objet" name="objet" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="submit-button">Envoyer</button>
                        </form>
                    </Fade>

                    {/*<div className="content-info">*/}
                    {/*    <h2>PARIS</h2>*/}
                    {/*    <p>20 rue de la Baume, 7th floor 75008 Paris, France</p>*/}
                    {/*    <p>Main +33 1 7305 9696</p>*/}
                    {/*</div>*/}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;