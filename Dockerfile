FROM node:20.0.0 AS source
RUN corepack enable

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install --frozen-lockfile

COPY src ./src
COPY public ./public
COPY tsconfig.json .
RUN pnpm run build

FROM nginx:1.25.2
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=source /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]