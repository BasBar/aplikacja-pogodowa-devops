import { useEffect, useState } from "react";
import { getWeatherByCity, getForecastByCity } from "../api/weatherApi";

export const useWeather = (city, unit) => {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    Promise.all([
      getWeatherByCity(city, unit, apiKey),
      getForecastByCity(city, unit, apiKey),
    ]).then(([current, forecast]) => {
      setData(current.data);
      setForecast(forecast.data.list.filter((_, i) => i % 8 === 0));
    });
  }, [city, unit]);

  return { data, forecast };
};
