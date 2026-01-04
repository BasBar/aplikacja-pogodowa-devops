# =========================
# STAGE 1: BUILD
# =========================
FROM node:20-alpine AS build

WORKDIR /app

# Argument builda – przekazywany przy docker build
ARG VITE_OPENWEATHER_API_KEY

# Zmienna środowiskowa widoczna dla Vite podczas builda
ENV VITE_OPENWEATHER_API_KEY=$VITE_OPENWEATHER_API_KEY

# Instalacja zależności
COPY package.json package-lock.json ./
RUN npm install

# Kopiujemy resztę projektu
COPY . .

# Budujemy aplikację
RUN npm run build


# =========================
# STAGE 2: PRODUCTION
# =========================
FROM nginx:alpine

# Kopiujemy zbudowane pliki do nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Ekspozycja portu
EXPOSE 80

# Uruchomienie nginx
CMD ["nginx", "-g", "daemon off;"]