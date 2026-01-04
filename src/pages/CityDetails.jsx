import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useWeather } from "../hooks/useWeather";

export default function CityDetails() {
  const { name } = useParams();
  const unit = useSelector(state => state.settings.unit);
  const { data, forecast } = useWeather(name, unit);

  if (!data) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <p>Ładowanie danych pogodowych…</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{data.name}</h2>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <p className="text-xl">
          🌡 Temperatura: <strong>{Math.round(data.main.temp)}°</strong>
        </p>
        <p className="capitalize text-gray-600">
          ☁ {data.weather[0].description}
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-3">Prognoza 5-dniowa</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-3 text-center"
          >
            <p className="text-sm text-gray-500">
              {new Date(day.dt_txt).toLocaleDateString()}
            </p>
            <p className="font-semibold">
              {Math.round(day.main.temp)}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}