import '../App.css';
import React, { useRef, useEffect } from 'react';
import {Fade} from "react-reveal";

function Introduction() {

    return (
        <div className="content-introduction">
            <Fade bottom delay={1000}>
                <p className="text-intro">
                    Chez Dean Agency, nous comprenons l'importance de chaque détail et nous nous engageons à fournir des
                    résultats exceptionnels, en harmonie avec votre vision. Faites confiance à notre agence pour donner
                    vie à vos projets et créer des expériences visuelles captivantes qui marqueront les esprits.
                </p>
            </Fade>


        </div>
    );
}

export default Introduction;