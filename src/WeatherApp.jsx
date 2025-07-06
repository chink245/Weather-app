import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Mumbai",
        feelsLike:39.81, 
        humidity:54,
        temp:34,
        tempMax:34,
        tempMin:34, 
        weathe:"overcast clouds"
    });

    let updateInfo = (newInfo) => {
      setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}