import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className= "containter">
    <form>
  
      <div className="form-group">
       
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
        <br />
 
      </div>
    </form>
    </div>
  );
}

export default SearchForm;