import React from "react";
import axios from "axios";
import "./weather.css";
import { useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("KaraChi");

  const getWeather = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://shehzad-server-hosting-react.cyclic.app/weather/${cityName}`
      );
      console.log(res.data);
      setWeatherData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <nav className="nav-bar">
        <h1>Weather App</h1>
      </nav>
      <div className="body_padding_div">
        <form onSubmit={getWeather} className="formm">
          <input
            type="text"
            onChange={(e) => {
              setCityName(e.target.value);
            }}
            id="city"
            placeholder="Enter your city name"
          />
          <button type="submit">Get Weather</button>
        </form>

        {/* {(weatherData === null) ? null :} */}

        <div className="main_container">
          <div>
            <img src="" alt="" id="weather_icon" />
          </div>
          <div id="tempC">{weatherData?.temp}°C</div>
        </div>
        <div className="flex">
          <div id="city_name">{weatherData?.city}</div>
          <div id="weather_condition">{weatherData?.text}</div>
        </div>

        <div className="details">
          <div className="left">
            <div id="tempF"></div>
            <br />
            <div id="feels_like">Max {weatherData?.max}</div>
            <div id="feels_like">Min {weatherData?.min}</div>
            <div id="feels_like">{weatherData?.text}</div>
            <br />
            <div id="humidity">{weatherData?.humidity} %</div>
            <br />
          </div>
          <div className="right">
            <div id="cloud"></div>
            <div id="temp_f"></div>
            {/* <div id="wind">{weatherData?.windKPH}</div> */}
            {/* <div id="visibility">{weatherData?.visibility}</div> */}
            <br />
            <div id="wind_speed"></div>
          </div>
        </div>
      </div>

      <footer>
        <p>Developed by Shehzad</p>
      </footer>
    </>
  );
};

export default Weather;
