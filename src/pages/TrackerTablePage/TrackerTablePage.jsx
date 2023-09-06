import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import "./TrackerTablePage.css";
import { fetchFavouriteCities } from "../../utilities/favouriteCities-api"; // Import your API function

export default function TrackerTablePage() {
  const [user, setUser] = useState(getUser());
  const [favouriteCities, setFavouriteCities] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    if (user) {
      fetchFavouriteCities()
        .then((data) => setFavouriteCities(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [user]);

  return (
    <main className="App bg-custom-image w-full flex justify-center items-center">
      {user ? (
        <div
          className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-gray-200 to-yellow-500 h-fit shadow-xl shadow-gray-400 `}
        >
          <NavBar user={user} setUser={setUser} />
          <h1>Header 1</h1>
          <h2>Header 2</h2>

          {/* Display the fetched data */}
          <ul>
            {favouriteCities.map((city) => (
              <li key={city._id}>
                
                {city.name}, Temp: {city.temp}°C
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
