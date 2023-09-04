import React from "react";
import "../CurrentWeather/CurrentWeather.css";
import Descriptions from "../Descriptions/Descriptions";

const API_KEY = "8503f224e0a9b107e4f752d3a21f3cb2";

const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { getFormattedWeatherData };

const CurrentWeather = ({ weather, units }) => {
  return (
    <div className="section section__current-weather">
      <div className="section section__temperature">
                <div className="icon">
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img
                    src={weather.iconURL}
                    alt="weatherIcon"
                  />
                  <h3>{weather.description}</h3>
                </div>
                <div className="temperature">
                  <h1>{`${weather.temp.toFixed(1)} °${units === 'metric' ? 'C' : "F"}`}</h1>
                </div>
              </div>

              {/* .bottom description */}
              <Descriptions weather={weather} units={units}/>
            </div>
  );
};

export default CurrentWeather;