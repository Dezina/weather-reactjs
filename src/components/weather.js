import React from 'react';
// import './styles.css';
import moment from 'moment';

const Weather = ({ weatherData }) => (
    <div className="weather">
        {console.log(weatherData)}

        <p className="location">{weatherData.timezone} <br />
            <span className="time">
                {moment.unix(weatherData.current.dt).format("MMMM Do YYYY, h:mm:ss a")}
            </span>
        </p>

        <div className="column">

            <p><img src={`http://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`}
                alt="wthr img" />
                <br />
                <span className="condition">{weatherData.daily[0].weather[0].description}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="temp">Current Temperature  &nbsp;&nbsp;&nbsp; {weatherData.current.temp} &#x2103;</span>
            </p>

        </div>

    </div>
)

export default Weather;