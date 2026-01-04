import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityDetails from "./pages/CityDetails";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/miasto/:name" element={<CityDetails />} />
        <Route path="/ulubione" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
