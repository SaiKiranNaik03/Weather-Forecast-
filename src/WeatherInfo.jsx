import './WeatherInfo.css'
function WeatherInfo({info}){

    return (
        <div className='main-info'>
            {/* <h1>Weather Info</h1> */}
            <div>
                <p className="weather-info">Temperature &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='data'>{info.temp}&deg;C</span></p>
                <p className="weather-info">Min. Temperature <span className='data'>{info.minTemp}&deg;C</span></p>
                <p className="weather-info">Max. Temperature<span className='data'>{info.maxTemp}&deg;C</span> </p>
                <hr />
                <p className="weather-info">Humidity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='data'>{info.humidity}%</span></p>
                <p className="weather-info">Wind Speed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='data'>{info.windSpeed} km/h</span> </p>
                <p className="weather-info">Visibility &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='data'>{info.visible} mtr's</span></p>
                <p className="weather-info">Pressure &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='data'>{info.presure} hPa</span> </p>
                <hr />
                <p className="weather-info">The Weather can be desired as <i>{info.desc}</i> and feels like {info.feelLike}&deg;C</p>
                
            </div>
        </div>
    );
}

export default WeatherInfo;