# Paso 1: Compilar la aplicación en Node.js
FROM node:2-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Paso 2: Servir la aplicación compilada usando Nginx
FROM nginx:alpine
COPY --from=build /app/dist/espe-angular-app/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]