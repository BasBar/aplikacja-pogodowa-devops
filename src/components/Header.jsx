import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUnit } from "../features/settings/settingsSlice";

export default function Header() {
  const dispatch = useDispatch();
  const unit = useSelector(state => state.settings.unit);
  const location = useLocation();

  const linkClass = path =>
    `px-3 py-1 rounded ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-200 hover:bg-gray-700"
    }`;

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🌦 Aplikacja pogodowa</h1>

        <nav className="flex items-center gap-2">
          <Link to="/" className={linkClass("/")}>
            Miasta
          </Link>
          <Link to="/ulubione" className={linkClass("/ulubione")}>
            Ulubione
          </Link>

          <select
            value={unit}
            onChange={e => dispatch(setUnit(e.target.value))}
            className="ml-4 text-black px-2 py-1 rounded"
          >
            <option value="metric">°C</option>
            <option value="imperial">°F</option>
            <option value="standard">K</option>
          </select>
        </nav>
      </div>
    </header>
  );
}