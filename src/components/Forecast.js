
const Forecast = ({dateTime, iconCode, maxTemp, minTemp}) => {
    console.log(dateTime);
    return (
        <div className="forecastContainer">
            <p className="date">{dateTime}</p>
            <img src={`https://www.weatherbit.io/static/img/icons/${iconCode}.png`} alt=""/>
            <div className="minMax">
                <p className="max">{maxTemp}<span>&#176;</span></p>
                <p className="min">{minTemp}<span>&#176;</span></p>
            </div>
        </div>
    );
};

export default Forecast;

/*<div className="forecastContainer">
                        <p className="date">tarih</p>
                        <img src="https://www.weatherbit.io/static/img/icons/c04d.png" alt=""/>
                        <div className="minMax">
                            <p className="max">23<span>&#176;</span></p>
                            <p className="min">74<span>&#176;</span></p>
                        </div>
                    </div>*/

                    /*return (
                        <div key={index} className="forecastContainer">
                            <p className="date">{result.dateTime}</p>
                            <img src={`https://www.weatherbit.io/static/img/icons/${result.iconCode}.png`} alt=""/>
                            <div className="minMax">
                                <p className="max">{result.maxTemp}<span>&#176;</span></p>
                                <p className="min">{result.minTemp}<span>&#176;</span></p>
                            </div>
                        </div>
                    );*/