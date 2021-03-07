import React, { useState } from "react";
import axios from "axios";


const Forecast = () => {
 let [responseObj, setResponseObj] = useState({});


function getForecast() {

const options = {
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/weather",
  params: {
    q: "[]",
    lat: "0",
    lon: "0",
    callback: "test",
    id: "2172797",
    lang: "null",
    units: "imperial",
    mode: "xml, html"
  },
  headers: {
    "x-rapidapi-key": "4078dc68bdmshef1e53ae072de80p155299jsn18e985c65187",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
  }.then(response => response.json())
  .then(response => {
      setResponseObj(response);
  })
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    return (
        <div className="DailyForecast">
            {JSON.stringify(responseObj)}
            <getForecast />  
        </div>
    )
}
}
export default Forecast;