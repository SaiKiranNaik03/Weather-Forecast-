import freez from './assets/allGifs/freezCold.gif'
import snow from './assets/allGifs/snow.gif'
import thunder from './assets/allGifs/thunderRain.gif'
import sunny from './assets/allGifs/sunnyCloud.gif'
import cloudy from './assets/allGifs/cloudy.gif'
import hotSun from './assets/allGifs/hotSun.gif'

function GenGif(temp){
    if(temp < 0){
        return freez ;
    }
    else if(temp >=0 && temp <10){
        return snow ;    
    }
    else if(temp >=10 && temp < 20){
        return thunder ;    
    }
    else if(temp >=20 && temp < 30){
        return sunny ;    
    }
    else if(temp >=30 && temp<40){
        return cloudy ;    
    }
    else{
        return hotSun ;
    }
 
}

let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let key = "a3bf9ae225011a8f259d2d3d0c65356b";

async function getWeather(city){
    let response = await fetch(`${apiUrl}?q=${city}&appid=${key}&units=metric`)
    let jsonResponse = await response.json();
    let result = {
        city : city,
        temp : jsonResponse.main.temp,
        maxTemp : jsonResponse.main.temp_max,
        minTemp : jsonResponse.main.temp_min,
        humidity : jsonResponse.main.humidity,
        feelLike : jsonResponse.main.feels_like,
        presure : jsonResponse.main.pressure,
        desc : jsonResponse.weather[0].description,
        windSpeed : jsonResponse.wind.speed,
        visible : jsonResponse.visibility,
    }
    return result;
}

export {GenGif, getWeather};