import React, { Component } from "react";
import { WiDaySunny} from "weather-icons-react";

class Weather extends Component {
    render () {
        return (
            <div> 
            <WiDaySunny size={24} color="#000"/>
            </div>
        )
    }
}

export default Weather;