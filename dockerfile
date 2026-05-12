FROM node:20 AS build

WORKDIR /app

# copier uniquement deps
COPY package*.json ./

# clean install (IMPORTANT)
RUN npm ci

# copier le reste
COPY . .

# forcer permissions (fix Linux)
RUN chmod -R +x node_modules/.bin

# build Vite
RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]