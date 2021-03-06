import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';


export default function Searchbar() {
    const BASEURL = "https://api.openweathermap.org/data/2.5/weather?q="
    const APIKEY = "&appid=29e4875c9bed2b0310851289abe5a5e1&units=imperial"
    const [searchValue, setSearch] = useState("");
    const [response, setResponse] = useState("");

    useEffect(() => {

    }, [response]);

    function callWeatherAPI(query) {
        axios.get(BASEURL + query + APIKEY).then(res => {
            console.log(res);
            setResponse(res);
        });
    };

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
        <button onClick={() => callWeatherAPI(searchValue)} className = "searchbtn" disabled={searchValue === null}>Search</button>
        </div>
    );
};