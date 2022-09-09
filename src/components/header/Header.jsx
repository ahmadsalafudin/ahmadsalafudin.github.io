import React from 'react'
import './header.css'
import CTA from './CTA';
import Me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <h5>Hello I'm</h5>
                <h1>Ahmad Salafudin</h1>
                <h5 className="text-light"><span className="typed" data-typed-items="Developer, Trainer, Content Creator"></span></h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={Me} alt="me" />
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header