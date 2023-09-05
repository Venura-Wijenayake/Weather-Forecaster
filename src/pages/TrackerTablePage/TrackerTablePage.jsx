import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import "./TrackerTablePage.css";

export default function TrackerTablePage() {
  const [user, setUser] = useState(getUser());

  // Sample weather data (you can replace it with your own data)
  const weatherData = [
    {
      city: "Las Vegas",
      temperature: 29,
      description: "thunderstorm with heavy rain",
      icon: "10d", // Icon code for a sunny day (you can replace it with the actual icon code)
    },
  ];

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <section className="hero teal-banner">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">What's the weather like?</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-offset-4 is-4">
              <form method="POST">
                <div className="field has-addons custom-input-group">
                  <div className="control is-expanded">
                    <input
                      className="input has-border"
                      name="city_name"
                      type="text"
                      placeholder="City Name"
                    />
                  </div>
                  <div className="control">
                    <button className="custom-button">Add City</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-offset-4 is-4">
              {weatherData.map((weather, index) => (
                <div className="weather-box" key={index}>
                  <div className="box-image">
                    <img
                      className="icon"
                      src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                      alt="WeatherImage!"
                    />
                  </div>
                  <div className="box-content">
                    <p className="city-name">{weather.city}</p>
                    <p className="temperature">{weather.temperature}° F</p>
                    <p className="description">{weather.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="footer"></footer>
    </div>
  );
}
