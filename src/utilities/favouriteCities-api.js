import sendRequest from "./send-request";

const BASE_URL = "/api/favouriteCities";

export function addFavouriteCity(name, temp) {
  return sendRequest(`${BASE_URL}`, "POST", [name, temp]);
}

export function getFavoriteCities() {
  return sendRequest("/api/favouriteCities", "GET");
}

export async function deleteFavoriteCity(cityId) {
  // Send the DELETE request to the server
  await sendRequest(`${BASE_URL}/${cityId}`, "DELETE");
}