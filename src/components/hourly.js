import React from 'react';
import moment from 'moment';

const Hourly = ({ weatherData }) => (
    <div className="weather">
        {console.log(weatherData)}
        <p className="location">{weatherData.timezone}</p>
        <div className="column">
            {weatherData.hourly.map((row, index) => (

                <p key={index}><p className="condition"> {row.weather[0].description}
                    <br />
                    <span className="time-sml">
                        {moment.unix(row.dt).format("MMMM Do YYYY, h:mm:ss a")}
                    </span>
                </p> &nbsp;&nbsp;&nbsp;
                    <span><img src={`http://openweathermap.org/img/w/${row.weather[0].icon}.png`}
                        alt="weather img" /></span>

                    <span className="temp">Temperature  &nbsp;&nbsp;&nbsp;  {row.temp} &#x2103;</span></p>
            ))}
        </div>

    </div>
)

export default Hourly;