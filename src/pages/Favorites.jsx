import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favorites = useSelector(state => state.favorites.cities);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Ulubione miasta</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500">Nie dodano jeszcze ulubionych miast.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map(city => (
            <Link
              key={city}
              to={`/miasto/${city}`}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              <h3 className="font-semibold">{city}</h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}