FROM node:18.17.1 AS source
WORKDIR /app

COPY package.json .
RUN npm install

COPY src ./src
COPY public ./public
COPY tsconfig.json .
RUN npm run build

FROM nginx:1.25.2
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=source /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]