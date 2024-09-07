import React from 'react';
import '../App.css'; // Assurez-vous de créer le fichier CSS correspondant
import Logo from "../assets/Logo_DW_noir.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul>
                    <li>contact@deanartist.com</li>
                    {/*<li>+33 7 67 12 93 24</li>*/}
                    <li>Nous contacter</li>
                </ul>
            </div>

            <div className="footer-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Talents</a></li>
                    <li><a href="#">Notre équipe</a></li>
                    <li><a href="#">Portefolios</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="footer-menu">
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>

            <div className="footer-social">
                {/*<ul>*/}
                {/*    <li><a href="#">Newsletter</a></li>*/}
                {/*    <br/>*/}
                {/*    <input type="email" className="newsletter-input" placeholder="Enter your email" required/>*/}
                {/*</ul>*/}
                <img src={Logo} className="logo-footer"/>

            </div>


        </footer>
    );
}

export default Footer;