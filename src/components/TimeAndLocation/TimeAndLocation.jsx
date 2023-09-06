import React from 'react'
import { formatToLocalTime } from "../../services/weatherService";
import * as favCitiesAPI from '../../utilities/favouriteCities-api';

function TimeAndLocation({ weather: { dt, timezone, name, country , temp } }) {
  async function handleSubmit (e){
    e.preventDefault();
    await favCitiesAPI.addFavouriteCity( name, temp);
  }

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <form onSubmit={ handleSubmit }>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Favourite City
          </button>
        </form>
      </div>
    </div>
  );
}

export default TimeAndLocation