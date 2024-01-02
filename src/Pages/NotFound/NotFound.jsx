import React from "react";
import './NotFound.css';
// import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry This Url Is Not Found !!!</h1>
            <a href="/">Go Back</a>
        </div>
    )
}

export default NotFound;