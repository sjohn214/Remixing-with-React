import React, { useState } from "react";
import axios from "axios";


const Forecast = () => {
 let [responseObj, setResponseObj] = useState({});
  let [UVresponse, setUVResponse] = useState({});

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

const getUVindex = {
  method: "GET",
  url: `http://api.openweathermap.org/data/2.5/uvi?`,
  params: {
    q:  "[]",
    lat: "",
    lon: "",
    appid: "&appid=29e4875c9bed2b0310851289abe5a5e1&units=imperial",
    lang: "null",
    units: "imperial",
    mode: "xml, html"
  }.then(response => response.json())
  .then(response => {
    setUVResponse(response);
  })

};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

axios.request(getUVindex).then(function (UVresponse) {
  console.log(UVresponse.data);
}).catch(function (error){
  console.error(error);
});

    return (
        <div className="DailyForecast">
            {JSON.stringify(responseObj)}
            <p className="UVindex">
              {JSON.stringify(UVresponse)}
            </p>
        </div>
        
    )
}

export default Forecast;