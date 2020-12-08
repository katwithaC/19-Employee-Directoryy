import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
    return (
        <div className = "navbar">
        <div>
        <h1 className= "h1">Employee Directory</h1>
        <small className = "small">Click on carrots to filter by heading or use the search box to narrow your search results.</small>
        </div>
        </div>
        
    )
}

export default Header;