import React  from "react";
import '../index.css';

function Footer(){
    return(
        <div className="footer">
        <div className="grid">
            <div className="social-media">
                {/*
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <a href="https://www.facebook.com/profile.php?id=100009130551768" className="fa fa-facebook"/>
                <a href="https://twitter.com/asclepios_v" className="fa fa-twitter"/>
                <a href="https://www.instagram.com/paul_flam/" className="fa fa-instagram"/>*/}
            </div>
            <div className="footer-link">
                <a href="/contact">Contact</a>
                <a href="/mentions-legales">Mentions légales</a>
            </div>
        </div>
        </div>
    )
}

export default Footer;