import React from "react";
import classes from "./style.css";

const Conditions = (props) => {
    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
           {props.loading && <div className={classes.Loader} />}
        
               <div>
                   <p><strong>{props.data.name}</strong></p>
                   <p>It is currently {Math.round(props.data.temp)} degrees out with {props.data.weather[0].description.icon.main}.</p>
                   <p>The current Wind Speed is {props.data.wind.speed}</p>
               </div>
           : null
            
        </div>
    )
}
export default Conditions;