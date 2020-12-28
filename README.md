# blog-app-api

Server for blog application
### Tech stack:
- Node.js (v12)
- Express + TypeScript 
- Jest
- Swagger

### Install & run locally
- Clone repo
```console
git clone git@github.com:GoranMandic91/blog-app-api.git
```
- Install dependencies
```console
cd blog-app-api && npm install
```
- Start dev environment 
```console
npm run start:dev
```
-   Run tests
```console
npm run test
```
  
### Install & run in container 
- Clone repo: `git clone git@github.com:GoranMandic91/blog-app-api.git && cd blog-app-api`
- Build docker image
```console
docker build -t blog-app-api .
```
- Run docker container
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
