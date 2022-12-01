import React from "react";

const Weather = () => {
  return (
    <>
      <nav class="nav-bar">
        <h1>Weather App</h1>
      </nav>
      <div class="body_padding_div">
        <form onsubmit="myFunction(); return false" class="formm">
          <input type="text" id="city" placeholder="Enter your city name" />
          {/* <!-- <button type="submit">Get Weather</button> --> */}
        </form>
        <div class="main_container">
          <div>
            <img src="" alt="" id="weather_icon" />
          </div>
          <div id="tempC"></div>
        </div>
        <div class="flex">
          <div id="city_name"></div>
          <div id="weather_condition"></div>
        </div>

        <div class="details">
          <div class="left">
            <div id="tempF"></div>
            <br />
            <div id="feels_like"></div>
            <br />
            <div id="humidity"></div>
            <br />
          </div>
          <div class="right">
            <div id="cloud"></div>
            <div id="temp_f"></div>
            <div id="wind"></div>
            <div id="visibility"></div>
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
