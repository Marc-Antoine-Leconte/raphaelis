import React from "react";
import Data from '../assets/data/text.json'


export default function Article() {
    console.log(window.location.pathname);
    let selectedItem = Data.find(data => data.url === window.location.pathname);
    return (
        <>
            <h1>
                {selectedItem.title}
            </h1>
        <p>{selectedItem.content}</p>
            </>
    );
}
