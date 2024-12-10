import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo,setweatherInfo] =useState({
        city: 'Delhi',
        feelsLike: 16.14,
        humidity: 51,
        temp: 17.05,
        tempMax: 17.05,
        tempMin: 17.05,
        weather: "haze"
})

let updateInfo=(newInfo)=>{
    setweatherInfo(newInfo);
}

    return(<div style={{marginTop:"-2rem"}}>
        <h1>Weather App</h1>
        <SearchBox  updateInfo={updateInfo}/>
        <InfoBox info ={weatherInfo}/>
    </div>
    )
}