import React, { useEffect, useState } from 'react';
import '../App.css';

function SplashScreen({ onFinish }) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const words = ["MAKEUP", "NAILS", "HAIR", "DEAN"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex(prevIndex => {
                if (prevIndex < words.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setFadeOut(true), 500); // Attendre que l'animation du dernier mot se termine
                    return prevIndex;
                }
            });
        }, 1500); // Afficher chaque mot pendant 1.5 secondes
        return () => clearInterval(interval);
    }, [words.length]);

    useEffect(() => {
        if (fadeOut) {
            setTimeout(() => {
                onFinish();
            }, 1000);
        }
    }, [fadeOut, onFinish]);

    return (
        <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="splash-content">
                <h2
                    key={currentWordIndex}
                    className={`splash-word fade-in-out ${
                        currentWordIndex === words.length - 1 ? 'final-word' : ''
                    }`}
                >
                    {words[currentWordIndex]}
                </h2>
                <h1 className="splash-title">ARTIST</h1>
            </div>
        </div>
    );
}

export default SplashScreen;
