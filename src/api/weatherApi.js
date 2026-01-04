import axios from "axios";

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const getWeatherByCity = (city, unit, apiKey) =>
  weatherApi.get("/weather", {
    params: { q: city, units: unit, appid: apiKey, lang: "pl" },
  });

export const getForecastByCity = (city, unit, apiKey) =>
  weatherApi.get("/forecast", {
    params: { q: city, units: unit, appid: apiKey, lang: "pl" },
  });
