
// import { Routes, Route } from 'react-router-dom';
// import NavBar from "../../components/NavBar/NavBar";
// import { get } from "mongoose";
import "./App.css";
import hotBg from "../../assets/hot.jpg";
import coldBg from "../../assets/cold.jpg";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import { useEffect, useState } from "react";

import SearchBar from '../../components/SearchBar/SearchBar';
import CurrentWeather, { getFormattedWeatherData } from '../../components/CurrentWeather/CurrentWeather';
import Time from "../../components/Time/Time";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [city, setCity] = useState("Rancho Cordova")
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      try {
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
      

      //dynamic bg
      const threshold = units === 'metric' ?20 : 68;
      if(data.temp <= threshold) 
        setBg(coldBg);
      else 
        setBg(hotBg);
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    
    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  }

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {  //'Enter' Button pressed on Keyboard
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <main className="App" style={{ backgroundImage: `url(${bg})` }}>
      {user ? (
        <div className="overlay">
          <div className="container">
            <SearchBar enterKeyPressed={enterKeyPressed} handleUnitsClick={handleUnitsClick} />
            <Time />

            {weather && (
              <CurrentWeather weather={weather} units={units} />
            )}
          </div>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
