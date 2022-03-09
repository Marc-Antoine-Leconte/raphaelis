import React from "react";
import "../index.css";

import ArticleOutput from "../components/articleDisplay";

export default function News() {
    return (
        <div className="news">
            <div>
                <ArticleOutput />
            </div>
        </div>
    );
}