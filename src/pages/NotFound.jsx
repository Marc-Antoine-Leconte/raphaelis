import React from "react";
import { createBrowserHistory } from 'history'



export default function NotFound() {
    const history = createBrowserHistory();

    setTimeout(() => {
        history.push('/')
        history.go(0)
    }, 3000);

    return (
        <div className="not-found" >
            <h1>Erreur 404</h1>
            <h2>Page non trouvée</h2>
        </div>
    );
}