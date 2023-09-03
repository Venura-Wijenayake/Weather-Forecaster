import { useState } from "react";
// import { Routes, Route } from 'react-router-dom';
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
// import NavBar from "../../components/NavBar/NavBar";
// import hotBg from "../../assets/hot.jpg";
import coldBg from "../../assets/cold.jpg";
import Descriptions from "../../components/Descriptions/Descriptions";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App" style={{ backgroundImage: `url(${coldBg})` }}>
      {user ? (
        <div className="overlay">
          {/* <NavBar user={user} setUser={setUser} /> */}

          <div className="container">
            <div className="section section__inputs">
              <input type="text" name="city" placeholder="Enter City ..." />
              <button>°F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>London, GB</h3>
                <img
                  src="https://openweathermap.org/img/wn/02d@2x.png"
                  alt="weatherIcon"
                />
                <h3>Cloudy</h3>
              </div>
              <div className="temperature">
                <h1>34 °C</h1>
              </div>
            </div>

            {/* .bottom description */}
            <Descriptions/>
          </div>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
