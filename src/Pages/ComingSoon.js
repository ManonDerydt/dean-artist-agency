import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import menuBurger from '../assets/menu-burger.png'
import logo from '../assets/Logo_DW_noir.png'

function Comingsoon() {

    return (
        <div>
            <Fade Bottom delay={1000} duration={1000}>
                <div className="content-soon">
                   <h2>Coming soon ...</h2>
                </div>
            </Fade>

        </div>

    );
}

export default Comingsoon;