import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/index";
import Searchbar from "./components/SearchForm/index";
import SearchResults from "./components/SearchResults/index";
import Conditions from "./components/Conditions/index";
import Card from "./components/Card/index";
import Footer from "./components/Footer/index";
import axios from "axios";
import moment from "moment";

const BASEURL = "https://api.openweathermap.org/data/2.5/weather?q="
const APIKEY = "&appid=29e4875c9bed2b0310851289abe5a5e1&units=imperial"

function App() {
  const [response, setResponse] = useState("");
  const [UVresponse, setUVResponse] = useState("");

  const callWeatherAPI = (query) => {
    axios.get(BASEURL + query + APIKEY).then(res => {
        console.log(res);
        setResponse(res);
        getUVindex(res.data.coord.lat , res.data.coord.lon);
    });
};

  const getUVindex = (lat, lon) => {
    const UVINDEX = `https://api.openweathermap.org/data/2.5/uvi?appid=29e4875c9bed2b0310851289abe5a5e1&lat=${lat}&lon=${lon}`
    axios.get(UVINDEX).then(res => {
      
      setUVResponse(res);
    })
  }

useEffect(() => {
  callWeatherAPI("Charlotte");      
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

useEffect(() => {
       
}, [response]);

// useEffect(() => {
//   getUVindex(UVresponse.data.coord.lat , UVresponse.data.coord.lon);
// })
  return (
    <div className="App">
      <Card className="card"/>
     <Navbar className="navbar"/>
     <Searchbar callWeatherAPI={callWeatherAPI}/>
     <SearchResults response={response}/>
     <h5 className="moment">{moment().format('MMMM Do YYYY, h:mm a')}</h5>
     <Conditions response={response} UVresponse={UVresponse}/>
     <br />
     <br />
     <br />
     <br />
     <Footer />
    
     </div> 
  );
}

export default App;
