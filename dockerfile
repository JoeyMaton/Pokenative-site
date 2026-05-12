FROM node:20-alpine AS build

WORKDIR /app

# copier uniquement package.json
COPY package*.json ./

# installer deps proprement
RUN npm install

# copier le reste
COPY . .

# forcer les permissions + exécution via npx (IMPORTANT)
RUN npx vite build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]