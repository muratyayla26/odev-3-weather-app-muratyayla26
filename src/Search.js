const apiKey = "APIKEY";

export const search = async (searchKey) => {
    try {
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${searchKey}&days=7&key=${apiKey}`);
    if(response.ok){
        const jsonResponse = await response.json();
        //console.log(jsonResponse);
        const forecasts = jsonResponse.data.map(forecast => {
            return {
                maxTemp: forecast.app_max_temp,
                minTemp: forecast.app_min_temp,
                dateTime: forecast.datetime,
                weatherCode: forecast.weather.code,
                iconCode: forecast.weather.icon
            }
        })
        return forecasts;
    };
    } catch (error) {
        console.log(error);
    }
};