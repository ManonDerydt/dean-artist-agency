import '../App.css';
import React, { useRef, useEffect } from 'react';
import Dean from "../assets/dean.jpeg";
// eslint-disable-next-line no-unused-vars
import {Fade} from "react-reveal";
import Menu from "./Menu";
import ReactPlayer from "react-player";
import video from "../assets/test-video2.mp4";
import Footer from "./Footer";
import marque from "../assets/marque1.webp"

function Customers() {

    return (
        <div className="App">
            <Menu/>
            <div className="content-customers">
                <Fade top delay={700} duration={1000}>
                    <h2 className="title-customers">NOS CLIENTS</h2>
                </Fade>

                <p className="txt-customer">
                    Maquilleuse depuis 2013 et entrepreneuse passionnée, ma vocation est de montrer que les métiers de
                    la beauté peuvent être vecteurs de sens et de créativité.

                </p>
                <div className="content-marque">
                    <Fade top delay={200}>
                        <img src={marque} className="logo"/>
                    </Fade>
                    <Fade top delay={400}>
                        <img src={marque} className="logo"/>
                    </Fade>
                    <Fade top delay={600}>
                        <img src={marque} className="logo"/>
                    </Fade>
                    <Fade top delay={800}>
                        <img src={marque} className="logo"/>
                    </Fade>
                </div>
                <div className="content-marque">
                    <Fade top delay={200}>
                        <img src={marque} className="logo"/>
                    </Fade>
                    <Fade top delay={400}>
                        <img src={marque} className="logo"/>
                    </Fade>
                    <Fade top delay={600}>
                        <img src={marque} className="logo"/>
                    </Fade>
                    <Fade top delay={800}>
                        <img src={marque} className="logo"/>
                    </Fade>

                </div>
                <div className="content-marque">
                    <Fade top delay={200}>
                        <img src={marque} className="logo"/>
                    </Fade>
                    <Fade top delay={400}>
                        <img src={marque} className="logo"/>
                    </Fade>
                    <Fade top delay={600}>
                        <img src={marque} className="logo"/>
                    </Fade>
                    <Fade top delay={800}>
                        <img src={marque} className="logo"/>
                    </Fade>

                </div>
            </div>
            <Footer/>
        </div>
    );
}


export default Customers;