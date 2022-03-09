import React from "react";
import '../index.css';
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className={"home"}>
            <h1>Découvrez notre jeu</h1>
            <h1 className={"orange-title"}>Ecclesia </h1>
            <Link to="/jeux">
                Nos Jeux
            </Link>
        </div>
        );
}
