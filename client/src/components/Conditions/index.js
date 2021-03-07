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
                   <p>
                       <strong>{props.response.data?.name} {""}</strong>
                    </p>
                    <br />
                    <img 
                        alt="weather icon"
                        src={`http://openweathermap.org/img/w/${props.response.data?.weather[0].icon}.png`}/>
                   <p>
                       It is currently {Math.round(props.response.data?.main.temp)} degrees outside with,
                    </p>
                    <p>
                        a Humidity reading of {props.response.data?.main.humidity}. 
                    </p>
                   <p>
                       The current Wind Speed is {props.response.data?.wind.speed}
                    </p>
                    <p>
                        Today's UV Index is
                        {/* <link src={`https://api.openweathermap.org/data/2.5/uvi?appid=29e4875c9bed2b0310851289abe5a5e1&lat=${props.response.data?.coord.lat}&lon=${props.response.data?.coord.lon}`} */}
                    </p>
                    
               </div>
           : "There is no Weather Data"}
            
        </div>
    );
}

export default Conditions;