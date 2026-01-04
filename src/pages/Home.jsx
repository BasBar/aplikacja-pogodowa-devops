import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

const cities = ["Warszawa", "Kraków", "Gdańsk", "Wrocław", "Poznań"];

export default function Home() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.cities);

  const filteredCities = useMemo(() => {
    return cities.filter(city =>
      city.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Wybierz miasto</h2>

      {/* WYSZUKIWARKA */}
      <input
        type="text"
        placeholder="Wyszukaj miasto..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
      />

      {filteredCities.length === 0 ? (
        <p className="text-gray-500">Brak wyników.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCities.map(city => {
            const isFavorite = favorites.includes(city);

            return (
              <div
                key={city}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 border relative"
              >
                {/* GWIAZDKA */}
                <button
                  onClick={() => dispatch(toggleFavorite(city))}
                  className="absolute top-2 right-2 text-xl"
                  title="Dodaj do ulubionych"
                >
                  {isFavorite ? "⭐" : "☆"}
                </button>

                <Link to={`/miasto/${city}`}>
                  <h3 className="text-lg font-semibold">{city}</h3>
                  <p className="text-sm text-gray-500">
                    Kliknij, aby zobaczyć prognozę
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}