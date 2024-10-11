import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";
import SideDisplay from "./SideDisplay";
import { useEffect, useState } from "react";
import './WeatherApp.css'
import { getWeather } from "./help";

function WeatherApp(){
    let [weatherdata, setWeatherData] = useState({city:"hyderabad"});

    useEffect(()=>{
        async function firstWeather() {
            weatherdata = await getWeather("hyderabad");
            setWeatherData(weatherdata);
        }
        firstWeather();
    },[])

    // let [weatherdata, setWeatherData] = useState({  
    //     city:"Hyderabad",
    //     temp : 27.9,
    //     maxTemp : 30.2,
    //     minTemp : 21.9,
    //     humidity : 84,
    //     feelLike : 26.5,
    //     presure : 5000,
    //     desc : "haze",
    //     windSpeed : 14.5,
    //     visible : 60000,        
    // })

    function updateData(newData){
        setWeatherData(newData);
    }


    return (
        <>
        <h1>Weather Forecast</h1>
        <div className="main-app">
            <div className="div1">
                <SideDisplay city={weatherdata.city} temp={weatherdata.temp}/>
            </div>
            <div className="div2">
                <SearchBox updateData={updateData} />
                <WeatherInfo info={weatherdata}/> 
            </div>
        </div>
        </>
            // <SideDisplay city={weatherdata.city} temp={weatherdata.temp}/>
            // <SearchBox updateData={updateData} />
            // <WeatherInfo info={weatherdata}/> 

    );
}

export default WeatherApp;