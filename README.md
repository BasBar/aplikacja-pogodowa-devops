# Aplikacja pogodowa – React

Projekt zaliczeniowy z przedmiotu Programowanie Frontend.

## Technologie
- React
- Vite
- React Router
- Redux Toolkit
- TailwindCSS
- Axios
- OpenWeatherMap API

## Funkcjonalności
- lista miast
- szczegóły pogody i prognoza 5-dniowa
- zmiana jednostek temperatury
- wyszukiwanie miast
- ulubione miasta (Redux + localStorage)

## Uruchomienie projektu
1. Sklonuj repozytorium:
   git clone https://github.com/BasBar/aplikacja-pogodowa
   cd aplikacja-pogodowa
2. Zainstaluj zależności: npm install
3. Utwórz plik .env w katalogu głównym projektu i dodaj linię VITE_OPENWEATHER_API_KEY=TWÓJ_KLUCZ_API, klucz znajduje się tutaj https://home.openweathermap.org/api_keys, trzeba się zalogować i przekleić go zamiast "TWÓJ_KLUCZ_API"
4. npm run dev
