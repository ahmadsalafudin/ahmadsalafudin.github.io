import React from 'react'
import './about.css'
import Me from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id='about'>
            <h2>About Me</h2>
            <h5>Get To Know</h5>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={Me} alt="me" />
                    </div>
                </div>

                <div className="about_content">
                    {/* <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about-icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className='about_card'>
                            <FiUsers className='about-icon' />
                            <h5>Client</h5>
                            <small>200 Worldwide</small>
                        </article>

                        <article className='about_card'>
                            <VscFolderLibrary className='about-icon' />
                            <h5>Project</h5>
                            <small>80+ Completed</small>
                        </article>

                    </div> */}
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus vero, tempore harum iste alias incidunt architecto autem maxime eaque. Eos voluptatum autem maiores accusantium voluptas ea eius aspernatur nihil corporis.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About