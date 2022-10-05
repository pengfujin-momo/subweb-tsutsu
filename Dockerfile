# ---- Dependencies ----
FROM node:lts-alpine AS dependencies
WORKDIR /app
COPY package.json ./
RUN yarn install

# ---- Build ----
FROM dependencies AS build
WORKDIR /app
COPY . /app
# RUN yarn build
RUN yarn build && rm dist/css/chunk-vendors.d6660368.css && rm dist/css/app.dceed876.css

FROM nginx:1.16-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
