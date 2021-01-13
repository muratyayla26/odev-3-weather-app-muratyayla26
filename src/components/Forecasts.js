import Forecast from "./Forecast";
import {useContext, useEffect} from "react";
import {ForecastContext} from "./ForecastContext";
//import {search} from "../Search";

const Forecasts = () => {
    const {searchKey, results, setResults} = useContext(ForecastContext);

    useEffect(()=>{
        search(searchKey).then(response => {
            setResults(response);
        })
    },[searchKey]);

    return (
        <div className="forecastsContainer">
            {
                results.map((result,index) => {
                    return (
                        <Forecast
                        key={index}
                        dateTime={result.dateTime}
                        iconCode={result.iconCode}
                        maxTemp={result.maxTemp}
                        minTemp={result.minTemp}/>
                    );
                })
            }
           
        </div>
    );
};

export default Forecasts;