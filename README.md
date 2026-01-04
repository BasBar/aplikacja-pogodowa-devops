# Aplikacja pogodowa – wersja DevOps

Frontendowa aplikacja pogodowa napisana w React + Vite, przygotowana w wersji DevOps z wykorzystaniem Dockera, Docker Compose oraz GitHub Actions (CI).

Projekt umożliwia:
- uruchomienie aplikacji w kontenerze Docker,
- bezpieczne przekazywanie zmiennych środowiskowych,
- automatyczne budowanie obrazu Dockera w pipeline CI.

---

# Architektura projektu

- React + Vite – aplikacja frontendowa  
- Tailwind CSS – stylowanie interfejsu  
- OpenWeatherMap API – dane pogodowe  
- Docker (multi-stage build) – budowanie i uruchamianie aplikacji  
- nginx – serwowanie statycznej aplikacji SPA  
- Docker Compose – uproszczone uruchamianie lokalne  
- GitHub Actions – Continuous Integration (CI)

---

# Zmienne środowiskowe

Aplikacja wymaga klucza API do OpenWeatherMap.

W repozytorium znajduje się plik `.env.example`, który dokumentuje wymagane zmienne środowiskowe:

VITE_OPENWEATHER_API_KEY=TU_WSTAW_SWOJ_KLUCZ

Plik `.env` z prawdziwym kluczem API:
- tworzony jest lokalnie,
- nie jest commitowany do repozytorium,
- znajduje się w `.gitignore`.

---

# Uruchomienie lokalne (Docker Compose)

1. Utwórz plik `.env` w katalogu głównym projektu i dodaj klucz API:

VITE_OPENWEATHER_API_KEY=TWÓJ_KLUCZ_API

2. Zbuduj i uruchom aplikację:

docker-compose build  
docker-compose up  

3. Otwórz aplikację w przeglądarce:

http://localhost:8080

---

# Docker

Projekt wykorzystuje multi-stage Dockerfile:
- etap build – budowanie aplikacji w środowisku Node.js,
- etap production – serwowanie gotowych plików przez nginx.

Zmienna środowiskowa z kluczem API jest przekazywana w czasie builda jako build-arg, co jest wymagane przez Vite.

---

# CI – GitHub Actions

Repozytorium posiada skonfigurowany pipeline GitHub Actions, który:
- uruchamia się automatycznie przy każdym pushu do gałęzi main,
- buduje obraz Dockera aplikacji,
- wykorzystuje GitHub Secrets do bezpiecznego przekazania klucza API.

Nazwa sekretu używanego w CI:

VITE_OPENWEATHER_API_KEY

---

# Uwagi

- Klucz API OpenWeatherMap jest używany w aplikacji frontendowej i nie stanowi sekretu backendowego.
- Projekt został przygotowany w celach edukacyjnych (zaliczenie przedmiotu / DevOps).

---