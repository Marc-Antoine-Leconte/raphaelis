import React  from "react";
import '../index.css';

function Footer(){
    return(
        <div className="footer">
        <div className="grid">
            <div className="social-media">
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