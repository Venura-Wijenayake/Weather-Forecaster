import sendRequest from './send-request';

const BASE_URL = '/api/favouriteCities'

export function addFavouriteCity(name, temp) {
    return sendRequest(`${BASE_URL}`, 'POST',[name, temp]);
  }

  export function fetchFavouriteCities() {
    return sendRequest(`${BASE_URL}`);;
  }