import { useEffect, useState } from "react";
// import { Routes, Route } from 'react-router-dom';
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
// import NavBar from "../../components/NavBar/NavBar";
import hotBg from "../../assets/hot.jpg";
import coldBg from "../../assets/cold.jpg";
import Descriptions from "../../components/Descriptions/Descriptions";
// import { get } from "mongoose";
import { getFormattedWeatherData } from "../../components/weatherService/weatherService";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [city, setCity] = useState("Sacramento")
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
      

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
          {weather && (
            <div className="container">
              <div className="section section__inputs">
                <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City ..." />
                <button onClick={(e) => handleUnitsClick(e)}>°F</button>
              </div>

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
          )}
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
