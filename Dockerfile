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
RUN rm -rf dist/js/* !(app.c0b43bb2.js|chunk-5714a89b.2c2d7db4.js|chunk-vendors.09a0ea2e.js) && \
    rm -rf dist/css/* !(chunk-vendors.b496abee.css|change-theme.css|app.a0361697.css|loading.css)
FROM nginx:1.16-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
