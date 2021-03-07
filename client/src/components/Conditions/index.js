import React from "react";
import classes from "./style.css";


const Conditions = (props) => {
    return (
        <div className={classes.Wrapper}>
            {props.error && (
            <small className={classes.Small}>Please enter a valid city.</small>
            )}
           {props.loading && <div className={classes.Loader} />}
           {props.response ? <div>
                   <div>
                       <h2>{props.response.data?.name} {""}</h2>
                    </div>
                    <br />
                    <img className="img"
                        alt="weather icon"
                        src={`http://openweathermap.org/img/w/${props.response.data?.weather[0].icon}.png`}/>
                   <p>
                       It is currently {Math.round(props.response.data?.main.temp)} degrees outside with, {props.response.data?.weather[0].description}.
                    </p>
                    <p>
                        There is a Humidity reading of {props.response.data?.main.humidity}. 
                    </p>
                   <p>
                       The current Wind Speed is {props.response.data?.wind.speed}
                    </p>
                    <p>
                        Today's UV Index is: 
                        {/* {props.response.data?.UVindex} */}
                        </p> 
                    
               </div>
           : "There is no Weather Data"}
            
        </div>
    );
}

export default Conditions;