import React from 'react';
import '../App.css'; // Assurez-vous de créer le fichier CSS correspondant

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Contactez-nous :</p>
                <ul>
                    <li>Email : contact@example.com</li>
                    <li>Téléphone : +1234567890</li>
                </ul>
            </div>
            <div className="footer-social">
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;