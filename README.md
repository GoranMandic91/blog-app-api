# blog-app-api

Server for blog application
### Tech stack:
- Node.js (v12)
- Express + TypeScript 
- Jest
- Swagger

### Install & run 
-   Clone repo: `git clone git@github.com:GoranMandic91/blog-app-api.git`
-   Install dependencies: `cd blog-app-api && npm install`
-   Start dev environment `npm run start:dev`
-   Run tests: `npm run test`
  
 ### Run it inside Docker 
  - build docker image
  ```console
  docker build -t blog-app-api .
  ```
  - run docker container
  ```console
  docker start blog-api 2>/dev/null || \
  docker run --name blog-api \
    -p 8000:4000 \
    -e PORT=4000 \
    -d blog-app-api:latest
  ```
  - run a command in a running container
  ```console
  docker exec -it blog-api sh
  ```
  - get container logs
  ```console
  docker logs blog-api
  ```
