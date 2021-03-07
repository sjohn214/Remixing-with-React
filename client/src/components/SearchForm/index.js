import React, { useState } from "react";
import "./style.css";



export default function Searchbar(props) {

    const [searchValue, setSearch] = useState("");

    function HandleChange(event) {
        setSearch(event.target.value);
    };
    

    return ( 
        <div className = "maincontainer" >
        <div className = "card-header">
        
        <h1> Search for a city </h1> 
        </div> 
        <input className = "searchbar"
        type = "text"
        placeholder = "Enter City Name"
        value = {searchValue}
        onChange = {HandleChange}
        />
        <button onClick={() => props.callWeatherAPI(searchValue)} className = "searchbtn" disabled={searchValue === null}>Search</button>
        </div>
    );
};