import './SearchBox.css'
import { useState } from 'react';
import { getWeather } from './help';

export default function SearchBox({updateData}){
    let [city, setCity] = useState("");
    // let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    // let key = "a3bf9ae225011a8f259d2d3d0c65356b";

    // async function getWeather(){
    //     let response = await fetch(`${apiUrl}?q=${city}&appid=${key}&units=metric`)
    //     let jsonResponse = await response.json();
    //     console.log(jsonResponse);
    //     let result = {
    //         city : city,
    //         temp : jsonResponse.main.temp,
    //         maxTemp : jsonResponse.main.temp_max,
    //         minTemp : jsonResponse.main.temp_min,
    //         humidity : jsonResponse.main.humidity,
    //         feelLike : jsonResponse.main.feels_like,
    //         presure : jsonResponse.main.pressure,
    //         desc : jsonResponse.weather[0].description,
    //         windSpeed : jsonResponse.wind.speed,
    //         visible : jsonResponse.visibility,
    //     }
    //     return result;
    // }
    function handleChange(event){
        setCity(event.target.value);
    }

    async function handleSubmit(event){
        event.preventDefault();
        let newData= await getWeather(city);
        updateData(newData);
        setCity("");
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <input type="text" id="city" placeholder='enter location' value={city} onChange={handleChange} />
                <button  type='submit' ><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    );
}
