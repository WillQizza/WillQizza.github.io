FROM node:22.0.0 AS source
RUN corepack enable

WORKDIR /app
COPY package.json .
RUN pnpm install

COPY src ./src
COPY public ./public
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY tsconfig.app.json .
COPY tsconfig.vitest.json .
COPY vite.config.ts .
COPY index.html .
RUN pnpm run build

FROM nginx:1.25.2
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=source /app/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]