import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import { useEffect, useState } from "react";

import TopButtons from "../../components/TopButtons/TopButtons";
import Inputs from "../../components/Inputs/Inputs";
import TimeAndLocation from "../../components/TimeAndLocation/TimeAndLocation";
import TemperatureAndDetails from "../../components/TemperatureAndDetails/TemperatureAndDetails";
import Forecast from "../../components/Forecast/Forecast";
import getFormattedWeatherData from "../../services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 22 : 68;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <main className="App">
      {user ? (
        <div
          className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
        >
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

          {weather && (
            <div>
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />

              <Forecast title="hourly forecast" items={weather.hourly} />
              <Forecast title="daily forecast" items={weather.daily} />
            </div>
          )}
          <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
