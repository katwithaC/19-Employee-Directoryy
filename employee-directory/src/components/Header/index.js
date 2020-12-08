import React from "react";

import "./style.css";

function Header(props) {
    return (
        <div className = "navbar">
    
        <div id= "navbartitle">
        <h1>Employee Directory</h1>
        </div>
        
        <br />
        <br />
        <br />
        <div id = "navbarptag"> 
        <p>Click on carrots to filter by heading or use the search box to narrow your search results.
        </p>
        </div>
        </div>
    );
}

export default Header;