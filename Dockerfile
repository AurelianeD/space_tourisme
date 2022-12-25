FROM node:19 AS build

WORKDIR /app

COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn run build

FROM nginx:1.21-alpine
COPY --from=build /app/dist /usr/share/nginx/html