import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../assets/Logo_DW_blanc.png';
import Fade from 'react-reveal/Fade';

function SplashScreen({ onFinish }) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const words = ["MAKEUP", "NAILS", "HAIR", "DEAN"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex(prevIndex => {
                if (prevIndex < words.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        setFadeOut(true);
                    }, 1500); // Delay before fading out the page
                    setTimeout(() => {
                        setShowLogo(true);
                    }, 100); // Delay before showing the logo
                    return prevIndex;
                }
            });
        }, 1500); // Display each word for 1.5 seconds
        return () => clearInterval(interval);
    }, [words.length]);

    useEffect(() => {
        if (fadeOut) {
            setTimeout(() => {
                onFinish();
            }, 1500); // Synchronize with fade-out animation duration
        }
    }, [fadeOut, onFinish]);

    const isSpecialWord = word => ["NAILS", "HAIR", "DEAN"].includes(word);

    return (
        <div className={`splash-screen ${fadeOut ? 'fade-out-move' : ''}`}>
            <Fade top when={showLogo}>
                <img src={logo} alt="Logo" className="logodean" />
            </Fade>
            <div className="splash-content">
                <div className="splash-column">
                    <h2 key={currentWordIndex} className={`splash-word ${isSpecialWord(words[currentWordIndex]) ? 'with-margin' : ''}`}>
                        {words[currentWordIndex]}
                    </h2>
                </div>
                <div className="splash-column">
                    <h1 className="splash-title">ARTIST</h1>
                </div>
            </div>

        </div>
    );
}

export default SplashScreen;
