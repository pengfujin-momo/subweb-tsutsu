# ---- Dependencies ----
FROM node:lts-alpine AS dependencies
WORKDIR /app
COPY package.json ./
RUN yarn install

# ---- Build ----
FROM dependencies AS build
WORKDIR /app
COPY . /app
RUN yarn build
RUN rm disk/css/chunk-vendors.d6660368.css && rm disk/js/chunk-vendors.d57bbdcf.js && rm disk/css/app.dceed876.css && rm disk/js/app.cc2762d8.js

FROM nginx:1.16-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
