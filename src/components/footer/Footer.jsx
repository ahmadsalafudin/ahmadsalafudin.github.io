import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">Ahmad Salafudin</a>
            <p>Saya senang anda sampai pada baris ini, dan menemukan bahwa saya adalah saya dari prespektif saya</p>
            <div className="footer_social">
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://facebook.com"><FiInstagram /></a>
                <a href="https://facebook.com"><IoLogoTwitter /></a>
            </div>
        </footer>
    )
}

export default Footer