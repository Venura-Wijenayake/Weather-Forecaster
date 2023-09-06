import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import "./TrackerTablePage.css";
import { getFavoriteCities, deleteFavoriteCity } from "../../utilities/favouriteCities-api";

export default function TrackerTablePage() {
  const [user, setUser] = useState(getUser());
  const [favoriteCities, setFavoriteCities] = useState([]);

  useEffect(() => {
    // Fetch the favorite cities when the component mounts
    async function fetchFavoriteCities() {
      const cities = await getFavoriteCities();
      setFavoriteCities(cities);
    }

    fetchFavoriteCities();
  }, []);

  const handleDeleteCity = async (cityId) => {
    // Delete the city and update the state
    await deleteFavoriteCity(cityId);
    // Fetch the updated list of favorite cities and update the state again
    const updatedCities = await getFavoriteCities();
    setFavoriteCities(updatedCities);
  };

  return (
    <main className="App bg-custom-image w-full flex justify-center items-center">
      {user ? (
        <div
          className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-gray-200 to-yellow-500 h-fit shadow-xl shadow-gray-400 `}
        >
          <NavBar user={user} setUser={setUser} />
          <h1>Lorisino!</h1>
          <div>
            <h2>Favorite Cities</h2>
            <ul>
              {favoriteCities.map((city) => (
                <li key={city._id} className="favorite-city-item">
                  {city.name} - {city.temp}°
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteCity(city._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
