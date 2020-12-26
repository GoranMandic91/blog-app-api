FROM node:12-alpine AS base
WORKDIR /usr/src/app

FROM base AS prodDeps
COPY package*.json ./
RUN npm ci --only=production
COPY . .

FROM prodDeps AS build
RUN npm install
RUN npm run build

FROM prodDeps AS app
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 8000
CMD [ "npm", "start" ]
