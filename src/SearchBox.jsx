import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
let [city,setCity]=useState("");
let[error,setError]=useState(false);

const API_URL ="https://api.openweathermap.org/data/2.5/weather" ;
const API_KEY ="e8fc31e87f52916ea0188d7245ede126" ;

let getWeatherInfo=async ()=>{
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result={
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
    }catch(error){
        throw(error);
    } 
}

let handleChange=(event)=>{
setCity(event.target.value);
}

let handleSubmit=async (event)=>{
    try{ 
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo); 
    } catch(error){
        setError(true);
    }
}

    return ( <div>
        <h2>Search for City</h2>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="city name" variant="outlined" 
        required value={city} onChange={handleChange}/>
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color:"red"}}>No such places exist in our API</p>}
        </form>
    </div>)
}