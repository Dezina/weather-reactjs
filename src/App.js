import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import Daily from './components/daily';
import Hourly from './components/hourly';
import moment from 'moment';
import './App.css';

function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState('');
  const [option, setOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      if (lat && long) {

        await fetch(
          // `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`

          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely&appid=57d1c1c5da9853874d17c6d59e41f876`

        )
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
          });

      }

    }
    fetchData();
  }, [lat, long])

  const userType = '';

  return (
    <div className="App">

      <div className="Radio">

        <div className="btn-group">
          <button className="button" onClick={() => setOption('current')}>Current weather</button>
          <button className="button" onClick={() => setOption('hourly')}>Hourly</button>
          <button className="button" onClick={() => setOption('daily')}>Daily</button>
        </div>

      </div>

      {
        console.log(option)
      }

      {(() => {

        switch (option) {

          case 'current':
            return (
              data ? <Weather weatherData={data} /> : <p>Loading...</p>
            )

          case 'hourly':
            return (
              data ? <Hourly weatherData={data} /> : <p>Loading...</p>
            )

          case 'daily':
            return (
              data ? <Daily weatherData={data} /> : <p>Loading...</p>
            )

          default:
            return (
              <h3>Choose the weather options</h3>
            )
        }

      })()}

    </div>
  );
}

export default App;
