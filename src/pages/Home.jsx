import React from "react";
import '../index.css';
import {useSelector, useDispatch} from "react-redux";
import {pageContact, pageGame} from "../actions";

export default function Home() {
    const content = useSelector(state => state.pages);
    const dispatch = useDispatch();
    if (window.location.pathname === "/"){
            dispatch(pageContact());
    }
    return (
        <div className={"home"}>
            <h1>Découvrez notre jeu</h1>
            <h1 className={"orange-title"}>Ecclesia </h1>
            <h1>{content.title}</h1>
        </div>
        );
}
