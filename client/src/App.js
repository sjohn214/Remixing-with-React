import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/index";
import Searchbar from "./components/SearchForm/index";
import SearchResults from "./components/SearchResults/index";
import Conditions from "./components/Conditions/index";
import Card from "./components/Card/index";
import axios from "axios";

const BASEURL = "https://api.openweathermap.org/data/2.5/weather?q="
const APIKEY = "&appid=29e4875c9bed2b0310851289abe5a5e1&units=imperial"


function App() {
  const [response, setResponse] = useState("");


  const callWeatherAPI = (query) => {
    axios.get(BASEURL + query + APIKEY).then(res => {
        console.log(res);
        setResponse(res);
    });
};

useEffect(() => {
  callWeatherAPI("Charlotte");
}, []);

useEffect(() => {
  console.log(response);
}, [response]);


  return (
   <div className="App">
     <Navbar />
     <Searchbar callWeatherAPI={callWeatherAPI}/>
     <Card />
     <SearchResults response={response}/>
     <Conditions response={response}/>
     
   </div>
  );
}

export default App;
