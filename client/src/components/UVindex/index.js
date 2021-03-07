import React, { useState, useEffect}from "react";

export default function UVindex(props) {
    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [response, setResponse] = useState([]);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/uvi?appid=29e4875c9bed2b0310851289abe5a5e1&lat=${response.data?.coord.lat}&lon=${response.data?.coord.lon}`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setResponse(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    })

    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (props.response.data?.coord.lat + props.response.data?.coord.lon)
    }
    

}