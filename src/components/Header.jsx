import React  from "react";
import "../index.css"
import { Link } from "react-router-dom";
import logo from '../assets/images/logo-raphaelis.svg';
import headerBg from '../assets/images/header-bg.jpg'

function Header(){

    return(
        <div className="header">
                <div className={"img-container"}>
                    <img src={headerBg} alt={headerBg} className={"header-bg"}/>
            </div>
            <div className="top">
                <div className="topRight">
                    <Link to={"/accueil"}>
                        <img src={logo} alt="Logo" className={"logo"}/>
                    </Link>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/apropos">
                                A propos
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/wiki">
                                Wiki
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/actualite">
                                Actualité
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header;
