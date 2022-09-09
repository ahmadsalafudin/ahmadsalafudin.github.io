import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8tx8l3p', 'template_ftalfbq', form.current, '1NXd2khS329SvK4Fj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>ahmadsalafusin3@gmail.com</h5>
                        <a href="mailto:ahmadsalafudin3@gmail.com">Send a message</a>
                    </article>

                    <article className="contact_option">
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>Ahmad Salafudin</h5>
                        <a href="https://m.me/ahmadsalafudinn">Send a message</a>
                    </article>

                    <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>0898522111390</h5>
                        <a href="https://wa.me/89522111390">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" id="" rows="7" required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact